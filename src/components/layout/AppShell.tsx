import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutSidebar } from "./LayoutSidebar";
import { LayoutTopbar } from "./LayoutTopbar";
import { BottomNav } from "./BottomNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const AppShell: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <LayoutTopbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex pt-16">
        {!isMobile && (
          <LayoutSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${!isMobile && sidebarOpen ? 'ml-64' : 'ml-0'} pb-20 md:pb-0`}>
          <div className="p-4 md:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>

      {isMobile && <BottomNav />}
    </div>
  );
};
