import { type ComponentType, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { select } from 'd3';
import { bds } from '@/constants';
import { GridLines } from './components/GridLines';
import { HorizontalBarRect } from './components/HorizontalBarRect';
import { VerticalBarRect } from './components/VerticalBarRect';
import { BAR_CHART_CONFIG } from './constants';
import { useBarChart } from './hooks/useBarChart';
import { BDSBarGraphProps, HorizontalScales, VerticalScales } from './types';
import { createAxis } from './utils/createAxis';

type BarGraphComponent = ComponentType<BDSBarGraphProps>;

/**
 * 바 그래프 컴포넌트
 *
 * @param {GraphItem[]} [data] - 그래프 데이터
 * @param {boolean} [grid] - 그리드 여부
 * @param {number} [width] - 그래프 너비
 * @param {number} [height] - 그래프 높이
 * @param {string} [barColor] - 바 색상
 * @param {sortedType} [sortOrder] - 정렬 순서
 * @param {LayoutType} [layout] - 레이아웃 타입
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-molecules-bargraph--docs BDS BarGraph 문서
 */
export const BarGraph: BarGraphComponent = ({
	data,
	grid = false,
	width = 500,
	height = 300,
	barColor = bds.token.color.dark.primary.normal,
	sortOrder = 'basic',
	layout = 'vertical',
}) => {
	const svgRef = useRef<SVGSVGElement>(null);

	const { sortedData, scales } = useBarChart(
		data,
		width,
		height,
		BAR_CHART_CONFIG.margin,
		layout,
		BAR_CHART_CONFIG.barGap,
		sortOrder,
	);

	// 축 생성 로직을 useEffect로 분리
	useEffect(() => {
		const svg = svgRef.current;
		if (svg) {
			createAxis(select(svg), scales, layout, height);
		}
		return () => {
			select(svg).selectAll('.axes-container').remove();
		};
	}, [scales, height]);

	return (
		<Box sx={{ p: 2, backgroundColor: bds.token.color.dark.background[1], borderRadius: 3 }}>
			<svg ref={svgRef} width={width} height={height}>
				{grid && (
					<GridLines
						scales={scales}
						layout={layout}
						width={width}
						height={height}
						margin={BAR_CHART_CONFIG.margin}
						color={bds.token.color.dark.primary.disabled}
						visible={grid}
					/>
				)}
				{sortedData.map((d) =>
					layout === 'vertical' ? (
						<VerticalBarRect
							key={`vertical-${d.label}`}
							data={d}
							scales={scales as VerticalScales}
							height={height}
							barColor={barColor}
						/>
					) : (
						<HorizontalBarRect
							key={`horizontal-${d.label}`}
							data={d}
							scales={scales as HorizontalScales}
							barColor={barColor}
						/>
					),
				)}
			</svg>
		</Box>
	);
};
