import React from "react";
import { useThemeMode } from "../../theme/ThemeProvider";
import { useRole } from "../../hooks/useRole";

interface LayoutTopbarProps {
  onMenuClick?: () => void;
}

export const LayoutTopbar: React.FC<LayoutTopbarProps> = ({ onMenuClick }) => {
  const { mode, toggleMode } = useThemeMode();
  const { role, setRole } = useRole();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4">
        <div className="flex flex-1 items-center gap-3">
          {onMenuClick && (
            <button
              type="button"
              onClick={onMenuClick}
              className="md:hidden rounded-lg border border-neutral-200 bg-white/70 p-2 text-neutral-600 shadow-sm transition hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          )}
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">{role.replace("-", " ").toUpperCase()}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Multi-tenant control center</p>
          </div>
          <label className="relative flex flex-1 items-center">
            <span className="sr-only">Search</span>
            <input
              type="search"
              placeholder="Search anything…"
              className="w-full rounded-xl border border-neutral-200 bg-white/60 px-4 py-2 text-sm text-neutral-700 shadow-sm transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            />
          </label>
        </div>
        <div className="flex items-center gap-3">
          <select
            aria-label="Switch role"
            value={role}
            onChange={event => setRole(event.target.value as typeof role)}
            className="hidden rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 lg:block"
          >
            <option value="super-admin">Super Admin</option>
            <option value="school-admin">School Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
          <button
            type="button"
            onClick={toggleMode}
            className="rounded-full border border-neutral-200 bg-white/70 p-2 text-neutral-600 shadow-sm transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            aria-label="Toggle dark mode"
          >
            {mode === "dark" ? "🌙" : "☀️"}
          </button>
          <button
            type="button"
            className="relative rounded-full border border-neutral-200 bg-white/70 p-2 text-neutral-600 shadow-sm transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            aria-label="View notifications"
          >
            🔔
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-accent-500 text-[10px] text-white" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-sm font-semibold text-neutral-700 shadow-sm transition hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            aria-label="Open profile menu"
          >
            <span className="h-8 w-8 rounded-full bg-primary-500/90 text-white" aria-hidden>
              <span className="flex h-full w-full items-center justify-center">NA</span>
            </span>
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span>Neha Arora</span>
              <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400">Nimblix One</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
