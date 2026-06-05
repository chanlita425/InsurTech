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
  <div className="min-h-screen bg-slate-100 p-3 sm:p-4 md:p-6">
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6">

      {/* LEFT CONTENT */}
      <div className="xl:col-span-9 space-y-4 md:space-y-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Main Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Overview of your insurance system
            </p>
          </div>

          <select className="w-full sm:w-auto border rounded-lg px-4 py-2 bg-white text-sm">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        {/* Customer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {customers.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-200 shrink-0" />

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold truncate">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.type}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="my-3">
                <div className="w-full h-1 bg-blue-100 rounded-full">
                  <div className="h-1 w-3/4 bg-blue-500 rounded-full" />
                </div>
              </div>

              {/* Value */}
              <h2 className="text-lg font-bold">
                {item.period}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm p-4 md:p-6">

          <h2 className="font-bold text-lg mb-6">
            Transaction History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="pb-4 text-sm whitespace-nowrap">
                    Payment Number
                  </th>

                  <th className="pb-4 text-sm whitespace-nowrap">
                    Amount
                  </th>

                  <th className="pb-4 text-sm whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-0"
                  >
                    <td className="py-4 whitespace-nowrap">
                      <div>
                        <p className="font-medium">
                          {item.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {item.id}
                        </p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      {item.amount}
                    </td>

                    <td className="whitespace-nowrap">
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

          <button className="w-full mt-4 md:mt-6 bg-slate-100 hover:bg-slate-200 transition rounded-xl py-3 text-sm">
            View All Transactions
          </button>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
    {/* RIGHT SIDEBAR */}
<div className="xl:col-span-3">

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 md:gap-6">

    {/* Stats */}
    <div className="grid grid-cols-2 gap-3">

      <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
          560
        </h3>

        <p className="text-xs sm:text-sm text-gray-500">
          Policies
        </p>
      </div>

      <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
          $21K
        </h3>

        <p className="text-xs sm:text-sm text-gray-500">
          Claims
        </p>
      </div>

    </div>

    {/* Progress */}
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm space-y-4">

      {[
        { label: "Balance", value: "24 / 50", width: "w-1/2" },
        { label: "Orders", value: "75 / 124", width: "w-3/4" },
        { label: "Revenue", value: "$120k / $240k", width: "w-1/2" },
      ].map((item) => (
        <div key={item.label}>
          <div className="flex justify-between mb-2 text-xs sm:text-sm">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-2 ${item.width} bg-blue-500 rounded-full`}
            />
          </div>
        </div>
      ))}

    </div>

    {/* Activity */}
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">

      <h3 className="font-semibold text-sm sm:text-base mb-3">
        Recent Activity
      </h3>

      <div className="space-y-3">

        <div>
          <p className="font-medium text-sm">
            John Smith
          </p>

          <p className="text-xs sm:text-sm text-gray-500">
            New policy purchased
          </p>
        </div>

        <div>
          <p className="font-medium text-sm">
            Sarah Johnson
          </p>

          <p className="text-xs sm:text-sm text-gray-500">
            Claim approved
          </p>
        </div>

      </div>

    </div>

    {/* Documents */}
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">

      <h3 className="font-semibold text-sm sm:text-base mb-3">
        Documents
      </h3>

      <div className="space-y-2">

        <div className="border rounded-lg p-2 sm:p-3 text-xs sm:text-sm hover:bg-gray-50 cursor-pointer">
          Policy Report.pdf
        </div>

        <div className="border rounded-lg p-2 sm:p-3 text-xs sm:text-sm hover:bg-gray-50 cursor-pointer">
          Claims Report.pdf
        </div>

        <div className="border rounded-lg p-2 sm:p-3 text-xs sm:text-sm hover:bg-gray-50 cursor-pointer">
          Customer List.xlsx
        </div>

      </div>

    </div>

  </div>

</div>
    </div>
  </div>
);
}