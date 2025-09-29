import React from 'react';
import { FileText, Calendar, FlaskConical, Stethoscope, ArrowUp, ArrowDown, CheckCircle } from 'lucide-react';

const TestReportsTable = ({ tests }) => {

  // Helper function to determine result text color
  const getResultColor = (value, normalRange) => {
    // Basic logic for demonstration (you'd need a more robust parsing for real-world ranges)
    if (!normalRange || !value) return 'text-gray-900';
    
    // Simple example: check if value contains 'High', 'Low', 'Abnormal', or 'Negative'
    const val = String(value).toLowerCase();
    const range = String(normalRange).toLowerCase();

    if (val.includes('high') || val.includes('abnormal')) {
        return 'text-red-600 bg-red-50 font-bold';
    } else if (val.includes('low')) {
        return 'text-amber-600 bg-amber-50 font-bold';
    } else if (val.includes('negative') || val.includes('normal')) {
        return 'text-green-600 bg-green-50 font-bold';
    }
    
    return 'text-gray-900 font-semibold';
  };

  const getResultIcon = (value) => {
    const val = String(value).toLowerCase();
    if (val.includes('high') || val.includes('abnormal')) {
        return <ArrowUp size={16} className="text-red-500" />;
    } else if (val.includes('low')) {
        return <ArrowDown size={16} className="text-amber-500" />;
    } else if (val.includes('negative') || val.includes('normal')) {
        return <CheckCircle size={16} className="text-green-500" />;
    }
    return <FlaskConical size={16} className="text-gray-500" />;
  };

  return (
    <section className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <FileText size={24} className="mr-2 text-indigo-500" />
        Test History
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normal Range</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tests.length > 0 ? (
              tests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{test.patient}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.testDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{test.testName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold {getResultColor(test.value, test.normalRange)}">
                    {test.value} {test.unit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{test.normalRange}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">{test.notes || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">No test reports found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (Improved UI) */}
      <div className="md:hidden space-y-4">
        {tests.length > 0 ? (
          tests.map((test) => (
            <div 
              key={test.id} 
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Card Header (Test Name and Date) */}
              <div className="p-3 bg-indigo-50/70 border-b border-indigo-100">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-semibold text-gray-900 flex items-center">
                    <FlaskConical size={18} className="mr-2 text-indigo-600" />
                    {test.testName}
                  </h3>
                  <div className="flex items-center text-xs text-gray-600">
                    <Calendar size={14} className="mr-1 text-indigo-400" />
                    {test.testDate}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-6">Patient: <span className="font-medium text-gray-700">{test.patient}</span></p>
              </div>

              {/* Card Body (Key Details) */}
              <div className="p-3 space-y-3">
                
                {/* Result */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                        {getResultIcon(test.value)}
                        <span className="ml-2">Result:</span>
                    </div>
                    <span className={`text-sm px-2 py-0.5 rounded-md ${getResultColor(test.value, test.normalRange)}`}>
                        {test.value} {test.unit}
                    </span>
                </div>

                {/* Normal Range */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                        <Stethoscope size={16} className="mr-2 text-gray-400" />
                        Normal Range:
                    </div>
                    <span className="text-sm text-gray-900 font-medium">{test.normalRange}</span>
                </div>

                {/* Notes */}
                {test.notes && (
                    <div className="pt-2 border-t border-gray-100">
                        <span className="block text-xs font-semibold text-gray-600 mb-1">Notes:</span>
                        <p className="text-xs text-gray-700 italic max-h-10 overflow-hidden line-clamp-2">{test.notes}</p>
                    </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No test reports found.
          </div>
        )}
      </div>
    </section>
  );
};

export default TestReportsTable;