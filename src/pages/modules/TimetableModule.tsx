import React from "react";
import { AlertBanner } from "../../components/ui/AlertBanner";

const timetable = [
  { time: "08:00", grade: "Grade 9", subject: "Mathematics", teacher: "Ms. Sharma", room: "301" },
  { time: "09:00", grade: "Grade 8", subject: "Science", teacher: "Mr. Kapoor", room: "Lab" },
  { time: "10:15", grade: "Grade 10", subject: "English", teacher: "Ms. D’Souza", room: "205" },
  { time: "11:30", grade: "Grade 6", subject: "History", teacher: "Mr. Rao", room: "104" },
];

export const TimetableModule: React.FC = () => (
  <div className="space-y-6 pb-12">
    <AlertBanner
      variant="warning"
      title="Clash detected"
      description="Grade 9 Mathematics overlaps with Grade 8 Science due to teacher assignment."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Resolve clash</button>}
    />

    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Timetable planner</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Drag & drop periods, auto-detect conflicts, and generate printable schedules.
          </p>
        </div>
        <button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Export PDF</button>
      </div>
      <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">
        {timetable.map(slot => (
          <div key={`${slot.grade}-${slot.time}`} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-neutral-600 shadow-sm transition hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
            <p className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">{slot.time}</p>
            <p className="mt-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">{slot.subject}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">{slot.grade}</p>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span>Teacher: {slot.teacher}</span>
              <span>Room: {slot.room}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
