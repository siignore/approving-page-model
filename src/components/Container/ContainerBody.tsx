import { ReactNode } from "react";

interface ContainerBodyProps {
  children: ReactNode;
}

export function ContainerBody({ children }: ContainerBodyProps) {
  return (
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">{children}</div>
      </dl>
    </div>
  );
}
