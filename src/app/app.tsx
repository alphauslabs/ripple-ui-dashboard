import React, { useEffect } from 'react';

import { LanguageProvider } from '@project-ed/lib/shared-i18n';
import { initializeStoreResetListener } from '@project-ed/lib/utils';

import { Button, Toaster } from '@project-ed/lib/ui';

import Home from './views/Home/Home';
import { MfePropTypes } from '@project-ed/lib/constants';
import { useHostStore } from '@stores/host';

interface DashboardProps extends MfePropTypes {
  standalone?: boolean;
}

/**
 * Dashboard App - This can be used both standalone and as a micro-frontend
 */
export function App({
  language = 'en',
  email,
  standalone = true,
  navigate, // Optional, used for navigation in micro-frontend context
}: DashboardProps) {
  const { setHostNavigateFunction, setEmail } = useHostStore();

  // Use useEffect to prevent infinite re-renders
  useEffect(() => {
    if (navigate) {
      setHostNavigateFunction(navigate);
    }
    if (email) {
      setEmail(email);
    }

    // Initialize store reset listener for logout cleanup
    initializeStoreResetListener();
  }, [navigate, setHostNavigateFunction]);

  return (
    <div className="min-h-screen py-6 px-8">
      <LanguageProvider defaultLanguage={language}>
        <Home />
      </LanguageProvider>
    </div>
  );
}

export default App;
