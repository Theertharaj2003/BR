import React from 'react';
import {
  UserCheck,
  FileText,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  BookOpen,
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const StudentDashboard = () => {
  // Mock data
  const studentInfo = {
    name: 'Emma Davis',
    grade: '10th Grade',
    rollNumber: 'S001',
    attendance: 94.2,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
  };

  const attendanceStats = {
    present: 142,
    absent: 9,
    total: 151,
    percentage: 94.2,
    streak: 12,
  };

  const upcomingExams = [
    {
      subject: 'Mathematics',
      exam: 'Final Exam',
      date: '2024-01-20',
      time: '10:00 AM',
      room: 'Room 201',
      marks: 100,
    },
    {
      subject: 'Physics',
      exam: 'Practical Exam',
      date: '2024-01-22',
      time: '2:00 PM',
      room: 'Lab 1',
      marks: 50,
    },
    {
      subject: 'Chemistry',
      exam: 'Theory Exam',
      date: '2024-01-25',
      time: '9:00 AM',
      room: 'Room 203',
      marks: 100,
    },
  ];

  const pendingHomework = [
    {
      subject: 'Mathematics',
      assignment: 'Calculus Problems',
      dueDate: '2024-01-15',
      status: 'pending',
      priority: 'high',
    },
    {
      subject: 'Physics',
      assignment: 'Newton\'s Laws Essay',
      dueDate: '2024-01-16',
      status: 'pending',
      priority: 'medium',
    },
    {
      subject: 'English',
      assignment: 'Literature Review',
      dueDate: '2024-01-18',
      status: 'completed',
      priority: 'low',
    },
  ];

  const feeStatus = {
    totalFees: 25000,
    paid: 20000,
    pending: 5000,
    nextDue: '2024-01-31',
    installments: [
      { month: 'January', amount: 5000, status: 'paid', date: '2024-01-05' },
      { month: 'February', amount: 5000, status: 'paid', date: '2024-02-05' },
      { month: 'March', amount: 5000, status: 'paid', date: '2024-03-05' },
      { month: 'April', amount: 5000, status: 'paid', date: '2024-04-05' },
      { month: 'May', amount: 5000, status: 'pending', date: null },
    ],
  };

  const timetable = [
    { day: 'Monday', subjects: ['Math', 'Physics', 'Chemistry', 'English', 'Biology'] },
    { day: 'Tuesday', subjects: ['Physics', 'Chemistry', 'Math', 'English', 'Sports'] },
    { day: 'Wednesday', subjects: ['Chemistry', 'Biology', 'Math', 'English', 'Physics'] },
    { day: 'Thursday', subjects: ['English', 'Math', 'Physics', 'Chemistry', 'Biology'] },
    { day: 'Friday', subjects: ['Biology', 'English', 'Math', 'Physics', 'Chemistry'] },
  ];

  const achievements = [
    {
      title: 'Perfect Attendance',
      description: '12 consecutive days of perfect attendance',
      icon: Award,
      earned: true,
    },
    {
      title: 'Math Whiz',
      description: 'Scored 95%+ in 3 consecutive math tests',
      icon: TrendingUp,
      earned: true,
    },
    {
      title: 'Science Star',
      description: 'Won first prize in science fair',
      icon: Award,
      earned: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={studentInfo.avatar}
          alt={studentInfo.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Welcome back, {studentInfo.name}!
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            {studentInfo.grade} • Roll No: {studentInfo.rollNumber}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <Card.Content>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <UserCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Attendance
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {studentInfo.attendance}%
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  {attendanceStats.streak} day streak
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Pending Homework
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {pendingHomework.filter(h => h.status === 'pending').length}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  assignments due
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
                <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Upcoming Exams
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {upcomingExams.length}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  this week
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                <DollarSign className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Pending Fees
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  ₹{feeStatus.pending.toLocaleString()}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  due {feeStatus.nextDue}
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Main Content Grid */}
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
                      {exam.exam} • {exam.room}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {exam.date} at {exam.time} • {exam.marks} marks
                    </p>
                  </div>
                  <Badge variant="warning">Upcoming</Badge>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* Pending Homework */}
        <Card>
          <Card.Header>
            <Card.Title>Homework Status</Card.Title>
            <Card.Description>Assignments and their submission status</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {pendingHomework.map((homework, index) => (
                <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {homework.subject}
                    </h4>
                    <Badge variant={
                      homework.status === 'completed' ? 'success' :
                      homework.priority === 'high' ? 'danger' : 'warning'
                    }>
                      {homework.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {homework.assignment}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Due: {homework.dueDate}
                    </p>
                    {homework.status === 'pending' && (
                      <Button size="sm">
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Fee Status and Timetable */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fee Status */}
        <Card>
          <Card.Header>
            <Card.Title>Fee Status</Card.Title>
            <Card.Description>Payment history and pending dues</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Paid: ₹{feeStatus.paid.toLocaleString()}</span>
                <span>Pending: ₹{feeStatus.pending.toLocaleString()}</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: `${(feeStatus.paid / feeStatus.totalFees) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {feeStatus.installments.map((installment, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div>
                    <h5 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {installment.month} 2024
                    </h5>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {installment.date || 'Due: ' + feeStatus.nextDue}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{installment.amount.toLocaleString()}</p>
                    <Badge variant={installment.status === 'paid' ? 'success' : 'warning'}>
                      {installment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            {feeStatus.pending > 0 && (
              <Button className="w-full mt-4">
                Pay Pending Fees
              </Button>
            )}
          </Card.Content>
        </Card>

        {/* Weekly Timetable */}
        <Card>
          <Card.Header>
            <Card.Title>Weekly Timetable</Card.Title>
            <Card.Description>Your class schedule for this week</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-3">
              {timetable.map((day, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className="w-20 font-medium text-neutral-900 dark:text-neutral-100">
                    {day.day}
                  </div>
                  <div className="flex-1 flex space-x-2">
                    {day.subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="outline" size="sm">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <Card.Header>
          <Card.Title>Achievements & Badges</Card.Title>
          <Card.Description>Your academic accomplishments</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className={`p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg ${
                    achievement.earned
                      ? 'bg-primary-50 dark:bg-primary-900 border-primary-200 dark:border-primary-800'
                      : 'bg-neutral-50 dark:bg-neutral-800 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      achievement.earned
                        ? 'bg-primary-100 dark:bg-primary-800'
                        : 'bg-neutral-200 dark:bg-neutral-700'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        achievement.earned
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`} />
                    </div>
                    <div>
                      <h4 className={`font-medium ${
                        achievement.earned
                          ? 'text-neutral-900 dark:text-neutral-100'
                          : 'text-neutral-500 dark:text-neutral-400'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned
                          ? 'text-neutral-600 dark:text-neutral-400'
                          : 'text-neutral-400 dark:text-neutral-500'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default StudentDashboard;