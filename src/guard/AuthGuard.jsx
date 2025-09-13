// AuthGuard.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the protected component
  return children;
};

export default AuthGuard;
