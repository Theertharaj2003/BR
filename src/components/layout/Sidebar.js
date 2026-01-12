import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  DollarSign,
  FileText,
  Calendar,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookOpen,
  TrendingUp,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../utils/cn';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const { user } = useAuth();

  const navigationItems = {
    superAdmin: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Schools', href: '/schools', icon: GraduationCap },
      { name: 'Analytics', href: '/analytics', icon: TrendingUp },
      { name: 'Settings', href: '/settings', icon: Settings },
    ],
    schoolAdmin: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Students', href: '/students', icon: Users },
      { name: 'Teachers', href: '/teachers', icon: UserCheck },
      { name: 'Attendance', href: '/attendance', icon: UserCheck },
      { name: 'Fees', href: '/fees', icon: DollarSign },
      { name: 'Exams', href: '/exams', icon: FileText },
      { name: 'Timetable', href: '/timetable', icon: Calendar },
      { name: 'Communication', href: '/communication', icon: MessageSquare },
      { name: 'Reports', href: '/reports', icon: TrendingUp },
    ],
    teacher: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'My Classes', href: '/classes', icon: BookOpen },
      { name: 'Attendance', href: '/attendance', icon: UserCheck },
      { name: 'Homework', href: '/homework', icon: FileText },
      { name: 'Exams', href: '/exams', icon: FileText },
      { name: 'Timetable', href: '/timetable', icon: Calendar },
    ],
    student: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Attendance', href: '/attendance', icon: UserCheck },
      { name: 'Homework', href: '/homework', icon: FileText },
      { name: 'Exams', href: '/exams', icon: FileText },
      { name: 'Timetable', href: '/timetable', icon: Calendar },
      { name: 'Fees', href: '/fees', icon: DollarSign },
    ],
    parent: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Children', href: '/children', icon: Users },
      { name: 'Attendance', href: '/attendance', icon: UserCheck },
      { name: 'Homework', href: '/homework', icon: FileText },
      { name: 'Exams', href: '/exams', icon: FileText },
      { name: 'Fees', href: '/fees', icon: DollarSign },
      { name: 'Communication', href: '/communication', icon: MessageSquare },
    ],
  };

  const items = navigationItems[user?.role] || [];

  return (
    <div
      className={cn(
        'bg-white border-r border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700 sidebar-transition',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary-600" />
              <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                SchoolHub
              </span>
            </div>
          )}
          <button
            onClick={onToggle}
            className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-neutral-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-neutral-500" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-200'
                    : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700',
                  isCollapsed && 'justify-center'
                )}
              >
                <Icon className={cn('w-5 h-5', !isCollapsed && 'mr-3')} />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-primary-700">
                {user?.name?.charAt(0) || 'U'}
              </span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 capitalize">
                  {user?.role?.replace(/([A-Z])/g, ' $1').trim()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;