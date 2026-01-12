import React from 'react';
import {
  Users,
  UserCheck,
  DollarSign,
  TrendingUp,
  Calendar,
  AlertTriangle,
  Plus,
  Eye,
  CheckCircle,
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Chart from '../../components/ui/Chart';

const SchoolAdminDashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Total Students',
      value: '1,247',
      change: '+5%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Total Teachers',
      value: '89',
      change: '+2%',
      changeType: 'positive',
      icon: UserCheck,
    },
    {
      title: 'Fees Collected',
      value: '$127,450',
      change: '+12%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Attendance Rate',
      value: '94.2%',
      change: '-0.3%',
      changeType: 'negative',
      icon: CheckCircle,
    },
  ];

  const attendanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Present',
        data: [1240, 1235, 1245, 1230, 1242],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
      {
        label: 'Absent',
        data: [7, 12, 2, 17, 5],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
      },
    ],
  };

  const feesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Collected',
        data: [95000, 102000, 115000, 122000, 118000, 127450],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Pending',
        data: [12000, 15000, 8000, 10000, 15000, 12000],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const upcomingExams = [
    {
      subject: 'Mathematics',
      class: '10th Grade A',
      date: '2024-01-15',
      time: '10:00 AM',
      students: 45,
    },
    {
      subject: 'Science',
      class: '9th Grade B',
      date: '2024-01-16',
      time: '2:00 PM',
      students: 42,
    },
    {
      subject: 'English',
      class: '10th Grade A',
      date: '2024-01-18',
      time: '9:00 AM',
      students: 45,
    },
  ];

  const pendingApprovals = [
    {
      type: 'Leave Request',
      requester: 'Mr. Johnson',
      reason: 'Medical leave',
      date: '2024-01-12',
    },
    {
      type: 'Fee Waiver',
      requester: 'Emma Davis',
      reason: 'Financial hardship',
      date: '2024-01-11',
    },
    {
      type: 'Event Permission',
      requester: 'Science Club',
      reason: 'Field trip to museum',
      date: '2024-01-10',
    },
  ];

  const quickActions = [
    {
      title: 'Admit Student',
      description: 'Add new student to the system',
      icon: Plus,
      action: () => console.log('Admit student'),
    },
    {
      title: 'Collect Fee',
      description: 'Record fee payment',
      icon: DollarSign,
      action: () => console.log('Collect fee'),
    },
    {
      title: 'Publish Notice',
      description: 'Send announcement to all',
      icon: AlertTriangle,
      action: () => console.log('Publish notice'),
    },
    {
      title: 'Create Exam',
      description: 'Schedule new examination',
      icon: Calendar,
      action: () => console.log('Create exam'),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          School Admin Dashboard
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Springfield High School • Overview and management
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <Card.Content>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {stat.value}
                    </p>
                    <p className={`text-sm flex items-center ${
                      stat.changeType === 'positive'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </div>

      {/* Charts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Chart */}
        <Card className="lg:col-span-2">
          <Card.Header>
            <Card.Title>Weekly Attendance Overview</Card.Title>
            <Card.Description>Student attendance for this week</Card.Description>
          </Card.Header>
          <Card.Content>
            <Chart.Bar data={attendanceData} />
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <Card>
          <Card.Header>
            <Card.Title>Quick Actions</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="space-y-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className="w-full p-3 text-left border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <Icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                          {action.title}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Exams */}
        <Card>
          <Card.Header>
            <Card.Title>Upcoming Exams</Card.Title>
            <Card.Description>Scheduled examinations this week</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {upcomingExams.map((exam, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {exam.subject}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {exam.class} • {exam.students} students
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {exam.date} at {exam.time}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <Card.Header>
            <Card.Title>Pending Approvals</Card.Title>
            <Card.Description>Requests awaiting your approval</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {pendingApprovals.map((approval, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {approval.type}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {approval.requester}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {approval.reason} • {approval.date}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button size="sm">
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Fees Chart */}
      <Card>
        <Card.Header>
          <Card.Title>Fees Collection Trend</Card.Title>
          <Card.Description>Monthly fees collected vs pending</Card.Description>
        </Card.Header>
        <Card.Content>
          <Chart.Line data={feesData} />
        </Card.Content>
      </Card>
    </div>
  );
};

export default SchoolAdminDashboard;