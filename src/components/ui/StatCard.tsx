import React from "react";
import clsx from "clsx";

interface StatCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  change?: {
    value: number;
    direction: "up" | "down";
  };
  icon?: string;
  accent?: "primary" | "secondary" | "neutral";
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, suffix, change, icon, accent = "primary" }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-transparent bg-white/70 p-5 shadow-card ring-1 ring-black/5 backdrop-blur-lg transition hover:-translate-y-0.5 hover:shadow-xl focus-within:ring-primary-200 dark:bg-neutral-900/70 dark:text-neutral-100",
        accent === "primary" && "border-primary-100 dark:border-neutral-800",
        accent === "secondary" && "border-secondary-100 dark:border-neutral-800",
        accent === "neutral" && "border-neutral-100 dark:border-neutral-800"
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{label}</p>
        {icon ? <span className="text-xl" aria-hidden>{icon}</span> : null}
      </div>
      <div className="mt-3 flex items-end gap-2">
        <p className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          {value}
          {suffix ? <span className="ml-1 text-base font-medium text-neutral-400">{suffix}</span> : null}
        </p>
        {change ? (
          <span
            className={clsx(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
              change.direction === "up"
                ? "bg-secondary-100 text-secondary-700"
                : "bg-accent-100 text-accent-700"
            )}
          >
            {change.direction === "up" ? "▲" : "▼"}
            {change.value}%
          </span>
        ) : null}
      </div>
    </div>
  );
};
