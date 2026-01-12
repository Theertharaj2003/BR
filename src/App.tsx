import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ThemeProvider } from "./theme/ThemeProvider";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./pages/auth/LoginPage";
import {
  SuperAdminDashboard,
  SchoolAdminDashboard,
  TeacherDashboard,
  StudentDashboard,
  ParentDashboard,
  StudentManagement,
  AttendanceModule,
  FeesAccounting,
  ExamsResults,
  TimetableModule,
  CommunicationModule,
  AIModules,
} from "./pages";
import { StudentListPage } from "./pages/modules/StudentListPage";
import { TeacherListPage } from "./pages/modules/TeacherListPage";
import { TeacherStudentList } from "./pages/modules/TeacherStudentList";
import { AttendanceMarkingPage } from "./pages/modules/AttendanceMarkingPage";
import { ParentPaymentPage } from "./pages/modules/ParentPaymentPage";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardRedirect />} />

        {/* Super Admin Routes */}
        <Route
          path="super-admin"
          element={
            <ProtectedRoute allowedRoles={["super-admin"]}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="super-admin/schools"
          element={
            <ProtectedRoute allowedRoles={["super-admin"]}>
              <AIModules />
            </ProtectedRoute>
          }
        />
        <Route
          path="super-admin/subscriptions"
          element={
            <ProtectedRoute allowedRoles={["super-admin"]}>
              <FeesAccounting />
            </ProtectedRoute>
          }
        />

        {/* School Admin Routes */}
        <Route
          path="school-admin"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <SchoolAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="students"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <StudentListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="students/management"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <StudentManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="teachers"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <TeacherListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="attendance"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <AttendanceModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="fees"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <FeesAccounting />
            </ProtectedRoute>
          }
        />
        <Route
          path="exams"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <ExamsResults />
            </ProtectedRoute>
          }
        />
        <Route
          path="reports"
          element={
            <ProtectedRoute allowedRoles={["school-admin"]}>
              <AIModules />
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="teacher"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="teacher/students"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TeacherStudentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="teacher/attendance"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <AttendanceMarkingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="teacher/classes"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TimetableModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="teacher/homework"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <CommunicationModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="teacher/evaluations"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <ExamsResults />
            </ProtectedRoute>
          }
        />

        {/* Student Routes */}
        <Route
          path="student"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="student/assignments"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <CommunicationModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="student/exams"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <ExamsResults />
            </ProtectedRoute>
          }
        />
        <Route
          path="student/fees"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <FeesAccounting />
            </ProtectedRoute>
          }
        />

        {/* Parent Routes */}
        <Route
          path="parent"
          element={
            <ProtectedRoute allowedRoles={["parent"]}>
              <ParentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="parent/attendance"
          element={
            <ProtectedRoute allowedRoles={["parent"]}>
              <AttendanceModule />
            </ProtectedRoute>
          }
        />
        <Route
          path="parent/fees"
          element={
            <ProtectedRoute allowedRoles={["parent"]}>
              <ParentPaymentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="parent/messages"
          element={
            <ProtectedRoute allowedRoles={["parent"]}>
              <CommunicationModule />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const DashboardRedirect: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" replace />;

  const roleRoutes = {
    "super-admin": "/super-admin",
    "school-admin": "/school-admin",
    "teacher": "/teacher",
    "student": "/student",
    "parent": "/parent",
  };

  return <Navigate to={roleRoutes[user.role]} replace />;
};

const App: React.FC = () => (
  <ThemeProvider>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
