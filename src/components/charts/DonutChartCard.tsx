import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface DonutChartCardProps<T> {
  title: string;
  data: T[];
  dataKey: keyof T;
  nameKey: keyof T;
  colors?: string[];
  footer?: React.ReactNode;
}

const defaultColors = ["#6366f1", "#10b981", "#f97316", "#3b82f6"];

export const DonutChartCard = <T extends Record<string, number | string>>({
  title,
  data,
  dataKey,
  nameKey,
  colors = defaultColors,
  footer,
}: DonutChartCardProps<T>) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
    <div className="mt-6 flex h-64 flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey={dataKey as string}
            nameKey={nameKey as string}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid rgba(99, 102, 241, 0.2)" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    {footer ? <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">{footer}</div> : null}
  </div>
);
