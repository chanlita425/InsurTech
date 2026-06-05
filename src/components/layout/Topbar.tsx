import { Bell, Search, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const routeTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/users": "Users",
  "/customers": "Customers",
  "/policies": "Policies",
  "/payments": "Payments",
  "/claims": "Claims",
  "/reports": "Reports",
};

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const location = useLocation();
  const title = routeTitles[location.pathname] || "Dashboard";

  const [openSearch, setOpenSearch] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3 relative">

      {/* LEFT */}
      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>

        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="hidden sm:block text-xs text-gray-500">
            Manage your insurance system
          </p>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-2 sm:gap-3">

        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-1.5 rounded-lg">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm w-44"
          />
        </div>

        {/* MOBILE SEARCH ICON */}
        <button
          onClick={() => setOpenSearch(!openSearch)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          {openSearch ? <X size={18} /> : <Search size={18} />}
        </button>

        {/* NOTIFICATION */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* PROFILE */}
        <div className="relative">
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
              A
            </div>
          </button>

          {/* DROPDOWN */}
          {openProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50">
              <div className="p-3 border-b">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@system.com</p>
              </div>

              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                Profile
              </button>

              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                Settings
              </button>

              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                Logout
              </button>
            </div>
          )}
        </div>

      </div>

      {/* MOBILE SEARCH DROPDOWN */}
      {openSearch && (
        <div className="absolute top-14 left-0 w-full px-4 md:hidden z-50">
          <div className="flex items-center bg-white border rounded-lg shadow px-3 py-2">
            <Search size={16} className="text-gray-500" />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="w-full px-2 text-sm outline-none"
            />
          </div>
        </div>
      )}

    </div>
  );
}