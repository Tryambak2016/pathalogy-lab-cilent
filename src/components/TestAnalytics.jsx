import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const testData = [
  { name: "Jan", tests: 1200, positive: 240 },
  { name: "Feb", tests: 1900, positive: 380 },
  { name: "Mar", tests: 1500, positive: 300 },
  { name: "Apr", tests: 2100, positive: 420 },
  { name: "May", tests: 1800, positive: 360 },
  { name: "Jun", tests: 2300, positive: 460 },
];

const testTypes = [
  { name: "Complete Blood Count", volume: 1250, trend: "↑ 12%", trendType: "up" },
  { name: "Lipid Profile", volume: 980, trend: "↓ 5%", trendType: "down" },
  { name: "Liver Function", volume: 760, trend: "↑ 8%", trendType: "up" },
  { name: "Thyroid Panel", volume: 620, trend: "↑ 15%", trendType: "up" },
  { name: "Glucose Tests", volume: 1540, trend: "→ 0%", trendType: "none" },
];

const TestAnalytics = () => {
  const getTrendIcon = (trendType) => {
    switch (trendType) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600 inline-block mr-1" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600 inline-block mr-1" />;
      case "none":
      default:
        return <Minus className="w-4 h-4 text-gray-500 inline-block mr-1" />;
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-800">
        Test Volume Analytics
      </h3>

      {/* Monthly Test Volume Chart */}
      <div className="p-3 md:p-4 rounded-lg bg-gray-50 mb-6 md:mb-8">
        <h4 className="text-sm md:text-md font-semibold mb-3 md:mb-4 text-gray-700">
          Monthly Test Volume
        </h4>
        {/* Scrollable wrapper for mobile */}
        <div className="w-full overflow-x-auto">
          <div className="h-64 md:h-72 min-w-[300px] sm:min-w-[400px] md:min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={testData}
                margin={{ 
                  top: 20, 
                  right: 10, 
                  left: 0, 
                  bottom: 5 
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                  width={35}
                />
                <Tooltip 
                  cursor={{ fill: "#E5E7EB" }}
                  wrapperStyle={{ fontSize: '12px' }}
                />
                <Legend 
                  wrapperStyle={{ 
                    paddingTop: "16px",
                    fontSize: '12px'
                  }}
                  iconSize={8}
                />
                <Bar
                  dataKey="tests"
                  fill="#3B82F6"
                  name="Total Tests"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="positive"
                  fill="#F59E0B"
                  name="Positive Results"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Test Type Breakdown Table */}
      <div className="p-3 md:p-4 rounded-lg bg-gray-50">
        <h4 className="text-sm md:text-md font-semibold mb-3 md:mb-4 text-gray-700">
          Test Type Breakdown
        </h4>
        <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
          <table className="min-w-[300px] md:min-w-full divide-y divide-gray-200 text-xs md:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Test Type
                </th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-3 md:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testTypes.map((test, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-gray-900 font-medium text-xs md:text-sm">
                    {test.name}
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-gray-500 text-xs md:text-sm">
                    {test.volume.toLocaleString()}
                  </td>
                  <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-gray-500 flex items-center text-xs md:text-sm">
                    {getTrendIcon(test.trendType)}
                    <span className="hidden xs:inline">{test.trend}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View for Small Screens */}
        <div className="md:hidden mt-4 space-y-3">
          {testTypes.map((test, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-semibold text-gray-900 text-sm flex-1 pr-2">
                  {test.name}
                </h5>
                <span className={`px-2 py-1 text-xs rounded-full flex items-center gap-1
                  ${test.trendType === 'up' ? 'bg-green-100 text-green-800' :
                    test.trendType === 'down' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {getTrendIcon(test.trendType)}
                  {test.trend}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Volume</span>
                <span className="font-semibold text-gray-900">
                  {test.volume.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestAnalytics;