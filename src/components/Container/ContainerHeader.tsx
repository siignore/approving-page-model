import { ReactNode } from "react";

interface ContainerHeaderProps {
  children: ReactNode;
}

export function ContainerHeader({ children }: ContainerHeaderProps) {
  return <div className="px-4 sm:px-0">{children}</div>;
}
