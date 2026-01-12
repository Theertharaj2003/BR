import React, { useState } from "react";
import clsx from "clsx";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

interface TabGroupProps {
  tabs: Tab[];
  defaultTab?: string;
  ariaLabel: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({ tabs, defaultTab = tabs[0]?.id, ariaLabel }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 px-4 py-2 dark:border-neutral-800">
        <div className="flex gap-2" role="tablist" aria-label={ariaLabel}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "rounded-xl px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
                activeTab === tab.id
                  ? "bg-primary-100 text-primary-700 dark:bg-neutral-800 dark:text-primary-200"
                  : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 py-4" role="tabpanel">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
