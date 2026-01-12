import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ThemeProvider } from "./theme/ThemeProvider";
import { useRole } from "./hooks/useRole";
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

const RoleContext = React.createContext<ReturnType<typeof useRole> | undefined>(undefined);

const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const roleState = useRole();
  return <RoleContext.Provider value={roleState}>{children}</RoleContext.Provider>;
};

export const useRoleContext = () => {
  const context = React.useContext(RoleContext);
  if (!context) {
    throw new Error("useRoleContext must be used inside RoleProvider");
  }
  return context;
};

const App: React.FC = () => (
  <ThemeProvider>
    <RoleProvider>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Navigate to="/super-admin" replace />} />
          <Route path="super-admin" element={<SuperAdminDashboard />} />
          <Route path="super-admin/schools" element={<AIModules />} />
          <Route path="super-admin/subscriptions" element={<FeesAccounting />} />
          <Route path="super-admin/feature-flags" element={<AIModules />} />
          <Route path="super-admin/audit-logs" element={<CommunicationModule />} />

          <Route path="school-admin" element={<SchoolAdminDashboard />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="teachers" element={<TeacherDashboard />} />
          <Route path="attendance" element={<AttendanceModule />} />
          <Route path="fees" element={<FeesAccounting />} />
          <Route path="exams" element={<ExamsResults />} />
          <Route path="reports" element={<AIModules />} />

          <Route path="teacher" element={<TeacherDashboard />} />
          <Route path="teacher/classes" element={<TimetableModule />} />
          <Route path="teacher/attendance" element={<AttendanceModule />} />
          <Route path="teacher/homework" element={<CommunicationModule />} />
          <Route path="teacher/evaluations" element={<ExamsResults />} />

          <Route path="student" element={<StudentDashboard />} />
          <Route path="student/assignments" element={<CommunicationModule />} />
          <Route path="student/exams" element={<ExamsResults />} />
          <Route path="student/fees" element={<FeesAccounting />} />

          <Route path="parent" element={<ParentDashboard />} />
          <Route path="parent/attendance" element={<AttendanceModule />} />
          <Route path="parent/fees" element={<FeesAccounting />} />
          <Route path="parent/messages" element={<CommunicationModule />} />
        </Route>
      </Routes>
    </RoleProvider>
  </ThemeProvider>
);

export default App;
