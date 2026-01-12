import React from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface BarChartCardProps<T> {
  title: string;
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
  color?: string;
}

export const BarChartCard = <T extends Record<string, number | string>>({ title, data, xKey, yKey, color = "#10b981" }: BarChartCardProps<T>) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
    <div className="mt-6 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.3)" />
          <XAxis dataKey={xKey as string} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: 16, border: "1px solid rgba(16, 185, 129, 0.2)" }} />
          <Bar dataKey={yKey as string} radius={12} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
