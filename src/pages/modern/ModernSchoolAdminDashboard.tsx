import React from 'react';
import { ModernCard, ModernStatCard, ModernMetricCard } from '../../components/modern/ModernCard';
import { ModernTable, ModernBadge } from '../../components/modern/ModernTable';
import { ModernButton } from '../../components/modern/ModernButton';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ModernSchoolAdminDashboard: React.FC = () => {
  // Mock data
  const attendanceData = [
    { day: 'Mon', present: 850, absent: 50 },
    { day: 'Tue', present: 870, absent: 30 },
    { day: 'Wed', present: 845, absent: 55 },
    { day: 'Thu', present: 890, absent: 10 },
    { day: 'Fri', present: 880, absent: 20 },
  ];

  const feeData = [
    { name: 'Collected', value: 750000, color: '#10b981' },
    { name: 'Pending', value: 250000, color: '#f59e0b' },
  ];

  const recentActivities = [
    { id: 1, student: 'John Doe', action: 'Fee Payment', amount: '₹15,000', time: '10 mins ago', status: 'completed' },
    { id: 2, student: 'Jane Smith', action: 'Admission', amount: '-', time: '25 mins ago', status: 'pending' },
    { id: 3, student: 'Mike Johnson', action: 'Fee Payment', amount: '₹12,000', time: '1 hour ago', status: 'completed' },
    { id: 4, student: 'Sarah Williams', action: 'Document Upload', amount: '-', time: '2 hours ago', status: 'completed' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Parent-Teacher Meeting', date: 'Jan 15, 2026', type: 'meeting' },
    { id: 2, title: 'Annual Sports Day', date: 'Jan 20, 2026', type: 'event' },
    { id: 3, title: 'Mid-term Exams', date: 'Jan 25, 2026', type: 'exam' },
  ];

  const columns = [
    { key: 'student', label: 'Student', sortable: true },
    { key: 'action', label: 'Action', sortable: true },
    { key: 'amount', label: 'Amount', sortable: false },
    { key: 'time', label: 'Time', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: false,
      render: (value: string) => (
        <ModernBadge variant={value === 'completed' ? 'success' : 'warning'} size="sm">
          {value}
        </ModernBadge>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-dark-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">School Dashboard</h1>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Welcome back, Admin</p>
          </div>
          <div className="flex gap-3">
            <ModernButton variant="outline" size="md">
              <span>📊</span>
              Export Report
            </ModernButton>
            <ModernButton variant="primary" size="md">
              <span>➕</span>
              Quick Action
            </ModernButton>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModernStatCard
            title="Total Students"
            value="1,245"
            change="+12.5%"
            changeType="positive"
            trend="up"
            icon={<span className="text-2xl">👨‍🎓</span>}
          />
          <ModernStatCard
            title="Total Teachers"
            value="87"
            change="+3"
            changeType="positive"
            trend="up"
            icon={<span className="text-2xl">👨‍🏫</span>}
          />
          <ModernStatCard
            title="Attendance Today"
            value="94.2%"
            change="+2.1%"
            changeType="positive"
            trend="up"
            icon={<span className="text-2xl">✅</span>}
          />
          <ModernStatCard
            title="Fee Collection"
            value="₹7.5L"
            change="75%"
            changeType="neutral"
            icon={<span className="text-2xl">💰</span>}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Attendance Chart */}
          <ModernCard className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Weekly Attendance</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Student attendance overview</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={attendanceData}>
                <defs>
                  <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="present"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPresent)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ModernCard>

          {/* Fee Collection Pie Chart */}
          <ModernCard>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Fee Status</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Collection overview</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={feeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {feeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number | undefined) => value ? `₹${(value / 1000).toFixed(0)}K` : '₹0'}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success-500"></div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Collected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">Pending</span>
              </div>
            </div>
          </ModernCard>
        </div>

        {/* Quick Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ModernMetricCard label="Classes Today" value="24" color="primary" />
          <ModernMetricCard label="Pending Approvals" value="8" color="warning" />
          <ModernMetricCard label="New Admissions" value="15" color="success" />
          <ModernMetricCard label="Staff on Leave" value="3" color="secondary" />
        </div>

        {/* Recent Activities & Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <ModernCard padding="none">
              <div className="p-6 border-b border-neutral-200 dark:border-dark-200">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Recent Activities</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Latest transactions and updates</p>
              </div>
              <div className="p-6">
                <ModernTable columns={columns} data={recentActivities} compact striped />
              </div>
            </ModernCard>
          </div>

          {/* Upcoming Events */}
          <ModernCard>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Upcoming Events</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Important dates</p>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-lg bg-neutral-50 dark:bg-dark-200 border border-neutral-200 dark:border-dark-300 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {event.type === 'meeting' && '👥'}
                      {event.type === 'event' && '🎉'}
                      {event.type === 'exam' && '📝'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-neutral-900 dark:text-white">{event.title}</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ModernButton variant="ghost" fullWidth className="mt-4">
              View All Events
            </ModernButton>
          </ModernCard>
        </div>

        {/* Quick Actions */}
        <ModernCard>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ModernButton variant="outline" fullWidth>
              <span>👨‍🎓</span>
              Admit Student
            </ModernButton>
            <ModernButton variant="outline" fullWidth>
              <span>💰</span>
              Collect Fee
            </ModernButton>
            <ModernButton variant="outline" fullWidth>
              <span>📢</span>
              Send Notice
            </ModernButton>
            <ModernButton variant="outline" fullWidth>
              <span>📝</span>
              Create Exam
            </ModernButton>
          </div>
        </ModernCard>
      </div>
    </div>
  );
};

export default ModernSchoolAdminDashboard;
