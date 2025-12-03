# Chip Component

The Chip component provides compact elements for displaying tags, categories, filters, and other discrete pieces of information. With support for different variants, sizes, and removal functionality, chips are perfect for showing cost tags, service categories, filter selections, and resource labels in cost management interfaces.

**Design System Compliance**: This component uses the mandatory const coloring system with proper semantic color variants from the centralized theme constants.

## Usage

```tsx
import { Chip } from "@alphaus/ripple-ui";

// Basic chip
<Chip>Production</Chip>

// Chip with variant
<Chip variant="success">Active</Chip>

// Removable chip with improved close button
<Chip variant="info" onRemove={() => handleRemove()}>
  Environment: Development
</Chip>
```

## Props

| Prop       | Type                                                                     | Default     | Description                                                      |
| ---------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------- |
| `children` | `ReactNode`                                                              | -           | Content displayed inside the chip                                |
| `variant`  | `'default' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'disabled'` | `'default'` | Visual style variant using design system colors                  |
| `size`     | `'sm' \| 'md' \| 'lg'`                                                   | `'sm'`      | Size of the chip                                                 |
| `onRemove` | `() => void`                                                             | -           | Optional callback for removable chips with enhanced close button |

## Variants

### Default

Standard gray appearance for general purpose use.

```tsx
<Chip variant="default">Default Chip</Chip>
```

### Info

Blue styling for informational content.

```tsx
<Chip variant="info">Information</Chip>
```

### Success

Green styling for positive states or successful operations.

```tsx
<Chip variant="success">Active</Chip>
```

### Warning

Orange/yellow styling for cautionary information.

```tsx
<Chip variant="warning">High Usage</Chip>
```

### Error

Red styling for errors or critical issues.

```tsx
<Chip variant="error">Failed</Chip>
```

### Disabled

Grayed out appearance for disabled or inactive states.

```tsx
<Chip variant="disabled">Inactive</Chip>
```

## Sizes

```tsx
<div className="flex items-center gap-2">
  <Chip size="sm">Small</Chip>
  <Chip size="md">Medium</Chip>
  <Chip size="lg">Large</Chip>
</div>
```

## Examples

### Service Status Tags

```tsx
const services = [
  { name: 'EC2', status: 'running', variant: 'success' },
  { name: 'RDS', status: 'stopped', variant: 'error' },
  { name: 'S3', status: 'active', variant: 'info' },
  { name: 'Lambda', status: 'warning', variant: 'warning' },
];

<div className="flex flex-wrap gap-2">
  {services.map((service) => (
    <Chip key={service.name} variant={service.variant}>
      {service.name}: {service.status}
    </Chip>
  ))}
</div>;
```

### Cost Categories

```tsx
const categories = ['Compute', 'Storage', 'Network', 'Database', 'Analytics'];

<div className="space-y-2">
  <h3 className="text-sm font-medium">Cost Categories</h3>
  <div className="flex flex-wrap gap-2">
    {categories.map((category) => (
      <Chip key={category} variant="info" size="md">
        {category}
      </Chip>
    ))}
  </div>
</div>;
```

### Filter Tags with Removal

```tsx
const [activeFilters, setActiveFilters] = useState([
  { id: 1, label: 'Region: us-east-1', type: 'region' },
  { id: 2, label: 'Service: EC2', type: 'service' },
  { id: 3, label: 'Cost > $100', type: 'cost' },
]);

const removeFilter = (filterId) => {
  setActiveFilters((prev) => prev.filter((f) => f.id !== filterId));
};

<div className="space-y-2">
  <h3 className="text-sm font-medium">Active Filters</h3>
  <div className="flex flex-wrap gap-2">
    {activeFilters.map((filter) => (
      <Chip
        key={filter.id}
        variant="info"
        onRemove={() => removeFilter(filter.id)}
      >
        {filter.label}
      </Chip>
    ))}
  </div>
  {activeFilters.length === 0 && (
    <p className="text-sm text-gray-500">No filters applied</p>
  )}
</div>;
```

### Resource Tags

```tsx
const resourceTags = [
  { key: 'Environment', value: 'Production', variant: 'success' },
  { key: 'Team', value: 'Engineering', variant: 'info' },
  { key: 'Project', value: 'WebApp', variant: 'default' },
  { key: 'CostCenter', value: 'CC-001', variant: 'warning' },
];

<div className="space-y-2">
  <h3 className="text-sm font-medium">Resource Tags</h3>
  <div className="flex flex-wrap gap-2">
    {resourceTags.map((tag) => (
      <Chip key={tag.key} variant={tag.variant} size="sm">
        {tag.key}: {tag.value}
      </Chip>
    ))}
  </div>
</div>;
```

### Budget Status Indicators

```tsx
const budgets = [
  { name: 'Marketing', percentage: 45, status: 'healthy' },
  { name: 'Engineering', percentage: 78, status: 'warning' },
  { name: 'Sales', percentage: 95, status: 'critical' },
  { name: 'Operations', percentage: 12, status: 'healthy' },
];

const getVariant = (status) => {
  switch (status) {
    case 'healthy':
      return 'success';
    case 'warning':
      return 'warning';
    case 'critical':
      return 'error';
    default:
      return 'default';
  }
};

<div className="space-y-4">
  {budgets.map((budget) => (
    <div
      key={budget.name}
      className="flex items-center justify-between p-3 border rounded"
    >
      <span className="font-medium">{budget.name}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{budget.percentage}% used</span>
        <Chip variant={getVariant(budget.status)} size="sm">
          {budget.status}
        </Chip>
      </div>
    </div>
  ))}
</div>;
```

### Account Labels

