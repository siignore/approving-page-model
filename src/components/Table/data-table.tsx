"use client";

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../ui/table/table";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  getFacetedUniqueValues,
} from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({ columns, data, isLoading }: DataTableProps<TData, TValue>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    enableColumnResizing: false,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 50,
      },
    },
  });

  return (
    <>
      <div>
        <div className="text-muted-foreground flex items-center justify-start text-sm pl-4 py-4">
          Total of {table.getRowModel().rows?.length} items
        </div>
        <div id="table-container" className="max-h-[60vh] rounded-md border">
          <Table>
            <TableHeader className="bg-violet-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <>
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder ? null : (
                            <div className="flex flex-col items-center gap-2 py-2">
                              <div
                                {...{
                                  className: header.column.getCanSort() ? "cursor-pointer select-none" : "",
                                  onClick: header.column.getToggleSortingHandler(),
                                }}
                              >
                                <div className="flex items-center">
                                  {flexRender(header.column.columnDef.header, header.getContext())}
                                  {{
                                    asc: <AiOutlineArrowUp />,
                                    desc: <AiOutlineArrowDown />,
                                  }[header.column.getIsSorted() as string] ?? null}
                                </div>
                              </div>
                            </div>
                          )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                </>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <>
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-12 text-center">
                      Loading...
                    </TableCell>
                  </TableRow>
                </>
              ) : (
                <>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                        className="even:bg-violet-50"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id} className="py-6">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-12 text-center">
                        Nothing found.
                      </TableCell>
                    </TableRow>
                  )}
                </>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-center space-x-2 py-4 px-4 text-gray-400">
          <div className="flex flex-1 items-center gap-2 text-xs">
            <button>Prev</button>
            <div className="flex items-center gap-4 bg-slate-200 px-4 py-1 rounded-xl">
              <button className="text-gray-700">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div>
            <div className="flex items-center gap-4 bg-slate-200 px-4 py-1 rounded-xl">
              <button>... 10</button>
            </div>
            <button>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
