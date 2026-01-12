import React from "react";

interface SmartAlert {
  id: string;
  title: string;
  description: string;
  cta?: string;
}

export const SmartAlertsBanner: React.FC<{ alerts: SmartAlert[] }> = ({ alerts }) => (
  <div className="space-y-3">
    {alerts.map(alert => (
      <div
        key={alert.id}
        className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary-100 bg-primary-50 px-4 py-3 text-sm text-primary-700 shadow-sm dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-200"
      >
        <div>
          <p className="font-semibold">{alert.title}</p>
          <p className="text-xs text-primary-600/80 dark:text-primary-200/80">{alert.description}</p>
        </div>
        {alert.cta ? (
          <button className="rounded-full bg-primary-600 px-3 py-1.5 text-xs font-semibold text-white" type="button">
            {alert.cta}
          </button>
        ) : null}
      </div>
    ))}
  </div>
);
