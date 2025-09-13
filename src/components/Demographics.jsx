import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { MapPin, Home, Globe } from 'lucide-react'; // Lucide icons for location

const data = [
  { name: '0-18 Years', value: 15 },
  { name: '19-35 Years', value: 35 },
  { name: '36-50 Years', value: 25 },
  { name: '51+ Years', value: 25 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']; // Tailwind-friendly colors

const genderData = [
  { name: 'Male', value: 58, color: '#3B82F6' },
  { name: 'Female', value: 42, color: '#EC4899' },
];

const locationData = [
  { name: 'Urban', value: 72, icon: MapPin },
  { name: 'Suburban', value: 18, icon: Home },
  { name: 'Rural', value: 10, icon: Globe },
];

const Demographics = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-6 text-gray-800">Patient Demographics</h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Age Distribution Chart */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-md font-semibold mb-4 text-gray-700">Age Distribution</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}%`, name]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gender & Location Sections */}
      <div className="space-y-8">
        {/* Gender Distribution Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-4 text-gray-700">Gender Distribution</h4>
          {genderData.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <span className={`block w-3 h-3 rounded-full mr-3`} style={{ backgroundColor: item.color }}></span>
              <span className="text-sm font-medium text-gray-700 w-24">{item.name}</span>
              <div className="relative flex-grow h-2 bg-gray-200 rounded-full">
                <div 
                  className="absolute top-0 left-0 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-900">{item.value}%</span>
            </div>
          ))}
        </div>

        {/* Location Statistics Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-4 text-gray-700">Location Statistics</h4>
          <ul className="space-y-4">
            {locationData.map((item, index) => (
              <li key={index} className="flex justify-between items-center py-2 px-3 bg-white rounded-md shadow-sm">
                <div className="flex items-center">
                  <item.icon size={18} className="text-gray-500 mr-3" />
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Demographics;