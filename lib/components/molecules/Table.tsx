import { type ReactNode, useState } from 'react';
import {
	Table as MuiTable,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	TablePagination,
} from '@mui/material';
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	type ColumnDef,
	getPaginationRowModel,
} from '@tanstack/react-table';
import { bds } from '@/constants';

export interface BDSTableProps<TData> {
	data: TData[];
	columns: ColumnDef<TData>[];
}

type TableComponent = <TData>(props: BDSTableProps<TData>) => ReactNode;

/**
 * 테이블 컴포넌트
 *
 * @param {TData[]} [data] - 테이블의 데이터
 * @param {ColumnDef<TData>[]} [columns] - 테이블의 열 정의
 *
 * @link https://teambuzzle.github.io/bds/?path=/docs/bds-buzzle-design-system-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-molecules-table--docs BDS Table 문서
 * @link https://tanstack.com/table/latest TanStack Table API
 */
export const Table: TableComponent = ({ data, columns }) => {
	const [pageIndex, setPageIndex] = useState(0);
	const [pageSize, setPageSize] = useState(5); // 기본 페이지 크기

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			pagination: { pageIndex, pageSize },
		},
		onPaginationChange: (updater) => {
			const newPagination = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
			setPageIndex(newPagination.pageIndex);
			setPageSize(newPagination.pageSize);
		},
	});

	return (
		<TableContainer component={Paper}>
			<MuiTable>
				<TableHead>
					<TableRow>
						{table.getHeaderGroups().map((headerGroup) =>
							headerGroup.headers.map((header) => (
								<TableCell
									key={header.id}
									sx={{ fontWeight: 'bold', backgroundColor: bds.token.color.gray.gray005 }}
								>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</TableCell>
							)),
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							sx={{
								'&:hover': {
									backgroundColor: bds.token.color.gray.gray005,
								},
							}}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</MuiTable>
			<TablePagination
				component="div"
				count={data.length}
				page={pageIndex}
				rowsPerPage={pageSize}
				onPageChange={(_, newPage) => setPageIndex(newPage)}
				onRowsPerPageChange={(event) => setPageSize(Number(event.target.value))}
			/>
		</TableContainer>
	);
};
