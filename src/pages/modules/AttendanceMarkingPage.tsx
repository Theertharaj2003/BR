import React, { useState } from "react";
import { StatusChip } from "../../components/ui/StatusChip";

interface Student {
  id: string;
  name: string;
  rollNo: string;
  status: "Present" | "Absent" | "Late" | "Not Marked";
}

const initialStudents: Student[] = [
  { id: "1", name: "Aarav Sharma", rollNo: "2024001", status: "Not Marked" },
  { id: "2", name: "Mira Patel", rollNo: "2024002", status: "Not Marked" },
  { id: "3", name: "Rohan Kumar", rollNo: "2024003", status: "Not Marked" },
  { id: "4", name: "Maya Singh", rollNo: "2024004", status: "Not Marked" },
  { id: "5", name: "Kabir Verma", rollNo: "2024005", status: "Not Marked" },
  { id: "6", name: "Ananya Reddy", rollNo: "2024006", status: "Not Marked" },
  { id: "7", name: "Arjun Nair", rollNo: "2024007", status: "Not Marked" },
  { id: "8", name: "Diya Kapoor", rollNo: "2024008", status: "Not Marked" },
];

export const AttendanceMarkingPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [isSaved, setIsSaved] = useState(false);

  const updateStudentStatus = (id: string, status: "Present" | "Absent" | "Late") => {
    setStudents((prev) =>
      prev.map((student) => (student.id === id ? { ...student, status } : student))
    );
    setIsSaved(false);
  };

  const markAllPresent = () => {
    setStudents((prev) => prev.map((student) => ({ ...student, status: "Present" })));
    setIsSaved(false);
  };

  const markAllAbsent = () => {
    setStudents((prev) => prev.map((student) => ({ ...student, status: "Absent" })));
    setIsSaved(false);
  };

  const saveAttendance = () => {
    // Simulate API call
    setTimeout(() => {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 500);
  };

  const getStatusColor = (status: string) => {
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

  const stats = {
    total: students.length,
    present: students.filter((s) => s.status === "Present").length,
    absent: students.filter((s) => s.status === "Absent").length,
    late: students.filter((s) => s.status === "Late").length,
    notMarked: students.filter((s) => s.status === "Not Marked").length,
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Mark Attendance</h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Quick attendance marking for your class
          </p>
        </div>
        {isSaved && (
          <div className="rounded-xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
            ✓ Attendance saved successfully!
          </div>
        )}
      </div>

      {/* Class & Date Selection */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid gap-4 md:grid-cols-3">
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
              Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            />
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={markAllPresent}
              className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              All Present
            </button>
            <button
              onClick={markAllAbsent}
              className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              All Absent
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Total</p>
          <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">{stats.total}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Present</p>
          <p className="mt-1 text-2xl font-bold text-emerald-600">{stats.present}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Absent</p>
          <p className="mt-1 text-2xl font-bold text-red-600">{stats.absent}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Late</p>
          <p className="mt-1 text-2xl font-bold text-amber-600">{stats.late}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">Not Marked</p>
          <p className="mt-1 text-2xl font-bold text-neutral-500">{stats.notMarked}</p>
        </div>
      </div>

      {/* Student Grid */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">Student List</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div
              key={student.id}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">{student.name}</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">Roll: {student.rollNo}</p>
                </div>
                <StatusChip status={getStatusColor(student.status)} label={student.status} />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => updateStudentStatus(student.id, "Present")}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    student.status === "Present"
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400"
                  }`}
                >
                  Present
                </button>
                <button
                  onClick={() => updateStudentStatus(student.id, "Absent")}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    student.status === "Absent"
                      ? "bg-red-600 text-white"
                      : "bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  Absent
                </button>
                <button
                  onClick={() => updateStudentStatus(student.id, "Late")}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    student.status === "Late"
                      ? "bg-amber-600 text-white"
                      : "bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}
                >
                  Late
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setStudents(initialStudents)}
          className="rounded-xl border-2 border-neutral-300 bg-transparent px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Reset
        </button>
        <button
          onClick={saveAttendance}
          disabled={stats.notMarked > 0}
          className="rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Save Attendance
        </button>
      </div>

      {stats.notMarked > 0 && (
        <div className="rounded-xl bg-amber-50 p-4 text-sm text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
          ⚠️ Please mark attendance for all students before saving ({stats.notMarked} students remaining)
        </div>
      )}
    </div>
  );
};
