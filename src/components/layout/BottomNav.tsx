import React from "react";
import { NavLink } from "react-router-dom";
import { useRole } from "../../hooks/useRole";
import { mockRoleNav } from "../../data/mockData";

export const BottomNav: React.FC = () => {
  const { role } = useRole();
  return (
    <nav className="flex lg:hidden" aria-label="Primary navigation mobile">
      <div className="flex w-full items-center justify-around border-t border-neutral-200 bg-white/90 py-2 text-xs text-neutral-500 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/90">
        {mockRoleNav[role].slice(0, 4).map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 rounded-lg px-3 py-1 font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${
                isActive ? "text-primary-600" : "text-neutral-500 dark:text-neutral-400"
              }`
            }
          >
            <span aria-hidden>●</span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
