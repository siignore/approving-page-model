"use client";

import { Container } from "@/components/Container";
import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";
import { useState } from "react";

const data = [
  {
    id: 1,
    description: "This is a description",
    product: "Map",
    createdAt: "20 May 2023",
    createdBy: "Isabella Smith",
    approvalStatus: "Pending",
  },
  {
    id: 2,
    description: "This is a description",
    product: "Fluxogram",
    createdAt: "20 May 2023",
    createdBy: "David Miller",
    approvalStatus: "Pending",
  },
  {
    id: 3,
    description: "This is a description",
    product: "Automation",
    createdAt: "19 May 2023",
    createdBy: "Marcus Lopes",
    approvalStatus: "Pending",
  },
];

export default function Home() {
  const [globalFilter, setGlobalFilter] = useState("");

  return (
    <div className="pt-4">
      <Container.Root>
        <Container.Header>
          <p className="text-2xl">Approvals Page</p>
        </Container.Header>
        <Container.Body>
          <Container.LeftPanel title="Filter">
            <div className="flex flex-col gap-2 w-4/6">
              <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Type to Search...
              </label>
              <div className="relative">
                <input
                  value={globalFilter ?? ""}
                  onChange={(value) => {
                    setGlobalFilter(value.target.value);
                  }}
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type to Search..."
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-between px-4 pt-4">
                <button type="button" onClick={() => setGlobalFilter("")}>
                  <span className="text-sm text-gray-400 hover:text-gray-600">Clear Filter X</span>
                </button>
              </div>
            </div>
          </Container.LeftPanel>
          <Container.RightPanel>
            <DataTable columns={columns} data={data} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
          </Container.RightPanel>
        </Container.Body>
      </Container.Root>
    </div>
  );
}
