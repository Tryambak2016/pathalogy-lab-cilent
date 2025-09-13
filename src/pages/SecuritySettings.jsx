import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const SecuritySettings = () => {
  const [activeTab, setActiveTab] = useState("changeEmail");
  const [currentEmail, setCurrentEmail] = useState("admin@metacore.com");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailUpdate = (e) => {
    e.preventDefault();
    console.log("Updating email with:", { newEmail, currentPassword });
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Updating password with:", { currentPassword, newPassword });
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 bg-pink-50 min-h-screen">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Security Settings
        </h1>
        <p className="text-gray-600 mb-4 sm:mb-6">
            Manage your account's security settings, including email and password
        </p>

        <div className="mx-auto my-8 max-w-lg rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Security Settings
          </h2>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium focus:outline-none ${
                activeTab === "changeEmail"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("changeEmail")}
            >
              Change Email
            </button>
            <button
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium focus:outline-none ${
                activeTab === "changePassword"
                  ? "border-purple-600 text-purple-600"
                  : "border-transparent text-gray-500 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("changePassword")}
            >
              Change Password
            </button>
          </div>

          {/* Change Email Form */}
          {activeTab === "changeEmail" && (
            <form onSubmit={handleEmailUpdate} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="currentEmail"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Current Email
                </label>
                <input
                  type="email"
                  id="currentEmail"
                  value={currentEmail}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 text-sm text-gray-600 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="newEmail"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  New Email
                </label>
                <input
                  type="email"
                  id="newEmail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter new email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="currentEmailPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentEmailPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="rounded-md bg-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Update Email
                </button>
              </div>
            </form>
          )}

          {/* Change Password Form */}
          {activeTab === "changePassword" && (
            <form onSubmit={handlePasswordUpdate} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="newPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 p-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="rounded-md bg-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Save Password
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SecuritySettings;
