import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PatientsHeader from "../components/PatientsHeader";
import PatientsTable from "../components/PatientsTable";
import PatientModal from "../components/PatientModal";
import Modal from "../components/Modal"; // ✅ Import your reusable modal

// Mock data for demonstration purposes
const initialPatients = [
  {
    id: 1,
    fullName: "John Doe",
    gender: "Male",
    age: 45,
    contactNumber: "987-654-3210",
    email: "john.doe@example.com",
    address: "123 Health St, City",
    patientCode: "P-1001",
    referredBy: "Dr. Smith",
    status: "Active",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    gender: "Female",
    age: 32,
    contactNumber: "123-456-7890",
    email: "jane.smith@example.com",
    address: "456 Wellness Ave, Town",
    patientCode: "P-1002",
    referredBy: "Dr. Williams",
    status: "Active",
  },
  {
    id: 3,
    fullName: "Peter Jones",
    gender: "Male",
    age: 61,
    contactNumber: "456-789-0123",
    email: "peter.jones@example.com",
    address: "789 Medical Rd, Village",
    patientCode: "P-1003",
    referredBy: "Dr. Lee",
    status: "Active",
  },
];

const Patients = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Delete confirmation modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState(null);

  const handleSave = (formData) => {
    if (!formData.fullName || !formData.age || !formData.contactNumber) {
      alert("Please fill out all required fields.");
      return;
    }

    if (currentPatient) {
      // Update existing
      setPatients(
        patients.map((p) =>
          p.id === currentPatient.id ? { ...p, ...formData } : p
        )
      );
    } else {
      // Create new
      const newPatient = {
        ...formData,
        id: patients.length ? Math.max(...patients.map((p) => p.id)) + 1 : 1,
        status: "Active",
      };
      setPatients([...patients, newPatient]);
    }
    closeModal();
  };

  const handleDeleteClick = (patient) => {
    setPatientToDelete(patient);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (patientToDelete) {
      setPatients(patients.filter((p) => p.id !== patientToDelete.id));
      setPatientToDelete(null);
    }
    setIsDeleteModalOpen(false);
  };

  const openModal = (patient = null) => {
    setCurrentPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPatient(null);
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.patientCode?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout activeMenu="Patients">
      <div className="p-4 sm:p-8 bg-gray-50 min-h-screen font-sans bg-pink-50">
        {/* Header */}
        <PatientsHeader
          onAddPatient={() => openModal()}
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Table */}
        <PatientsTable
          patients={filteredPatients}
          onEdit={openModal}
          onDelete={handleDeleteClick} // ✅ Use confirmation modal
        />
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <PatientModal
          onClose={closeModal}
          patient={currentPatient}
          onSave={handleSave}
        />
      )}

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Patient"
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        confirmationButtonClass="bg-red-600 hover:bg-red-700"
        size="sm"
      >
        <p className="text-gray-700">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{patientToDelete?.fullName}</span>?
          This action cannot be undone.
        </p>
      </Modal>
    </DashboardLayout>
  );
};

export default Patients;
