import React from 'react';
import {
  Users,
  UserCheck,
  FileText,
  DollarSign,
  MessageSquare,
  AlertTriangle,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const ParentDashboard = () => {
  // Mock data
  const children = [
    {
      id: '1',
      name: 'Emma Davis',
      grade: '10th Grade',
      rollNumber: 'S001',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    },
  ];

  const childPerformance = {
    name: 'Emma Davis',
    overallGrade: 'A-',
    attendance: 94.2,
    subjects: [
      { name: 'Mathematics', grade: 'A', score: 92 },
      { name: 'Physics', grade: 'A-', score: 88 },
      { name: 'Chemistry', grade: 'B+', score: 85 },
      { name: 'English', grade: 'A', score: 94 },
      { name: 'Biology', grade: 'A-', score: 89 },
    ],
    recentExams: [
      {
        subject: 'Mathematics',
        exam: 'Mid-term Exam',
        score: 92,
        maxScore: 100,
        date: '2024-01-08',
        grade: 'A',
      },
      {
        subject: 'Physics',
        exam: 'Lab Assessment',
        score: 88,
        maxScore: 100,
        date: '2024-01-06',
        grade: 'A-',
      },
    ],
  };

  const attendanceAlerts = [
    {
      type: 'warning',
      message: 'Emma was absent on January 10th (Medical leave)',
      date: '2024-01-10',
      resolved: true,
    },
    {
      type: 'info',
      message: 'Perfect attendance streak: 12 days',
      date: '2024-01-12',
      resolved: false,
    },
  ];

  const feeReminders = [
    {
      type: 'urgent',
      message: 'School fees for May 2024 due on January 31st',
      amount: 5000,
      dueDate: '2024-01-31',
      status: 'pending',
    },
    {
      type: 'info',
      message: 'Transportation fees paid successfully',
      amount: 1500,
      dueDate: '2024-01-15',
      status: 'paid',
    },
  ];

  const teacherMessages = [
    {
      teacher: 'Mr. Anderson',
      subject: 'Mathematics',
      message: 'Emma has shown excellent improvement in calculus. Keep up the good work!',
      date: '2024-01-11',
      type: 'positive',
    },
    {
      teacher: 'Ms. Johnson',
      subject: 'Physics',
      message: 'Please ensure Emma completes the pending lab report by tomorrow.',
      date: '2024-01-10',
      type: 'reminder',
    },
    {
      teacher: 'Mrs. Wilson',
      subject: 'English',
      message: 'Emma\'s essay on climate change was outstanding. Well researched and written.',
      date: '2024-01-09',
      type: 'positive',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Parent-Teacher Meeting',
      date: '2024-01-20',
      time: '2:00 PM - 4:00 PM',
      type: 'meeting',
    },
    {
      title: 'Science Fair',
      date: '2024-01-25',
      time: '9:00 AM - 3:00 PM',
      type: 'event',
    },
    {
      title: 'Sports Day',
      date: '2024-02-01',
      time: '8:00 AM - 5:00 PM',
      type: 'event',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Parent Dashboard
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Michael Davis • Monitoring Emma's academic progress
        </p>
      </div>

      {/* Children Overview */}
      <Card>
        <Card.Header>
          <Card.Title>My Children</Card.Title>
          <Card.Description>Academic overview of your children</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children.map((child) => (
              <div key={child.id} className="flex items-center space-x-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <img
                  src={child.avatar}
                  alt={child.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {child.name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {child.grade} • Roll No: {child.rollNumber}
                  </p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Child Performance Summary */}
      <Card>
        <Card.Header>
          <Card.Title>{childPerformance.name}'s Performance Summary</Card.Title>
          <Card.Description>Academic performance and grades overview</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overall Stats */}
            <div className="space-y-4">
              <div className="text-center p-6 bg-primary-50 dark:bg-primary-900 rounded-lg">
                <h3 className="text-3xl font-bold text-primary-900 dark:text-primary-100">
                  {childPerformance.overallGrade}
                </h3>
                <p className="text-sm text-primary-700 dark:text-primary-300">
                  Overall Grade
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 dark:bg-green-900 rounded-lg">
                <h3 className="text-3xl font-bold text-green-900 dark:text-green-100">
                  {childPerformance.attendance}%
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Attendance Rate
                </p>
              </div>
            </div>

            {/* Subject Grades */}
            <div className="lg:col-span-2">
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-4">
                Subject-wise Performance
              </h4>
              <div className="space-y-3">
                {childPerformance.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                    <div>
                      <h5 className="font-medium text-neutral-900 dark:text-neutral-100">
                        {subject.name}
                      </h5>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {subject.score}% score
                      </p>
                    </div>
                    <Badge variant={
                      subject.grade.startsWith('A') ? 'success' :
                      subject.grade.startsWith('B') ? 'warning' : 'info'
                    }>
                      {subject.grade}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Exams */}
          <div className="mt-6">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-100 mb-4">
              Recent Exam Results
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {childPerformance.recentExams.map((exam, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {exam.subject}
                    </h5>
                    <Badge variant="success">{exam.grade}</Badge>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {exam.exam}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500 dark:text-neutral-500">
                      {exam.date}
                    </span>
                    <span className="font-medium">
                      {exam.score}/{exam.maxScore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card.Content>
      </Card>

      {/* Alerts and Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Alerts */}
        <Card>
          <Card.Header>
            <Card.Title>Attendance Alerts</Card.Title>
            <Card.Description>Important attendance notifications</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {attendanceAlerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className={`p-1 rounded-full ${
                    alert.type === 'warning' ? 'bg-amber-100 dark:bg-amber-900' : 'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    {alert.type === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                    ) : (
                      <UserCheck className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {alert.message}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {alert.date}
                    </p>
                  </div>
                  {alert.resolved && (
                    <Badge variant="success" size="sm">Resolved</Badge>
                  )}
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* Fee Reminders */}
        <Card>
          <Card.Header>
            <Card.Title>Fee Reminders</Card.Title>
            <Card.Description>Payment status and upcoming dues</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {feeReminders.map((reminder, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-medium ${
                      reminder.status === 'pending'
                        ? 'text-neutral-900 dark:text-neutral-100'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}>
                      ₹{reminder.amount.toLocaleString()}
                    </h4>
                    <Badge variant={reminder.status === 'paid' ? 'success' : 'warning'}>
                      {reminder.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {reminder.message}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    Due: {reminder.dueDate}
                  </p>
                  {reminder.status === 'pending' && (
                    <Button size="sm" className="mt-2">
                      Pay Now
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Teacher Messages and Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teacher Messages */}
        <Card>
          <Card.Header>
            <Card.Title>Teacher Messages</Card.Title>
            <Card.Description>Communications from teachers</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {teacherMessages.map((message, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {message.teacher}
                    </h4>
                    <Badge variant={
                      message.type === 'positive' ? 'success' :
                      message.type === 'reminder' ? 'warning' : 'info'
                    }>
                      {message.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                    {message.subject}
                  </p>
                  <p className="text-sm text-neutral-900 dark:text-neutral-100 mb-2">
                    {message.message}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {message.date}
                  </p>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <Card.Header>
            <Card.Title>Upcoming Events</Card.Title>
            <Card.Description>School events and important dates</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {event.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {event.date} • {event.time}
                    </p>
                  </div>
                  <Badge variant="info">{event.type}</Badge>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <Card.Header>
          <Card.Title>Quick Actions</Card.Title>
          <Card.Description>Common parent actions</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <MessageSquare className="w-6 h-6 mb-2" />
              <span className="text-sm">Contact Teacher</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <FileText className="w-6 h-6 mb-2" />
              <span className="text-sm">View Report Card</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <DollarSign className="w-6 h-6 mb-2" />
              <span className="text-sm">Pay Fees</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center p-4 h-auto">
              <Calendar className="w-6 h-6 mb-2" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ParentDashboard;