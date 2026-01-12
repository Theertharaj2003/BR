import React, { useState } from "react";
import { DataTable } from "../../components/ui/DataTable";
import { StatusChip } from "../../components/ui/StatusChip";

interface Teacher {
  id: string;
  name: string;
  employeeId: string;
  subject: string;
  classes: string[];
  email: string;
  phone: string;
  status: "Active" | "On Leave";
  joiningDate: string;
}

const mockTeachers: Teacher[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    employeeId: "T001",
    subject: "Mathematics",
    classes: ["10-A", "10-B", "11-A"],
    email: "priya@school.com",
    phone: "+91 98765 11111",
    status: "Active",
    joiningDate: "2020-06-15",
  },
  {
    id: "2",
    name: "Mr. Rajesh Kumar",
    employeeId: "T002",
    subject: "Physics",
    classes: ["11-A", "11-B", "12-A"],
    email: "rajesh@school.com",
    phone: "+91 98765 22222",
    status: "Active",
    joiningDate: "2019-04-10",
  },
  {
    id: "3",
    name: "Ms. Anita Desai",
    employeeId: "T003",
    subject: "English",
    classes: ["9-A", "9-B", "10-A"],
    email: "anita@school.com",
    phone: "+91 98765 33333",
    status: "On Leave",
    joiningDate: "2021-08-20",
  },
  {
    id: "4",
    name: "Mr. Vikram Singh",
    employeeId: "T004",
    subject: "Chemistry",
    classes: ["11-A", "12-A", "12-B"],
    email: "vikram@school.com",
    phone: "+91 98765 44444",
    status: "Active",
    joiningDate: "2018-03-05",
  },
];

export const TeacherListPage: React.FC = () => {
  const [teachers] = useState<Teacher[]>(mockTeachers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: "employeeId", header: "Employee ID" },
    { key: "name", header: "Teacher Name" },
    { key: "subject", header: "Subject" },
    { key: "classes", header: "Classes" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone" },
    { key: "status", header: "Status" },
    { key: "actions", header: "Actions" },
  ];

  const rows = filteredTeachers.map((teacher) => ({
    employeeId: teacher.employeeId,
    name: teacher.name,
    subject: teacher.subject,
    classes: teacher.classes.join(", "),
    email: teacher.email,
    phone: teacher.phone,
    status: <StatusChip status={teacher.status === "Active" ? "success" : "warning"} label={teacher.status} />,
    actions: (
      <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700">
        View Profile
      </button>
    ),
  }));

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Teacher Management</h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Manage teacher profiles, assignments, and schedules
          </p>
        </div>
        <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700">
          + Add New Teacher
        </button>
      </div>

      {/* Search */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Search Teachers
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, subject, or employee ID..."
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-xl border-2 border-indigo-600 bg-transparent px-4 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:hover:bg-indigo-950">
              Export to Excel
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Teachers</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">{teachers.length}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Active</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {teachers.filter((t) => t.status === "Active").length}
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">On Leave</p>
          <p className="mt-2 text-3xl font-bold text-amber-600">
            {teachers.filter((t) => t.status === "On Leave").length}
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Avg Experience</p>
          <p className="mt-2 text-3xl font-bold text-indigo-600">5.2 yrs</p>
        </div>
      </div>

      {/* Teacher Table */}
      <DataTable columns={columns} rows={rows} />
    </div>
  );
};
