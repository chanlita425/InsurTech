import { useState } from "react";

const customers = [
  {
    id: "C001",
    name: "Sophea Rath",
    email: "sophea@gmail.com",
    phone: "+855 11 234 567",
    nationalId: "001-12345",
    dob: "1985-03-12",
    policies: 3,
    status: "active",
    created_at: "2026-06-01",
  },
  {
    id: "C002",
    name: "Dara Pich",
    email: "dara.pich@mail.com",
    phone: "+855 12 345 678",
    nationalId: "002-23456",
    dob: "1990-07-22",
    policies: 2,
    status: "active",
    created_at: "2026-06-01",
  },
   {
    id: "C002",
    name: "Dara Pich",
    email: "dara.pich@mail.com",
    phone: "+855 12 345 678",
    nationalId: "002-23456",
    dob: "1990-07-22",
    policies: 2,
    status: "active",
    created_at: "2026-06-01",
  },
   {
    id: "C002",
    name: "Dara Pich",
    email: "dara.pich@mail.com",
    phone: "+855 12 345 678",
    nationalId: "002-23456",
    dob: "1990-07-22",
    policies: 2,
    status: "active",
    created_at: "2026-06-01",
  },
   {
    id: "C002",
    name: "Dara Pich",
    email: "dara.pich@mail.com",
    phone: "+855 12 345 678",
    nationalId: "002-23456",
    dob: "1990-07-22",
    policies: 2,
    status: "active",
    created_at: "2026-06-01",
  },
  
];

export default function Customers() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

  return (
    <div className="space-y-5 w-full p-2 sm:p-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Customer Registry
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            {customers.length} customers total
          </p>
        </div>

        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* TABLE */}
      <div className="w-full bg-white border border-gray-100 rounded-2xl overflow-x-auto">

        <div className="min-w-[1100px] w-full">

          {/* HEADER */}
          <div className="grid grid-cols-[90px_1.5fr_2fr_1.5fr_1.5fr_1fr_80px_100px_140px]
                          bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-400 uppercase">

            <div>ID</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>National ID</div>
            <div>DOB</div>
            <div>Policies</div>
            <div className="text-center">Status</div>
            <div className="text-center">V / U / D</div>

          </div>

          {/* BODY */}
          <div className="divide-y divide-gray-100">

            {filtered.map((c) => (
              <div
                key={c.id}
                className="grid grid-cols-[90px_1.5fr_2fr_1.5fr_1.5fr_1fr_80px_100px_140px]
                          px-5 py-4 items-center hover:bg-gray-50 transition"
              >

                <div className="text-sm text-gray-500">{c.id}</div>

                <div className="font-medium text-sm truncate">{c.name}</div>

                <div className="text-sm text-gray-500 truncate">{c.email}</div>

                <div className="text-sm text-gray-500">{c.phone}</div>

                <div className="text-sm text-gray-500">{c.nationalId}</div>

                <div className="text-sm text-gray-500">{c.dob}</div>

                <div className="text-sm font-medium">{c.policies}</div>

                {/* STATUS */}
                <div className="text-center">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium
                    ${c.status === "active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                    }`}>
                    {c.status}
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
          Showing {filtered.length} of {customers.length} users
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