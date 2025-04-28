import { useMemo } from 'react';
import { max, scaleBand, scaleLinear } from 'd3';
import type { GraphItem, HorizontalScales, LayoutType, Margin, sortedType, VerticalScales } from '../types';

// 데이터 정렬과 D3 스케일 생성을 처리하며, 메모이제이션을 통해 성능을 최적화
export const useBarChart = <T extends LayoutType>(
	data: GraphItem[],
	width: number,
	height: number,
	margin: Margin,
	layout: T,
	barGap: number,
	sortOrder: sortedType,
) => {
	const sortedData = useMemo(() => {
		const dataCopy = [...data];
		if (sortOrder === 'ascending') {
			dataCopy.sort((a, b) => a.value - b.value);
		} else if (sortOrder === 'descending') {
			dataCopy.sort((a, b) => b.value - a.value);
		} else if (sortOrder === 'alphabetical') {
			dataCopy.sort((a, b) => a.label.localeCompare(b.label));
		}
		return dataCopy;
	}, [data, sortOrder]);

	const scales = useMemo(() => {
		const domain = sortedData.map((d) => d.label);
		const maxValue = max(sortedData, (d) => d.value) ?? 0;

		if (layout === 'vertical') {
			return {
				xScale: scaleBand<string>()
					.domain(domain)
					.range([margin.left, width - margin.right])
					.padding(barGap),
				yScale: scaleLinear<number>()
					.domain([0, maxValue])
					.range([height - margin.bottom, margin.top]),
			} as VerticalScales;
		}

		return {
			xScale: scaleLinear<number>()
				.domain([0, maxValue])
				.range([margin.left, width - margin.right]),
			yScale: scaleBand<string>()
				.domain(domain)
				.range([margin.top, height - margin.bottom])
				.padding(barGap),
		} as HorizontalScales;
	}, [sortedData, width, height, margin, layout, barGap]);

	return { sortedData, scales };
};
