# Popover Component

The Popover component provides a floating panel that appears relative to a trigger element, perfect for displaying contextual information, actions, or forms. Built on Radix UI primitives, it offers comprehensive accessibility, flexible positioning, and smooth animations, making it ideal for cost management interfaces that need to show detailed information or actions without navigation.

## Usage

```tsx
import { Popover, PopoverTrigger, PopoverContent } from '@alphaus/ripple-ui';

function CostDetailsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          View Cost Details
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-3">
          <h3 className="font-semibold">Cost Breakdown</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Compute:</span>
              <span>$1,234.56</span>
            </div>
            <div className="flex justify-between">
              <span>Storage:</span>
              <span>$567.89</span>
            </div>
            <div className="flex justify-between">
              <span>Network:</span>
              <span>$123.45</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

## Components

### Popover

Root component that manages the popover state and positioning.

### PopoverTrigger

Element that triggers the popover to open/close when interacted with.

### PopoverContent

The actual popover content panel that appears when triggered.

## Props

### PopoverContent Props

| Prop         | Type                           | Default    | Description                              |
| ------------ | ------------------------------ | ---------- | ---------------------------------------- |
| `align`      | `'start' \| 'center' \| 'end'` | `'center'` | Horizontal alignment relative to trigger |
| `sideOffset` | `number`                       | `4`        | Distance from trigger element in pixels  |
| `className`  | `string`                       | -          | Additional CSS classes                   |
| `children`   | `React.ReactNode`              | -          | Content to display in the popover        |

All other props from Radix UI Popover are supported.

## Features

### Flexible Positioning

- **Smart Positioning**: Automatically positions to avoid viewport edges
- **Alignment Options**: Start, center, or end alignment
- **Side Offset**: Configurable distance from trigger
- **Collision Detection**: Automatically adjusts position when constrained

### Smooth Animations

- **Fade In/Out**: Smooth opacity transitions
- **Scale Animation**: Zoom effect on open/close
- **Slide Animation**: Directional sliding based on position
- **Performance Optimized**: CSS-based animations

### Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA attributes
- **Focus Management**: Manages focus when opening/closing
- **Escape Key**: Close with Escape key

## Examples

### Resource Actions Menu

```tsx
function ResourceActionsPopover({ resource }: { resource: Resource }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 rounded hover:bg-gray-100">
          <MoreVertical className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-48">
        <div className="space-y-1">
          <button className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded">
            View Details
          </button>
          <button className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded">
            Edit Tags
          </button>
          <button className="w-full px-3 py-2 text-left hover:bg-gray-100 rounded">
            Schedule Shutdown
          </button>
          <hr className="my-1" />
          <button className="w-full px-3 py-2 text-left hover:bg-red-100 text-red-600 rounded">
            Terminate
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Cost Trend Chart

```tsx
function CostTrendPopover({ data }: { data: CostData[] }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <TrendingUp className="h-4 w-4 mr-1" />
          View Trend
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="text-sm font-medium">Cost Trend (Last 7 Days)</div>
          <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
            {/* Simple trend visualization */}
            <div className="flex items-end space-x-1">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-6 bg-blue-500 rounded-t"
                  style={{
                    height: `${
                      (item.cost / Math.max(...data.map((d) => d.cost))) * 100
                    }px`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Average: $
            {(
              data.reduce((sum, item) => sum + item.cost, 0) / data.length
            ).toFixed(2)}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Quick Filter Options

```tsx
function QuickFilterPopover({
  onFilterChange,
}: {
  onFilterChange: (filters: FilterOptions) => void;
}) {
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: '7d',
    services: [],
    regions: [],
  });

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-3 py-2 border rounded-md hover:bg-gray-50">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Date Range</label>
            <select
              value={filters.dateRange}
              onChange={(e) =>
                setFilters({ ...filters, dateRange: e.target.value })
              }
              className="w-full border rounded px-3 py-2"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Services</label>
            <div className="space-y-2">
              {['EC2', 'S3', 'RDS', 'Lambda'].map((service) => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.services.includes(service)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFilters({
                          ...filters,
                          services: [...filters.services, service],
                        });
                      } else {
                        setFilters({
                          ...filters,
                          services: filters.services.filter(
                            (s) => s !== service
                          ),
                        });
                      }
                    }}
                    className="mr-2"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleApplyFilters}
              className="flex-1 px-3 py-2 bg-blue-600 text-white rounded"
            >
              Apply
            </button>
            <button
              onClick={() =>
                setFilters({ dateRange: '7d', services: [], regions: [] })
              }
              className="px-3 py-2 border rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Budget Alert Settings

