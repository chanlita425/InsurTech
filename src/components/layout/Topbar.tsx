import { Bell, Search, Menu } from "lucide-react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-6 py-3">

      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Hamburger (mobile only) */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>

        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="hidden sm:block text-xs text-gray-500">
            Manage your insurance system
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-full w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none px-2 w-full text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <Bell className="text-gray-600" size={20} />

        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
          AK
        </div>

      </div>
    </div>
  );
}