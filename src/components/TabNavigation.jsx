import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabClass = (tabName) => {
    const base = "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200";
    return activeTab === tabName 
      ? `${base} bg-purple-500 text-white shadow-sm` 
      : `${base} bg-gray-200 text-gray-700 hover:bg-gray-300`;
  };

  return (
    <div className="flex space-x-4 mb-8">
      <button className={tabClass('Lab Info')} onClick={() => setActiveTab('Lab Info')}>
        Lab Info
      </button>
      <button className={tabClass('Test Management')} onClick={() => setActiveTab('Test Management')}>
        Test Management
      </button>
      <button className={tabClass('Reference Doctors')} onClick={() => setActiveTab('Reference Doctors')}>
        Reference Doctors
      </button>
    </div>
  );
};

export default TabNavigation;