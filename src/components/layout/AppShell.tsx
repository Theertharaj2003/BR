import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutSidebar } from "./LayoutSidebar";
import { LayoutTopbar } from "./LayoutTopbar";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { BottomNav } from "./BottomNav";

export const AppShell: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="flex h-screen w-full flex-col bg-neutral-50 dark:bg-neutral-900">
      <LayoutTopbar />
      <div className="flex flex-1 overflow-hidden">
        <LayoutSidebar />
        <main className="flex-1 overflow-y-auto bg-neutral-50 px-6 py-6 dark:bg-neutral-900 lg:px-10">
          <div className="mx-auto max-w-[1400px]">
            <Suspense fallback={<div className="text-neutral-500">Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
      {isMobile ? <BottomNav /> : null}
    </div>
  );
};
