import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

export default function Protected({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "var(--surface, #0b0914)",
          color: "var(--ink, #f5f3ff)",
        }}
      >
        <div
          style={{
            width: "2.2rem",
            height: "2.2rem",
            border: "3px solid rgba(255, 255, 255, 0.15)",
            borderTopColor: "var(--purple, #a855f7)",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
