import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ title, value, change, icon, trend }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-sm p-6 w-full mx-1 my-2 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900 leading-tight">{value}</p>
        </div>
        <div className="p-1.5 rounded-full bg-indigo-50 text-indigo-600">
          {icon}
        </div>
      </div>
      <div className={`mt-2 flex items-center text-sm font-medium ${
        trend === 'up' ? 'text-green-600' : 'text-rose-600'
      }`}>
        <span>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;