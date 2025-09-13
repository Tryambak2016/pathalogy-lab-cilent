import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx";
import Landing from './pages/Landing';
import Patients from './pages/Patients';
import TestReports from './pages/TestReports';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import Administrative from './pages/Administrative';
import Profile from './pages/Profile.jsx';
import SecuritySettings from './pages/SecuritySettings.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/test-reports" element={<TestReports />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/admin" element={<Administrative />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path='/settings' element={<SecuritySettings/>} />
        <Route path="*" element={<div className="p-6 flex justify-center items-center ">404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;