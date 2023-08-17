"use client";

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../ui/table/table";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
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
  FilterFn,
} from "@tanstack/react-table";
import RadioGroupApproving from "../Input/Radial";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  globalFilter?: string;
  setGlobalFilter?: (value: string) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading = false,
  globalFilter,
  setGlobalFilter,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [selected, setSelected] = useState("approve");

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
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <>
      <div>
        <div className="text-muted-foreground flex items-center justify-start text-sm pl-4 py-4">
          Total of {table.getRowModel().rows?.length} items
        </div>
        <div id="table-container" className="border overflow-x-auto overflow-y-auto ">
          <Table>
            <TableHeader className="bg-neutral-50">
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
                        className="even:bg-neutral-50"
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
        <div className="flex items-center justify-center space-x-2 py-4 pt-6">
          <RadioGroupApproving setSelected={setSelected} />
        </div>
        <div>
          <div className="flex items-center justify-center space-x-2 py-4">
            <button
              type="button"
              className={`text-md text-gray-400 ${
                table.getCanPreviousPage() ? "grayscale-0" : "grayscale cursor-not-allowed"
              }`}
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              First
            </button>
            <button
              type="button"
              className={`text-md text-gray-400 ${
                table.getCanPreviousPage() ? "grayscale-0" : "grayscale cursor-not-allowed"
              }`}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Prev
            </button>
            <div className="flex gap-1">
              <span>
                <div className="flex items-center gap-4 bg-slate-200 text-gray-700 px-4 py-1 rounded-xl font-bold">
                  <span className="text-gray-400">{table.getState().pagination.pageIndex + 1}</span>
                  <span>/</span>
                  <span>{table.getPageCount()}</span>
                </div>
              </span>
            </div>
            <button
              type="button"
              className={`text-md text-gray-400 ${
                table.getCanPreviousPage() ? "grayscale-0" : "grayscale cursor-not-allowed"
              }`}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </button>
            <button
              type="button"
              className={`text-md text-gray-400 ${
                table.getCanPreviousPage() ? "grayscale-0" : "grayscale cursor-not-allowed"
              }`}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              Last
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2 pb-4">
            <select
              className="border-1-gray-200 flex rounded-md border bg-white p-2"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[10, 50, 100, 150, 200].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selected === "confirm" ? null : (
          <button
            type="submit"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="!fixed bottom-5 right-5 rounded-md bg-green-500 p-3 text-md font-bold uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
            id="btn-back-to-top"
            onClick={() => {
              alert(`Are you sure you want to ${selected}?`);
            }}
          >
            <div className="flex items-center gap-2">{selected}</div>
          </button>
        )}
      </div>
    </>
  );
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);
  // Store the itemRank info
  addMeta({
    itemRank,
  });
  // Return if the item should be filtered in/out
  return itemRank.passed;
};
