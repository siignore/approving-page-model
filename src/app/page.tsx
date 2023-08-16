import { Container } from "@/components/Container";
import { columns } from "@/components/Table/columns";
import { DataTable } from "@/components/Table/data-table";

const data = [
  {
    id: 1,
    description: "This is a description",
    createdAt: "2021-01-01",
    createdBy: "Isabella Smith",
    approvalStatus: "Approved",
  },
  {
    id: 2,
    description: "This is a description",
    createdAt: "2021-01-01",
    createdBy: "David Miller",
    approvalStatus: "Approved",
  },
  {
    id: 3,
    description: "This is a description",
    createdAt: "2021-01-01",
    createdBy: "Marcus Lopes",
    approvalStatus: "Pending",
  },
];

export default function Home() {
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
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
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
              <select
                id="countries"
                className="block w-full p-4 pl-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              >
                <option selected>Select Category</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
              <div className="flex flex-1 items-center justify-between px-4 pt-4">
                <button>
                  <span className="text-sm text-gray-400 hover:text-gray-600">Clear Filter X</span>
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-violet-500 p-3 text-xs font-bold uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-violet-700 focus:bg-violet-700 focus:outline-none focus:ring-0 active:bg-violet-800"
                  id="btn-back-to-top"
                >
                  <div className="flex items-center gap-2">Apply</div>
                </button>
              </div>
            </div>
          </Container.LeftPanel>
          <Container.RightPanel>
            <DataTable columns={columns} data={data} />
          </Container.RightPanel>
        </Container.Body>
      </Container.Root>
    </div>
  );
}
