import { useState } from "react";

const policies = [
  {
    id: 1,
    policy_number: "POL-2026-0001",
    customer: "Sophea Rath",
    insurance_type: "Health",
    premium_amount: 250,
    coverage_amount: 10000,
    start_date: "2026-01-01",
    end_date: "2026-12-31",
    status: "active",
    issued_by: "Admin User",
  },
  {
    id: 2,
    policy_number: "POL-2026-0002",
    customer: "Dara Pich",
    insurance_type: "Vehicle",
    premium_amount: 180,
    coverage_amount: 8000,
    start_date: "2026-02-01",
    end_date: "2027-02-01",
    status: "active",
    issued_by: "Policy Manager",
  },
  {
    id: 3,
    policy_number: "POL-2026-0003",
    customer: "Bopha Chan",
    insurance_type: "Life",
    premium_amount: 500,
    coverage_amount: 50000,
    start_date: "2025-05-10",
    end_date: "2035-05-10",
    status: "inactive",
    issued_by: "Admin User",
  },
  {
    id: 4,
    policy_number: "POL-2026-0004",
    customer: "Virak Sorn",
    insurance_type: "Health",
    premium_amount: 300,
    coverage_amount: 12000,
    start_date: "2026-03-15",
    end_date: "2027-03-15",
    status: "active",
    issued_by: "Claim Officer",
  },
  {
    id: 5,
    policy_number: "POL-2026-0005",
    customer: "Lina Kem",
    insurance_type: "Vehicle",
    premium_amount: 220,
    coverage_amount: 9000,
    start_date: "2026-04-01",
    end_date: "2027-04-01",
    status: "active",
    issued_by: "Finance Officer",
  },
];

export default function Policies() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    const filtered = policies.filter((p) => {
        const matchSearch =
        !search ||
        p.policy_number.toLowerCase().includes(search.toLowerCase()) ||
        p.customer.toLowerCase().includes(search.toLowerCase());

        const matchStatus = !statusFilter || p.status === statusFilter;

        return matchSearch && matchStatus;
});

return (
    <div className="space-y-5 w-full p-2 sm:p-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

            <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                Policies
            </h1>

            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {policies.length} policies total
            </p>
            </div>

        </div>

        {/* FILTERS */}
        <div className="border border-gray-100 rounded-2xl p-3 sm:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                

                {/* SEARCH */}
                <input
                type="text"
                placeholder="Search policy or customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400"
                />

                {/* INSURANCE TYPE */}
                <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400"
                >
                <option value="">All Insurance Types</option>
                <option value="Health">Health</option>
                <option value="Vehicle">Vehicle</option>
                <option value="Life">Life</option>
                <option value="Travel">Travel</option>
                </select>

                {/* STATUS */}
                <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400"
                >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                </select>

            </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-gray-100 rounded-2xl w-full overflow-x-auto">

            <div className="min-w-[1100px] w-full">
                {/* HEADER */}
                <div className="grid grid-cols-[60px_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1.2fr_120px] bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-400 uppercase">

                    <div>ID</div>
                    <div>Policy No</div>
                    <div>Customer</div>
                    <div>Type</div>
                    <div>Premium</div>
                    <div>Coverage</div>
                    <div>Dates</div>
                    <div className="text-center">Status</div>
                    <div className="text-center">V / U / D</div>

                </div>

                {/* BODY */}
                <div className="divide-y divide-gray-100">

                    {filtered.map((p) => (
                    <div
                        key={p.id}
                        className="grid grid-cols-[60px_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1.2fr_120px] px-5 py-4 items-center hover:bg-gray-50 transition"
                    >

                        <div className="text-sm text-gray-500">{p.id}</div>

                        <div className="text-sm font-medium">{p.policy_number}</div>

                        <div className="text-sm text-gray-500">{p.customer}</div>

                        <div className="text-sm">{p.insurance_type}</div>

                        <div className="text-sm text-gray-500">
                        ${p.premium_amount}
                        </div>

                        <div className="text-sm text-gray-500">
                        ${p.coverage_amount}
                        </div>

                        <div className="text-xs text-gray-500">
                        {p.start_date} → {p.end_date}
                        </div>

                        {/* STATUS */}
                        <div className="text-center">
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                            p.status === "active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}>
                            {p.status}
                        </span>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex justify-center gap-1">

                            <button className="px-2 py-1 text-xs rounded bg-blue-50 text-blue-600 hover:bg-blue-100">
                                View
                            </button>

                            <button className="px-2 py-1 text-xs rounded bg-yellow-50 text-yellow-600 hover:bg-yellow-100">
                                Update
                            </button>

                            <button className="px-2 py-1 text-xs rounded bg-red-50 text-red-600 hover:bg-red-100">
                                Delete
                            </button>

                        </div>

                    </div>
                    ))}

                </div>
            </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-sm text-gray-400">
            Showing {filtered.length} of {policies.length} users
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