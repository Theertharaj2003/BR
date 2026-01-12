import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserRole } from "../hooks/useRole";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to their appropriate dashboard
    const roleRoutes: Record<UserRole, string> = {
      "super-admin": "/super-admin",
      "school-admin": "/school-admin",
      "teacher": "/teacher",
      "student": "/student",
      "parent": "/parent",
    };
    return <Navigate to={roleRoutes[user.role]} replace />;
  }

  return <>{children}</>;
};
