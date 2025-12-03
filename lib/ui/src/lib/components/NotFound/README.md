# NotFound Component

The NotFound component provides a user-friendly 404 error page for handling missing routes and resources in cost management applications. It features a clear error message, helpful guidance, and customizable navigation options to help users return to valid application areas.

## Usage

```tsx
import { NotFound } from '@alphaus/ripple-ui';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/costs" element={<CostAnalysis />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

## Props

### NotFoundProps

| Prop               | Type     | Default            | Description                                            |
| ------------------ | -------- | ------------------ | ------------------------------------------------------ |
| `returnTo`         | `string` | `"/"`              | Route to navigate to when the return button is clicked |
| `returnButtonText` | `string` | `"Return to Home"` | Text to display on the return button                   |

## Features

### User-Friendly Messaging

- **Clear Error Communication**: Explains what happened in user-friendly terms
- **Helpful Guidance**: Provides next steps for the user
- **Professional Appearance**: Maintains brand consistency even in error states

### Customizable Navigation

- **Flexible Return Route**: Configure where users should be directed
- **Custom Button Text**: Customize the action button text
- **React Router Integration**: Built-in Link component for navigation

### Responsive Design

- **Mobile Friendly**: Works well on all screen sizes
- **Centered Layout**: Professional, centered presentation
- **Consistent Styling**: Matches application design system

## Examples

### Basic Usage

```tsx
function BasicNotFound() {
  return <NotFound />;
}
```

### Custom Return Destination

```tsx
function CustomNotFound() {
  return (
    <NotFound returnTo="/dashboard" returnButtonText="Back to Dashboard" />
  );
}
```

### Cost Management Specific

```tsx
function CostAppNotFound() {
  return <NotFound returnTo="/costs" returnButtonText="View Cost Overview" />;
}
```

### Department-Specific 404

```tsx
function DepartmentNotFound() {
  return (
    <NotFound returnTo="/departments" returnButtonText="Browse Departments" />
  );
}
```

### Report Section 404

```tsx
function ReportNotFound() {
  return <NotFound returnTo="/reports" returnButtonText="Return to Reports" />;
}
```

## Advanced Usage

### With Custom Error Tracking

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function TrackedNotFound() {
  const location = useLocation();

  useEffect(() => {
    // Track 404 errors for analytics
    analytics.track('404_error', {
      path: location.pathname,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    });
  }, [location]);

  return (
    <NotFound returnTo="/dashboard" returnButtonText="Return to Dashboard" />
  );
}
```

### With Search Functionality

```tsx
function SearchableNotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-neutral-900 mb-3">
        Page Not Found
      </h1>
      <div className="text-xl text-neutral-600 mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </div>

      <div className="flex flex-col items-center gap-4 max-w-md">
        <p className="text-neutral-700">Try searching for what you need:</p>

        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Search costs, reports, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Search
          </button>
        </div>

        <div className="flex gap-2 mt-4">
          <Link to="/dashboard">
            <Button variant="default">Dashboard</Button>
          </Link>
          <Link to="/costs">
            <Button variant="outline">Cost Analysis</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### With Breadcrumb Context

```tsx
function ContextualNotFound() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbContext = () => {
    if (pathSegments.includes('costs')) {
      return {
        returnTo: '/costs',
        returnButtonText: 'Return to Cost Analysis',
        context: 'Cost Management',
      };
    } else if (pathSegments.includes('reports')) {
      return {
        returnTo: '/reports',
        returnButtonText: 'Return to Reports',
        context: 'Reporting',
      };
    } else if (pathSegments.includes('budgets')) {
      return {
        returnTo: '/budgets',
        returnButtonText: 'Return to Budgets',
        context: 'Budget Management',
      };
    }
    return {
      returnTo: '/',
      returnButtonText: 'Return to Home',
      context: 'Application',
    };
  };

  const { returnTo, returnButtonText, context } = getBreadcrumbContext();

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="text-sm text-neutral-500 mb-2">{context}</div>
      <h1 className="text-4xl font-bold text-neutral-900 mb-3">
        Page Not Found
      </h1>
      <div className="text-xl text-neutral-600 mb-8">
        The requested {context.toLowerCase()} page could not be found.
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-neutral-700">
          You can return to the {context.toLowerCase()} section or explore other
          areas.
        </p>

        <div className="flex gap-2">
          <Link to={returnTo}>
            <Button variant="default">{returnButtonText}</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### With Suggested Actions

