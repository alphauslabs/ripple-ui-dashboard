# SpinnerLoader Component

The SpinnerLoader component provides a full-page loading spinner for indicating global loading states, such as application initialization, major data fetching operations, or page transitions. It features a prominent circular spinner with smooth animation and automatic dark mode support, perfect for cost management applications that need to indicate system-wide loading processes.

## Usage

```tsx
import { FullPageSpinner } from '@alphaus/ripple-ui';
import { useState, useEffect } from 'react';

function App() {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsInitializing(false);
    };

    initializeApp();
  }, []);

  if (isInitializing) {
    return <FullPageSpinner />;
  }

  return <div>{/* Your app content */}</div>;
}
```

## Features

### Full-Screen Coverage

- **Complete Overlay**: Covers entire viewport during loading
- **Centered Positioning**: Spinner positioned in the center of the screen
- **Background Coverage**: Solid background prevents interaction with underlying content

### Smooth Animation

- **CSS Animation**: Smooth 360-degree rotation using CSS transforms
- **Optimized Performance**: Hardware-accelerated animations
- **Infinite Loop**: Continuous rotation until dismissed

### Theme Support

- **Dark Mode**: Automatic dark mode background support
- **Consistent Branding**: Uses theme colors (tangBlue-600)
- **Accessible Colors**: High contrast for visibility

## Examples

### Application Initialization

```tsx
function AppInitializer() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load configuration
        await loadConfig();

        // Initialize auth
        await initializeAuth();

        // Load user preferences
        await loadUserPreferences();

        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize application');
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return <MainApplication />;
}
```

### Route-Based Loading

```tsx
import { useRouter } from 'next/router';

function RouteLoader() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsNavigating(true);
    const handleRouteChangeComplete = () => setIsNavigating(false);
    const handleRouteChangeError = () => setIsNavigating(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  return (
    <>
      {isNavigating && <FullPageSpinner />}
      {/* Your page content */}
    </>
  );
}
```

### Data Processing Loading

```tsx
function CostReportProcessor() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [reportData, setReportData] = useState(null);

  const generateReport = async () => {
    setIsProcessing(true);

    try {
      // Simulate heavy data processing
      const response = await fetch('/api/generate-cost-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ period: '2024-01' }),
      });

      const data = await response.json();
      setReportData(data);
    } catch (error) {
      console.error('Report generation failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <button onClick={generateReport} disabled={isProcessing}>
        Generate Cost Report
      </button>

      {isProcessing && <FullPageSpinner />}

      {reportData && <div>{/* Display report data */}</div>}
    </div>
  );
}
```

### Authentication Loading

```tsx
function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const response = await fetch('/api/auth/verify', {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsAuthenticating(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticating) {
    return <FullPageSpinner />;
  }

  if (!user) {
    return <LoginPage />;
  }

  return <>{children}</>;
}
```

### Large Dataset Loading

```tsx
function CostAnalyticsDashboard() {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        // Load multiple data sources
        const [costData, usageData, forecastData, budgetData] =
          await Promise.all([
            fetch('/api/costs').then((r) => r.json()),
            fetch('/api/usage').then((r) => r.json()),
            fetch('/api/forecast').then((r) => r.json()),
            fetch('/api/budgets').then((r) => r.json()),
          ]);

        setAnalyticsData({
          costs: costData,
          usage: usageData,
          forecast: forecastData,
          budgets: budgetData,
        });
      } catch (error) {
        console.error('Failed to load analytics data:', error);
      } finally {
        setIsLoadingData(false);
      }
    };

    loadAnalytics();
  }, []);

  if (isLoadingData) {
    return <FullPageSpinner />;
  }

  return <div>{/* Analytics dashboard content */}</div>;
}
```

## Styling

The component uses a fixed set of Tailwind classes for consistent appearance:

- **Container**: `h-screen w-screen` for full viewport coverage
- **Background**: `bg-white dark:bg-gray-800` for theme support
- **Spinner**: `h-32 w-32` for prominent size
- **Colors**: `border-t-tangBlue-600` for brand consistency
- **Animation**: `animate-spin` for smooth rotation

### Custom Spinner Variant

```tsx
function CustomSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-gray-800">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-8 border-t-blue-600 border-b-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-blue-600 text-lg font-semibold">Loading...</div>
        </div>
      </div>
    </div>
  );
}
```

## Loading States Integration

### With Error Handling

```tsx
function LoadingStateManager() {
  const [state, setState] = useState<'loading' | 'success' | 'error'>(
    'loading'
  );
  const [error, setError] = useState<string | null>(null);

  const handleLoad = async () => {
    setState('loading');
    setError(null);

    try {
      await performDataLoad();
      setState('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setState('error');
    }
  };

  if (state === 'loading') {
    return <FullPageSpinner />;
  }

  if (state === 'error') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={handleLoad}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <SuccessContent />;
}
```

### Progressive Loading

```tsx
function ProgressiveLoader() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingSteps = [
    'Initializing application...',
    'Loading configuration...',
    'Authenticating user...',
    'Preparing dashboard...',
  ];

  useEffect(() => {
    const loadApp = async () => {
      for (let i = 0; i < loadingSteps.length; i++) {
        setLoadingStep(i);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsComplete(true);
    };

    loadApp();
  }, []);

  if (isComplete) {
    return <MainApp />;
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-gray-800">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-8 border-t-tangBlue-600 border-b-transparent mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {loadingSteps[loadingStep]}
        </p>
      </div>
    </div>
  );
}
```

## Accessibility

The SpinnerLoader component should include accessibility features:

- **ARIA Labels**: Describe the loading state
- **Screen Reader Support**: Announce loading status
- **Focus Management**: Prevent focus on background elements

### Enhanced Accessibility

```tsx
function AccessibleSpinner() {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-white dark:bg-gray-800"
      role="status"
      aria-label="Loading application"
    >
      <div className="animate-spin rounded-full h-32 w-32 border-8 border-t-tangBlue-600 border-b-transparent"></div>
      <span className="sr-only">Loading, please wait...</span>
    </div>
  );
}
```

## Best Practices

### Performance

- Use sparingly for major loading states only
- Implement timeout mechanisms for long-running operations
- Consider skeleton loading for partial content
- Provide feedback for operations taking longer than expected

### User Experience

- Show immediately for operations expected to take >500ms
- Provide progress indicators for operations with known duration
- Include cancel options for long-running operations
- Consider contextual loading messages

### Implementation

- Always have a fallback/timeout mechanism
- Handle error states gracefully
- Ensure proper cleanup of async operations
- Test with slow network conditions

## Cost Management Use Cases

The SpinnerLoader component is ideal for:

- **Application Startup**: Initial cost dashboard loading
- **Report Generation**: Complex cost analysis processing
- **Data Import**: Large dataset imports and processing
- **Authentication**: User login and session validation
- **Configuration Loading**: System settings and preferences
- **Bulk Operations**: Mass resource updates or deletions

## Related Components

- [Skeleton](../Skeleton/README.md) - Alternative loading placeholder
- [ProgressBar](../ProgressBar/README.md) - Progress indication with completion percentage
- [Modal](../Modal/README.md) - Container component that might need loading states
- [Card](../Card/README.md) - Container component with loading states
