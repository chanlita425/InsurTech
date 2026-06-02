interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  bg: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  bg,
}: StatCardProps) {
  return (
    <div
      className={`${bg} rounded-3xl p-6 relative min-h-[180px]`}
    >
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">
          {title}
        </h3>

        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          ↗
        </button>
      </div>

      <h2 className="text-4xl font-bold mt-6">
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-4">
        {subtitle}
      </p>
    </div>
  );
}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  <StatCard
    title="Policies"
    value="2,450"
    subtitle="12% than last month"
    bg="bg-[#F3E8D9]"
  />

  <StatCard
    title="Claims"
    value="315"
    subtitle="3.4% than last month"
    bg="bg-[#E8F1E6]"
  />

  <StatCard
    title="Customers"
    value="1,890"
    subtitle="5.1% than last month"
    bg="bg-[#E5E8F9]"
  />

  <StatCard
    title="Revenue"
    value="$128K"
    subtitle="11.4% than last month"
    bg="bg-[#EDF3F4]"
  />
</div>
