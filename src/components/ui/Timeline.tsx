import React from "react";

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  status?: "completed" | "upcoming" | "in-progress";
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
    <ol className="relative border-l border-neutral-200 pl-6 dark:border-neutral-700">
      {items.map(item => (
        <li key={item.title} className="mb-6 ml-2">
          <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full border border-white bg-primary-500 dark:border-neutral-900" />
          <time className="mb-1 text-xs font-semibold text-neutral-500 dark:text-neutral-400">{item.time}</time>
          <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">{item.description}</p>
        </li>
      ))}
    </ol>
  </div>
);
