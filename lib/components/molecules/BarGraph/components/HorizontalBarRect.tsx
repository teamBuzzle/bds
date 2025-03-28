import { memo } from 'react';
import { motion } from 'framer-motion';
import { BAR_CHART_CONFIG } from '../constants';
import { HorizontalBarRectProps } from '../types';

const MotionRect = motion.rect;

export const HorizontalBarRect = memo(({ data, scales, barColor }: HorizontalBarRectProps) => {
	const { margin, animation } = BAR_CHART_CONFIG;

	return (
		<MotionRect
			key={data.label}
			x={margin.left}
			width={scales.xScale(data.value) - margin.left}
			y={scales.yScale(data.label)}
			height={scales.yScale.bandwidth()}
			fill={barColor}
			initial={{ width: 0 }}
			animate={{ width: scales.xScale(data.value) - margin.left }}
			transition={animation}
		/>
	);
});

HorizontalBarRect.displayName = 'HorizontalBarRect';
