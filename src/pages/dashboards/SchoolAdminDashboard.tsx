import React from "react";
import { StatCard } from "../../components/ui/StatCard";
import { DonutChartCard } from "../../components/charts/DonutChartCard";
import { HeatmapGrid } from "../../components/ui/HeatmapGrid";
import { QuickActions } from "../../components/ui/QuickActions";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { mockAttendanceHeatmap, mockKpis } from "../../data/mockData";
import { Timeline } from "../../components/ui/Timeline";
import { AtRiskPanel } from "../../components/ui/AtRiskPanel";

const feeBreakdown = [
  { label: "Collected", value: mockKpis.schoolAdmin.feesCollected },
  { label: "Pending", value: mockKpis.schoolAdmin.feesPending },
];

const upcomingExams = [
  { time: "Jan 18", title: "Grade 10 Science", description: "Final term practicals" },
  { time: "Jan 22", title: "Grade 8 Mathematics", description: "Unit test" },
  { time: "Jan 25", title: "Grade 12 Economics", description: "Mock board exam" },
];

export const SchoolAdminDashboard: React.FC = () => {
  const pendingApprovals = [
    { time: "08:45", title: "Leave request", description: "Ms. Priya Sharma - Grade 4" },
    { time: "09:10", title: "New admission", description: "Rhea Iyer - Grade 3" },
    { time: "10:30", title: "Transport change", description: "Bus Route 5" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Students" value={mockKpis.schoolAdmin.students.toLocaleString()} icon="👩‍🎓" />
        <StatCard label="Teachers" value={mockKpis.schoolAdmin.teachers.toLocaleString()} icon="👩‍🏫" accent="secondary" />
        <StatCard
          label="Attendance"
          value={`${(mockKpis.schoolAdmin.attendanceRate * 100).toFixed(1)}%`}
          change={{ value: 1.2, direction: "up" }}
          icon="📅"
        />
        <StatCard label="Fees Collected" value={`₹${mockKpis.schoolAdmin.feesCollected.toLocaleString()}`} accent="neutral" />
      </div>

      <AlertBanner
        variant="warning"
        title="Fee collection deadline approaching"
        description="Send reminders to 148 guardians with pending dues in the last 7 days."
        action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Send reminders</button>}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <HeatmapGrid title="Attendance heatmap" values={mockAttendanceHeatmap} />
          <Timeline items={upcomingExams} />
        </div>
        <div className="space-y-6">
          <DonutChartCard
            title="Fees collected vs pending"
            data={feeBreakdown}
            dataKey="value"
            nameKey="label"
            footer={<div className="text-xs">
              Collected {Math.round((mockKpis.schoolAdmin.feesCollected / (mockKpis.schoolAdmin.feesCollected + mockKpis.schoolAdmin.feesPending)) * 100)}% of annual target.
            </div>}
          />
          <AtRiskPanel
            students={[
              { name: "Rohan Gupta", grade: "Grade 10 - Section B", riskLevel: "High", reason: "Attendance dropped to 62%" },
              { name: "Mira Desai", grade: "Grade 8 - Section A", riskLevel: "Medium", reason: "Consistent math test dips" },
              { name: "Aarav Menon", grade: "Grade 6 - Section C", riskLevel: "Low", reason: "Behavior incidents rising" },
            ]}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <QuickActions
          actions={[
            { label: "Admit student", description: "Start guided admission workflow" },
            { label: "Collect fee", description: "Record online/offline payment" },
            { label: "Publish notice", description: "Send multi-channel announcement" },
            { label: "Create exam", description: "Define assessment and schedule" },
          ]}
        />
        <Timeline items={pendingApprovals} />
      </div>
    </div>
  );
};
