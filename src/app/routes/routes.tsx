import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Home } from '../views';
import { Analytics } from '../views/Analytics/Analytics';
import { Settings } from '../views/Settings/Settings';
import { DashboardNav } from '../components';
import { NotFound } from '@project-ed/lib/ui';
import { NavigationManager } from '../components/NavigationManager';

/**
 * Dashboard Layout Component - Wraps dashboard content with navigation
 */
const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6">
    <DashboardNav />
    {children}
  </div>
);

/**
 * Dashboard Routes Configuration - Contains all routes for the dashboard application
 */
export const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: 'dashboard',
        element: (
          <DashboardLayout>
            <NavigationManager>
              <Outlet />
            </NavigationManager>
          </DashboardLayout>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'analytics',
            element: <Analytics />,
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
      {
        path: '*',
        element: (
          <NotFound
            returnTo="/dashboard"
            returnButtonText="Return to Dashboard"
          />
        ),
      },
    ],
  },
];
