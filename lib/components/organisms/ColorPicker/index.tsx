import { animate, MotionValue } from 'motion';
import { type FC, useRef } from 'react';
import { Box } from '../../atoms/Box';
import { Text } from '../../atoms/Text';

interface Props {
	viewSize: {
		width: number;
		height: number;
	};
}

export const ColorPicker: FC<Props> = ({ viewSize }) => {
	const motionValue = new MotionValue(viewSize.width <= 750 ? 0 : 870);
	const colorRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);

	const updateColor = () => {
		if (!colorRef.current || !sliderRef.current) return;

		const x = motionValue.get();
		const stops = [0, 125, 250, 375, 500, 625, 750, 883];
		const colors = [
			'rgba(219, 84, 60, 1)',
			'rgba(235, 189, 55, 1)',
			'rgba(140, 199, 187, 1)',
			'rgba(97, 116, 251, 1)',
			'rgba(162, 140, 199, 1)',
			'rgba(223, 161, 201, 1)',
			'rgba(243, 231, 208, 1)',
			'rgba(242, 242, 242, 1)',
		];

		// Find the two closest stops
		let i = 0;
		while (i < stops.length - 1 && stops[i + 1] < x) i++;

		const t = (x - stops[i]) / (stops[i + 1] - stops[i]);
		const color = interpolateColor(colors[i], colors[i + 1], t);

		colorRef.current.style.color = color;
		sliderRef.current.style.borderColor = color;
	};

	const interpolateColor = (color1: string, color2: string, t: number) => {
		const c1 = color1.match(/\d+/g)!.map(Number);
		const c2 = color2.match(/\d+/g)!.map(Number);

		const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
		const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
		const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
		const a = Number((c1[3] + (c2[3] - c1[3]) * t).toFixed(2));

		return `rgba(${r}, ${g}, ${b}, ${a})`;
	};

	motionValue.on('change', updateColor);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '40px',
				width: '100%',
				height: '300px',
				p: 5,
				bgcolor: '#141414',
				boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.55)',
				borderRadius: '50px',
			}}
		>
			<Box>
				<div ref={colorRef}>
					<Text variant="h1" sx={{ color: 'inherit' }}>
						당신이 원하는,
					</Text>
					<Text variant="h1" sx={{ color: 'inherit' }}>
						모든 서비스
					</Text>
				</div>
			</Box>
			<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '36px',
					background:
						'linear-gradient(90deg, #db543c 0%, #ebbd37 13.28%, #8cc7bb 25.75%, #6174fb 38.21%, #a28cc7 51.13%, #dfa1c9 63.67%, #f3e7d0 76.58%, #f2f2f2 85.49%)',
					borderRadius: '18px',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div
					ref={sliderRef}
					style={{
						width: '36px',
						height: '36px',
						background: '#101010',
						borderRadius: '50%',
						border: '3px solid #fff',
						boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)',
						cursor: 'grab',
						transform: `translateX(${motionValue.get()}px)`,
					}}
					onPointerDown={(e) => {
						const startX = e.clientX;
						const startPos = motionValue.get();

						const onPointerMove = (e: PointerEvent) => {
							const delta = e.clientX - startX;
							const newPos = Math.max(0, Math.min(870, startPos + delta));

							animate(motionValue, newPos, {
								type: 'spring',
								stiffness: 500,
								damping: 50,
							});
						};

						const onPointerUp = () => {
							document.removeEventListener('pointermove', onPointerMove);
							document.removeEventListener('pointerup', onPointerUp);
						};

						document.addEventListener('pointermove', onPointerMove);
						document.addEventListener('pointerup', onPointerUp);
					}}
				/>
			</Box>
		</Box>
	);
};
