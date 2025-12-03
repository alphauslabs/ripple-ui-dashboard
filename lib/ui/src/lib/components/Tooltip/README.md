# Tooltip Component

The Tooltip component provides contextual help and additional information that appears on hover or focus. Built on Radix UI primitives, it offers accessible, customizable tooltips perfect for explaining complex cost management features, displaying additional data details, and providing user guidance without cluttering the interface.

## Usage

```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from '@alphaus/ripple-ui';

<Tooltip>
  <TooltipTrigger asChild>
    <button className="px-4 py-2 bg-blue-600 text-white rounded">
      Hover for info
    </button>
  </TooltipTrigger>
  <TooltipContent>
    <p>This is helpful information about the button</p>
  </TooltipContent>
</Tooltip>;
```

## Components

### Tooltip

The root container that manages tooltip state and positioning.

#### Props

Accepts all props from Radix UI Tooltip Root.

### TooltipProvider

Optional provider for configuring tooltip behavior across your application.

#### Props

| Prop                | Type     | Default | Description                                     |
| ------------------- | -------- | ------- | ----------------------------------------------- |
| `delayDuration`     | `number` | `0`     | Delay in milliseconds before tooltip appears    |
| `skipDelayDuration` | `number` | `300`   | Time to skip delay when moving between tooltips |

### TooltipTrigger

The element that triggers the tooltip display.

#### Props

| Prop       | Type              | Default | Description                               |
| ---------- | ----------------- | ------- | ----------------------------------------- |
| `asChild`  | `boolean`         | `false` | Render as child element instead of button |
| `children` | `React.ReactNode` | -       | Trigger element content                   |

### TooltipContent

The tooltip content that appears on hover or focus.

#### Props

| Prop         | Type                                     | Default | Description                          |
| ------------ | ---------------------------------------- | ------- | ------------------------------------ |
| `side`       | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Preferred side for tooltip placement |
| `sideOffset` | `number`                                 | `0`     | Distance from trigger element        |
| `className`  | `string`                                 | -       | Additional CSS classes               |
| `children`   | `React.ReactNode`                        | -       | Tooltip content                      |

## Examples

### Basic Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <span className="border-b border-dashed border-gray-400 cursor-help">
      Monthly Costs
    </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>Total costs for the current month including all services</p>
  </TooltipContent>
</Tooltip>
```

### Cost Breakdown Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <div className="p-4 border rounded-lg cursor-help">
      <h3 className="font-semibold">Total Cost</h3>
      <p className="text-2xl font-bold text-blue-600">$3,245.67</p>
    </div>
  </TooltipTrigger>
  <TooltipContent side="right" sideOffset={10}>
    <div className="space-y-1">
      <p className="font-semibold">Cost Breakdown:</p>
      <p>• Compute: $1,890.45</p>
      <p>• Storage: $745.22</p>
      <p>• Network: $610.00</p>
    </div>
  </TooltipContent>
</Tooltip>
```

### Help Icon Tooltip

```tsx
import { HelpCircle } from 'lucide-react';

<div className="flex items-center gap-2">
  <label className="text-sm font-medium">Budget Threshold</label>
  <Tooltip>
    <TooltipTrigger asChild>
      <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
    </TooltipTrigger>
    <TooltipContent>
      <p className="max-w-xs">
        Set the percentage of your budget that triggers an alert. We recommend
        setting this to 80% to get early warnings.
      </p>
    </TooltipContent>
  </Tooltip>
</div>;
```

### Service Status Tooltip

```tsx
const services = [
  { name: 'EC2', status: 'healthy', instances: 12, cost: 1245.67 },
  { name: 'S3', status: 'warning', instances: 8, cost: 389.45 },
  { name: 'RDS', status: 'error', instances: 2, cost: 756.23 },
];

{
  services.map((service) => (
    <Tooltip key={service.name}>
      <TooltipTrigger asChild>
        <div className="flex items-center p-3 border rounded-lg cursor-help">
          <div
            className={`w-3 h-3 rounded-full mr-3 ${
              service.status === 'healthy'
                ? 'bg-green-500'
                : service.status === 'warning'
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}
          />
          <span className="font-medium">{service.name}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <div className="space-y-1">
          <p className="font-semibold">{service.name} Details</p>
          <p>Status: {service.status}</p>
          <p>Instances: {service.instances}</p>
          <p>Monthly Cost: ${service.cost.toFixed(2)}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ));
}
```

### Chart Data Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <div className="w-6 h-24 bg-blue-500 rounded cursor-help" />
  </TooltipTrigger>
  <TooltipContent side="top">
    <div className="text-center">
      <p className="font-semibold">March 2024</p>
      <p>$2,847.32</p>
      <p className="text-xs text-gray-300">+12.5% from last month</p>
    </div>
  </TooltipContent>
</Tooltip>
```

