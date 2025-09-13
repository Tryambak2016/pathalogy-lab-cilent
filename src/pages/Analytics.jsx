import React from "react";
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import Demographics from "../components/Demographics";
import TestAnalytics from "../components/TestAnalytics";
import Trends from "../components/Trends";
import RecentActivity from "../components/RecentActivity";
import { Users, FlaskConical, AlertTriangle, ClipboardCheck, User, BarChart, Activity, List } from "lucide-react";

const Analytics = () => {
  const [activeComponent, setActiveComponent] = useState("demographics");

  const renderComponent = () => {
    switch (activeComponent) {
      case "demographics":
        return <Demographics />;
      case "testAnalytics":
        return <TestAnalytics />;
      case "trends":
        return <Trends />;
      case "recentActivity":
        return <RecentActivity />;
      default:
        return <Demographics />;
    }
  };
  return (
    <DashboardLayout activeMenu="Analytics">
      <div className="p-6 bg-pink-50 min-h-screen">
        <h2 className="text-2xl font-medium mb-4">
          Analytics And Patient Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total Patients"
            value="1,248"
            change="+12.5%"
            icon={<Users className="h-6 w-6 text-green-600" />}
            trend="up"
          />
          <StatCard
            title="Tests Conducted"
            value="48"
            change="+3.2%"
            icon={<FlaskConical className="h-6 w-6 text-yellow-600" />}
            trend="up"
          />
          <StatCard
            title="Abnormal Results"
            value="12"
            change="100"
            icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
            trend="up"
          />
          <StatCard
            title="Reports Generated"
            value="12"
            change="-2.1%"
            icon={<ClipboardCheck className="h-6 w-6 text-indigo-600" />}
            trend="down"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveComponent("demographics")}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeComponent === "demographics"
                ? "bg-blue-100 text-blue-700"
                : "bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700"
            } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
          >
            <User className="w-5 h-5 mr-2" />
            Demographics
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("testAnalytics")}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeComponent === "testAnalytics"
                ? "bg-blue-100 text-blue-700"
                : "bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700"
            } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
          >
            <BarChart className="w-5 h-5 mr-2" />
            Test Analytics
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("trends")}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeComponent === "trends"
                ? "bg-blue-100 text-blue-700"
                : "bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700"
            } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
          >
            <Activity className="w-5 h-5 mr-2" />
            Trends
          </button>
          <button
            type="button"
            onClick={() => setActiveComponent("recentActivity")}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeComponent === "recentActivity"
                ? "bg-blue-100 text-blue-700"
                : "bg-white text-gray-900 hover:bg-gray-100 hover:text-blue-700"
            } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
          >
            <List className="w-5 h-5 mr-2" />
            Recent Activity
          </button>
        </div>

        {renderComponent()}
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
