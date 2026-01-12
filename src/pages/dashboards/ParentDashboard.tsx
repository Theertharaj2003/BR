import React from "react";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { StatCard } from "../../components/ui/StatCard";
import { Timeline } from "../../components/ui/Timeline";
import { mockKpis } from "../../data/mockData";

export const ParentDashboard: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Attendance" value={(mockKpis.parent.childAttendancePercent * 100).toFixed(0)} suffix="%" icon="📊" />
      <StatCard label="Fees due" value={`₹${mockKpis.parent.feesPending.toLocaleString()}`} icon="💡" accent="secondary" />
      <StatCard label="Messages" value="2 new" icon="💬" />
      <StatCard label="Achievements" value="Gold" icon="🏅" accent="neutral" />
    </div>

    <AlertBanner
      variant="warning"
      title="Attendance alert"
      description="Aarav missed 2 days this week. Check in with the class teacher for updates."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Message teacher</button>}
    />

    <div className="grid gap-6 lg:grid-cols-2">
      <Timeline
        items={[
          { time: "Today", title: "Homework submitted", description: "Math geometry assignment" },
          { time: "Tomorrow", title: "Parent-teacher connect", description: "Grade 6 at 4:00 PM" },
          { time: "Friday", title: "Sports day", description: "Track events at 9:00 AM" },
        ]}
      />
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-card text-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Trust & transparency</h3>
        <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
          <li>• Daily updates on attendance and academic progress</li>
          <li>• Instant fee reminders and secure digital payments</li>
          <li>• Direct messaging with teachers and school admin</li>
          <li>• Personalized recommendations to support your child</li>
        </ul>
      </div>
    </div>
  </div>
);
