import { memo } from 'react';
import { motion } from 'framer-motion';
import { BAR_CHART_CONFIG } from '../constants';
import { VerticalBarRectProps } from '../types';

export const VerticalBarRect = memo(({ data, scales, barColor, height }: VerticalBarRectProps) => {
	const { margin, animation } = BAR_CHART_CONFIG;
	const MotionRect = motion.rect;

	return (
		<MotionRect
			key={data.label}
			x={scales.xScale(data.label)}
			width={scales.xScale.bandwidth()}
			y={0}
			height={height - margin.bottom - scales.yScale(data.value)}
			fill={barColor}
			initial={{ height: 0, y: height - margin.bottom }}
			animate={{
				height: height - margin.bottom - scales.yScale(data.value),
				y: scales.yScale(data.value),
			}}
			transition={animation}
		/>
	);
});

VerticalBarRect.displayName = 'VerticalBarRect';
