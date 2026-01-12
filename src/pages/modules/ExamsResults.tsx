import React from "react";
import { DataTable } from "../../components/ui/DataTable";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { Timeline } from "../../components/ui/Timeline";

const marksEntryGrid = [
  { roll: 1, name: "Aarav", physics: 86, chemistry: 78, math: 92, status: "Validated" },
  { roll: 2, name: "Mira", physics: 74, chemistry: 81, math: 88, status: "Draft" },
  { roll: 3, name: "Rohan", physics: 61, chemistry: 69, math: 73, status: "Needs review" },
];

export const ExamsResults: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Marks entry</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Auto-save enabled with validation hints.</p>
        </div>
        <button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Publish grades</button>
      </div>
      <div className="mt-4">
        <DataTable
          caption="Marks entry grid"
          data={marksEntryGrid}
          columns={[
            { key: "roll", header: "Roll", sortable: true },
            { key: "name", header: "Student", sortable: true },
            { key: "physics", header: "Physics", sortable: true },
            { key: "chemistry", header: "Chemistry", sortable: true },
            { key: "math", header: "Math", sortable: true },
            {
              key: "status",
              header: "Status",
              render: value => (
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    value === "Validated"
                      ? "bg-status-success/10 text-status-success"
                      : value === "Draft"
                      ? "bg-status-info/10 text-status-info"
                      : "bg-status-warning/10 text-status-warning"
                  }`}
                >
                  {value as string}
                </span>
              ),
            },
          ]}
        />
      </div>
    </div>

    <AlertBanner
      variant="info"
      title="Performance prediction"
      description="AI projects a 7% improvement if remedial analytics are activated for Grade 10."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Enable now</button>}
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Report card preview</h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Academic summary, subject breakdown, and co-curricular performance.</p>
        <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
          <p><strong>Student:</strong> Aarav Menon</p>
          <p><strong>Overall Grade:</strong> A-</p>
          <p><strong>Strengths:</strong> Mathematics, Robotics</p>
          <p><strong>Recommendations:</strong> Focus on lab reports</p>
        </div>
      </div>
      <Timeline
        items={[
          { time: "Jan 20", title: "Mock exams", description: "Publish answer keys" },
          { time: "Jan 25", title: "Parent review", description: "Open feedback window" },
          { time: "Feb 2", title: "Result day", description: "Release final report cards" },
        ]}
      />
    </div>
  </div>
);
