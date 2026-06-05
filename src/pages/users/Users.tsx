import { useState } from "react";

const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@insurance.com",
    role: "Admin",
    status: "Active",
    created_at: "2026-06-01",
  },
  {
    id: 2,
    name: "Claim Officer",
    email: "claim@insurance.com",
    role: "Officer",
    status: "Active",
    created_at: "2026-06-01",
  },
  {
    id: 3,
    name: "Customer Service",
    email: "service@insurance.com",
    role: "Staff",
    status: "Inactive",
    created_at: "2026-06-01",
  },
  {
    id: 4,
    name: "Policy Manager",
    email: "policy@insurance.com",
    role: "Manager",
    status: "Active",
    created_at: "2026-06-01",
  },
  {
    id: 5,
    name: "Finance Officer",
    email: "finance@insurance.com",
    role: "Officer",
    status: "Active",
    created_at: "2026-06-01",
  },
];

export default function Users() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filtered = users.filter((u) => {
    const matchSearch =
      !search ||
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchRole = !roleFilter || u.role === roleFilter;
    const matchStatus = !statusFilter || u.status === statusFilter;

    return matchSearch && matchRole && matchStatus;
  });

  return (
    <div className="space-y-5 w-full p-2 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Users
          </h1>

          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            {users.length} users total
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 8l-3-3m3 3l3-3"
              />
            </svg>
            Export
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add User
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="  border border-gray-100 rounded-2xl  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border bg-white border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Officer</option>
            <option>Staff</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="w-full">
        <div className="bg-white border border-gray-100 rounded-2xl w-full">

          {/* SCROLL WRAPPER */}
          <div className="w-full overflow-x-auto">

            {/* FIXED MIN WIDTH FOR SCROLL */}
            <div className="min-w-[950px] w-full">

              {/* HEADER */}
              <div className="grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_1fr_160px] bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-400 uppercase">

                <div>#</div>
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                <div>Status</div>
                <div>Created</div>
                <div className="text-center">Actions</div>

              </div>

              {/* BODY */}
              <div className="divide-y divide-gray-100">

                {filtered.map((user) => (
                  <div
                    key={user.id}
                    className="grid grid-cols-[60px_1.5fr_2fr_1fr_1fr_1fr_160px] items-center px-5 py-4 hover:bg-gray-50 transition"
                  >

                    {/* ID */}
                    <div className="text-sm text-gray-400">
                      {user.id}
                    </div>

                    {/* NAME */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm shrink-0">
                        {user.name.charAt(0)}
                      </div>

                      <span className="text-sm font-medium text-gray-800 truncate">
                        {user.name}
                      </span>
                    </div>

                    {/* EMAIL */}
                    <div className="text-sm text-gray-500 truncate">
                      {user.email}
                    </div>

                    {/* ROLE */}
                    <div>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        {user.role}
                      </span>
                    </div>

                    {/* STATUS */}
                    <div>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            user.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-400"
                          }`}
                        />
                        {user.status}
                      </span>
                    </div>

                    {/* CREATED */}
                    <div className="text-sm text-gray-400">
                      {user.created_at}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex justify-center gap-2">
                      <button className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                        View
                      </button>

                      <button className="px-3 py-1.5 text-xs rounded-lg bg-yellow-50 text-yellow-600 hover:bg-yellow-100">
                        Edit
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
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm text-gray-400">
          Showing {filtered.length} of {users.length} users
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