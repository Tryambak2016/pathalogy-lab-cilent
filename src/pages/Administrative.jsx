import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import TabNavigation from "../components/TabNavigation";
import LabInfoForm from "../components/LabInfoForm";
import AddTestForm from "../components/AddTestForm";
import AddReferenceDoctorForm from "../components/AddReferenceDoctorForm";
// Import other content components as needed

const Administrative = () => {
  const [activeTab, setActiveTab] = useState("Lab Info");

  const renderContent = () => {
    switch (activeTab) {
      case "Lab Info":
        return <LabInfoForm />;
      case "Test Management":
        return <AddTestForm />;
      case "Reference Doctors":
        return (
          <AddReferenceDoctorForm />
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout activeMenu="Administrative">
      <div className="p-6 md:p-8 bg-pink-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
          <p className="text-gray-600 mt-1">
            Manage lab information, tests, and reference doctors
          </p>
        </div>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </div>
    </DashboardLayout>
  );
};

export default Administrative;
