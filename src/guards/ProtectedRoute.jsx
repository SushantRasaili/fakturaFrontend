import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
