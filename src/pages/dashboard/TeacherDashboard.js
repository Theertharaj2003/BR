import React from 'react';
import {
  BookOpen,
  UserCheck,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const TeacherDashboard = () => {
  // Mock data
  const todaysClasses = [
    {
      subject: 'Mathematics',
      class: '10th Grade A',
      time: '9:00 AM - 10:00 AM',
      room: 'Room 201',
      students: 45,
      status: 'upcoming',
    },
    {
      subject: 'Physics',
      class: '10th Grade B',
      time: '10:30 AM - 11:30 AM',
      room: 'Lab 1',
      students: 42,
      status: 'upcoming',
    },
    {
      subject: 'Mathematics',
      class: '9th Grade A',
      time: '2:00 PM - 3:00 PM',
      room: 'Room 201',
      students: 48,
      status: 'upcoming',
    },
  ];

  const homeworkStatus = [
    {
      subject: 'Mathematics',
      assignment: 'Quadratic Equations',
      dueDate: '2024-01-15',
      submitted: 38,
      total: 45,
      pending: 7,
    },
    {
      subject: 'Physics',
      assignment: 'Newton\'s Laws',
      dueDate: '2024-01-16',
      submitted: 35,
      total: 42,
      pending: 7,
    },
    {
      subject: 'Mathematics',
      assignment: 'Trigonometry Basics',
      dueDate: '2024-01-18',
      submitted: 41,
      total: 48,
      pending: 7,
    },
  ];

  const pendingEvaluations = [
    {
      subject: 'Mathematics',
      type: 'Quiz',
      class: '10th Grade A',
      date: '2024-01-10',
      submissions: 42,
      total: 45,
    },
    {
      subject: 'Physics',
      type: 'Lab Report',
      class: '10th Grade B',
      date: '2024-01-09',
      submissions: 38,
      total: 42,
    },
    {
      subject: 'Mathematics',
      type: 'Assignment',
      class: '9th Grade A',
      date: '2024-01-08',
      submissions: 44,
      total: 48,
    },
  ];

  const quickActions = [
    {
      title: 'Mark Attendance',
      description: 'Take attendance for current class',
      icon: UserCheck,
      action: () => console.log('Mark attendance'),
      primary: true,
    },
    {
      title: 'Create Homework',
      description: 'Assign new homework',
      icon: FileText,
      action: () => console.log('Create homework'),
    },
    {
      title: 'Grade Submissions',
      description: 'Evaluate pending assignments',
      icon: CheckCircle,
      action: () => console.log('Grade submissions'),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Teacher Dashboard
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Mr. Anderson • Springfield High School
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} className={action.primary ? 'border-primary-200 dark:border-primary-800' : ''}>
              <Card.Content>
                <button
                  onClick={action.action}
                  className="w-full text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      action.primary
                        ? 'bg-primary-100 dark:bg-primary-900'
                        : 'bg-neutral-100 dark:bg-neutral-700'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        action.primary
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-neutral-600 dark:text-neutral-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {action.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </button>
              </Card.Content>
            </Card>
          );
        })}
      </div>

      {/* Today's Classes */}
      <Card>
        <Card.Header>
          <Card.Title>Today's Classes</Card.Title>
          <Card.Description>Your scheduled classes for today</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {todaysClasses.map((classItem, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {classItem.subject}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {classItem.class} • {classItem.room} • {classItem.students} students
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      {classItem.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="info">
                    {classItem.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Attendance
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Homework Status */}
      <Card>
        <Card.Header>
          <Card.Title>Homework Status</Card.Title>
          <Card.Description>Recent assignments and submission status</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {homeworkStatus.map((homework, index) => (
              <div key={index} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {homework.subject}: {homework.assignment}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Due: {homework.dueDate}
                    </p>
                  </div>
                  <Badge variant={homework.pending > 0 ? 'warning' : 'success'}>
                    {homework.pending > 0 ? `${homework.pending} pending` : 'All submitted'}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      <span>Progress</span>
                      <span>{homework.submitted}/{homework.total}</span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${(homework.submitted / homework.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Pending Evaluations */}
      <Card>
        <Card.Header>
          <Card.Title>Pending Evaluations</Card.Title>
          <Card.Description>Assignments and quizzes awaiting grading</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="space-y-4">
            {pendingEvaluations.map((evaluation, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                    {evaluation.subject} {evaluation.type}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {evaluation.class} • Submitted: {evaluation.submissions}/{evaluation.total}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    {evaluation.date}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {evaluation.submissions < evaluation.total && (
                    <Badge variant="warning">
                      {evaluation.total - evaluation.submissions} missing
                    </Badge>
                  )}
                  <Button size="sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Grade
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default TeacherDashboard;