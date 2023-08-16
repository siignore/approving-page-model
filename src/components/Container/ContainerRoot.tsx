import { ReactNode } from "react";

interface ContainerRootProps {
  children: ReactNode;
}

export function ContainerRoot({ children }: ContainerRootProps) {
  return (
    <div className="p-4">
      <div className="rounded-lg border p-4">{children}</div>
    </div>
  );
}