```tsx
const accounts = [
  { id: 'prod', name: 'Production', type: 'critical' },
  { id: 'dev', name: 'Development', type: 'normal' },
  { id: 'test', name: 'Testing', type: 'normal' },
  { id: 'staging', name: 'Staging', type: 'warning' },
];

<div className="grid grid-cols-2 gap-4">
  {accounts.map((account) => (
    <div key={account.id} className="p-4 border rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{account.name}</h4>
        <Chip
          variant={
            account.type === 'critical'
              ? 'error'
              : account.type === 'warning'
              ? 'warning'
              : 'default'
          }
          size="sm"
        >
          {account.type}
        </Chip>
      </div>
      <p className="text-sm text-gray-600">Account ID: {account.id}</p>
    </div>
  ))}
</div>;
```

### Cost Alert Levels

```tsx
const alerts = [
  { level: 'Low', threshold: '50%', color: 'success' },
  { level: 'Medium', threshold: '75%', color: 'warning' },
  { level: 'High', threshold: '90%', color: 'error' },
  { level: 'Critical', threshold: '100%', color: 'error' },
];

<div className="space-y-2">
  <h3 className="text-sm font-medium">Alert Thresholds</h3>
  <div className="space-y-2">
    {alerts.map((alert) => (
      <div key={alert.level} className="flex items-center justify-between">
        <span className="text-sm">{alert.threshold} of budget</span>
        <Chip variant={alert.color} size="sm">
          {alert.level} Alert
        </Chip>
      </div>
    ))}
  </div>
</div>;
```

### Tag Selection Interface

```tsx
const [availableTags] = useState([
  'Production',
  'Development',
  'Testing',
  'Staging',
  'Critical',
  'Standard',
  'Temporary',
  'Archive',
]);
const [selectedTags, setSelectedTags] = useState(['Production', 'Critical']);

const toggleTag = (tag) => {
  setSelectedTags((prev) =>
    prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  );
};

<div className="space-y-4">
  <div className="space-y-2">
    <h3 className="text-sm font-medium">Available Tags</h3>
    <div className="flex flex-wrap gap-2">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
        >
          <Chip
            variant={selectedTags.includes(tag) ? 'info' : 'default'}
            size="sm"
          >
            {tag}
          </Chip>
        </button>
      ))}
    </div>
  </div>

  <div className="space-y-2">
    <h3 className="text-sm font-medium">Selected Tags</h3>
    <div className="flex flex-wrap gap-2">
      {selectedTags.map((tag) => (
        <Chip
          key={tag}
          variant="info"
          size="sm"
          onRemove={() => toggleTag(tag)}
        >
          {tag}
        </Chip>
      ))}
    </div>
  </div>
</div>;
```

### Usage Metrics

```tsx
const metrics = [
  { label: 'CPU', value: '65%', status: 'normal' },
  { label: 'Memory', value: '89%', status: 'high' },
  { label: 'Storage', value: '45%', status: 'normal' },
  { label: 'Network', value: '92%', status: 'critical' },
];

<div className="grid grid-cols-2 gap-4">
  {metrics.map((metric) => (
    <div key={metric.label} className="p-3 border rounded">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{metric.label}</span>
        <Chip
          variant={
            metric.status === 'critical'
              ? 'error'
              : metric.status === 'high'
              ? 'warning'
              : 'success'
          }
          size="sm"
        >
          {metric.value}
        </Chip>
      </div>
    </div>
  ))}
</div>;
```

## Accessibility

- **Keyboard Navigation**: Removable chips are keyboard accessible
- **Screen Reader Support**: Proper labeling for remove buttons
- **Focus Indicators**: Clear focus states for interactive elements
- **Color Independence**: Information conveyed through more than just color
- **Appropriate Roles**: Semantic HTML structure

## Best Practices

1. **Consistent Variants**: Use variants consistently across your application
2. **Meaningful Labels**: Keep chip text concise and descriptive
3. **Logical Grouping**: Group related chips together visually
4. **Remove Functionality**: Only add remove functionality when users can actually remove items
5. **Color Coding**: Use variant colors to convey meaning (success for positive, error for negative, etc.)
6. **Size Consistency**: Use consistent sizes within the same context

## Removable Chips

When the `onRemove` prop is provided, chips display an enhanced close button positioned beside the chip for easier access:

- **External positioning**: Close button is placed beside the chip content for better usability
- **Circular design**: Clean 16x16px circular button with proper touch target
- **Design system colors**: Uses neutral color palette for consistency
- **Smooth transitions**: 150ms duration for professional feel
- **Close icon**: Uses CloseIcon from the shared icons library for semantic clarity
- **Proper sizing**: 8x8px icon within the 16x16px button for optimal visibility
- **Accessibility**: Proper ARIA label and keyboard support

```tsx
const [selectedTags, setSelectedTags] = useState([
  'Production',
  'Critical',
  'US-East',
]);

const handleRemoveTag = (tagToRemove: string) => {
  setSelectedTags((tags) => tags.filter((tag) => tag !== tagToRemove));
};

<div className="flex flex-wrap gap-2">
  {selectedTags.map((tag) => (
    <Chip key={tag} variant="info" onRemove={() => handleRemoveTag(tag)}>
      {tag}
    </Chip>
  ))}
</div>;
```

## Cost Management Use Cases

- **Service Tags**: Label and categorize different cloud services
- **Environment Labels**: Distinguish between production, development, testing environments
- **Cost Categories**: Tag expenses by department, project, or cost center
- **Alert Levels**: Display different types of cost alerts and their severity
- **Filter Indicators**: Show active filters in cost analysis views
- **Resource Status**: Display the operational status of cloud resources
- **Budget Classifications**: Categorize different types of budgets and spending
- **Account Types**: Label different account types and their access levels
