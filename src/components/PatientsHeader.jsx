import React from 'react';
import { PlusCircle, Search } from 'lucide-react';

const PatientsHeader = ({ onAddPatient, searchTerm, onSearchChange }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Patients</h1>
        <p className="text-gray-500 mt-1">Manage patient records, view details, and create new entries.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
        <div className="relative rounded-md shadow-sm w-full sm:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full bg-white rounded-md border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
        <button
          onClick={onAddPatient}
          className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 flex items-center justify-center space-x-2 transition-colors"
        >
          <PlusCircle size={20} />
          <span className="text-sm font-medium">Add Patient</span>
        </button>
      </div>
    </header>
  );
};

export default PatientsHeader;