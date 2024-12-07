import { Box, Drawer, IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { MenuBar } from '../molecules/MenuBar';
import { Button } from '../atoms/Button';

interface Props {
	menuItems: Array<{
		label: string;
		href: string;
	}>;
	isLoggedIn?: boolean;
	onLogout?: () => void;
}

export const MobileMenu: FC<Props> = ({ menuItems, isLoggedIn, onLogout }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<IconButton onClick={() => setIsOpen(true)}>
				<img src="/images/menu_icon.svg" alt="메뉴" width={36} height={36} />
			</IconButton>
			<Drawer
				anchor="right"
				open={isOpen}
				onClose={() => setIsOpen(false)}
				PaperProps={{
					sx: {
						width: '100%',
						bgcolor: 'background.default',
					},
				}}
			>
				<Box sx={{ p: 2 }}>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
						<Logo />
						<IconButton onClick={() => setIsOpen(false)}>
							<img src="/images/close_icon.svg" alt="닫기" width={36} height={36} />
						</IconButton>
					</Box>
					<MenuBar
						items={menuItems}
						sx={{
							flexDirection: 'column',
							gap: 3,
						}}
					/>
					<Box sx={{ mt: 4 }}>
						{isLoggedIn ? (
							<>
								<Button variant="contained" fullWidth href="/mypage" sx={{ mb: 2 }}>
									마이페이지
								</Button>
								<Button variant="outlined" fullWidth onClick={onLogout}>
									로그아웃
								</Button>
							</>
						) : (
							<Button variant="contained" fullWidth href="/login">
								로그인
							</Button>
						)}
					</Box>
				</Box>
			</Drawer>
		</>
	);
};
