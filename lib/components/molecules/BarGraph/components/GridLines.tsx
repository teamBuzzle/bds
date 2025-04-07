import { memo } from 'react';
import { GridLinesProps } from '../types';

export const GridLines = memo(({ scales, layout, width, height, margin, color, visible }: GridLinesProps) => {
	const { xScale, yScale } = scales;

	if (layout === 'vertical' && 'ticks' in yScale) {
		return (
			<g style={{ opacity: visible ? 1 : 0 }}>
				{yScale.ticks(5).map((tick) => (
					<line
						key={tick}
						x1={margin.left}
						x2={width - margin.right}
						y1={yScale(tick)}
						y2={yScale(tick)}
						stroke={color}
						strokeWidth={0.5}
						strokeDasharray="4"
					/>
				))}
			</g>
		);
	}

	if (layout === 'horizontal' && 'ticks' in xScale) {
		return (
			<g style={{ opacity: visible ? 1 : 0 }}>
				{xScale.ticks(5).map((tick) => (
					<line
						key={tick}
						x1={xScale(tick)}
						x2={xScale(tick)}
						y1={margin.top}
						y2={height - margin.bottom}
						stroke={color}
						strokeWidth={0.5}
						strokeDasharray="4"
					/>
				))}
			</g>
		);
	}

	return null;
});

GridLines.displayName = 'GridLines';
