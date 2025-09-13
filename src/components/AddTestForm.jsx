import React, { useState } from 'react';

const AddTestForm = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const categories = ['Category A', 'Category B', 'Category C']; // Example categories
  const subcategories = {
    'Category A': ['Sub A1', 'Sub A2'],
    'Category B': ['Sub B1', 'Sub B2'],
    'Category C': ['Sub C1', 'Sub C2'],
  }; // Example subcategories based on category

  return (
    <div className="max-w-4xl w-full space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <label htmlFor="testName" className="block text-sm font-medium text-gray-700 mb-2">Test Name</label>
              <input
                type="text"
                id="testName"
                placeholder="e.g., Blood Glucose Test"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSubcategory(''); // Reset subcategory when category changes
                }}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
              <select
                id="subcategory"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                disabled={!category} // Disable subcategory if no category is selected
              >
                <option value="">Select Subcategory</option>
                {category && subcategories[category] && subcategories[category].map((subCat) => (
                  <option key={subCat} value={subCat}>{subCat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="newCategory" className="block text-sm font-medium text-gray-700 mb-2">New Category (Optional)</label>
              <input
                type="text"
                id="newCategory"
                placeholder="Enter new category if needed"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="newSubcategory" className="block text-sm font-medium text-gray-700 mb-2">New Subcategory (Optional)</label>
              <input
                type="text"
                id="newSubcategory"
                placeholder="Enter new subcategory if needed"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="referenceRange" className="block text-sm font-medium text-gray-700 mb-2">Reference Range</label>
              <input
                type="text"
                id="referenceRange"
                placeholder="e.g., 70-110 mg/dL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
              <input
                type="text"
                id="unit"
                placeholder="e.g., mg/dL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Price</label>
              <input
                type="text"
                id="price"
                placeholder="e.g., 250"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="bg-purple-600 text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Add Test
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">All Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div>
              <label htmlFor="searchTests" className="block text-sm font-medium text-gray-700 mb-2">Search Tests</label>
              <input
                type="text"
                id="searchTests"
                placeholder="Search by test name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="filterCategory" className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
              <select
                id="filterCategory"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-8 text-gray-600 text-center">
            No tests to display yet.
          </div>
        </div>
      </div>
  );
};

export default AddTestForm;
