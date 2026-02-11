import { type ComponentType } from 'react';
import Chip from '@mui/material/Chip';
import Stack, { type StackProps } from '@mui/material/Stack';

export interface BDSCategoryFilterProps extends Omit<StackProps, 'onChange'> {
	/** Array of category labels */
	categories: string[];
	/** Currently selected category */
	selected: string;
	/** Callback when category changes */
	onChange: (category: string) => void;
	/** Include 'All' option (default: true) */
	showAll?: boolean;
	/** Label for 'All' option (default: '전체') */
	allLabel?: string;
	/** Color variant */
	variant?: 'dark' | 'light';
}

const getChipBgColor = (active: boolean, isDark: boolean) => {
	if (active && isDark) return 'rgba(103, 120, 255, 0.2)';
	if (active) return '#6174fb';
	if (isDark) return 'rgba(255, 255, 255, 0.05)';
	return 'rgba(0, 0, 0, 0.05)';
};

const getChipColor = (active: boolean, isDark: boolean) => {
	if (active && isDark) return '#6778ff';
	if (active) return '#fff';
	if (isDark) return 'rgba(255, 255, 255, 0.6)';
	return 'rgba(0, 0, 0, 0.6)';
};

const getChipBorder = (active: boolean, isDark: boolean) => {
	if (active && isDark) return '1px solid rgba(103, 120, 255, 0.3)';
	if (active) return '1px solid #6174fb';
	return '1px solid transparent';
};

const getChipHoverBg = (active: boolean, isDark: boolean) => {
	if (active && isDark) return 'rgba(103, 120, 255, 0.25)';
	if (active) return '#5563e0';
	if (isDark) return 'rgba(255, 255, 255, 0.08)';
	return 'rgba(0, 0, 0, 0.08)';
};

export const CategoryFilter: ComponentType<BDSCategoryFilterProps> = ({
	categories,
	selected,
	onChange,
	showAll = true,
	allLabel = '전체',
	variant = 'dark',
	sx,
	...props
}) => {
	const allCategories = showAll ? [allLabel, ...categories] : categories;
	const isSelected = (cat: string) =>
		showAll && cat === allLabel ? selected === 'all' || selected === allLabel : selected === cat;
	const isDark = variant === 'dark';

	return (
		<Stack direction="row" flexWrap="wrap" gap={1} sx={sx} {...props}>
			{allCategories.map((cat) => {
				const active = isSelected(cat);
				return (
					<Chip
						key={cat}
						label={cat}
						onClick={() => onChange(showAll && cat === allLabel ? 'all' : cat)}
						sx={{
							fontWeight: 600,
							fontSize: '14px',
							cursor: 'pointer',
							bgcolor: getChipBgColor(active, isDark),
							color: getChipColor(active, isDark),
							border: getChipBorder(active, isDark),
							'&:hover': {
								bgcolor: getChipHoverBg(active, isDark),
							},
						}}
					/>
				);
			})}
		</Stack>
	);
};
