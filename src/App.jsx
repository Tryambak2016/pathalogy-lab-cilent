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
import { AuthProvider } from './guard/AuthContext.jsx';
import AuthGuard from './guard/AuthGuard.jsx';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Landing />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/patients"
          element={
            <AuthGuard>
              <Patients />
            </AuthGuard>
          }
        />
        <Route
          path="/test-reports"
          element={
            <AuthGuard>
              <TestReports />
            </AuthGuard>
          }
        />
        <Route
          path="/reports"
          element={
            <AuthGuard>
              <Reports />
            </AuthGuard>
          }
        />
        <Route
          path="/analytics"
          element={
            <AuthGuard>
              <Analytics />
            </AuthGuard>
          }
        />
        <Route
          path="/admin"
          element={
            <AuthGuard>
              <Administrative />
            </AuthGuard>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="/settings"
          element={
            <AuthGuard>
              <SecuritySettings />
            </AuthGuard>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="p-6 flex justify-center items-center">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
