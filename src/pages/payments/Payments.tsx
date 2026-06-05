const payments = [
  {
    id: "PAY-4401",
    policy: "P-2024-0891",
    customer: "Sophea Rath",
    amount: 320,
    date: "2024-01-10",
    method: "bank",
    reference: "TXN-AA1234",
    status: "paid",
  },
  {
    id: "PAY-4402",
    policy: "P-2024-0892",
    customer: "Dara Pich",
    amount: 480,
    date: "2024-02-01",
    method: "card",
    reference: "TXN-BB2345",
    status: "paid",
  },
  {
    id: "PAY-4403",
    policy: "P-2024-0893",
    customer: "Bopha Chan",
    amount: 290,
    date: "2024-06-15",
    method: "cash",
    reference: "-",
    status: "pending",
  },
];

export default function Payments() {
  return (
    <div className="space-y-5 w-full p-2 sm:p-4 md:p-6">

      {/* SUMMARY */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Total Paid</p>
          <h2 className="text-xl sm:text-2xl font-bold text-green-600">
            $1,950
          </h2>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Pending</p>
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-500">
            $310
          </h2>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Failed</p>
          <h2 className="text-xl sm:text-2xl font-bold text-red-500">
            $500
          </h2>
        </div>
      </div>

      {/* TABLE  */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-x-auto">

        <div className="min-w-[1150px] w-full">

          {/* HEADER */}
          <div className="grid grid-cols-[140px_140px_1.5fr_120px_140px_120px_140px_100px_160px]
                          bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-400 uppercase">

            <div>Payment ID</div>
            <div>Policy</div>
            <div>Customer</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Method</div>
            <div>Reference</div>
            <div className="text-center">Status</div>

            {/* ACTION HEADER */}
            <div className="text-center">Actions</div>

          </div>

          {/* BODY */}
          <div className="divide-y divide-gray-100">

            {payments.map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-[140px_140px_1.5fr_120px_140px_120px_140px_100px_160px]
                          px-5 py-4 items-center hover:bg-gray-50 transition"
              >

                <div className="text-sm text-gray-500">{p.id}</div>

                <div className="text-sm">{p.policy}</div>

                <div className="text-sm text-gray-600 truncate">
                  {p.customer}
                </div>

                <div className="text-sm font-medium text-gray-800">
                  ${p.amount}
                </div>

                <div className="text-sm text-gray-500">{p.date}</div>

                <div className="text-sm capitalize">{p.method}</div>

                <div className="text-sm text-gray-500 truncate">
                  {p.reference}
                </div>

                {/* STATUS */}
                <div className="text-center">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium
                      ${
                        p.status === "paid"
                          ? "bg-green-100 text-green-600"
                          : p.status === "pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                  >
                    {p.status}
                  </span>
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

     {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm text-gray-400">
          Showing {payments.length} of {payments.length} payments
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