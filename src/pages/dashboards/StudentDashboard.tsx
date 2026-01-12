import React from "react";
import { StatCard } from "../../components/ui/StatCard";
import { ProgressRing } from "../../components/ui/ProgressRing";
import { Timeline } from "../../components/ui/Timeline";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { mockKpis } from "../../data/mockData";

export const StudentDashboard: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Attendance" value={(mockKpis.student.attendancePercent * 100).toFixed(0)} suffix="%" icon="📘" />
      <StatCard label="Homework due" value={mockKpis.student.assignmentsDue} icon="🗂️" accent="secondary" />
      <StatCard label="Upcoming exams" value={mockKpis.student.examsUpcoming} icon="📅" />
      <StatCard label="Fee status" value="On track" icon="💳" accent="neutral" />
    </div>

    <AlertBanner
      variant="success"
      title="Exam prep boost"
      description="You’re 82% ready for the Physics exam. Review flashcards to reach 90%."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Review now</button>}
    />

    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Progress overview</h3>
        <div className="mt-6 flex flex-wrap items-center justify-around gap-6">
          <ProgressRing value={85} label="Overall" />
          <ProgressRing value={92} label="Assignments" progressColor="stroke-secondary-500" />
          <ProgressRing value={78} label="Exams" progressColor="stroke-accent-500" />
        </div>
      </div>
      <Timeline
        items={[
          { time: "Due today", title: "History worksheet", description: "Upload scanned copy" },
          { time: "Tomorrow", title: "Science quiz", description: "Revise chapter 4" },
          { time: "Friday", title: "Math assignment", description: "Group project submission" },
          { time: "Next week", title: "Sports trials", description: "Basketball tryouts" },
        ]}
      />
    </div>
  </div>
);
