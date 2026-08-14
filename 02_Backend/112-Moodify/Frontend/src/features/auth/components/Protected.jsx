import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

export default function Protected({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
