"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MdOpenInNew, MdExpandMore } from "react-icons/md";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";

export const columns: ColumnDef<any>[] = [
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
        <button className="bg-green-400 rounded-2xl px-4 py-1 items-center font-bold text-white flex gap-2">
          <AiOutlineCheck className="bg-green-700 rounded-full w-6 h-6 p-1" />
          {String(info.getValue())}
          <BiSolidDownArrow className="text-black" />
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
        <button>
          <MdExpandMore />
        </button>
      </div>
    ),
  },
];
