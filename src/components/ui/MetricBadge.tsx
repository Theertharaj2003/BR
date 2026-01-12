import React from "react";
import clsx from "clsx";

interface MetricBadgeProps {
  status: "success" | "warning" | "error" | "info";
  label: string;
  value?: string;
}

const statusStyles: Record<MetricBadgeProps["status"], string> = {
  success: "bg-status-success/10 text-status-success ring-status-success/30",
  warning: "bg-status-warning/10 text-status-warning ring-status-warning/30",
  error: "bg-status-error/10 text-status-error ring-status-error/30",
  info: "bg-status-info/10 text-status-info ring-status-info/30",
};

export const MetricBadge: React.FC<MetricBadgeProps> = ({ status, label, value }) => (
  <span
    className={clsx(
      "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1",
      statusStyles[status]
    )}
  >
    <span aria-hidden>●</span>
    {label}
    {value ? <span className="font-medium text-neutral-700 dark:text-neutral-100">{value}</span> : null}
  </span>
);
