import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800 overflow-hidden">

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50 h-full w-64 bg-slate-900 text-white
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar onClose={() => setOpen(false)} />
      </aside>

      {/* Main Contain */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* Topbar */}
        <header className="bg-white border-b shadow-sm">
          <Topbar onMenuClick={() => setOpen(true)} />
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto overflow-x-hidden min-w-0">
          <div className="max-w-7xl mx-auto w-full min-w-0">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}