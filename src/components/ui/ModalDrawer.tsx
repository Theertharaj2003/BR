import React, { useEffect } from "react";
import clsx from "clsx";

interface ModalDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  alignment?: "right" | "center";
}

export const ModalDrawer: React.FC<ModalDrawerProps> = ({ open, onClose, title, children, footer, alignment = "right" }) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 px-4 py-8 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          "w-full max-w-xl rounded-3xl bg-white shadow-2xl dark:bg-neutral-900",
          alignment === "right" && "sm:ml-auto"
        )}
      >
        <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 dark:border-neutral-800">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-neutral-500 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            ✕
            <span className="sr-only">Close</span>
          </button>
        </header>
        <div className="px-6 py-5 text-sm text-neutral-700 dark:text-neutral-200">{children}</div>
        {footer ? <footer className="border-t border-neutral-200 px-6 py-4 dark:border-neutral-800">{footer}</footer> : null}
      </div>
    </div>
  );
};
