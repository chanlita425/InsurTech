export default function Dashboard() {
  const stats = [
    {
      title: "Customers",
      value: "1,250",
    },
    {
      title: "Policies",
      value: "850",
    },
    {
      title: "Claims",
      value: "120",
    },
    {
      title: "Revenue",
      value: "$125,000",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-gray-500">
          Insurance Management Overview
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow-sm p-6 border"
          >
            <p className="text-gray-500 text-sm">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Recent Claims */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="font-semibold text-lg mb-4">
            Recent Claims
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>CLM-1001</span>
              <span className="text-orange-500">Pending</span>
            </div>

            <div className="flex justify-between">
              <span>CLM-1002</span>
              <span className="text-green-500">Approved</span>
            </div>

            <div className="flex justify-between">
              <span>CLM-1003</span>
              <span className="text-red-500">Rejected</span>
            </div>
          </div>
        </div>

        {/* Recent Policies */}
        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <h2 className="font-semibold text-lg mb-4">
            Recent Policies
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>POL-1001</span>
              <span className="text-green-500">Active</span>
            </div>

            <div className="flex justify-between">
              <span>POL-1002</span>
              <span className="text-red-500">Expired</span>
            </div>

            <div className="flex justify-between">
              <span>POL-1003</span>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}