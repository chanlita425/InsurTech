export default function Dashboard() {
  const customers = [
    {
      name: "John Smith",
      type: "Auto Insurance",
      period: "1 Year",
      price: "$250/month",
    },
    {
      name: "Sarah Johnson",
      type: "Health Insurance",
      period: "1 Year",
      price: "$320/month",
    },
    {
      name: "David Brown",
      type: "Life Insurance",
      period: "1 Year",
      price: "$180/month",
    },
  ];

  const transactions = [
    {
      id: "#10023",
      title: "Policy Payment",
      amount: "+ $650.00",
      status: "Completed",
    },
    {
      id: "#10024",
      title: "Claim Refund",
      amount: "- $250.00",
      status: "Completed",
    },
    {
      id: "#10025",
      title: "Payment Failed",
      amount: "- $128.00",
      status: "Declined",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-12 xl:col-span-9 space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Main Dashboard
            </h1>

            <select className="border rounded-lg px-4 py-2 bg-white">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          {/* Customer Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {customers.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-200" />

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.type}
                    </p>
                  </div>
                </div>

                <div className="my-8">
                  <div className="h-12 flex items-center">
                    <div className="w-full h-1 bg-blue-100 rounded-full relative">
                      <div className="absolute left-0 top-0 h-1 w-3/4 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold">
                  {item.period}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="font-bold text-lg mb-6">
              Transaction History
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left text-gray-500">
                    <th className="pb-4">Payment Number</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {transactions.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b last:border-0"
                    >
                      <td className="py-5">
                        <div>
                          <p className="font-medium">
                            {item.title}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item.id}
                          </p>
                        </div>
                      </td>

                      <td>{item.amount}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-lg text-sm ${
                            item.status === "Completed"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="w-full mt-6 bg-slate-100 rounded-xl py-3">
              View All Transactions
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 xl:col-span-3 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-4xl font-bold">560</h3>
              <p className="text-gray-500">Policies</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="text-4xl font-bold">$21K</h3>
              <p className="text-gray-500">Claims</p>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
            <div>
              <div className="flex justify-between mb-2">
                <span>Balance</span>
                <span>24 / 50</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 w-1/2 bg-blue-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Orders</span>
                <span>75 / 124</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 w-3/4 bg-blue-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Revenue</span>
                <span>$120k / $240k</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 w-1/2 bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">
              Recent Activity
            </h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium">
                  John Smith
                </p>
                <p className="text-sm text-gray-500">
                  New policy purchased
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Sarah Johnson
                </p>
                <p className="text-sm text-gray-500">
                  Claim approved
                </p>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4">
              Documents
            </h3>

            <div className="space-y-3">
              <div className="border rounded-xl p-3">
                Policy Report.pdf
              </div>

              <div className="border rounded-xl p-3">
                Claims Report.pdf
              </div>

              <div className="border rounded-xl p-3">
                Customer List.xlsx
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}