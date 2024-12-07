import { Box } from '@mui/material';
import { animate } from 'motion';
import { FC, useEffect, useRef } from 'react';
import React from 'react';

interface Props {
	isAnimate: boolean;
	finishAnimation: () => void;
}

export const Animation: FC<Props> = ({ isAnimate, finishAnimation }) => {
	const logoRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (isAnimate && logoRef.current) {
			animate(
				logoRef.current,
				{
					opacity: [0, 1],
					y: [20, 0],
				},
				{
					duration: 0.5,
					onComplete: finishAnimation,
				},
			);
		}
	}, [isAnimate, finishAnimation]);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				bgcolor: 'background.default',
			}}
		>
			<Box
				component="img"
				ref={logoRef}
				src="/images/logo.svg"
				alt="버즐 로고"
				sx={{
					width: '120px',
					height: '120px',
					objectFit: 'contain',
					opacity: 0,
				}}
			/>
		</Box>
	);
};
