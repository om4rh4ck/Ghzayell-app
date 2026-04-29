import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children, adminOnly = false, customerOnly = false }) {
  const { user, isReady } = useAuth();
  const location = useLocation();

  if (!isReady) {
    return null;
  }

  if (!user) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  if (customerOnly && user.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

export default ProtectedRoute;
