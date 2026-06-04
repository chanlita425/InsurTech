export default function Users() {
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

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Users
          </h1>

          <p className="text-gray-500 mt-1">
            Total: {users.length} Users
          </p>
        </div>

        <div className="flex gap-3">
          <button className="border border-gray-300 px-5 py-3 rounded-xl hover:bg-gray-50">
            Export Data
          </button>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl">
            + Add User
          </button>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-gray-300 rounded-xl ">

        <div className="flex flex-col lg:flex-row gap-4">

          <input
            type="text"
            placeholder="Search users..."
            className="flex-1   rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select className=" rounded-xl px-4 py-3">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>Officer</option>
            <option>Staff</option>
          </select>

          <select className=" rounded-xl px-4 py-3">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className=" rounded-xl px-5 py-3 hover:bg-gray-300">
            Filter
          </button>

        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  Created At
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    {user.id}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">
                          {user.name}
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {user.created_at}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">

                      <button className="px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                        View
                      </button>

                      <button className="px-3 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200">
                        Edit
                      </button>

                      <button className="px-3 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div> 

      </div>

      {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5  ">

          <span className="text-sm text-gray-500">
            Showing 1 - {users.length} of {users.length} users
          </span>

          <div className="flex items-center gap-2">

            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
              Previous
            </button>

            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
              1
            </button>

            <button className=" bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
              2
            </button>

            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">
              Next
            </button>

          </div>

        </div>

    </div>
  );
}