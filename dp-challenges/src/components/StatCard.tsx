interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

const StatCard = ({ title, value, subtitle }: StatCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>

      <p className="text-3xl font-bold mt-2">{value}</p>

      {subtitle && (
        <p className="text-sm text-gray-400 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatCard;