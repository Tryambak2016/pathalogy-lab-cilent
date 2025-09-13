import DashboardLayout from "../layouts/DashboardLayout";
import { useState, useEffect } from "react";
import { useApi } from "../api";
import StatCard from "../components/StatCard";
import Card from "../components/Card";
import ActivityLog from "../components/ActivityLog";
import { Users, FlaskConical, FileCheck, BarChart } from "lucide-react";
import {
  UsersIcon,
  FlaskConicalIcon,
  ClipboardCheckIcon,
  BarChartIcon,
} from "lucide-react";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const api = useApi();
  const [patientData, setPatientData] = useState({
    totalPatients: 0,
    newPatientsLast30Days: 0,
    patientsWithOpenCases: 0,
    averageAge: 0,
  });

  useEffect(() => {
    // This is where you would fetch your patient data from an API
    const fetchPatientData = async () => {
      setLoading(true);
      try {
        // Replace with your actual API endpoint
        // const response = await api.get('/api/patient-analysis');
        // const data = response.data;

        // Mock data for demonstration purposes
        const mockData = {
          totalPatients: 1250,
          newPatientsLast30Days: 85,
          patientsWithOpenCases: 210,
          averageAge: 42,
        };

        setPatientData(mockData);
        setMessage("Patient data loaded successfully.");
        setMessageType("success");
      } catch (error) {
        setMessage("Failed to load patient data. Please try again.");
        setMessageType("error");
        console.error("Error fetching patient data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="p-4 sm:p-6 bg-pink-50 min-h-screen">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Patient Analysis Dashboard
        </h1>
        <p className="text-gray-600 mb-4 sm:mb-6">
          A quick overview of key patient metrics.
        </p>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
              messageType === "error"
                ? "bg-red-50 text-red-700"
                : messageType === "success"
                ? "bg-green-50 text-green-700"
                : "bg-purple-50 text-purple-700"
            }`}
          >
            {message}
          </div>
        )}

        {loading ? (
          <p>Loading patient data...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Patients"
                value="1,248"
                change="+12.5%"
                icon={<UsersIcon className="h-6 w-6 text-green-600" />}
                trend="up"
              />
              <StatCard
                title="Total Tests"
                value="48"
                change="+3.2%"
                icon={<FlaskConicalIcon className="h-6 w-6 text-yellow-600" />}
                trend="up"
              />
              <StatCard
                title="Reports Generated"
                value="12"
                change="100"
                icon={
                  <ClipboardCheckIcon className="h-6 w-6 text-indigo-600" />
                }
                trend="up"
              />
              <StatCard
                title="Tests Today"
                value="12"
                change="-2.1%"
                icon={<BarChartIcon className="h-6 w-6 text-red-600" />}
                trend="down"
              />
            </div>
            <h2 className="text-2xl font-medium mt-5">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              <Card
                title="Add New Patient"
                description="Register New Patient"
                icon={<Users className="text-blue-600" size={24} />}
                onClick={() => console.log("Add New Patient clicked")}
              />
              <Card
                title="Add Test"
                description="Configure administrative settings"
                icon={<FlaskConical className="text-orange-600" size={24} />}
                onClick={() => console.log("Add Test clicked")}
              />
              <Card
                title="Generate Test Report"
                description="Create a new test report"
                icon={<FileCheck className="text-green-600" size={24} />}
                onClick={() => console.log("Generate Test Report clicked")}
              />
              <Card
                title="View Analytics"
                description="Check patient and test analytics"
                icon={<BarChart className="text-purple-600" size={24} />}
                onClick={() => console.log("View Analytics clicked")}
              />
            </div>
            <h3 className="text-1xl font-medium mt-5">Recent Activity..</h3>
            <div className="lg:col-span-1 mt-6">
              <ActivityLog />
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
