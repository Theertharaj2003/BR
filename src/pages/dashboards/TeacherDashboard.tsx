import React from "react";
import { StatCard } from "../../components/ui/StatCard";
import { Timeline } from "../../components/ui/Timeline";
import { QuickActions } from "../../components/ui/QuickActions";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { mockKpis } from "../../data/mockData";

export const TeacherDashboard: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Today's classes" value={mockKpis.teacher.todaysClasses} icon="📚" accent="secondary" />
      <StatCard label="Pending homework" value={mockKpis.teacher.pendingHomework} icon="📝" />
      <StatCard label="Attendance" value="Start" icon="✅" suffix="" />
      <StatCard label="Evaluations due" value={mockKpis.teacher.pendingEvaluations} icon="✏️" accent="neutral" />
    </div>

    <AlertBanner
      variant="info"
      title="One-click attendance"
      description="Your 8:00 AM Grade 9 math class is scheduled to begin in 10 minutes."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Mark now</button>}
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <Timeline
        items={[
          { time: "08:00", title: "Grade 9 Mathematics", description: "Room 301" },
          { time: "09:15", title: "Grade 8 Algebra support", description: "Online session" },
          { time: "11:00", title: "Teacher collaboration", description: "Curriculum planning" },
          { time: "14:00", title: "Grade 10 Physics", description: "Lab session" },
        ]}
      />
      <QuickActions
        actions={[
          { label: "Mark attendance", description: "Tap to launch rapid attendance grid" },
          { label: "Assign homework", description: "Create a new assignment with rubric" },
          { label: "Record evaluation", description: "Update grades and publish feedback" },
          { label: "Message parents", description: "Send updates to selected guardians" },
        ]}
      />
    </div>
  </div>
);
