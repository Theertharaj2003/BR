import React, { useState } from 'react';
import { ModernCard } from '../../components/modern/ModernCard';
import { ModernTable, ModernBadge } from '../../components/modern/ModernTable';
import { ModernButton, ModernIconButton } from '../../components/modern/ModernButton';
import { ModernInput, ModernSelect } from '../../components/modern/ModernInput';

const ModernStudentManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedStudents, setSelectedStudents] = useState<any[]>([]);

  const students = [
    {
      id: 'STU001',
      name: 'John Doe',
      class: 'Grade 10-A',
      rollNo: '101',
      attendance: '95%',
      fees: 'Paid',
      status: 'active',
      email: 'john.doe@school.com',
      phone: '+91 98765 43210',
      parent: 'Robert Doe',
    },
    {
      id: 'STU002',
      name: 'Jane Smith',
      class: 'Grade 10-A',
      rollNo: '102',
      attendance: '92%',
      fees: 'Pending',
      status: 'active',
      email: 'jane.smith@school.com',
      phone: '+91 98765 43211',
      parent: 'Mary Smith',
    },
    {
      id: 'STU003',
      name: 'Mike Johnson',
      class: 'Grade 9-B',
      rollNo: '201',
      attendance: '88%',
      fees: 'Paid',
      status: 'active',
      email: 'mike.j@school.com',
      phone: '+91 98765 43212',
      parent: 'David Johnson',
    },
    {
      id: 'STU004',
      name: 'Sarah Williams',
      class: 'Grade 10-B',
      rollNo: '103',
      attendance: '97%',
      fees: 'Paid',
      status: 'active',
      email: 'sarah.w@school.com',
      phone: '+91 98765 43213',
      parent: 'Lisa Williams',
    },
    {
      id: 'STU005',
      name: 'Tom Brown',
      class: 'Grade 9-A',
      rollNo: '202',
      attendance: '85%',
      fees: 'Pending',
      status: 'inactive',
      email: 'tom.b@school.com',
      phone: '+91 98765 43214',
      parent: 'James Brown',
    },
  ];

  const columns = [
    {
      key: 'id',
      label: 'Student ID',
      sortable: true,
      render: (value: string) => (
        <span className="font-mono text-sm font-medium text-primary-600 dark:text-primary-400">{value}</span>
      ),
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold">
            {value.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="font-medium text-neutral-900 dark:text-white">{value}</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'class',
      label: 'Class',
      sortable: true,
      render: (value: string) => (
        <ModernBadge variant="secondary" size="sm">{value}</ModernBadge>
      ),
    },
    {
      key: 'rollNo',
      label: 'Roll No',
      sortable: true,
    },
    {
      key: 'attendance',
      label: 'Attendance',
      sortable: true,
      render: (value: string) => {
        const percentage = parseInt(value);
        const variant = percentage >= 90 ? 'success' : percentage >= 75 ? 'warning' : 'error';
        return <ModernBadge variant={variant} size="sm">{value}</ModernBadge>;
      },
    },
    {
      key: 'fees',
      label: 'Fee Status',
      sortable: true,
      render: (value: string) => (
        <ModernBadge variant={value === 'Paid' ? 'success' : 'warning'} size="sm" dot>
          {value}
        </ModernBadge>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <ModernBadge variant={value === 'active' ? 'success' : 'neutral'} size="sm">
          {value}
        </ModernBadge>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_: any, row: any) => (
        <div className="flex items-center gap-2">
          <ModernIconButton
            icon={<span>👁️</span>}
            size="sm"
            tooltip="View Details"
            onClick={() => console.log('View', row)}
          />
          <ModernIconButton
            icon={<span>✏️</span>}
            size="sm"
            tooltip="Edit"
            onClick={() => console.log('Edit', row)}
          />
          <ModernIconButton
            icon={<span>🗑️</span>}
            size="sm"
            variant="danger"
            tooltip="Delete"
            onClick={() => console.log('Delete', row)}
          />
        </div>
      ),
    },
  ];

  const classOptions = [
    { value: 'grade-9-a', label: 'Grade 9-A' },
    { value: 'grade-9-b', label: 'Grade 9-B' },
    { value: 'grade-10-a', label: 'Grade 10-A' },
    { value: 'grade-10-b', label: 'Grade 10-B' },
  ];

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Student Management</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Manage all student records and information</p>
          </div>
          <div className="flex gap-3">
            <ModernButton variant="outline" size="md">
              <span>📥</span>
              Import
            </ModernButton>
            <ModernButton variant="outline" size="md">
              <span>📤</span>
              Export
            </ModernButton>
            <ModernButton variant="primary" size="md">
              <span>➕</span>
              Add Student
            </ModernButton>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ModernCard className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Total Students</p>
                <p className="text-3xl font-bold">1,245</p>
              </div>
              <div className="text-4xl opacity-80">👨‍🎓</div>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-success-500 to-success-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Active</p>
                <p className="text-3xl font-bold">1,198</p>
              </div>
              <div className="text-4xl opacity-80">✅</div>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-warning-500 to-warning-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Pending Fees</p>
                <p className="text-3xl font-bold">47</p>
              </div>
              <div className="text-4xl opacity-80">💰</div>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">New This Month</p>
                <p className="text-3xl font-bold">23</p>
              </div>
              <div className="text-4xl opacity-80">🆕</div>
            </div>
          </ModernCard>
        </div>

        {/* Filters and Search */}
        <ModernCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ModernInput
              placeholder="Search students..."
              value={searchQuery}
              onChange={setSearchQuery}
              icon={<span>🔍</span>}
              iconPosition="left"
              fullWidth
            />
            <ModernSelect
              placeholder="Filter by Class"
              value={filterClass}
              onChange={setFilterClass}
              options={classOptions}
              fullWidth
            />
            <ModernSelect
              placeholder="Filter by Status"
              value={filterStatus}
              onChange={setFilterStatus}
              options={statusOptions}
              fullWidth
            />
            <ModernButton variant="outline" fullWidth>
              <span>🔄</span>
              Reset Filters
            </ModernButton>
          </div>
        </ModernCard>

        {/* Selected Actions */}
        {selectedStudents.length > 0 && (
          <ModernCard className="bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                {selectedStudents.length} student(s) selected
              </p>
              <div className="flex gap-2">
                <ModernButton variant="outline" size="sm">
                  <span>📧</span>
                  Send Email
                </ModernButton>
                <ModernButton variant="outline" size="sm">
                  <span>📱</span>
                  Send SMS
                </ModernButton>
                <ModernButton variant="outline" size="sm">
                  <span>📄</span>
                  Generate Report
                </ModernButton>
              </div>
            </div>
          </ModernCard>
        )}

        {/* Students Table */}
        <ModernCard padding="none">
          <div className="p-6 border-b border-neutral-200 dark:border-dark-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">All Students</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Complete list of enrolled students</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Show:</span>
                <ModernSelect
                  value="10"
                  onChange={() => {}}
                  options={[
                    { value: '10', label: '10 rows' },
                    { value: '25', label: '25 rows' },
                    { value: '50', label: '50 rows' },
                    { value: '100', label: '100 rows' },
                  ]}
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div className="p-6">
            <ModernTable
              columns={columns}
              data={students}
              selectable
              onSelectionChange={setSelectedStudents}
              striped
            />
          </div>
          <div className="p-6 border-t border-neutral-200 dark:border-dark-200 flex items-center justify-between">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing 1 to 5 of 1,245 students
            </p>
            <div className="flex gap-2">
              <ModernButton variant="outline" size="sm" disabled>
                Previous
              </ModernButton>
              <ModernButton variant="outline" size="sm">1</ModernButton>
              <ModernButton variant="primary" size="sm">2</ModernButton>
              <ModernButton variant="outline" size="sm">3</ModernButton>
              <ModernButton variant="outline" size="sm">...</ModernButton>
              <ModernButton variant="outline" size="sm">249</ModernButton>
              <ModernButton variant="outline" size="sm">
                Next
              </ModernButton>
            </div>
          </div>
        </ModernCard>
      </div>
    </div>
  );
};

export default ModernStudentManagement;
