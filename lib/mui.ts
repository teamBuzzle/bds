/**
 * MUI Component Re-exports
 * BDS를 통해 MUI 컴포넌트를 사용할 수 있도록 re-export합니다.
 * BDS 커스텀 컴포넌트가 있는 경우 BDS 버전이 우선됩니다.
 *
 * BDS 커스텀 컴포넌트 (여기서 re-export하지 않음):
 * - Button: BDS Button (gradient 지원)
 * - Link: BDS Link (커스텀)
 * - Text: BDS Text (커스텀)
 * - Input: BDS Input (커스텀)
 * - Table: BDS Table (고수준 래퍼)
 */

// Layout
export { Box, Container, Stack, Toolbar, styled } from '@mui/material';
export type { BoxProps, ContainerProps, StackProps, ToolbarProps } from '@mui/material';

// Typography
export { Typography } from '@mui/material';
export type { TypographyProps } from '@mui/material';

// Buttons & Actions
export { IconButton } from '@mui/material';
export type { IconButtonProps } from '@mui/material';

// Inputs & Forms
export { InputBase, TextField, Select, FormControl, InputLabel, InputAdornment } from '@mui/material';
export type {
	InputBaseProps,
	TextFieldProps,
	SelectProps,
	FormControlProps,
	InputLabelProps,
	InputAdornmentProps,
} from '@mui/material';

// Navigation
export { Chip, Tab, Tabs, Link as MuiLink, Drawer, Pagination } from '@mui/material';
export type {
	ChipProps,
	TabProps,
	TabsProps,
	LinkProps as MuiLinkProps,
	DrawerProps,
	PaginationProps,
} from '@mui/material';

// Data Display
export { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
export type {
	DividerProps,
	ListProps,
	ListItemProps,
	ListItemButtonProps,
	ListItemIconProps,
	ListItemTextProps,
} from '@mui/material';

// Surfaces
export { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Paper } from '@mui/material';
export type {
	AccordionProps,
	AccordionDetailsProps,
	AccordionSummaryProps,
	CardProps,
	CardContentProps,
	PaperProps,
} from '@mui/material';

// Feedback
export { Alert, Backdrop, CircularProgress, Skeleton } from '@mui/material';
export type { AlertProps, BackdropProps, CircularProgressProps, SkeletonProps } from '@mui/material';

// Menu
export { MenuItem } from '@mui/material';
export type { MenuItemProps } from '@mui/material';

// Table (MUI primitives - BDS Table은 @tanstack/react-table 기반 고수준 래퍼)
export { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
export type {
	TableProps as MuiTableProps,
	TableBodyProps,
	TableCellProps,
	TableContainerProps,
	TableHeadProps,
	TableRowProps,
} from '@mui/material';

// Utils
export { CssBaseline } from '@mui/material';

// Hooks
export { useMediaQuery, useTheme } from '@mui/material';

// Theme
export { ThemeProvider, createTheme } from '@mui/material/styles';
export type { SxProps, Theme } from '@mui/material/styles';
