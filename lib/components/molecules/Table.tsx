import { useState } from 'react';
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

interface Props<TData> {
	data: TData[];
	columns: ColumnDef<TData>[];
}

export const Table = <TData,>({ data, columns }: Props<TData>) => {
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
