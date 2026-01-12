import React from "react";
import { useThemeMode } from "../../theme/ThemeProvider";
import { useAuth } from "../../contexts/AuthContext";

interface LayoutTopbarProps {
  onMenuClick?: () => void;
}

export const LayoutTopbar: React.FC<LayoutTopbarProps> = ({ onMenuClick }) => {
  const { mode, toggleMode } = useThemeMode();
  const { user, logout } = useAuth();

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
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">{user?.role.replace("-", " ").toUpperCase()}</p>
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
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">{user?.name}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{user?.email}</p>
          </div>
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
            onClick={logout}
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 shadow-sm transition hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
