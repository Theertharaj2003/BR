import { UserRole } from "../hooks/useRole";

export const mockKpis = {
  superAdmin: {
    totalSchools: 482,
    activeUsers: 18240,
    monthlyRevenue: 1260000,
    churnRate: 0.018,
  },
  schoolAdmin: {
    students: 1280,
    teachers: 86,
    feesCollected: 720000,
    feesPending: 180000,
    attendanceRate: 0.94,
  },
  teacher: {
    todaysClasses: 5,
    pendingHomework: 3,
    pendingEvaluations: 14,
  },
  student: {
    attendancePercent: 0.92,
    assignmentsDue: 2,
    examsUpcoming: 3,
  },
  parent: {
    childAttendancePercent: 0.9,
    feesPending: 12000,
  },
} as const;

export const mockRevenueTrend = [
  { month: "Jan", revenue: 900000 },
  { month: "Feb", revenue: 980000 },
  { month: "Mar", revenue: 1120000 },
  { month: "Apr", revenue: 1210000 },
  { month: "May", revenue: 1260000 },
];

export const mockOnboarding = [
  { month: "Jan", schools: 32 },
  { month: "Feb", schools: 42 },
  { month: "Mar", schools: 50 },
  { month: "Apr", schools: 65 },
  { month: "May", schools: 71 },
];

export const mockFeatureUsage = [
  { feature: "Attendance", usage: 84 },
  { feature: "Fees", usage: 71 },
  { feature: "Exams", usage: 66 },
  { feature: "Communication", usage: 52 },
];

export const mockSubscriptions = [
  {
    school: "Aurora Academy",
    plan: "Enterprise",
    renewalDate: "2026-02-14",
    status: "Active",
  },
  {
    school: "Nexus International",
    plan: "Professional",
    renewalDate: "2026-03-01",
    status: "Trial",
  },
  {
    school: "Greenfield High",
    plan: "Growth",
    renewalDate: "2026-01-29",
    status: "Expiring",
  },
  {
    school: "Harmony Public",
    plan: "Starter",
    renewalDate: "2026-04-12",
    status: "Active",
  },
];

export const mockAttendanceHeatmap: Array<{ date: string; percentage: number }> = Array.from(
  { length: 30 },
  (_, index) => ({
    date: `2026-01-${String(index + 1).padStart(2, "0")}`,
    percentage: Math.round(70 + Math.random() * 25),
  })
);

export const mockRoleNav: Record<UserRole, Array<{ label: string; path: string }>> = {
  "super-admin": [
    { label: "Overview", path: "/super-admin" },
    { label: "Schools", path: "/super-admin/schools" },
    { label: "Subscriptions", path: "/super-admin/subscriptions" },
    { label: "Feature Flags", path: "/super-admin/feature-flags" },
    { label: "Audit Logs", path: "/super-admin/audit-logs" },
  ],
  "school-admin": [
    { label: "Dashboard", path: "/school-admin" },
    { label: "Students", path: "/students" },
    { label: "Teachers", path: "/teachers" },
    { label: "Attendance", path: "/attendance" },
    { label: "Fees", path: "/fees" },
    { label: "Exams", path: "/exams" },
    { label: "Reports", path: "/reports" },
  ],
  teacher: [
    { label: "Today", path: "/teacher" },
    { label: "Classes", path: "/teacher/classes" },
    { label: "Attendance", path: "/teacher/attendance" },
    { label: "Homework", path: "/teacher/homework" },
    { label: "Evaluations", path: "/teacher/evaluations" },
  ],
  student: [
    { label: "Dashboard", path: "/student" },
    { label: "Assignments", path: "/student/assignments" },
    { label: "Exams", path: "/student/exams" },
    { label: "Fees", path: "/student/fees" },
  ],
  parent: [
    { label: "Overview", path: "/parent" },
    { label: "Attendance", path: "/parent/attendance" },
    { label: "Fees", path: "/parent/fees" },
    { label: "Messages", path: "/parent/messages" },
  ],
};
