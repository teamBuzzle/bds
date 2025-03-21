import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Box } from '@mui/material';
import { select, scaleLinear, min, max, line, area, axisBottom, axisLeft, type Selection } from 'd3';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { bds } from '../../constants';

interface DataPoint {
	x: number;
	y: number;
}
interface TooltipType {
	x: number;
	y: number;
	mouseX: number;
	mouseY: number;
}
interface Props {
	data: DataPoint[];
	grid?: boolean;
	lineColor?: string; // 선 색상
	lineWidth?: number; // 선 두께
	width?: number;
	height?: number;
}

// SVG 크기 설정
const margin = { top: 20, right: 20, bottom: 30, left: 40 };

export const LineGraph = ({
	data,
	grid = false,
	lineColor = bds.token.color.dark.primary.normal,
	lineWidth = 2,
	width = 600,
	height = 400,
}: Props) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [tooltipData, setTooltipData] = useState<TooltipType | null>(null);

	const MotionPath = motion.path;
	const MotionCircle = motion.circle;

	// X축과 Y축 스케일 설정 (메모이제이션)
	const xScale = useMemo(() => {
		return scaleLinear()
			.domain([min(data, (d) => d.x) ?? 0, max(data, (d) => d.x) ?? 0])
			.range([margin.left, width - margin.right]);
	}, [data]);

	const yScale = useMemo(() => {
		return scaleLinear()
			.domain([0, max(data, (d) => d.y) ?? 0])
			.range([height - margin.bottom, margin.top]);
	}, [data]);

	// 그리드 라인 계산 (메모이제이션)
	const gridLines = useMemo(() => {
		if (!grid) return [];
		return yScale.ticks(5).map((tick) => ({
			y: yScale(tick),
			x1: margin.left,
			x2: width - margin.right,
		}));
	}, [grid, yScale, margin.left, margin.right]);

	// 라인 패스 계산 (메모이제이션)
	const { linePath, areaPath } = useMemo(() => {
		const lineGenerator = line<DataPoint>()
			.x((d) => xScale(d.x))
			.y((d) => yScale(d.y));

		const areaGenerator = area<DataPoint>()
			.x((d) => xScale(d.x))
			.y0(height - margin.bottom) // 바닥 기준점
			.y1((d) => yScale(d.y)); // 데이터 포인트

		return {
			linePath: lineGenerator(data) || '',
			areaPath: areaGenerator(data) || '',
		};
	}, [data, xScale, yScale, height, margin.bottom]);

	// 축 업데이트 - D3만 사용 (한번만 실행하도록 최적화)
	useEffect(() => {
		if (!svgRef.current || data.length === 0) return;

		const svg = select(svgRef.current);

		// 1. defs 요소 처리
		let defs = svg.select('defs') as Selection<SVGDefsElement, unknown, null, undefined>;
		if (defs.empty()) {
			defs = svg.append('defs');
		}

		// 2. 그라디언트 처리
		let gradient = defs.select('#areaGradient') as Selection<SVGLinearGradientElement, unknown, null, undefined>;
		if (gradient.empty()) {
			gradient = defs
				.append('linearGradient')
				.attr('id', 'areaGradient')
				.attr('x1', '0')
				.attr('x2', '0')
				.attr('y1', '0')
				.attr('y2', '1');

			gradient.append('stop').attr('offset', '0%').attr('stop-color', lineColor).attr('stop-opacity', 0.2);

			gradient.append('stop').attr('offset', '100%').attr('stop-color', lineColor).attr('stop-opacity', 0);
		} else {
			// 기존 그라디언트가 있으면 stop 요소 업데이트
			const stops = gradient.selectAll('stop');

			if (stops.empty() || stops.size() !== 2) {
				// stop 요소가 없거나 2개가 아니면 다시 생성
				gradient.selectAll('stop').remove();

				gradient.append('stop').attr('offset', '0%').attr('stop-color', lineColor).attr('stop-opacity', 0.2);

				gradient.append('stop').attr('offset', '100%').attr('stop-color', lineColor).attr('stop-opacity', 0);
			} else {
				// 기존 stop 요소 업데이트
				stops.each(function updateStop(_, i) {
					select(this)
						.attr('stop-color', lineColor)
						.attr('stop-opacity', i === 0 ? 0.2 : 0);
				});
			}
		}

		// 3. 축(axis) 컨테이너 처리
		let axesContainer = svg.select('.axes-container') as Selection<SVGGElement, unknown, null, undefined>;
		if (axesContainer.empty()) {
			axesContainer = svg.append('g').attr('class', 'axes-container');
		}

		// 4. X축 처리
		let xAxisGroup = axesContainer.select('.x-axis') as Selection<SVGGElement, unknown, null, undefined>;
		if (xAxisGroup.empty()) {
			xAxisGroup = axesContainer
				.append('g')
				.attr('class', 'x-axis')
				.attr('transform', `translate(0, ${height - margin.bottom})`);
		} else {
			xAxisGroup.attr('transform', `translate(0, ${height - margin.bottom})`);
		}

		// X축 업데이트 - 부드러운 트랜지션 적용
		xAxisGroup
			.transition()
			.duration(300)
			.call(axisBottom(xScale).ticks(Math.min(data.length, 10)).tickSize(0).tickPadding(9))
			.attr('color', lineColor || bds.token.color.dark.primary.active);

		// Y축 처리
		let yAxisGroup = axesContainer.select('.y-axis') as Selection<SVGGElement, unknown, null, undefined>;
		if (yAxisGroup.empty()) {
			yAxisGroup = axesContainer
				.append('g')
				.attr('class', 'y-axis')
				.attr('transform', `translate(${margin.left}, 0)`);
		} else {
			yAxisGroup.attr('transform', `translate(${margin.left}, 0)`);
		}

		// Y축 업데이트 - 부드러운 트랜지션 적용
		yAxisGroup
			.transition()
			.duration(300)
			.call(axisLeft(yScale).ticks(5))
			.attr('color', lineColor || bds.token.color.dark.primary.active);
	}, [data, xScale, yScale, margin, height, width, linePath, lineColor]);

	// 라인 애니메이션 설정
	const pathVariants = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: { pathLength: 1, opacity: 1, transition: { duration: 2 } },
	};

	// 원 애니메이션 설정 수정
	const circleVariants = (index: number) => ({
		hidden: { opacity: 0, scale: 1 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				opacity: { duration: 0.2, delay: index * 0.2 }, // 초기 나타날 때만 딜레이
				scale: { duration: 0.2, delay: 0 },
			},
		},
		hover: {
			opacity: 1,
			scale: 1.5,
			transition: {
				delay: 0,
				duration: 0.2,
				ease: 'easeOut',
			},
		},
	});

	const handleMouseEnter = useMemo(
		() =>
			({ clientX, clientY }: React.MouseEvent<SVGElement>, point: DataPoint, index: number) => {
				setHoveredIndex(index);
				setTooltipData({
					x: point.x,
					y: point.y,
					mouseX: clientX,
					mouseY: clientY,
				});
			},
		[],
	);

	const handleMouseLeave = useCallback(() => {
		setHoveredIndex(null);
		setTooltipData(null);
	}, []);

	return (
		<Box sx={{ p: 2, backgroundColor: bds.token.color.dark.background[1], borderRadius: 3 }}>
			<svg ref={svgRef} width={width} height={height}>
				{/* x축, y축 */}
				<g className="axes-container" />

				{/* Grid Lines */}
				{grid &&
					gridLines.map((line) => (
						<line
							key={`${line.x1}-${line.x2}-${line.y}`}
							x1={line.x1}
							x2={line.x2}
							y1={line.y}
							y2={line.y}
							stroke={bds.token.color.dark.primary.disabled}
							strokeWidth={0.5}
							strokeDasharray="4"
						/>
					))}

				{/* Area Path */}
				<MotionPath d={areaPath} fill="url(#areaGradient)" />

				{/* Line Path */}
				<MotionPath
					d={linePath}
					fill="transparent"
					stroke={lineColor}
					strokeWidth={lineWidth}
					variants={pathVariants}
					initial="hidden"
					animate="visible"
				/>

				{/* Data Points */}
				{data.map((point, index) => (
					<g key={`${point.x}-${point.y}`}>
						<rect
							x={xScale(point.x) - width / data.length / 2}
							y={0}
							width={width / data.length}
							height={height}
							fill="transparent"
							style={{ cursor: 'pointer' }}
							onMouseEnter={(event) => handleMouseEnter(event, point, index)}
							onMouseMove={(event) => hoveredIndex === index && handleMouseEnter(event, point, index)}
							onMouseLeave={handleMouseLeave}
						/>
						<MotionCircle
							key={`${point.x}-${point.y}`}
							cx={xScale(point.x)}
							cy={yScale(point.y)}
							r={6}
							strokeWidth={1}
							stroke={lineColor}
							fill={bds.token.color.dark.background[1]}
							variants={circleVariants(index)}
							initial="hidden"
							animate={hoveredIndex === index ? 'hover' : 'visible'}
							style={{
								transformOrigin: `${xScale(point.x)}px ${yScale(point.y)}px`,
								cursor: 'pointer',
								pointerEvents: 'none',
							}}
						/>
					</g>
				))}
			</svg>
			{tooltipData &&
				createPortal(
					<Box
						sx={{
							width: 'auto',
							height: 'auto',
							zIndex: 99998,
							willChange: 'transform',
							contain: 'layout',
							overflow: 'hidden',
							position: 'fixed',
							top: 0,
							left: 0,
							pointerEvents: 'none',
							borderRadius: 0,
							opacity: tooltipData ? 1 : 0,
							transform: `translate(${tooltipData.mouseX + 20}px, ${tooltipData.mouseY + 20}px) scale(1)`,
							transformOrigin: '0% 0% 0',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1,
								backgroundColor: '#0b0d11',
								border: '1px solid rgba(255, 255, 255, 0.1)',
								padding: '6px 12px',
								borderRadius: '40px',
								willChange: 'transform',
								color: lineColor,
							}}
						>
							<div>X: {tooltipData?.x}</div>
							<div>Y: {tooltipData?.y}</div>
						</Box>
					</Box>,
					document.body,
				)}
		</Box>
	);
};
