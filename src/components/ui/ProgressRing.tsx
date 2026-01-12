import React from "react";

interface ProgressRingProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  trackColor?: string;
  progressColor?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  value,
  size = 120,
  strokeWidth = 10,
  label,
  trackColor = "stroke-neutral-200",
  progressColor = "stroke-primary-500",
}) => {
  const normalizedRadius = (size - strokeWidth) / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <figure className="flex flex-col items-center gap-2">
      <svg height={size} width={size} role="img" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
        <circle
          strokeWidth={strokeWidth}
          fill="transparent"
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
          className={trackColor}
        />
        <circle
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
          className={`${progressColor} transition-[stroke-dashoffset] duration-700 ease-out-soft`}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-neutral-900 text-xl font-semibold dark:fill-neutral-50"
        >
          {value}%
        </text>
      </svg>
      {label ? <figcaption className="text-sm text-neutral-500 dark:text-neutral-300">{label}</figcaption> : null}
    </figure>
  );
};
