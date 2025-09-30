import { useEffect, useState } from "react";
import { Search, Printer, FileDown, Pencil } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const Report = () => {
  // Sample patient data with pre-filled test results
  const [patients, setPatients] = useState([
    {
      id: 1,
      code: "P001",
      name: "John Doe",
      age: 32,
      gender: "Male",
      tests: ["CBC", "Lipid Profile"],
      testResults: {
        CBC: {
          WBC: "7.5 x10³/μL",
          RBC: "4.8 x10⁶/μL",
          Hemoglobin: "15.2 g/dL",
          Platelets: "280 x10³/μL",
        },
        "Lipid Profile": {
          "Total Cholesterol": "185 mg/dL",
          HDL: "55 mg/dL",
          LDL: "110 mg/dL",
          Triglycerides: "120 mg/dL",
        },
      },
    },
    {
      id: 2,
      code: "P002",
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      tests: ["Blood Sugar", "Thyroid"],
      testResults: {
        "Blood Sugar": {
          Fasting: "92 mg/dL",
          Postprandial: "120 mg/dL",
        },
        Thyroid: {
          TSH: "2.1 mIU/L",
          T4: "1.1 ng/dL",
          T3: "120 ng/dL",
        },
      },
    },
  ]);

  // Sample test templates
  const testTemplates = {
    CBC: {
      parameters: ["WBC", "RBC", "Hemoglobin", "Platelets"],
      normalRanges: [
        "4.0-11.0 x10³/μL",
        "4.5-5.5 x10⁶/μL",
        "13.5-17.5 g/dL",
        "150-450 x10³/μL",
      ],
    },
    "Lipid Profile": {
      parameters: ["Total Cholesterol", "HDL", "LDL", "Triglycerides"],
      normalRanges: ["<200 mg/dL", ">40 mg/dL", "<100 mg/dL", "<150 mg/dL"],
    },
    "Blood Sugar": {
      parameters: ["Fasting", "Postprandial"],
      normalRanges: ["70-100 mg/dL", "<140 mg/dL"],
    },
    Thyroid: {
      parameters: ["TSH", "T4", "T3"],
      normalRanges: ["0.4-4.0 mIU/L", "0.8-1.8 ng/dL", "80-200 ng/dL"],
    },
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [testResults, setTestResults] = useState({});

  // Filter patients based on search term
  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle patient selection
  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setTestResults(patient.testResults || {});
    setReportData(null);
    setEditMode(false);
  };

  // Generate report automatically when patient is selected
  useEffect(() => {
    if (selectedPatient && !editMode) {
      generateReport();
    }
  }, [selectedPatient, editMode]);

  // Generate report
  const generateReport = () => {
    if (!selectedPatient) return;

    const report = {
      patient: selectedPatient,
      date: new Date().toLocaleDateString(),
      tests: selectedPatient.tests.map((test) => ({
        name: test,
        parameters: testTemplates[test]?.parameters.map((param) => ({
          name: param,
          result: testResults[test]?.[param] || "",
          normalRange:
            testTemplates[test]?.normalRanges[
              testTemplates[test].parameters.indexOf(param)
            ] || "",
        })),
      })),
    };

    setReportData(report);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      generateReport();
    }
  };

  // Handle test result input change
  const handleTestResultChange = (testName, parameter, value) => {
    setTestResults((prev) => ({
      ...prev,
      [testName]: {
        ...prev[testName],
        [parameter]: value,
      },
    }));
  };

  // Print report
  const printReport = () => {
    window.print();
  };

  // Download report
  const downloadReport = () => {
    // In a real app, this would generate a PDF or other downloadable format
    // Replaced alert with console.log
    console.log("Report download functionality would be implemented here");
  };

  return (
    <DashboardLayout activeMenu="Reports">
      <div className="p-4 md:p-6 md:ml-5 pt-5 bg-pink-50 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Generate Reports
          </h1>

          {/* Patient Search Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search patients by name or code..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm md:text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Patient List */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Code
                      </th>
                      <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                        Age
                      </th>
                      <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                        Gender
                      </th>
                      <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                        Tests
                      </th>
                      <th className="px-4 py-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPatients.map((patient) => (
                      <tr
                        key={patient.id}
                        className={`hover:bg-gray-50 ${
                          selectedPatient?.id === patient.id ? "bg-blue-50" : ""
                        }`}
                      >
                        <td className="px-4 py-4 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {patient.code}
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-700">
                          {patient.name}
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-700 hidden sm:table-cell">
                          {patient.age}
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-700 hidden md:table-cell">
                          {patient.gender}
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4 text-sm text-gray-700 hidden lg:table-cell">
                          {patient.tests.join(", ")}
                        </td>
                        <td className="px-4 py-4 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleSelectPatient(patient)}
                            className="text-blue-600 hover:text-blue-800 text-sm md:text-base"
                          >
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Report Section */}
          {selectedPatient && (
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  Report for {selectedPatient.name} ({selectedPatient.code})
                </h2>
                <button
                  onClick={toggleEditMode}
                  className="flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm md:text-base w-full sm:w-auto"
                >
                  <Pencil className="h-4 w-4 mr-1" />
                  {editMode ? "Preview Report" : "Edit Results"}
                </button>
              </div>

              {/* Edit Mode - Test Results Input */}
              {editMode && (
                <div className="mb-6">
                  <h3 className="text-base md:text-lg font-medium text-gray-700 mb-3">
                    Edit Test Results
                  </h3>
                  {selectedPatient.tests.map((test) => (
                    <div
                      key={test}
                      className="mb-6 border border-gray-200 rounded-lg p-3 md:p-4"
                    >
                      <h4 className="font-medium text-gray-800 mb-3">{test}</h4>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-2 py-2 md:px-4 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Parameter
                              </th>
                              <th className="px-2 py-2 md:px-4 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Result
                              </th>
                              <th className="px-2 py-2 md:px-4 md:py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Normal Range
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {testTemplates[test]?.parameters.map(
                              (param, index) => (
                                <tr key={param}>
                                  <td className="px-2 py-2 md:px-4 md:py-2 whitespace-nowrap text-sm text-gray-700">
                                    {param}
                                  </td>
                                  <td className="px-2 py-2 md:px-4 md:py-2 whitespace-nowrap">
                                    <input
                                      type="text"
                                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm md:text-base"
                                      value={testResults[test]?.[param] || ""}
                                      onChange={(e) =>
                                        handleTestResultChange(
                                          test,
                                          param,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </td>
                                  <td className="px-2 py-2 md:px-4 md:py-2 whitespace-nowrap text-sm text-gray-700">
                                    {testTemplates[test].normalRanges[index]}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        generateReport();
                        setEditMode(false);
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm md:text-base"
                    >
                      Update Report
                    </button>
                  </div>
                </div>
              )}

              {/* Generated Report Preview */}
              {reportData && !editMode && (
                <div className="border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">
                      Pathology Report
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={printReport}
                        className="flex items-center justify-center px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm md:text-base w-full md:w-auto"
                      >
                        <Printer className="h-4 w-4 mr-1" />
                        Print
                      </button>
                      <button
                        onClick={downloadReport}
                        className="flex items-center justify-center px-3 py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 text-sm md:text-base w-full md:w-auto"
                      >
                        <FileDown className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>

                  {/* Report Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2 gap-2">
                      <div>
                        <p className="font-medium text-sm md:text-base">
                          Patient Name: {reportData.patient.name}
                        </p>
                        <p className="text-sm md:text-base">
                          Patient Code: {reportData.patient.code}
                        </p>
                      </div>
                      <div className="md:text-right">
                        <p className="text-sm md:text-base">
                          Date: {reportData.date}
                        </p>
                        <p className="text-sm md:text-base">
                          Age/Gender: {reportData.patient.age}/
                          {reportData.patient.gender}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Test Results */}
                  <div className="mb-6">
                    {reportData.tests.map((test) => (
                      <div key={test.name} className="mb-6">
                        <h4 className="font-medium text-gray-800 mb-2 text-sm md:text-base">
                          {test.name}
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-2 py-2 md:px-4 md:py-2 text-left border border-gray-200 text-xs md:text-sm">
                                  Parameter
                                </th>
                                <th className="px-2 py-2 md:px-4 md:py-2 text-left border border-gray-200 text-xs md:text-sm">
                                  Result
                                </th>
                                <th className="px-2 py-2 md:px-4 md:py-2 text-left border border-gray-200 text-xs md:text-sm">
                                  Normal Range
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {test.parameters.map((param) => (
                                <tr key={param.name}>
                                  <td className="px-2 py-2 md:px-4 md:py-2 border border-gray-200 text-xs md:text-sm">
                                    {param.name}
                                  </td>
                                  <td className="px-2 py-2 md:px-4 md:py-2 border border-gray-200 font-medium text-xs md:text-sm">
                                    {param.result}
                                  </td>
                                  <td className="px-2 py-2 md:px-4 md:py-2 border border-gray-200 text-xs md:text-sm">
                                    {param.normalRange}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                      <div>
                        <p className="font-medium text-sm md:text-base">
                          Technician: [Technician Name]
                        </p>
                      </div>
                      <div className="md:text-right">
                        <p className="font-medium text-sm md:text-base">
                          Pathologist: [Pathologist Name]
                        </p>
                        <div className="mt-2 md:mt-4">
                          <p className="text-xs md:text-sm text-gray-500">
                            Signature: ___________________
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Report;