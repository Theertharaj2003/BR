import React, { useState } from "react";
import { DataTable } from "../../components/ui/DataTable";
import { StatusChip } from "../../components/ui/StatusChip";
import { ModalDrawer } from "../../components/ui/ModalDrawer";

interface Student {
  id: string;
  name: string;
  rollNo: string;
  class: string;
  section: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  admissionDate: string;
}

const mockStudents: Student[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    rollNo: "2024001",
    class: "10",
    section: "A",
    email: "aarav@school.com",
    phone: "+91 98765 43210",
    status: "Active",
    admissionDate: "2024-04-15",
  },
  {
    id: "2",
    name: "Mira Patel",
    rollNo: "2024002",
    class: "10",
    section: "A",
    email: "mira@school.com",
    phone: "+91 98765 43211",
    status: "Active",
    admissionDate: "2024-04-16",
  },
  {
    id: "3",
    name: "Rohan Kumar",
    rollNo: "2024003",
    class: "10",
    section: "B",
    email: "rohan@school.com",
    phone: "+91 98765 43212",
    status: "Active",
    admissionDate: "2024-04-17",
  },
  {
    id: "4",
    name: "Maya Singh",
    rollNo: "2024004",
    class: "9",
    section: "A",
    email: "maya@school.com",
    phone: "+91 98765 43213",
    status: "Active",
    admissionDate: "2024-04-18",
  },
  {
    id: "5",
    name: "Kabir Verma",
    rollNo: "2024005",
    class: "9",
    section: "B",
    email: "kabir@school.com",
    phone: "+91 98765 43214",
    status: "Inactive",
    admissionDate: "2024-04-19",
  },
];

export const StudentListPage: React.FC = () => {
  const [students] = useState<Student[]>(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass === "all" || student.class === filterClass;
    return matchesSearch && matchesClass;
  });

  const handleViewDetails = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const columns = [
    { key: "rollNo", header: "Roll No" },
    { key: "name", header: "Student Name" },
    { key: "class", header: "Class" },
    { key: "section", header: "Section" },
    { key: "email", header: "Email" },
    { key: "phone", header: "Phone" },
    { key: "status", header: "Status" },
    { key: "actions", header: "Actions" },
  ];

  const rows = filteredStudents.map((student) => ({
    rollNo: student.rollNo,
    name: student.name,
    class: student.class,
    section: student.section,
    email: student.email,
    phone: student.phone,
    status: <StatusChip status={student.status === "Active" ? "success" : "error"} label={student.status} />,
    actions: (
      <button
        onClick={() => handleViewDetails(student)}
        className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700"
      >
        View Details
      </button>
    ),
  }));

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Student Management</h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            Manage student records, admissions, and profiles
          </p>
        </div>
        <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700">
          + Add New Student
        </button>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <div className="grid gap-4 md:grid-cols-3">
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
          <div>
            <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Filter by Class
            </label>
            <select
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              <option value="all">All Classes</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
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
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Students</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">{students.length}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Active</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">
            {students.filter((s) => s.status === "Active").length}
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Inactive</p>
          <p className="mt-2 text-3xl font-bold text-red-600">
            {students.filter((s) => s.status === "Inactive").length}
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">New This Month</p>
          <p className="mt-2 text-3xl font-bold text-indigo-600">12</p>
        </div>
      </div>

      {/* Student Table */}
      <DataTable columns={columns} rows={rows} />

      {/* Student Details Modal */}
      {selectedStudent && (
        <ModalDrawer open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Student Details">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-teal-600 text-2xl font-bold text-white">
                {selectedStudent.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{selectedStudent.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Roll No: {selectedStudent.rollNo}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Class</p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {selectedStudent.class} - {selectedStudent.section}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Status</p>
                <div className="mt-1">
                  <StatusChip
                    status={selectedStudent.status === "Active" ? "success" : "error"}
                    label={selectedStudent.status}
                  />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Email</p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">{selectedStudent.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Phone</p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">{selectedStudent.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">Admission Date</p>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {new Date(selectedStudent.admissionDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Edit Profile
              </button>
              <button className="flex-1 rounded-xl border-2 border-neutral-300 bg-transparent px-4 py-2.5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800">
                View Full Profile
              </button>
            </div>
          </div>
        </ModalDrawer>
      )}
    </div>
  );
};
