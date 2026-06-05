import { useState } from "react";

type Notification = {
    id: number;
    user_id: number;
    title: string;
    message: string;
    type: "claim" | "payment" | "policy" | "customer";
    is_read: boolean;
    created_at: string;
    updated_at: string;
 };

const notifications: Notification[] = [
    {
        id: 1,
        user_id: 1,
        title: "New Claim Submitted",
        message: "CLM-8827 submitted by Sophea Rath for medical review.",
        type: "claim",
        is_read: false,
        created_at: "2026-06-05 10:00:00",
        updated_at: "2026-06-05 10:00:00",
    },
    {
        id: 2,
        user_id: 1,
        title: "Payment Failed",
        message: "PAY-4406 failed for policy P-2024-0896.",
        type: "payment",
        is_read: false,
        created_at: "2026-06-05 09:00:00",
        updated_at: "2026-06-05 09:00:00",
    },
    {
        id: 3,
        user_id: 1,
        title: "Policy Approved",
        message: "Policy P-2024-0892 renewed successfully.",
        type: "policy",
        is_read: true,
        created_at: "2026-06-05 07:00:00",
        updated_at: "2026-06-05 07:00:00",
    },
    {
        id: 4,
        user_id: 1,
        title: "Claim Completed",
        message: "CLM-8825 windshield claim marked complete.",
        type: "claim",
        is_read: true,
        created_at: "2026-06-04 10:00:00",
        updated_at: "2026-06-04 10:00:00",
    },
    {
        id: 5,
        user_id: 1,
        title: "New Customer",
        message: "Virak Sorn registered as a new customer.",
        type: "customer",
        is_read: false,
        created_at: "2026-06-03 08:00:00",
        updated_at: "2026-06-03 08:00:00",
    },
];

export default function NotificationsPage() {
    const [search, setSearch] = useState("");

    const filtered = notifications.filter(
        (n) =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.message.toLowerCase().includes(search.toLowerCase()) ||
        n.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-5 w-full p-2 sm:p-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Notifications
            </h1>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {notifications.length} notifications total
            </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <input
                type="text"
                placeholder="Search notifications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-72 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Mark All Read
            </button>

            </div>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">

            <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">Total</p>
            <h3 className="text-2xl font-bold text-indigo-600">
                {notifications.length}
            </h3>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">Unread</p>
            <h3 className="text-2xl font-bold text-yellow-600">
                {notifications.filter((n) => !n.is_read).length}
            </h3>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">Read</p>
            <h3 className="text-2xl font-bold text-green-600">
                {notifications.filter((n) => n.is_read).length}
            </h3>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">Users</p>
            <h3 className="text-2xl font-bold text-blue-600">
                {new Set(notifications.map((n) => n.user_id)).size}
            </h3>
            </div>

        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">

            <div className="min-w-[1300px] w-full">

            <div className="grid grid-cols-[80px_100px_180px_2fr_120px_120px_180px]
                            bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-400 uppercase">

                <div>ID</div>
                <div>User ID</div>
                <div>Title</div>
                <div>Message</div>
                <div>Type</div>
                <div>Status</div>
                <div className="text-center">Actions</div>

            </div>

            <div className="divide-y divide-gray-100">

                {filtered.map((n) => (
                <div
                    key={n.id}
                    className="grid grid-cols-[80px_100px_180px_2fr_120px_120px_180px]
                            px-5 py-4 items-center hover:bg-gray-50 transition"
                >

                    <div className="text-sm text-gray-500">
                    {n.id}
                    </div>

                    <div className="text-sm">
                    {n.user_id}
                    </div>

                    <div className="text-sm font-medium text-gray-800">
                    {n.title}
                    </div>

                    <div className="text-sm text-gray-500 truncate">
                    {n.message}
                    </div>

                    <div>
                    <span className="px-2 py-1 rounded-full text-xs bg-indigo-50 text-indigo-600 capitalize">
                        {n.type}
                    </span>
                    </div>

                    <div>
                    <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                        n.is_read
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                    >
                        {n.is_read ? "Read" : "Unread"}
                    </span>
                    </div>

                    <div className="flex justify-center gap-2">

                    <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                        View
                    </button>

                    <button className="px-3 py-1.5 text-xs rounded-lg bg-green-50 text-green-600 hover:bg-green-100">
                        Read
                    </button>

                    <button className="px-3 py-1.5 text-xs rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
                        Delete
                    </button>

                    </div>

                </div>
                ))}

            </div>

            </div>
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

            <span className="text-sm text-gray-400">
            Showing {filtered.length} of {notifications.length} notifications
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2">

            <button className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                Previous
            </button>

            <button className="w-8 h-8 text-sm rounded-lg bg-indigo-600 text-white font-medium">
                1
            </button>

            <button className="w-8 h-8 text-sm rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                2
            </button>

            <button className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                Next
            </button>

            </div>

        </div>
        </div>
    );
}