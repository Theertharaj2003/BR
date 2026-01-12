import React from "react";
import { AreaChartCard } from "../../components/charts/AreaChartCard";
import { SmartAlertsBanner } from "../../components/ui/SmartAlertsBanner";
import { AtRiskPanel } from "../../components/ui/AtRiskPanel";

const riskTrend = [
  { month: "Sep", studentsAtRisk: 32 },
  { month: "Oct", studentsAtRisk: 28 },
  { month: "Nov", studentsAtRisk: 22 },
  { month: "Dec", studentsAtRisk: 18 },
  { month: "Jan", studentsAtRisk: 15 },
];

export const AIModules: React.FC = () => (
  <div className="space-y-6 pb-12">
    <SmartAlertsBanner
      alerts={[
        {
          id: "ops-risk",
          title: "Operational risk",
          description: "Grade 10 attendance dip correlated with upcoming board prep stress.",
          cta: "View insights",
        },
        {
          id: "fee-risk",
          title: "Fee risk",
          description: "12 guardians likely to miss payment due to past due patterns. Suggest proactive outreach.",
          cta: "Trigger workflow",
        },
        {
          id: "staff-fatigue",
          title: "Staff fatigue",
          description: "Physics department schedule shows 120% load. Consider rebalancing within next cycle.",
        },
      ]}
    />

    <AreaChartCard title="At-risk students trend" data={riskTrend} xKey="month" yKey="studentsAtRisk" />

    <AtRiskPanel
      students={[
        { name: "Ishita Rao", grade: "Grade 10 - Section A", riskLevel: "High", reason: "Drop in engagement + fee overdue" },
        { name: "Farhan Ali", grade: "Grade 11 - Section C", riskLevel: "Medium", reason: "Consistent late arrivals" },
        { name: "Neha Verma", grade: "Grade 8 - Section B", riskLevel: "Low", reason: "AI detected performance plateau" },
      ]}
    />

    <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm shadow-card dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">AI Copilot</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        Launch the Nimblix Copilot for conversational queries, automated report generation, and strategic recommendations across modules.
      </p>
      <button className="mt-4 rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white" type="button">
        Open AI copilot
      </button>
    </div>
  </div>
);
