import { ReactNode } from "react";

interface ContainerBodyLeftPanelProps {
  title: string;
  children?: ReactNode;
}

export function ContainerBodyLeftPanel({ title, children }: ContainerBodyLeftPanelProps) {
  return (
    <dt className="leading-6 text-gray-900">
      <div className="pb-2 uppercase text-sm text-gray-400">{title}</div>
      {children}
    </dt>
  );
}
