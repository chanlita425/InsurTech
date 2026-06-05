export default function Report() {
  const revenueData = [
    { q: "Q1", revenue: 18200, claims: 5400 },
    { q: "Q2", revenue: 21400, claims: 7200 },
    { q: "Q3", revenue: 22100, claims: 6100 },
    { q: "Q4", revenue: 22620, claims: 5480 },
  ];

  const products = [
    { name: "Vehicle — Collision", value: 38 },
    { name: "Health — Hospitalization", value: 29 },
    { name: "Vehicle — Comprehensive", value: 21 },
    { name: "Health — Outpatient", value: 12 },
  ];

  return (
    <div className="p-3 sm:p-6 space-y-6 bg-slate-50 min-h-screen">

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold text-indigo-600">$4,320</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Claims Paid Out</p>
          <h2 className="text-2xl font-bold text-red-500">$24,180</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Loss Ratio</p>
          <h2 className="text-2xl font-bold text-yellow-500">71.3%</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <p className="text-sm text-gray-500">Retention Rate</p>
          <h2 className="text-2xl font-bold text-green-600">94.2%</h2>
        </div>

      </div>

      {/* REVENUE VS CLAIMS */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          Revenue vs Claims (2024)
        </h3>

        <div className="space-y-4">
          {revenueData.map((item) => (
            <div key={item.q} className="space-y-1">

              <div className="flex justify-between text-sm text-gray-600">
                <span className="font-medium">{item.q}</span>
                <span>
                  ${item.revenue.toLocaleString()} rev / ${item.claims.toLocaleString()} claims
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden flex">
                <div
                  className="bg-indigo-500"
                  style={{ width: `${(item.revenue / 25000) * 100}%` }}
                />
                <div
                  className="bg-red-400"
                  style={{ width: `${(item.claims / 25000) * 100}%` }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* LOSS + RETENTION INSIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Performance Insights</h3>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span>Loss Ratio</span>
              <span className="font-semibold text-yellow-600">71.3%</span>
            </div>

            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-2 w-[71%] bg-yellow-500 rounded-full" />
            </div>

            <div className="flex justify-between mt-4">
              <span>Retention Rate</span>
              <span className="font-semibold text-green-600">94.2%</span>
            </div>

            <div className="h-2 bg-gray-100 rounded-full">
              <div className="h-2 w-[94%] bg-green-500 rounded-full" />
            </div>

          </div>
        </div>

        {/* TOP PRODUCTS */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="font-semibold mb-4">Top Insurance Products</h3>

          <div className="space-y-4">
            {products.map((p) => (
              <div key={p.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{p.name}</span>
                  <span className="text-gray-500">{p.value}%</span>
                </div>

                <div className="h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-2 bg-indigo-500 rounded-full"
                    style={{ width: `${p.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}