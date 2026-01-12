import React from "react";
import clsx from "clsx";

interface StatusChipProps {
  status: "success" | "error" | "warning" | "info" | string;
  label?: string;
}

const statusClass = (status: string) => {
  switch (status) {
    case "success":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "error":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "warning":
      return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    case "info":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    default:
      return "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400";
  }
};

export const StatusChip: React.FC<StatusChipProps> = ({ status, label }) => (
  <span className={clsx("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold", statusClass(status))}>
    <span aria-hidden className="mr-1.5 text-xs">●</span>
    {label || status}
  </span>
);
