import { useEffect, useRef } from 'react';
import { Box, styled } from '@mui/material';
import { select } from 'd3';
import { GridLines } from './components/GridLines';
import { HorizontalBarRect } from './components/HorizontalBarRect';
import { VerticalBarRect } from './components/VerticalBarRect';
import { BAR_CHART_CONFIG } from './constants';
import { useBarChart } from './hooks/useBarChart';
import { BarGraphProps, HorizontalScales, VerticalScales } from './types';
import { createAxis } from './utils/createAxis';
import { bds } from '../../../constants';

const S = {
	Box: styled(Box)({
		p: 2,
		backgroundColor: bds.token.color.dark.background[1],
		borderRadius: 3,
	}),
};

export const BarGraph = ({
	data,
	grid = false,
	width = 500,
	height = 300,
	barColor = bds.token.color.dark.primary.normal,
	sortOrder = 'basic',
	layout = 'vertical',
}: BarGraphProps) => {
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
		<S.Box>
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
		</S.Box>
	);
};
