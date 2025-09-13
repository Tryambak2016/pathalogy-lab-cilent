import React from 'react';
import { RefreshCcw, PlusCircle, AlertTriangle, FileText, Package } from 'lucide-react';

const activities = [
  { 
    id: 1,
    type: 'Test Completed',
    test: 'Lipid Profile',
    patient: 'John D.',
    time: '10 minutes ago',
    status: 'completed',
  },
  { 
    id: 2,
    type: 'New Order',
    test: 'Complete Blood Count',
    patient: 'Sarah M.',
    time: '25 minutes ago',
    status: 'pending',
  },
  { 
    id: 3,
    type: 'Abnormal Result',
    test: 'Glucose Test',
    patient: 'Robert K.',
    time: '1 hour ago',
    status: 'alert',
  },
  { 
    id: 4,
    type: 'Report Generated',
    test: 'Thyroid Panel',
    patient: 'Emily S.',
    time: '2 hours ago',
    status: 'completed',
  },
  { 
    id: 5,
    type: 'Sample Received',
    test: 'Liver Function',
    patient: 'Michael T.',
    time: '3 hours ago',
    status: 'in-progress',
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'completed':
      return { className: 'bg-green-100 text-green-800', icon: <RefreshCcw size={16} /> };
    case 'pending':
      return { className: 'bg-yellow-100 text-yellow-800', icon: <PlusCircle size={16} /> };
    case 'alert':
      return { className: 'bg-red-100 text-red-800', icon: <AlertTriangle size={16} /> };
    case 'in-progress':
    default:
      return { className: 'bg-blue-100 text-blue-800', icon: <Package size={16} /> };
  }
};

const getTitleIcon = (type) => {
  switch (type) {
    case 'Test Completed':
      return <RefreshCcw size={20} className="text-blue-500" />;
    case 'New Order':
      return <PlusCircle size={20} className="text-yellow-500" />;
    case 'Abnormal Result':
      return <AlertTriangle size={20} className="text-red-500" />;
    case 'Report Generated':
      return <FileText size={20} className="text-green-500" />;
    case 'Sample Received':
      return <Package size={20} className="text-purple-500" />;
    default:
      return null;
  }
};

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">View All</button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const statusStyles = getStatusStyles(activity.status);
          const titleIcon = getTitleIcon(activity.type);

          return (
            <div key={activity.id} className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150 border-b border-gray-100 last:border-0">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full mr-4 flex-shrink-0">
                {titleIcon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-900">{activity.type}</h4>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">{activity.test}</span> for {activity.patient}
                </p>
                <div className="mt-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusStyles.className}`}>
                    {statusStyles.icon}
                    {activity.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-md font-semibold mb-3 text-gray-800">Today's Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <h5 className="text-sm text-blue-800 font-medium">Tests Completed</h5>
            <p className="text-3xl font-bold text-blue-900 mt-1">124</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <h5 className="text-sm text-green-800 font-medium">Reports Generated</h5>
            <p className="text-3xl font-bold text-green-900 mt-1">89</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <h5 className="text-sm text-yellow-800 font-medium">Pending Tests</h5>
            <p className="text-3xl font-bold text-yellow-900 mt-1">35</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg flex flex-col items-center justify-center text-center">
            <h5 className="text-sm text-red-800 font-medium">Critical Results</h5>
            <p className="text-3xl font-bold text-red-900 mt-1">7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;