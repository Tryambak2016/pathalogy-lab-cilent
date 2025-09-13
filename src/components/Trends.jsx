import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const trendData = [
  { month: 'Jan', hemoglobin: 12.5, glucose: 95, wbc: 6.8 },
  { month: 'Feb', hemoglobin: 12.8, glucose: 98, wbc: 7.2 },
  { month: 'Mar', hemoglobin: 13.1, glucose: 102, wbc: 7.5 },
  { month: 'Apr', hemoglobin: 12.9, glucose: 99, wbc: 7.1 },
  { month: 'May', hemoglobin: 13.2, glucose: 101, wbc: 7.3 },
  { month: 'Jun', hemoglobin: 13.4, glucose: 104, wbc: 7.6 },
];

const abnormalFindings = [
  { test: 'Hemoglobin', count: 42, change: '+5%', trendType: 'up' },
  { test: 'Glucose', count: 78, change: '+12%', trendType: 'up' },
  { test: 'WBC', count: 35, change: '-3%', trendType: 'down' },
  { test: 'Platelets', count: 28, change: '+8%', trendType: 'up' },
  { test: 'Creatinine', count: 51, change: '+15%', trendType: 'up' },
];

const Trends = () => {
  const getTrendIcon = (trendType) => {
    switch (trendType) {
      case 'up':
        return <ArrowUp size={16} className="text-green-600" />;
      case 'down':
        return <ArrowDown size={16} className="text-red-600" />;
      case 'none':
      default:
        return <Minus size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">Pathology Trends</h3>
      
      {/* Key Metrics Trend Chart */}
      <div className="p-4 rounded-lg bg-gray-50 mb-8">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Key Metrics Trend (Last 6 Months)</h4>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: '16px' }} />
              <Line type="monotone" dataKey="hemoglobin" stroke="#3B82F6" strokeWidth={2} name="Hemoglobin (g/dL)" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="glucose" stroke="#10B981" strokeWidth={2} name="Glucose (mg/dL)" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="wbc" stroke="#F59E0B" strokeWidth={2} name="WBC (10^3/μL)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Abnormal Findings Cards */}
      <div className="p-4 rounded-lg bg-gray-50">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Abnormal Findings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {abnormalFindings.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h5 className="font-semibold text-gray-900">{item.test}</h5>
                <span className={`px-2 py-1 text-xs rounded-full flex items-center
                  ${item.trendType === 'up' ? 'bg-green-100 text-green-800' :
                    item.trendType === 'down' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {getTrendIcon(item.trendType)}
                  {item.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-2">{item.count}</p>
              <p className="text-sm text-gray-500">abnormal cases</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;