import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import * as d3 from 'd3';
import { bds } from '@/constants';

// 데이터 타입 정의
interface dataItem {
	label: string;
	value: number;
	color: string;
}

interface Props {
	data: dataItem[];
	legends?: boolean;
	width?: number;
	height?: number;
}

const pieColors = [
	bds.token.color.dark.primary.normal,
	bds.token.color.dark.secondary.normal,
	bds.token.color.dark.success.normal,
	bds.token.color.dark.warning.normal,
	bds.token.color.dark.information.normal,
	// bds.token.color.dark.danger.normal,
];

export const PieGraph = ({ data, legends, width = 400, height = 400 }: Props) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const outerRadius = Math.min(width, height) / 2;

	useEffect(() => {
		if (!svgRef.current) return;

		// 파이 생성기
		const pie = d3
			.pie<dataItem>()
			.value((d) => d.value)
			.sort((a, b) => b.value - a.value);

		// 아크 생성기
		const arc = d3.arc<d3.PieArcDatum<dataItem>>().outerRadius(outerRadius).innerRadius(0);

		// 이전 SVG 내용 지우기
		d3.select(svgRef.current).selectAll('*').remove();

		// SVG 생성
		const svg = d3
			.select(svgRef.current)
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', `translate(${width / 2},${height / 2})`);

		// 경로 생성
		const paths = svg
			.selectAll('path')
			.data(pie(data))
			.enter()
			.append('path')
			.attr('fill', (_, i) => pieColors[i % pieColors.length]);

		// 애니메이션
		paths
			.transition()
			.duration(1000)
			.attrTween('d', (d) => {
				const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
				return (t: number) => arc(interpolate(t)) || '';
			});

		// 텍스트 라벨 추가
		const addLabels = () => {
			svg.selectAll('text')
				.data(pie(data))
				.enter()
				.append('text')
				.attr('transform', (d) => {
					const pos = arc.centroid(d);
					// Move text 30% of the way from the center to the edge
					const x = pos[0] * 1.3;
					const y = pos[1] * 1.3;
					return `translate(${x},${y})`;
				})
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
						// eslint-disable-next-line react/no-array-index-key
						<Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
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
