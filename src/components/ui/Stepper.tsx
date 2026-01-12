import React from "react";

interface Step {
  title: string;
  description?: string;
  status: "complete" | "current" | "upcoming";
}

interface StepperProps {
  steps: Step[];
}

export const Stepper: React.FC<StepperProps> = ({ steps }) => (
  <ol className="grid gap-4 sm:grid-cols-4" role="list">
    {steps.map(step => (
      <li
        key={step.title}
        className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-card transition hover:-translate-y-0.5 dark:border-neutral-800 dark:bg-neutral-900"
        aria-current={step.status === "current" ? "step" : undefined}
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
              step.status === "complete"
                ? "bg-secondary-100 text-secondary-700"
                : step.status === "current"
                ? "bg-primary-100 text-primary-700"
                : "bg-neutral-100 text-neutral-400"
            }`}
          >
            {step.status === "complete" ? "✓" : step.status === "current" ? "•" : step.title[0]}
          </span>
          <div>
            <p className="font-semibold text-neutral-800 dark:text-neutral-100">{step.title}</p>
            {step.description ? (
              <p className="text-xs text-neutral-500 dark:text-neutral-300">{step.description}</p>
            ) : null}
          </div>
        </div>
      </li>
    ))}
  </ol>
);
