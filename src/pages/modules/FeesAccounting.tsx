import React from "react";
import { DataTable } from "../../components/ui/DataTable";
import { DonutChartCard } from "../../components/charts/DonutChartCard";
import { AlertBanner } from "../../components/ui/AlertBanner";

const feeStructure = [
  { component: "Tuition", amount: 45000 },
  { component: "Transport", amount: 12000 },
  { component: "Lab", amount: 5000 },
  { component: "Activities", amount: 3000 },
];

const paymentHistory = [
  { date: "2025-12-12", student: "Ananya Singh", amount: "₹12,000", mode: "UPI", status: "Success" },
  { date: "2025-12-10", student: "Rohan Patel", amount: "₹45,000", mode: "Bank transfer", status: "Pending" },
  { date: "2025-12-08", student: "Meera Shah", amount: "₹17,000", mode: "Cash", status: "Success" },
];

export const FeesAccounting: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Fee structure builder</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Customize components, apply discounts, and set installments.</p>
        <div className="mt-4 space-y-3 text-sm">
          {feeStructure.map(entry => (
            <div key={entry.component} className="flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3 dark:bg-neutral-800">
              <span className="font-medium text-neutral-700 dark:text-neutral-200">{entry.component}</span>
              <span className="text-neutral-500 dark:text-neutral-300">₹{entry.amount.toLocaleString()}</span>
            </div>
          ))}
          <button className="w-full rounded-2xl border border-dashed border-primary-300 px-4 py-2 text-sm font-semibold text-primary-600">
            + Add component
          </button>
        </div>
      </div>
      <DonutChartCard
        title="Installment progress"
        data={[
          { label: "Collected", value: 68 },
          { label: "Scheduled", value: 22 },
          { label: "Overdue", value: 10 },
        ]}
        dataKey="value"
        nameKey="label"
        footer={<div className="text-xs">₹12.4L collected out of ₹18.2L annual target.</div>}
      />
    </div>

    <AlertBanner
      variant="warning"
      title="Outstanding fees"
      description="124 students have dues over 30 days. Trigger automated reminders or schedule counselor follow-up."
      action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white">Trigger workflow</button>}
    />

    <DataTable
      caption="Recent payments"
      data={paymentHistory}
      columns={[
        {
          key: "date",
          header: "Date",
          sortable: true,
          render: value => new Date(value as string).toLocaleDateString(),
        },
        { key: "student", header: "Student", sortable: true },
        { key: "amount", header: "Amount" },
        { key: "mode", header: "Mode" },
        {
          key: "status",
          header: "Status",
          render: value => (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                value === "Success"
                  ? "bg-status-success/10 text-status-success"
                  : value === "Pending"
                  ? "bg-status-warning/10 text-status-warning"
                  : "bg-status-error/10 text-status-error"
              }`}
            >
              {value as string}
            </span>
          ),
        },
      ]}
    />
  </div>
);
