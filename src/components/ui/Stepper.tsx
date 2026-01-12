import React from "react";

interface Step {
  label: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex w-full items-center space-x-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 sm:space-x-4">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <li
            key={index}
            className={`flex items-center ${
              isActive
                ? "text-primary-600 dark:text-primary-400"
                : isCompleted
                ? "text-secondary-600 dark:text-secondary-400"
                : "text-neutral-400 dark:text-neutral-600"
            }`}
          >
            <span
              className={`mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                isActive
                  ? "border-primary-600 bg-primary-50 dark:border-primary-400 dark:bg-primary-900"
                  : isCompleted
                  ? "border-secondary-600 bg-secondary-50 dark:border-secondary-400 dark:bg-secondary-900"
                  : "border-neutral-300 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
              }`}
            >
              {isCompleted ? "✓" : index + 1}
            </span>
            <div className="flex flex-col">
              <span className="font-semibold">{step.label}</span>
              {step.description && <span className="text-xs">{step.description}</span>}
            </div>
            {index < steps.length - 1 && (
              <svg
                className="ml-2 h-5 w-5 sm:ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
};
