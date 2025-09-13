
import React, { useState } from 'react';

const AddReferenceDoctorForm = () => {
  const [doctorName, setDoctorName] = useState('');
  const [specialization, setSpecialization] = useState('');

  return (
    <div className="max-w-4xl w-full space-y-8">
        {/* Add Reference Doctor Section */}
        <div className="max-w-4xl  bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Add Referance Doctor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Doctor Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-purple-500 text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-purple-700 transition-colors">
                Add Doctor
              </button>
            </div>
          </div>

        {/* All Reference Doctors Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className=" font-bold text-gray-800 text-center mb-8">All Reference Doctors</h2>
          <div className="grid grid-cols-3 gap-4 border-b border-gray-300 pb-2">
            <div className="font-semibold text-gray-600">NAME</div>
            <div className="font-semibold text-gray-600">SPECIALIZATION</div>
            <div className="font-semibold text-gray-600 text-center">ACTIONS</div>
          </div>
          <div className="mt-4 text-gray-600 text-center">
            No doctors to display yet.
          </div>
        </div>
      </div>
  );
};

export default AddReferenceDoctorForm;
