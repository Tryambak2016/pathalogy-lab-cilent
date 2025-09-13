import DashboardLayout from "../layouts/DashboardLayout";
import React, { useState } from "react";
import { Pencil, CheckCircle, XCircle } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    email: "admin@metacore.com",
    fullName: "admin",
    phoneNumber: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // In a real application, send profileData to your backend
    console.log("Profile data to save:", profileData);
    setIsEditing(false);
    // You could show a success notification here
  };

  const handleCancel = () => {
    // Reset to original data or simply exit editing mode
    // For this example, we just exit, but you can add state for original data
    setIsEditing(false);
  };
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-pink-50 p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">
              Profile Information
            </h2>
            <button
              onClick={handleEditToggle}
              className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200
              ${
                isEditing
                  ? "bg-transparent text-gray-700 hover:bg-gray-100"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              {isEditing ? (
                <>
                  <XCircle className="w-5 h-5 mr-2" /> Cancel
                </>
              ) : (
                <>
                  <Pencil className="w-5 h-5 mr-2" /> Edit Profile
                </>
              )}
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                readOnly
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md shadow-sm text-gray-900 focus:outline-none cursor-not-allowed"
              />
              <p className="mt-2 text-xs text-gray-500">
                Email can be changed in Security Settings
              </p>
            </div>

            {/* Full Name & Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm sm:text-sm
                  ${
                    isEditing
                      ? "bg-white border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                      : "bg-gray-100 border-gray-200 text-gray-900 cursor-not-allowed"
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                  className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm sm:text-sm
                  ${
                    isEditing
                      ? "bg-white border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                      : "bg-gray-100 border-gray-200 text-gray-900 cursor-not-allowed"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={profileData.role}
                onChange={handleInputChange}
                readOnly={!isEditing}
                className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm sm:text-sm
                ${
                  isEditing
                    ? "bg-white border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    : "bg-gray-100 border-gray-200 text-gray-900 cursor-not-allowed"
                }`}
                placeholder="Enter your role"
              />
            </div>
          </div>

          {isEditing && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <XCircle className="w-5 h-5 mr-2" /> Cancel
              </button>
              <button
                onClick={handleSave}
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <CheckCircle className="w-5 h-5 mr-2" /> Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Profile;
