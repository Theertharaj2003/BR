import React from "react";

interface QuickAction {
  label: string;
  description?: string;
  onClick?: () => void;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => (
  <div className="grid gap-3 sm:grid-cols-2">
    {actions.map(action => (
      <button
        key={action.label}
        type="button"
        onClick={action.onClick}
        className="group flex items-center justify-between rounded-2xl border border-primary-100 bg-white/80 px-4 py-3 text-left text-sm font-semibold text-primary-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-50 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-primary-200"
      >
        <span>
          <span className="block font-semibold">{action.label}</span>
          {action.description ? (
            <span className="mt-1 block text-xs font-normal text-neutral-500 dark:text-neutral-400">
              {action.description}
            </span>
          ) : null}
        </span>
        <span aria-hidden className="text-lg transition group-hover:translate-x-1">
          ↗
        </span>
      </button>
    ))}
  </div>
);
