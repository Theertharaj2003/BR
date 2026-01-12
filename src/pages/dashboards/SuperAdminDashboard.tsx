import React from "react";
import { StatCard } from "../../components/ui/StatCard";
import { AreaChartCard } from "../../components/charts/AreaChartCard";
import { BarChartCard } from "../../components/charts/BarChartCard";
import { DataTable } from "../../components/ui/DataTable";
import { mockFeatureUsage, mockKpis, mockOnboarding, mockRevenueTrend, mockSubscriptions } from "../../data/mockData";
import { AlertBanner } from "../../components/ui/AlertBanner";
import { StatusChip } from "../../components/ui/StatusChip";

export const SuperAdminDashboard: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Total Schools" value={mockKpis.superAdmin.totalSchools.toLocaleString()} change={{ value: 12, direction: "up" }} />
      <StatCard label="Active Users" value={mockKpis.superAdmin.activeUsers.toLocaleString()} change={{ value: 8, direction: "up" }} accent="secondary" />
      <StatCard label="Monthly Revenue" value={`₹${mockKpis.superAdmin.monthlyRevenue.toLocaleString()}`} change={{ value: 5, direction: "up" }} accent="neutral" />
      <StatCard label="Churn Rate" value={`${(mockKpis.superAdmin.churnRate * 100).toFixed(1)}%`} change={{ value: 2, direction: "down" }} />
    </div>

    <AlertBanner
      variant="info"
      title="Smart insights ready"
      description="2 schools show declining engagement. Review AI recommendations to trigger outreach campaigns."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Review now</button>}
    />

    <div className="grid gap-6 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <AreaChartCard title="Revenue Trend" trendLabel="Last 6 months" data={mockRevenueTrend} xKey="month" yKey="revenue" />
      </div>
      <div className="lg:col-span-2">
        <BarChartCard title="Feature Usage" data={mockFeatureUsage} xKey="feature" yKey="usage" />
      </div>
    </div>

    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">School Onboarding Velocity</h2>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400">
        {mockOnboarding.map(entry => (
          <div key={entry.month} className="flex w-full items-center justify-between rounded-xl bg-neutral-50 px-4 py-2 dark:bg-neutral-800">
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">{entry.month}</span>
            <span className="text-neutral-500 dark:text-neutral-300">{entry.schools} schools onboarded</span>
          </div>
        ))}
      </div>
    </div>

    <DataTable
      caption="Subscription status overview"
      data={mockSubscriptions}
      columns={[
        { key: "school", header: "School", sortable: true },
        { key: "plan", header: "Plan", sortable: true },
        {
          key: "renewalDate",
          header: "Renewal",
          render: value => new Date(value as string).toLocaleDateString(),
        },
        {
          key: "status",
          header: "Status",
          render: value => <StatusChip status={value as string} />,
        },
      ]}
    />
  </div>
);
