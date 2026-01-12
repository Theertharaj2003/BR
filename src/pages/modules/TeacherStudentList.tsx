import React, { useState } from "react";
import { DataTable } from "../../components/ui/DataTable";
import { StatusChip } from "../../components/ui/StatusChip";

interface Student {
  id: string;
  name: string;
  rollNo: string;
  class: string;
  section: string;
  attendance: number;
  lastAttendance: "Present" | "Absent" | "Late";
}

const mockClassStudents: Student[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    rollNo: "2024001",
    class: "10",
    section: "A",
    attendance: 92,
    lastAttendance: "Present",
  },
  {
    id: "2",
    name: "Mira Patel",
    rollNo: "2024002",
    class: "10",
    section: "A",
    attendance: 88,
    lastAttendance: "Absent",
  },
  {
    id: "3",
    name: "Rohan Kumar",
    rollNo: "2024003",
    class: "10",
    section: "A",
    attendance: 95,
    lastAttendance: "Present",
  },
  {
    id: "4",
    name: "Maya Singh",
    rollNo: "2024004",
    class: "10",
    section: "A",
    attendance: 90,
    lastAttendance: "Present",
  },
  {
    id: "5",
    name: "Kabir Verma",
    rollNo: "2024005",
    class: "10",
    section: "A",
    attendance: 85,
    lastAttendance: "Late",
  },
  {
    id: "6",
    name: "Ananya Reddy",
    rollNo: "2024006",
    class: "10",
    section: "A",
    attendance: 93,
    lastAttendance: "Present",
  },
  {
    id: "7",
    name: "Arjun Nair",
    rollNo: "2024007",
    class: "10",
    section: "A",
    attendance: 87,
    lastAttendance: "Present",
  },
  {
    id: "8",
    name: "Diya Kapoor",
    rollNo: "2024008",
    class: "10",
    section: "A",
    attendance: 91,
    lastAttendance: "Present",
  },
];

export const TeacherStudentList: React.FC = () => {
  const [students] = useState<Student[]>(mockClassStudents);
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { key: "rollNo", header: "Roll No" },
    { key: "name", header: "Student Name" },
    { key: "attendance", header: "Attendance %" },
    { key: "lastAttendance", header: "Last Status" },
    { key: "actions", header: "Actions" },
  ];

  const getAttendanceStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "success";
      case "Absent":
        return "error";
      case "Late":
        return "warning";
      default:
        return "info";
    }
  };

  const rows = filteredStudents.map((student) => ({
    rollNo: student.rollNo,
    name: student.name,
    attendance: (
      <div className="flex items-center gap-2">
        <div className="h-2 w-24 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div
            className={`h-full ${
              student.attendance >= 90
                ? "bg-emerald-500"
                : student.attendance >= 75
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
            style={{ width: `${student.attendance}%` }}
          />
        </div>
        <span className="text-sm font-semibold">{student.attendance}%</span>
      </div>
    ),
    lastAttendance: (
      <StatusChip status={getAttendanceStatusColor(student.lastAttendance)} label={student.lastAttendance} />
    ),
    actions: (
      <div className="flex gap-2">
        <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700">
          View Profile
        </button>
        <button className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-700">
          Message
        </button>
      </div>
    ),
  }));

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">My Students</h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            View and manage students in your classes
          </p>
        </div>
      </div>

      {/* Class Selector & Search */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Select Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              <option value="10-A">Class 10 - Section A</option>
              <option value="10-B">Class 10 - Section B</option>
              <option value="11-A">Class 11 - Section A</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Search Students
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or roll number..."
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Students</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">{students.length}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Avg Attendance</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {Math.round(students.reduce((acc, s) => acc + s.attendance, 0) / students.length)}%
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Present Today</p>
          <p className="mt-2 text-3xl font-bold text-teal-600">
            {students.filter((s) => s.lastAttendance === "Present").length}
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">At Risk</p>
          <p className="mt-2 text-3xl font-bold text-red-600">
            {students.filter((s) => s.attendance < 75).length}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700">
          Mark Attendance
        </button>
        <button className="rounded-xl border-2 border-indigo-600 bg-transparent px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:hover:bg-indigo-950">
          Send Announcement
        </button>
        <button className="rounded-xl border-2 border-neutral-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800">
          Export List
        </button>
      </div>

      {/* Student Table */}
      <DataTable columns={columns} rows={rows} />
    </div>
  );
};
