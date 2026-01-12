import React from "react";
import { HeatmapGrid } from "../../components/ui/HeatmapGrid";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { mockAttendanceHeatmap } from "../../data/mockData";

const teacherClassRoster = [
  { name: "Aarav", status: "Present" },
  { name: "Mira", status: "Absent" },
  { name: "Rohan", status: "Present" },
  { name: "Maya", status: "Present" },
  { name: "Kabir", status: "Late" },
];

export const AttendanceModule: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Attendance quick mark</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">One-click attendance with bulk actions and smart suggestions.</p>
        </div>
        <button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Bulk mark present</button>
      </div>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-5">
        {teacherClassRoster.map(student => (
          <button
            key={student.name}
            className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-left font-medium text-neutral-600 transition hover:border-primary-300 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            type="button"
          >
            <span>{student.name}</span>
            <span className="text-xs">{student.status}</span>
          </button>
        ))}
      </div>
    </div>

    <AlertBanner
      variant="info"
      title="Attendance anomaly detected"
      description="Grade 8 Section A shows a 15% dip vs last week. Review reasons before finalizing."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Review section</button>}
    />

    <HeatmapGrid title="Attendance analytics (Admin view)" values={mockAttendanceHeatmap} />
  </div>
);
