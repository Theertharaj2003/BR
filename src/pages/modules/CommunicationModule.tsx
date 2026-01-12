import React, { useState } from "react";
import { ModalDrawer } from "../../components/ui/ModalDrawer";
import { AlertBanner } from "../../components/ui/AlertBanner";

const audiences = [
  { id: "all-parents", label: "All parents" },
  { id: "grade-10", label: "Grade 10" },
  { id: "teachers", label: "Teachers" },
];

const deliveryStatus = [
  { channel: "Email", delivered: 92, opened: 80 },
  { channel: "SMS", delivered: 88, opened: 76 },
  { channel: "In-app", delivered: 100, opened: 94 },
];

export const CommunicationModule: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6 pb-12">
      <AlertBanner
        variant="info"
        title="Smart alerts"
        description="AI recommends sending a reminder to Grade 10 parents about upcoming counseling sessions."
        action={<button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white" onClick={() => setOpen(true)}>Compose</button>}
      />

      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Announcement history</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Track delivery, engagement, and read receipts.</p>
          </div>
          <button className="rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white" onClick={() => setOpen(true)}>
            New announcement
          </button>
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          {deliveryStatus.map(entry => (
            <div key={entry.channel} className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              <span className="font-semibold text-neutral-700 dark:text-neutral-100">{entry.channel}</span>
              <span className="text-xs">Delivered: {entry.delivered}%</span>
              <span className="text-xs">Opened: {entry.opened}%</span>
              <button className="text-xs font-semibold text-primary-600" type="button">
                View recipients
              </button>
            </div>
          ))}
        </div>
      </div>

      <ModalDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Compose announcement"
        footer={
          <div className="flex justify-end gap-3">
            <button className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-500" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button className="rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white" type="button">
              Send announcement
            </button>
          </div>
        }
      >
        <form className="space-y-4 text-sm">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400" htmlFor="audience">
              Target audience
            </label>
            <select
              id="audience"
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-700 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {audiences.map(audience => (
                <option key={audience.id} value={audience.id}>
                  {audience.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-700 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              placeholder="Mid-term counseling schedule"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-neutral-700 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              placeholder="Dear parents, kindly note..."
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
              Require read receipt
            </label>
            <label className="inline-flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
              Send SMS fallback
            </label>
          </div>
        </form>
      </ModalDrawer>
    </div>
  );
};
