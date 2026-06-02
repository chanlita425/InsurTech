import { NavLink } from "react-router-dom";

export default function Sidebar({ onClose }: { onClose?: () => void }) {
    return (
        <div className="h-full flex flex-col">

        {/* Header */}
        <div className="p-5 border-b border-slate-700">
            <h1 className="text-xl font-bold">InsurTech</h1>
            <p className="text-xs text-slate-400">Management Suite</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-3 space-y-2">

            <SidebarItem to="/dashboard" label="Dashboard" onClose={onClose} />
            <SidebarItem to="/users" label="Users" onClose={onClose} />
            <SidebarItem to="/customers" label="Customers" onClose={onClose} />

            <SidebarItem to="/policies" label="Policies" onClose={onClose} />
            <SidebarItem to="/payments" label="Payments" onClose={onClose} />
            <SidebarItem to="/claims" label="Claims" onClose={onClose} />

            <SidebarItem to="/reports" label="Reports" onClose={onClose} />
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-700 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold">
            AK
            </div>
            <div>
            <p className="text-sm font-semibold">Admin Kova</p>
            <p className="text-xs text-slate-400">Super Admin</p>
            </div>
        </div>

    </div>
  );
}

/* ================= Sidebar Item ================= */
function SidebarItem({
    to,
    label,
    onClose,
    }: {
    to: string;
    label: string;
    onClose?: () => void;
    }) {
    return (
        <NavLink
        to={to}
        onClick={onClose}   // 👈 CLOSE SIDEBAR HERE
        className={({ isActive }) =>
            `block px-4 py-2 rounded-lg text-sm transition
            ${isActive ? "bg-slate-700 text-white" : "hover:bg-slate-800"}`
        }
        >
        {label}
        </NavLink>
    );
}