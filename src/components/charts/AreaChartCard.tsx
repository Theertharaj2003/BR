import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface AreaChartCardProps<T> {
  title: string;
  trendLabel?: string;
  data: T[];
  xKey: keyof T;
  yKey: keyof T;
}

export const AreaChartCard = <T extends Record<string, number | string>>({
  title,
  trendLabel,
  data,
  xKey,
  yKey,
}: AreaChartCardProps<T>) => (
  <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
    <div className="mb-4 flex items-baseline justify-between">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
      {trendLabel ? <span className="text-xs text-neutral-500">{trendLabel}</span> : null}
    </div>
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.3)" />
          <XAxis dataKey={xKey as string} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: 16, border: "1px solid rgba(99, 102, 241, 0.2)", boxShadow: "0 10px 30px rgba(15, 23, 42, 0.1)" }}
          />
          <Area
            type="monotone"
            dataKey={yKey as string}
            stroke="#4f46e5"
            strokeWidth={3}
            fill="url(#areaGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);
