import React from "react";
import dayjs from "dayjs";

interface HeatmapValue {
  date: string;
  percentage: number;
}

interface HeatmapGridProps {
  values: HeatmapValue[];
  title?: string;
}

const getIntensity = (percentage: number) => {
  if (percentage >= 95) return "bg-primary-500/90";
  if (percentage >= 85) return "bg-primary-400/80";
  if (percentage >= 75) return "bg-primary-300/80";
  return "bg-primary-100/70";
};

export const HeatmapGrid: React.FC<HeatmapGridProps> = ({ values, title }) => (
  <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
    {title ? <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3> : null}
    <div className="grid grid-cols-10 gap-2">
      {values.map(value => (
        <div key={value.date} className="flex flex-col items-center text-xs">
          <span className={`h-10 w-full rounded-xl ${getIntensity(value.percentage)} text-white`}></span>
          <span className="mt-1 text-neutral-500 dark:text-neutral-300">
            {dayjs(value.date).format("DD")}
          </span>
        </div>
      ))}
    </div>
  </section>
);
