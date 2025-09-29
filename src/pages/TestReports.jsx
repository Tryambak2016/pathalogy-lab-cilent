import React, { useState } from 'react';
import DashboardLayout from "../layouts/DashboardLayout";
import { Plus } from 'lucide-react';
import TestReportsTable from '../components/TestReportsTable';
import AddTestFormModal from '../components/AddTestFormModal';

// Mock data for demonstration
const mockTests = [
  {
    id: 1,
    patient: "John Doe",
    testDate: "2025-09-10",
    category: "Hematology",
    subCategory: "Blood Count",
    testName: "CBC",
    value: "15.2",
    normalRange: "12-16 g/dL",
    unit: "g/dL",
    notes: "Patient was a bit dehydrated."
  },
  {
    id: 2,
    patient: "Jane Smith",
    testDate: "2025-09-12",
    category: "Biochemistry",
    subCategory: "Lipid Panel",
    testName: "Cholesterol",
    value: "205",
    normalRange: "<200 mg/dL",
    unit: "mg/dL",
    notes: "Slightly elevated, recommended diet changes."
  }
];

const TestReports = () => {
  const [tests, setTests] = useState(mockTests);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTest = (newTest) => {
    setTests(prev => [{ ...newTest, id: Date.now() }, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout activeMenu="Tests">
      <div className="p-6 md:p-10 min-h-screen bg-pink-50">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Test Reports</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-300 "
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Test
          </button>
        </header>

        <p className="text-gray-600 mb-8 max-w-2xl">
          View, add, and manage all patient test reports in one place.
        </p>

        <TestReportsTable tests={tests} />

        <AddTestFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddTest}
        />
      </div>
    </DashboardLayout>
  );
};

export default TestReports;