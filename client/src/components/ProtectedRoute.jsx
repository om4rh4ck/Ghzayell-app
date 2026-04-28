import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children, adminOnly = false }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/auth" replace state={{ from: location }} />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
