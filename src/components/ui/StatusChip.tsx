import React from "react";
import clsx from "clsx";

interface StatusChipProps {
  status: "Active" | "Trial" | "Expiring" | "Suspended" | string;
}

const statusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-status-success/10 text-status-success";
    case "Trial":
      return "bg-status-info/10 text-status-info";
    case "Expiring":
      return "bg-status-warning/10 text-status-warning";
    case "Suspended":
      return "bg-status-error/10 text-status-error";
    default:
      return "bg-neutral-100 text-neutral-600";
  }
};

export const StatusChip: React.FC<StatusChipProps> = ({ status }) => (
  <span className={clsx("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", statusClass(status))}>
    <span aria-hidden className="mr-2 text-xs">●</span>
    {status}
  </span>
);
