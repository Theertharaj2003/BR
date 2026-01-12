import React from "react";

interface AtRiskStudent {
  name: string;
  grade: string;
  riskLevel: "High" | "Medium" | "Low";
  reason: string;
}

const badgeColor = {
  High: "bg-status-error/10 text-status-error",
  Medium: "bg-status-warning/10 text-status-warning",
  Low: "bg-status-info/10 text-status-info",
} as const;

export const AtRiskPanel: React.FC<{ students: AtRiskStudent[] }> = ({ students }) => (
  <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">⚠ At-Risk Students</h3>
      <button className="text-xs font-semibold text-primary-600" type="button">
        View all
      </button>
    </div>
    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
      AI highlights students needing immediate attention based on attendance, grades, and behavior patterns.
    </p>
    <ul className="mt-4 space-y-3">
      {students.map(student => (
        <li key={student.name} className="rounded-xl border border-neutral-100 px-4 py-3 text-sm dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-neutral-800 dark:text-neutral-100">{student.name}</span>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor[student.riskLevel]}`}>
              {student.riskLevel}
            </span>
          </div>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-300">{student.grade}</p>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-300">{student.reason}</p>
        </li>
      ))}
    </ul>
  </section>
);
