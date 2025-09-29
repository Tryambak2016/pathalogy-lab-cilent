import React from 'react';
import { Pencil, Trash2, User, Phone, Calendar } from 'lucide-react';

const PatientsTable = ({ patients, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Desktop Table (Unchanged) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.length > 0 ? (
              patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{patient.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{patient.fullName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{patient.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{patient.contactNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        patient.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button onClick={() => onEdit(patient)} className="text-indigo-600 hover:text-indigo-900 transition-colors p-1 rounded-full hover:bg-indigo-50" title="Edit">
                        <Pencil size={18} />
                      </button>
                      <button onClick={() => onDelete(patient)} className="text-red-600 hover:text-red-900 transition-colors p-1 rounded-full hover:bg-red-50" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (Improved UI) */}
      <div className="md:hidden">
        {patients.length > 0 ? (
          <div className="p-4 space-y-4">
            {patients.map((patient) => (
              <div 
                key={patient.id} 
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Header Section */}
                <div className="p-4 bg-indigo-50/50 border-b border-indigo-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 flex items-center">
                            <User size={18} className="mr-2 text-indigo-600" />
                            {patient.fullName}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 ml-6">Patient ID: <span className="font-semibold text-gray-700">{patient.id}</span></p>
                    </div>
                    <span
                        className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${
                            patient.status === "Active" ? "bg-green-50 text-green-700 ring-1 ring-green-600/20" : "bg-red-50 text-red-700 ring-1 ring-red-600/20"
                        }`}
                    >
                        {patient.status}
                    </span>
                </div>
                
                {/* Details Section */}
                <div className="p-4 space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div className="flex items-center text-gray-600">
                            <Calendar size={16} className="mr-2 text-indigo-400" />
                            Age
                        </div>
                        <span className="text-gray-900 font-semibold">{patient.age} years</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600">
                            <Phone size={16} className="mr-2 text-indigo-400" />
                            Contact
                        </div>
                        <span className="text-gray-900 font-semibold">{patient.contactNumber}</span>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="flex justify-around space-x-3 p-3 bg-gray-50 border-t border-gray-100">
                    <button 
                        onClick={() => onEdit(patient)}
                        className="flex-1 flex items-center justify-center space-x-1 py-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 active:bg-indigo-200 transition-colors font-medium text-sm"
                    >
                        <Pencil size={16} />
                        <span>Edit</span>
                    </button>
                    <button 
                        onClick={() => onDelete(patient)}
                        className="flex-1 flex items-center justify-center space-x-1 py-2 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200 transition-colors font-medium text-sm"
                    >
                        <Trash2 size={16} />
                        <span>Delete</span>
                    </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No patients found.
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientsTable;