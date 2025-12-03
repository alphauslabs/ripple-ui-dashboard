import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  BarChart3,
  Settings,
  AlertTriangle,
} from 'lucide-react';

export function DashboardNav() {
  const { t } = useTranslation();
  const location = useLocation();

  // Simple nav items without complex isActive logic
  const navItems = [
    { path: '/dashboard', label: 'Overview', icon: HomeIcon },
    { path: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  // Function to determine if a path is active
  const isPathActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="mb-8 bg-yellow-100 p-1">
      {/* Demo indicator banner */}
      <div className="bg-yellow-100 text-yellow-800 px-3 rounded-md flex items-center text-sm font-medium">
        <AlertTriangle className="h-4 w-4 mr-2 flex-shrink-0" />
        For Demo Only
      </div>

      <div className="flex space-x-1 bg-neutral-100 p-1 rounded-lg">
        {navItems.map((item) => {
          const active = isPathActive(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors 
                ${
                  active
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200'
                }`}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {t(item.label)}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default DashboardNav;
