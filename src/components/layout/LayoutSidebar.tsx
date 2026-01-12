import React from "react";
import { NavLink } from "react-router-dom";
import { useRole } from "../../hooks/useRole";
import { mockRoleNav } from "../../data/mockData";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface LayoutSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LayoutSidebar: React.FC<LayoutSidebarProps> = ({ isOpen, onClose }) => {
  const { role } = useRole();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  if (!isOpen) return null;

  return (
    <aside
      className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 flex-col border-r border-neutral-200 bg-white/90 px-4 py-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70 lg:flex"
      aria-label="Primary navigation"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-primary-600">Nimblix One</h1>
        <p className="text-sm text-neutral-500">Intelligent school operations platform</p>
      </div>
      <nav role="navigation" className="space-y-1 flex-1 overflow-y-auto">
        {mockRoleNav[role].map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => isMobile && onClose()}
            className={({ isActive }) =>
              `flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-primary-50 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:hover:bg-neutral-800 ${
                isActive
                  ? "bg-primary-100 text-primary-700 dark:bg-neutral-800 dark:text-primary-300"
                  : "text-neutral-600 dark:text-neutral-300"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      {!isMobile && (
        <div className="mt-auto rounded-xl bg-secondary-50 p-4 text-sm text-secondary-900 dark:bg-secondary-950 dark:text-secondary-200">
          <p className="font-semibold">AI Insights</p>
          <p className="mt-1 text-xs text-secondary-700 dark:text-secondary-300">
            Surface risk alerts, recommendations, and smart automations tailored to your institutions.
          </p>
        </div>
      )}
    </aside>
  );
};
