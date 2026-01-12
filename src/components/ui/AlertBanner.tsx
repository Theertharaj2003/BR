import React from "react";
import clsx from "clsx";

type AlertVariant = "info" | "success" | "warning" | "error";

const variantStyles: Record<AlertVariant, string> = {
  info: "bg-status-info/10 text-status-info",
  success: "bg-status-success/10 text-status-success",
  warning: "bg-status-warning/10 text-status-warning",
  error: "bg-status-error/10 text-status-error",
};

interface AlertBannerProps {
  variant?: AlertVariant;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ variant = "info", title, description, action }) => (
  <div
    role="alert"
    className={clsx(
      "flex flex-wrap items-start justify-between gap-4 rounded-2xl px-4 py-3 text-sm ring-1 ring-inset",
      variantStyles[variant]
    )}
  >
    <div>
      <p className="font-semibold">{title}</p>
      {description ? <p className="text-neutral-700/80 dark:text-neutral-100/80">{description}</p> : null}
    </div>
    {action ? <div className="flex items-center gap-2">{action}</div> : null}
  </div>
);