```tsx
function BudgetAlertPopover({ budget }: { budget: Budget }) {
  const [alertSettings, setAlertSettings] = useState({
    enabled: budget.alertsEnabled,
    threshold: budget.alertThreshold,
    recipients: budget.alertRecipients,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 rounded hover:bg-gray-100">
          <Bell className="h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Budget Alerts</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={alertSettings.enabled}
                onChange={(e) =>
                  setAlertSettings({
                    ...alertSettings,
                    enabled: e.target.checked,
                  })
                }
                className="mr-2"
              />
              Enabled
            </label>
          </div>

          {alertSettings.enabled && (
            <>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Alert Threshold (%)
                </label>
                <input
                  type="number"
                  value={alertSettings.threshold}
                  onChange={(e) =>
                    setAlertSettings({
                      ...alertSettings,
                      threshold: parseInt(e.target.value),
                    })
                  }
                  className="w-full border rounded px-3 py-2"
                  min="50"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Recipients
                </label>
                <textarea
                  value={alertSettings.recipients.join(', ')}
                  onChange={(e) =>
                    setAlertSettings({
                      ...alertSettings,
                      recipients: e.target.value
                        .split(',')
                        .map((s) => s.trim()),
                    })
                  }
                  className="w-full border rounded px-3 py-2"
                  rows={3}
                  placeholder="Enter email addresses separated by commas"
                />
              </div>
            </>
          )}

          <button className="w-full px-3 py-2 bg-blue-600 text-white rounded">
            Save Settings
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Service Information Card

```tsx
function ServiceInfoPopover({ service }: { service: CloudService }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <Info className="h-4 w-4 mr-1" />
          {service.name}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
              <service.icon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">{service.name}</h3>
              <p className="text-sm text-gray-500">{service.category}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Region:</span>
              <br />
              {service.region}
            </div>
            <div>
              <span className="font-medium">Status:</span>
              <br />
              <span
                className={`px-2 py-1 rounded text-xs ${
                  service.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {service.status}
              </span>
            </div>
          </div>

          <div className="pt-2 border-t">
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>

          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              Manage
            </button>
            <button className="px-3 py-1 border rounded text-sm">
              View Costs
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

## Positioning

### Alignment Options

```tsx
// Left aligned
<PopoverContent align="start">...</PopoverContent>

// Center aligned (default)
<PopoverContent align="center">...</PopoverContent>

// Right aligned
<PopoverContent align="end">...</PopoverContent>
```

### Side Offset

```tsx
// Close to trigger
<PopoverContent sideOffset={2}>...</PopoverContent>

// Default distance
<PopoverContent sideOffset={4}>...</PopoverContent>

// Far from trigger
<PopoverContent sideOffset={12">...</PopoverContent>
```

## Accessibility

The Popover component provides full accessibility support:

- **Keyboard Navigation**: Tab, Shift+Tab, Enter, Space, Escape
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Automatic focus handling
- **Dismissal**: Click outside or Escape key to close

### Enhanced Accessibility

```tsx
function AccessiblePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          aria-label="Open cost details"
        >
          View Details
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div role="dialog" aria-label="Cost details">
          {/* Content */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

## Best Practices

### Content Design

- Keep content concise and focused
- Use clear headings and structure
- Provide clear action options
- Consider mobile responsiveness

### Interaction Design

- Use appropriate trigger elements
- Provide clear visual feedback
- Consider keyboard users
- Test with screen readers

### Performance

- Lazy load heavy content
- Use portal for complex content
- Minimize render cycles
- Consider animation performance

## Cost Management Use Cases

The Popover component is perfect for:

- **Cost Details**: Show detailed cost breakdowns without navigation
- **Resource Actions**: Provide contextual actions for resources
- **Quick Filters**: Allow rapid filtering without full-page forms
- **Settings Panels**: Adjust preferences and configurations
- **Information Cards**: Display additional service or resource information
- **Alert Configuration**: Set up budget alerts and notifications

## Related Components

- [Tooltip](../Tooltip/README.md) - Simpler hover-based information display
- [Modal](../Modal/README.md) - Full-screen overlay for complex content
- [Dialog](../Dialog/README.md) - Modal dialog with focus management
- [DropdownMenu](../DropdownMenu/README.md) - Menu-specific popover implementation
