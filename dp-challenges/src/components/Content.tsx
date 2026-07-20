import StatCard from "./StatCard";

const Content = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold">
        Welcome to My Dashboard
      </h2>

      <p className="text-gray-500 mt-1 mb-6">
        Here are your statistics for today.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Users"
          value="1,234"
          subtitle="+12% this month"
        />

        <StatCard
          title="Revenue"
          value="$12,345"
          subtitle="+8% this month"
        />

        <StatCard
          title="Orders"
          value="589"
          subtitle="43 pending"
        />

        <StatCard
          title="Products"
          value="182"
          subtitle="12 low stock"
        />
      </div>
    </div>
  );
};

export default Content;