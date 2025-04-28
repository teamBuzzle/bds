import type { ScaleBand, ScaleLinear } from 'd3';

export type sortedType = 'basic' | 'ascending' | 'descending' | 'alphabetical';

export type LayoutType = 'vertical' | 'horizontal';

export interface VerticalScales {
	xScale: ScaleBand<string>;
	yScale: ScaleLinear<number, number>;
}

export interface HorizontalScales {
	xScale: ScaleLinear<number, number>;
	yScale: ScaleBand<string>;
}

export interface HorizontalBarRectProps {
	data: GraphItem;
	scales: HorizontalScales;
	barColor: string;
}

export interface VerticalBarRectProps {
	data: GraphItem;
	scales: VerticalScales;
	barColor: string;
	height: number;
}

export type Scales = VerticalScales | HorizontalScales;

export interface GraphItem {
	label: string;
	value: number;
}

export interface BDSBarGraphProps {
	data: GraphItem[];
	grid: boolean;
	width?: number;
	height?: number;
	barColor?: string;
	sortOrder?: sortedType;
	layout?: LayoutType;
}

export interface Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export interface GridLinesProps {
	scales: Scales;
	layout: LayoutType;
	width: number;
	height: number;
	margin: Margin;
	color: string;
	visible: boolean;
}