### Complex Resource Tooltip

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-help">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">web-server-01</h4>
        <span className="text-sm text-green-600">Running</span>
      </div>
      <p className="text-sm text-gray-600">t3.medium</p>
    </div>
  </TooltipTrigger>
  <TooltipContent side="right" className="max-w-sm">
    <div className="space-y-2">
      <div className="border-b border-gray-600 pb-2">
        <p className="font-semibold">Instance Details</p>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-gray-300">Instance ID:</p>
          <p>i-1234567890abcdef0</p>
        </div>
        <div>
          <p className="text-gray-300">Region:</p>
          <p>us-east-1</p>
        </div>
        <div>
          <p className="text-gray-300">CPU:</p>
          <p>2 vCPUs (65% avg)</p>
        </div>
        <div>
          <p className="text-gray-300">Memory:</p>
          <p>4 GB (78% avg)</p>
        </div>
        <div>
          <p className="text-gray-300">Daily Cost:</p>
          <p>$1.84</p>
        </div>
        <div>
          <p className="text-gray-300">Monthly Est.:</p>
          <p>$55.32</p>
        </div>
      </div>
    </div>
  </TooltipContent>
</Tooltip>
```

### Form Field Tooltip

```tsx
<div className="space-y-2">
  <div className="flex items-center gap-2">
    <label htmlFor="budget" className="text-sm font-medium">
      Monthly Budget Limit
    </label>
    <Tooltip>
      <TooltipTrigger asChild>
        <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-xs space-y-1">
          <p className="font-semibold">Budget Limit</p>
          <p>This sets the maximum amount you want to spend per month.</p>
          <p className="text-xs text-gray-300">
            Alerts will be sent when you reach 80% of this limit.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  </div>
  <input
    id="budget"
    type="number"
    className="w-full p-2 border rounded"
    placeholder="Enter budget amount"
  />
</div>
```

### Table Header Tooltip

```tsx
<table className="w-full">
  <thead>
    <tr>
      <th className="text-left p-2">
        <div className="flex items-center gap-2">
          <span>Amortized Cost</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="max-w-xs">
                <p className="font-semibold">Amortized Cost</p>
                <p>
                  The effective cost including upfront payments and discounts
                  distributed over the usage period.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </th>
    </tr>
  </thead>
</table>
```

### Delayed Tooltip with Provider

```tsx
<TooltipProvider delayDuration={500}>
  <div className="space-x-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Save your current settings</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 bg-red-600 text-white rounded">
          Delete
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This action cannot be undone</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>
```

## Positioning

The tooltip automatically positions itself to stay within the viewport:

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <button>Trigger</button>
  </TooltipTrigger>
  <TooltipContent
    side="bottom" // Preferred side
    sideOffset={8} // Distance from trigger
    align="center" // Alignment on the chosen side
    alignOffset={0} // Offset from alignment
  >
    <p>Positioned tooltip</p>
  </TooltipContent>
</Tooltip>
```

## Accessibility

- **Keyboard Navigation**: Accessible via keyboard focus and Escape key
- **Screen Reader Support**: Proper ARIA attributes and roles
- **Focus Management**: Respects focus order and keyboard navigation
- **High Contrast**: Visible in high contrast modes
- **Reduced Motion**: Respects user preferences for reduced motion

## Styling

The default tooltip styling includes:

- Dark background (`bg-neutral-20`)
- White text (`text-white`)
- Rounded corners and padding
- Smooth animations for show/hide
- Arrow pointing to trigger element

### Custom Styling

```tsx
<TooltipContent className="bg-blue-600 text-white border border-blue-400">
  <p>Custom styled tooltip</p>
</TooltipContent>
```

## Best Practices

1. **Concise Content**: Keep tooltip text brief and focused
2. **Essential Information**: Only include information that aids understanding
3. **Consistent Placement**: Use consistent side placement within similar contexts
4. **Appropriate Triggers**: Use tooltips for elements that benefit from additional context
5. **Mobile Consideration**: Ensure tooltips work well on touch devices
6. **Performance**: Avoid complex content that might cause layout shifts

## Cost Management Use Cases

- **Metric Explanations**: Explain complex cost metrics and calculations
- **Service Information**: Provide detailed service and resource information
- **Budget Guidance**: Offer guidance on budget settings and thresholds
- **Status Indicators**: Explain service status and health indicators
- **Chart Data**: Display detailed data points on hover in charts and graphs
- **Form Help**: Provide contextual help for form fields and settings
- **Cost Breakdowns**: Show detailed cost breakdowns for summary values
- **Feature Explanations**: Explain advanced features and their benefits
