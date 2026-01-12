import React from "react";
import { DataTable } from "../../components/ui/DataTable";
import { TabGroup } from "../../components/ui/TabGroup";
import { Stepper } from "../../components/ui/Stepper";

const studentList = [
  { id: "STU-1021", name: "Ananya Singh", grade: "Grade 6", section: "B", status: "Active" },
  { id: "STU-1022", name: "Rohan Patel", grade: "Grade 8", section: "A", status: "Pending" },
  { id: "STU-1023", name: "Meera Shah", grade: "Grade 9", section: "C", status: "Active" },
];

export const StudentManagement: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Student list</h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">Filter by grade, section, status, and more.</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <button className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-500 transition hover:border-primary-300 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:text-neutral-300">
          Filters
        </button>
        <button className="rounded-full border border-neutral-200 px-3 py-1 text-neutral-500 transition hover:border-primary-300 hover:text-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-neutral-700 dark:text-neutral-300">
          Bulk actions
        </button>
      </div>
      <div className="mt-4">
        <DataTable
          caption="Student directory"
          data={studentList}
          columns={[
            { key: "id", header: "ID", sortable: true },
            { key: "name", header: "Name", sortable: true },
            { key: "grade", header: "Grade", sortable: true },
            { key: "section", header: "Section", sortable: true },
            { key: "status", header: "Status", sortable: true },
          ]}
        />
      </div>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Admission wizard</h3>
        <Stepper
          steps={[
            { label: "Profile", description: "Parent & student details" },
            { label: "Academics", description: "Previous records" },
            { label: "Fees", description: "Structure & discounts" },
            { label: "Documents", description: "Upload & verify" },
          ]}
          currentStep={1}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Student profile</h3>
        <TabGroup
          ariaLabel="Student profile sections"
          tabs={[
            {
              id: "personal",
              label: "Personal",
              content: (
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  <p>
                    <strong>Guardian:</strong> Karan Singh
                  </p>
                  <p>
                    <strong>Contact:</strong> +91-9876543210
                  </p>
                  <p>
                    <strong>Address:</strong> 45 Sunrise Avenue, Mumbai
                  </p>
                </div>
              ),
            },
            {
              id: "academics",
              label: "Academics",
              content: (
                <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                  <p>Average Grade: A-</p>
                  <p>Strengths: Science, Math</p>
                  <p>Focus Areas: Creative writing</p>
                </div>
              ),
            },
            {
              id: "attendance",
              label: "Attendance",
              content: <p className="text-sm text-neutral-600 dark:text-neutral-300">92% attendance with 4 excused absences.</p>,
            },
            {
              id: "fees",
              label: "Fees",
              content: <p className="text-sm text-neutral-600 dark:text-neutral-300">Fees paid up to Term 2; next due on Feb 15.</p>,
            },
            {
              id: "documents",
              label: "Documents",
              content: <p className="text-sm text-neutral-600 dark:text-neutral-300">Birth certificate, Aadhaar, Transfer certificate.</p>,
            },
          ]}
        />
      </div>
    </div>
  </div>
);
