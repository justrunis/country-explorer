interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
}

const GlobalStatCard: React.FC<StatCardProps> = ({
  title,
  value,
  color = "text-gray-800",
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
  );
};

export default GlobalStatCard;