```tsx
function SuggestedActionsNotFound() {
  const suggestions = [
    { label: 'View Cost Dashboard', path: '/costs', icon: '📊' },
    { label: 'Generate Report', path: '/reports/new', icon: '📋' },
    { label: 'Manage Budgets', path: '/budgets', icon: '💰' },
    { label: 'System Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-neutral-900 mb-3">
        Page Not Found
      </h1>
      <div className="text-xl text-neutral-600 mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </div>

      <div className="flex flex-col items-center gap-6">
        <p className="text-neutral-700">
          Here are some things you might want to do:
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          {suggestions.map((suggestion, index) => (
            <Link key={index} to={suggestion.path}>
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">{suggestion.icon}</div>
                <div className="text-sm font-medium">{suggestion.label}</div>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/">
          <Button variant="default" className="mt-4">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
```

## Error Boundary Integration

### Using with Error Boundaries

```tsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <NotFound
          returnTo="/dashboard"
          returnButtonText="Return to Dashboard"
        />
      );
    }

    return this.props.children;
  }
}
```

### With Resource Not Found

```tsx
function ResourceNotFound({
  resourceType,
  resourceId,
}: {
  resourceType: string;
  resourceId: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-neutral-900 mb-3">
        {resourceType} Not Found
      </h1>
      <div className="text-xl text-neutral-600 mb-8">
        The {resourceType.toLowerCase()} with ID "{resourceId}" could not be
        found.
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-neutral-700">
          It may have been deleted, moved, or you may not have permission to
          access it.
        </p>

        <div className="flex gap-2">
          <Link to={`/${resourceType.toLowerCase()}s`}>
            <Button variant="default">Browse {resourceType}s</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## Styling

The component uses Tailwind CSS classes for styling:

- **Layout**: Flexbox centering with responsive padding
- **Typography**: Consistent heading and text styles
- **Spacing**: Logical spacing between elements
- **Colors**: Neutral color palette for professional appearance

### Custom Styling

```tsx
function CustomStyledNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md">
        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          Page Not Found
        </h1>
        <div className="text-xl text-blue-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </div>
        <Link to="/dashboard">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
```

## Accessibility

The NotFound component provides good accessibility:

- **Semantic HTML**: Uses proper heading hierarchy
- **Screen Reader Friendly**: Clear, descriptive text
- **Keyboard Navigation**: Focusable button elements
- **Color Contrast**: Sufficient contrast for readability

## Best Practices

### User Experience

- Provide clear, helpful messaging
- Offer multiple navigation options
- Include search functionality when appropriate
- Consider context-specific suggestions

### Error Handling

- Log 404 errors for analysis
- Provide fallback routes
- Handle various error scenarios
- Consider user permissions

### Performance

- Keep component lightweight
- Avoid unnecessary re-renders
- Use efficient routing patterns
- Consider lazy loading for suggestions

## Cost Management Use Cases

The NotFound component is useful for:

- **Route Protection**: Handle invalid URLs in cost management sections
- **Resource Missing**: When specific cost reports or resources aren't found
- **Permission Errors**: When users access restricted cost data
- **Broken Links**: Handle broken navigation in complex cost interfaces
- **API Errors**: Display when cost data endpoints return 404
- **Deep Links**: Handle invalid or expired deep links to cost analyses

## Related Components

- [Button](../Button/README.md) - Used for navigation actions
- [Modal](../Modal/README.md) - Alternative for error messaging
- [Alert](../Alert/README.md) - Inline error messaging
- [Banner](../Banner/README.md) - System-wide error notifications
