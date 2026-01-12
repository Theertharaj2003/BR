import React, { useState } from 'react';
import { Search, Bell, Settings, LogOut, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import Input from '../ui/Input';

const TopBar = ({ onToggleSidebar }) => {
  const { user, logout, switchRole, availableRoles } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRoleSwitch = (role) => {
    switchRole(role);
    setShowProfileMenu(false);
  };

  return (
    <header className="bg-white border-b border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search students, teachers, classes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-100 dark:placeholder-neutral-500"
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
            <Bell className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <Avatar
                src={user?.avatar}
                alt={user?.name}
                fallback={user?.name?.charAt(0)}
                size="sm"
              />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hidden md:block">
                {user?.name}
              </span>
            </button>

            {showProfileMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 z-20">
                  <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center space-x-3">
                      <Avatar
                        src={user?.avatar}
                        alt={user?.name}
                        fallback={user?.name?.charAt(0)}
                        size="md"
                      />
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                          {user?.name}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 capitalize">
                          {user?.role?.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    {/* Role switching for demo */}
                    <div className="px-4 py-2">
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        Switch Role (Demo)
                      </p>
                    </div>
                    {availableRoles.map((role) => (
                      <button
                        key={role}
                        onClick={() => handleRoleSwitch(role)}
                        className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700 capitalize"
                      >
                        {role.replace(/([A-Z])/g, ' $1').trim()}
                      </button>
                    ))}

                    <div className="border-t border-neutral-200 dark:border-neutral-700 my-2" />

                    <button className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700 flex items-center">
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </button>

                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;