import { type ComponentType, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { select, pie, arc, interpolate, PieArcDatum } from 'd3';
import { bds } from '@/constants';

interface dataItem {
	id: string;
	label: string;
	value: number;
	color: string;
}

export interface BDSDonutGraphProps {
	data: dataItem[];
	legends?: boolean;
	width?: number;
	height?: number;
}

type DonutGraphComponent = ComponentType<BDSDonutGraphProps>;

const pieColors = [
	bds.token.color.dark.primary.normal,
	bds.token.color.dark.secondary.normal,
	bds.token.color.dark.success.normal,
	bds.token.color.dark.warning.normal,
	bds.token.color.dark.information.normal,
];

/**
 * 도넛 그래프 컴포넌트
 *
 * @param {dataItem[]} data - 도넛 그래프 데이터
 * @param {boolean} [legends] - 범례 여부
 * @param {number} [width] - 그래프 너비
 * @param {number} [height] - 그래프 높이
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-molecules-donutgraph--docs BDS DonutGraph 문서
 */
export const DonutGraph: DonutGraphComponent = ({ data, legends, width = 350, height = 350 }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const outerRadius = Math.min(width, height) / 2;
	const innerRadius = (outerRadius * 2) / 3;

	useEffect(() => {
		if (!svgRef.current) return;

		const donutPie = pie<dataItem>()
			.value((d) => d.value)
			.sort((a, b) => b.value - a.value);

		const donutArc = arc<PieArcDatum<dataItem>>()
			.outerRadius(outerRadius)
			.innerRadius(innerRadius)
			.cornerRadius(3)
			.padAngle(0.015);

		select(svgRef.current).selectAll('*').remove();

		const svg = select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${width / 2},${height / 2})`);

		const paths = svg
			.selectAll('path')
			.data(donutPie(data))
			.enter()
			.append('path')
			.attr('fill', (_, i) => pieColors[i % pieColors.length]);

		paths
			.transition()
			.duration(1000)
			.attrTween('d', (d) => {
				const donutInterpolate = interpolate({ startAngle: 0, endAngle: 0 }, d);
				return (t: number) => donutArc(donutInterpolate(t)) || '';
			});

		const addLabels = () => {
			svg.selectAll('text')
				.data(donutPie(data))
				.enter()
				.append('text')
				.attr('transform', (d) => `translate(${donutArc.centroid(d)})`)
				.attr('dy', '.4em')
				.attr('text-anchor', 'middle')
				.text((d) => `${d.data.value}%`)
				.style('fill', '#fff')
				.style('font-size', '18px');
		};
		setTimeout(addLabels, 1000);
	}, [width, height, data]);

	return (
		<Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
			<svg ref={svgRef} />

			{legends && (
				<Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
					{data.map((item, i) => (
						<Box key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
							<Box
								sx={{
									width: 20,
									height: 20,
									borderRadius: '50%',
									backgroundColor: pieColors[i % pieColors.length],
									mr: 1,
								}}
							/>
							<span style={{ color: pieColors[i % pieColors.length], fontSize: '14px' }}>
								{item.label}
							</span>
						</Box>
					))}
				</Box>
			)}
		</Box>
	);
};
