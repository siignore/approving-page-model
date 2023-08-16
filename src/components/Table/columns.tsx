"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MdOpenInNew, MdExpandLess } from "react-icons/md";

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
    cell: (info) => <div className="flex justify-center text-xs uppercase">{String(info.getValue())}</div>,
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
          <MdExpandLess />
        </button>
      </div>
    ),
  },
];
