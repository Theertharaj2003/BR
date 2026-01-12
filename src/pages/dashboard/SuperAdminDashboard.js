import React from 'react';
import {
  Building,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  Settings,
  Eye,
  BarChart3,
} from 'lucide-react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Chart from '../../components/ui/Chart';

const SuperAdminDashboard = () => {
  // Mock data
  const platformStats = [
    {
      title: 'Total Schools',
      value: '247',
      change: '+12%',
      changeType: 'positive',
      icon: Building,
    },
    {
      title: 'Active Users',
      value: '45,231',
      change: '+18%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'Monthly Revenue',
      value: '$127,450',
      change: '+8%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Platform Health',
      value: '99.2%',
      change: '+0.1%',
      changeType: 'positive',
      icon: Activity,
    },
  ];

  const schoolOnboardingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Schools',
        data: [12, 18, 15, 22, 28, 35],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
      {
        label: 'Active Schools',
        data: [210, 228, 243, 265, 293, 328],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [95000, 102000, 115000, 122000, 118000, 127450],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const featureUsageData = {
    labels: ['Attendance', 'Fees', 'Exams', 'Communication', 'Reports'],
    datasets: [
      {
        label: 'Usage %',
        data: [95, 87, 78, 82, 91],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  const recentSchools = [
    {
      name: 'Lincoln High School',
      location: 'California, USA',
      status: 'active',
      users: 1247,
      revenue: 4500,
      joinedDate: '2024-01-10',
    },
    {
      name: 'Riverside Academy',
      location: 'Texas, USA',
      status: 'active',
      users: 892,
      revenue: 3200,
      joinedDate: '2024-01-08',
    },
    {
      name: 'Mountain View School',
      location: 'Colorado, USA',
      status: 'pending',
      users: 0,
      revenue: 0,
      joinedDate: '2024-01-12',
    },
    {
      name: 'Oakwood International',
      location: 'New York, USA',
      status: 'active',
      users: 2156,
      revenue: 7800,
      joinedDate: '2024-01-05',
    },
  ];

  const subscriptionData = [
    { plan: 'Basic', schools: 45, percentage: 18 },
    { plan: 'Pro', schools: 128, percentage: 52 },
    { plan: 'Enterprise', schools: 74, percentage: 30 },
  ];

  const systemAlerts = [
    {
      type: 'warning',
      message: 'High server load detected in US-West region',
      time: '2 hours ago',
    },
    {
      type: 'info',
      message: 'New feature deployment completed successfully',
      time: '4 hours ago',
    },
    {
      type: 'success',
      message: 'Database backup completed',
      time: '6 hours ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Platform Administration
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          SchoolHub SaaS Platform • Global Overview
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformStats.map((stat, index) => {
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* School Growth */}
        <Card>
          <Card.Header>
            <Card.Title>School Growth & Onboarding</Card.Title>
            <Card.Description>Monthly school registrations and active schools</Card.Description>
          </Card.Header>
          <Card.Content>
            <Chart.Bar data={schoolOnboardingData} />
          </Card.Content>
        </Card>

        {/* Revenue Trend */}
        <Card>
          <Card.Header>
            <Card.Title>Revenue Trend</Card.Title>
            <Card.Description>Monthly recurring revenue</Card.Description>
          </Card.Header>
          <Card.Content>
            <Chart.Line data={revenueData} />
          </Card.Content>
        </Card>
      </div>

      {/* Feature Usage and Subscription */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Feature Usage */}
        <Card>
          <Card.Header>
            <Card.Title>Feature Usage Analytics</Card.Title>
            <Card.Description>Most used features across all schools</Card.Description>
          </Card.Header>
          <Card.Content>
            <Chart.Doughnut data={featureUsageData} />
          </Card.Content>
        </Card>

        {/* Subscription Distribution */}
        <Card>
          <Card.Header>
            <Card.Title>Subscription Plans</Card.Title>
            <Card.Description>Distribution of schools by plan type</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {subscriptionData.map((plan, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">
                      {plan.plan}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      {plan.schools} schools ({plan.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${plan.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>
      </div>

      {/* Recent Schools and System Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Schools */}
        <Card>
          <Card.Header>
            <Card.Title>Recent Schools</Card.Title>
            <Card.Description>Latest school registrations</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {recentSchools.map((school, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div>
                    <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {school.name}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {school.location}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">
                      Joined: {school.joinedDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={school.status === 'active' ? 'success' : 'warning'}>
                      {school.status}
                    </Badge>
                    {school.status === 'active' && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {school.users} users • ${school.revenue}/mo
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* System Alerts */}
        <Card>
          <Card.Header>
            <Card.Title>System Alerts</Card.Title>
            <Card.Description>Platform health and notifications</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
                  <div className={`p-1 rounded-full ${
                    alert.type === 'warning' ? 'bg-amber-100 dark:bg-amber-900' :
                    alert.type === 'success' ? 'bg-green-100 dark:bg-green-900' :
                    'bg-blue-100 dark:bg-blue-900'
                  }`}>
                    {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-600" />}
                    {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
                    {alert.type === 'info' && <Info className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">
                      {alert.message}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Settings className="w-4 h-4 mr-2" />
                System Settings
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Reports
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;