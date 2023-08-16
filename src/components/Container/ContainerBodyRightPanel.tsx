import { ReactNode } from "react";

interface ContainerBodyRightPanelProps {
  children: ReactNode;
}

export function ContainerBodyRightPanel({ children }: ContainerBodyRightPanelProps) {
  return (
    <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
      <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
        {children}
      </ul>
    </dd>
  );
}
