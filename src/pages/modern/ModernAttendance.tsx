import React, { useState } from 'react';
import { ModernCard } from '../../components/modern/ModernCard';
import { ModernButton, ModernIconButton } from '../../components/modern/ModernButton';
import { ModernSelect, ModernInput } from '../../components/modern/ModernInput';
import { ModernBadge } from '../../components/modern/ModernTable';

const ModernAttendance: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('grade-10-a');
  const [selectedDate, setSelectedDate] = useState('2026-01-12');
  const [searchQuery, setSearchQuery] = useState('');

  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent' | 'late' | 'excused'>>({
    STU001: 'present',
    STU002: 'present',
    STU003: 'absent',
    STU004: 'present',
    STU005: 'late',
    STU006: 'present',
    STU007: 'excused',
    STU008: 'present',
  });

  const students = [
    { id: 'STU001', name: 'John Doe', rollNo: '101', photo: '👨' },
    { id: 'STU002', name: 'Jane Smith', rollNo: '102', photo: '👩' },
    { id: 'STU003', name: 'Mike Johnson', rollNo: '103', photo: '👨' },
    { id: 'STU004', name: 'Sarah Williams', rollNo: '104', photo: '👩' },
    { id: 'STU005', name: 'Tom Brown', rollNo: '105', photo: '👨' },
    { id: 'STU006', name: 'Emily Davis', rollNo: '106', photo: '👩' },
    { id: 'STU007', name: 'David Wilson', rollNo: '107', photo: '👨' },
    { id: 'STU008', name: 'Lisa Anderson', rollNo: '108', photo: '👩' },
  ];

  const classOptions = [
    { value: 'grade-9-a', label: 'Grade 9-A' },
    { value: 'grade-9-b', label: 'Grade 9-B' },
    { value: 'grade-10-a', label: 'Grade 10-A' },
    { value: 'grade-10-b', label: 'Grade 10-B' },
  ];

  const toggleAttendance = (studentId: string, status: 'present' | 'absent' | 'late' | 'excused') => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const markAllPresent = () => {
    const newAttendance: Record<string, 'present' | 'absent' | 'late' | 'excused'> = {};
    students.forEach(student => {
      newAttendance[student.id] = 'present';
    });
    setAttendance(newAttendance);
  };

  const stats = {
    present: Object.values(attendance).filter(s => s === 'present').length,
    absent: Object.values(attendance).filter(s => s === 'absent').length,
    late: Object.values(attendance).filter(s => s === 'late').length,
    excused: Object.values(attendance).filter(s => s === 'excused').length,
  };

  const attendancePercentage = ((stats.present / students.length) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Attendance Management</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Mark and track student attendance</p>
          </div>
          <div className="flex gap-3">
            <ModernButton variant="outline" size="md">
              <span>📊</span>
              View Reports
            </ModernButton>
            <ModernButton variant="primary" size="md">
              <span>💾</span>
              Save Attendance
            </ModernButton>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <ModernCard className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">Total Students</p>
              <p className="text-3xl font-bold">{students.length}</p>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-success-500 to-success-600 text-white">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">Present</p>
              <p className="text-3xl font-bold">{stats.present}</p>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-error-500 to-error-600 text-white">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">Absent</p>
              <p className="text-3xl font-bold">{stats.absent}</p>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-warning-500 to-warning-600 text-white">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">Late</p>
              <p className="text-3xl font-bold">{stats.late}</p>
            </div>
          </ModernCard>
          <ModernCard className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white">
            <div className="text-center">
              <p className="text-sm opacity-90 mb-1">Attendance %</p>
              <p className="text-3xl font-bold">{attendancePercentage}%</p>
            </div>
          </ModernCard>
        </div>

        {/* Filters */}
        <ModernCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ModernSelect
              label="Select Class"
              value={selectedClass}
              onChange={setSelectedClass}
              options={classOptions}
              fullWidth
            />
            <ModernInput
              label="Select Date"
              type="text"
              value={selectedDate}
              onChange={setSelectedDate}
              fullWidth
            />
            <ModernInput
              label="Search Student"
              placeholder="Search by name or roll no..."
              value={searchQuery}
              onChange={setSearchQuery}
              icon={<span>🔍</span>}
              iconPosition="left"
              fullWidth
            />
            <div className="flex items-end">
              <ModernButton variant="outline" fullWidth onClick={markAllPresent}>
                <span>✅</span>
                Mark All Present
              </ModernButton>
            </div>
          </div>
        </ModernCard>

        {/* Attendance Grid */}
        <ModernCard padding="none">
          <div className="p-6 border-b border-neutral-200 dark:border-dark-200">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Mark Attendance</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Click on student cards to mark attendance</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {students.map((student) => {
                const status = attendance[student.id] || 'present';
                const statusColors = {
                  present: 'border-success-300 bg-success-50 dark:bg-success-900/20',
                  absent: 'border-error-300 bg-error-50 dark:bg-error-900/20',
                  late: 'border-warning-300 bg-warning-50 dark:bg-warning-900/20',
                  excused: 'border-secondary-300 bg-secondary-50 dark:bg-secondary-900/20',
                };

                return (
                  <div
                    key={student.id}
                    className={`
                      p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer
                      hover:shadow-md
                      ${statusColors[status]}
                    `}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-2xl">
                          {student.photo}
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 dark:text-white">{student.name}</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">Roll: {student.rollNo}</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => toggleAttendance(student.id, 'present')}
                        className={`
                          px-3 py-2 rounded-lg text-sm font-medium transition-all
                          ${status === 'present' 
                            ? 'bg-success-600 text-white shadow-md' 
                            : 'bg-white dark:bg-dark-100 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-dark-200 hover:bg-success-50 dark:hover:bg-success-900/20'
                          }
                        `}
                      >
                        ✅ Present
                      </button>
                      <button
                        onClick={() => toggleAttendance(student.id, 'absent')}
                        className={`
                          px-3 py-2 rounded-lg text-sm font-medium transition-all
                          ${status === 'absent' 
                            ? 'bg-error-600 text-white shadow-md' 
                            : 'bg-white dark:bg-dark-100 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-dark-200 hover:bg-error-50 dark:hover:bg-error-900/20'
                          }
                        `}
                      >
                        ❌ Absent
                      </button>
                      <button
                        onClick={() => toggleAttendance(student.id, 'late')}
                        className={`
                          px-3 py-2 rounded-lg text-sm font-medium transition-all
                          ${status === 'late' 
                            ? 'bg-warning-600 text-white shadow-md' 
                            : 'bg-white dark:bg-dark-100 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-dark-200 hover:bg-warning-50 dark:hover:bg-warning-900/20'
                          }
                        `}
                      >
                        ⏰ Late
                      </button>
                      <button
                        onClick={() => toggleAttendance(student.id, 'excused')}
                        className={`
                          px-3 py-2 rounded-lg text-sm font-medium transition-all
                          ${status === 'excused' 
                            ? 'bg-secondary-600 text-white shadow-md' 
                            : 'bg-white dark:bg-dark-100 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-dark-200 hover:bg-secondary-50 dark:hover:bg-secondary-900/20'
                          }
                        `}
                      >
                        📝 Excused
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-6 border-t border-neutral-200 dark:border-dark-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success-500"></div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Present ({stats.present})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error-500"></div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Absent ({stats.absent})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Late ({stats.late})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Excused ({stats.excused})</span>
              </div>
            </div>
            <div className="flex gap-3">
              <ModernButton variant="outline" size="md">
                Cancel
              </ModernButton>
              <ModernButton variant="primary" size="md">
                <span>💾</span>
                Save Attendance
              </ModernButton>
            </div>
          </div>
        </ModernCard>
      </div>
    </div>
  );
};

export default ModernAttendance;
