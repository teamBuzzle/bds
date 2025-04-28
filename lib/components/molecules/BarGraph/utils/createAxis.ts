import { axisBottom, axisLeft, type ScaleBand, type ScaleLinear, type Selection } from 'd3';
import { bds } from '@/constants';
import { BAR_CHART_CONFIG } from '../constants';
import type { LayoutType, Scales } from '../types';

export const createAxis = (
	svg: Selection<SVGSVGElement, unknown, null, undefined>,
	scales: Scales,
	layout: LayoutType,
	height: number,
) => {
	const { margin } = BAR_CHART_CONFIG;
	const axesContainer = svg.append('g').attr('class', 'axes-container');

	if (layout === 'vertical') {
		axesContainer
			.append('g')
			.attr('class', 'axis x-axis')
			.attr('transform', `translate(0,${height - margin.bottom})`)
			.call(axisBottom(scales.xScale as ScaleBand<string>))
			.attr('color', bds.token.color.dark.primary.active);

		axesContainer
			.append('g')
			.attr('class', 'axis y-axis')
			.attr('transform', `translate(${margin.left},0)`)
			.call(axisLeft(scales.yScale as ScaleLinear<number, number>).ticks(5))
			.attr('color', bds.token.color.dark.primary.active);
	} else {
		axesContainer
			.append('g')
			.attr('class', 'axis x-axis')
			.attr('transform', `translate(0,${height - margin.bottom})`)
			.call(axisBottom(scales.xScale as ScaleLinear<number, number>).ticks(5))
			.attr('color', bds.token.color.dark.primary.active);

		axesContainer
			.append('g')
			.attr('class', 'axis y-axis')
			.attr('transform', `translate(${margin.left},0)`)
			.call(axisLeft(scales.yScale as ScaleBand<string>))
			.attr('color', bds.token.color.dark.primary.active);
	}
};
