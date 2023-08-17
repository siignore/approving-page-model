"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MdOpenInNew, MdExpandMore } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineMinus } from "react-icons/ai";
import { Checkbox } from "@/ui/checkbox";

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2 px-2 justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => <div className="flex justify-center text-xs">{String(info.getValue())}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (info) => <div className="flex justify-center text-xs uppercase">{String(info.getValue())}</div>,
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: (info) => <div className="flex justify-center text-xs uppercase">{String(info.getValue())}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (info) => <div className="flex justify-center text-xs uppercase">{String(info.getValue())}</div>,
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
    cell: (info) => <div className="flex justify-center text-xs uppercase">{String(info.getValue())}</div>,
  },
  {
    accessorKey: "approvalStatus",
    header: "Aproval Status",
    cell: (info) => (
      <div className="flex justify-center text-xs uppercase">
        <button className="bg-orange-400 rounded-2xl px-2 pr-4 py-1 items-center font-bold text-white flex gap-2 uppercase">
          <AiOutlineMinus className="bg-orange-700 rounded-full w-6 h-6 p-1" />
          {String(info.getValue())}
        </button>
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: (info) => (
      <div className="flex justify-center gap-2">
        <button>
          <MdOpenInNew />
        </button>
      </div>
    ),
  },
];
