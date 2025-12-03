# ProgressBar Component

The ProgressBar component provides visual progress indication for various operations and metrics. Built on Radix UI primitives with customizable variants and formatting options, it's perfect for displaying budget utilization, task completion, resource usage, and other measurable progress in cost management applications.

## Usage

```tsx
import { ProgressBar } from "@alphaus/ripple-ui";

// Basic progress bar
<ProgressBar value={65} max={100} />

// Progress bar with label and percentage
<ProgressBar
  value={75}
  max={100}
  label="Budget Used"
  valueFormat="percentage"
  variant="warning"
/>
```

## Props

| Prop          | Type                                                       | Default     | Description                              |
| ------------- | ---------------------------------------------------------- | ----------- | ---------------------------------------- |
| `value`       | `number`                                                   | `0`         | Current progress value                   |
| `max`         | `number`                                                   | `100`       | Maximum value for progress calculation   |
| `label`       | `string`                                                   | -           | Label displayed above the progress bar   |
| `valueFormat` | `'percentage' \| 'fraction' \| 'none'`                     | `'none'`    | Format for displaying the progress value |
| `statusText`  | `string`                                                   | -           | Additional status text below the bar     |
| `variant`     | `'default' \| 'success' \| 'warning' \| 'info' \| 'error'` | `'default'` | Visual style variant                     |
| `size`        | `'sm' \| 'default' \| 'lg'`                                | `'default'` | Size of the progress bar                 |
| `className`   | `string`                                                   | -           | Additional CSS classes                   |

## Variants

### Default

Standard neutral appearance for general progress indication.

```tsx
<ProgressBar value={45} label="Progress" valueFormat="percentage" />
```

### Success

Green styling for positive progress or completed states.

```tsx
<ProgressBar
  value={100}
  variant="success"
  label="Deployment Complete"
  valueFormat="percentage"
/>
```

### Warning

Orange/yellow styling for progress that needs attention.

```tsx
<ProgressBar
  value={85}
  variant="warning"
  label="Budget Usage"
  valueFormat="percentage"
  statusText="Approaching budget limit"
/>
```

### Info

Blue styling for informational progress.

```tsx
<ProgressBar
  value={60}
  variant="info"
  label="Resource Utilization"
  valueFormat="percentage"
/>
```

### Error

Red styling for error states or critical levels.

```tsx
<ProgressBar
  value={95}
  variant="error"
  label="Storage Full"
  valueFormat="percentage"
  statusText="Action required: Archive or delete files"
/>
```

## Sizes

```tsx
<div className="space-y-4">
  <ProgressBar value={40} size="sm" label="Small" valueFormat="percentage" />
  <ProgressBar
    value={60}
    size="default"
    label="Default"
    valueFormat="percentage"
  />
  <ProgressBar value={80} size="lg" label="Large" valueFormat="percentage" />
</div>
```

## Value Formats

### Percentage

Shows progress as a percentage of the maximum value.

```tsx
<ProgressBar value={75} max={100} valueFormat="percentage" label="Completion" />
```

### Fraction

Shows progress as current/max format.

```tsx
<ProgressBar
  value={8}
  max={12}
  valueFormat="fraction"
  label="Tasks Completed"
/>
```

### None

No value display, just the progress bar.

```tsx
<ProgressBar value={65} valueFormat="none" label="Loading..." />
```

## Examples

### Budget Utilization Dashboard

```tsx
const budgets = [
  {
    department: 'Engineering',
    used: 42350,
    total: 50000,
    status: 'healthy',
  },
  {
    department: 'Marketing',
    used: 18750,
    total: 25000,
    status: 'warning',
  },
  {
    department: 'Sales',
    used: 14250,
    total: 15000,
    status: 'critical',
  },
];

const getVariant = (used, total) => {
  const percentage = (used / total) * 100;
  if (percentage >= 95) return 'error';
  if (percentage >= 80) return 'warning';
  return 'success';
};

<div className="space-y-6">
  <h2 className="text-xl font-semibold">Budget Utilization</h2>
  {budgets.map((budget) => (
    <div key={budget.department} className="space-y-2">
      <ProgressBar
        value={budget.used}
        max={budget.total}
        label={budget.department}
        valueFormat="percentage"
        variant={getVariant(budget.used, budget.total)}
        statusText={`$${budget.used.toLocaleString()} of $${budget.total.toLocaleString()}`}
      />
    </div>
  ))}
</div>;
```

### Resource Usage Monitoring

```tsx
const resources = [
  { name: 'CPU Usage', current: 65.4, max: 100, unit: '%' },
  { name: 'Memory Usage', current: 78.2, max: 100, unit: '%' },
  { name: 'Storage Used', current: 245, max: 500, unit: 'GB' },
  { name: 'Network I/O', current: 1.2, max: 10, unit: 'GB/s' },
];

<div className="grid grid-cols-2 gap-6">
  {resources.map((resource) => {
    const percentage = (resource.current / resource.max) * 100;
    const variant =
      percentage > 90 ? 'error' : percentage > 75 ? 'warning' : 'success';

    return (
      <div key={resource.name} className="p-4 border rounded-lg">
        <ProgressBar
          value={percentage}
          max={100}
          label={resource.name}
          variant={variant}
          valueFormat="percentage"
          statusText={`${resource.current}${resource.unit} / ${resource.max}${resource.unit}`}
        />
      </div>
    );
  })}
</div>;
```

### Cost Optimization Progress

```tsx
const optimizationTasks = [
  {
    name: 'Right-size EC2 instances',
    completed: 8,
    total: 12,
    savings: 1250,
  },
  {
    name: 'Remove unused EBS volumes',
    completed: 15,
    total: 15,
    savings: 890,
  },
  {
    name: 'Optimize S3 storage classes',
    completed: 3,
    total: 7,
    savings: 340,
  },
];

<div className="space-y-6">
  <h2 className="text-xl font-semibold">Cost Optimization Progress</h2>
  {optimizationTasks.map((task) => {
    const isComplete = task.completed === task.total;
    const variant = isComplete ? 'success' : 'info';

    return (
      <div key={task.name} className="p-4 border rounded-lg space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{task.name}</h3>
          <span className="text-sm text-green-600 font-semibold">
            ${task.savings} saved
          </span>
        </div>
        <ProgressBar
          value={task.completed}
          max={task.total}
          variant={variant}
          valueFormat="fraction"
          statusText={isComplete ? 'Optimization complete' : 'In progress'}
        />
      </div>
    );
  })}
</div>;
```

### Monthly Spending Tracker

```tsx
const currentMonth = {
  spent: 8750,
  budget: 12000,
  daysElapsed: 18,
  daysTotal: 30,
};

const spentPercentage = (currentMonth.spent / currentMonth.budget) * 100;
const timePercentage =
  (currentMonth.daysElapsed / currentMonth.daysTotal) * 100;

const isOnTrack = spentPercentage <= timePercentage;
const variant =
  spentPercentage > 90 ? 'error' : spentPercentage > 80 ? 'warning' : 'success';

<div className="p-6 border rounded-lg space-y-6">
  <h2 className="text-xl font-semibold">March 2024 Spending</h2>

  <div className="space-y-4">
    <ProgressBar
      value={currentMonth.spent}
      max={currentMonth.budget}
      label="Budget Utilization"
      variant={variant}
      valueFormat="percentage"
      statusText={`$${currentMonth.spent.toLocaleString()} of $${currentMonth.budget.toLocaleString()} budget`}
    />

    <ProgressBar
      value={currentMonth.daysElapsed}
      max={currentMonth.daysTotal}
      label="Month Progress"
      variant="info"
      valueFormat="fraction"
      statusText={`${currentMonth.daysElapsed} of ${currentMonth.daysTotal} days elapsed`}
    />
  </div>

  <div
    className={`p-3 rounded text-sm ${
      isOnTrack ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
    }`}
  >
    {isOnTrack
      ? '✓ Spending is on track with the monthly timeline'
      : '⚠ Spending is ahead of the monthly timeline'}
  </div>
</div>;
```

### Savings Goals Dashboard

```tsx
const savingsGoals = [
  {
    name: 'Annual Savings Target',
    current: 15750,
    target: 25000,
    category: 'Overall',
  },
  {
    name: 'Compute Optimization',
    current: 8950,
    target: 12000,
    category: 'Compute',
  },
  {
    name: 'Storage Optimization',
    current: 4200,
    target: 8000,
    category: 'Storage',
  },
  {
    name: 'Reserved Instance Savings',
    current: 2600,
    target: 5000,
    category: 'Commitments',
  },
];

<div className="space-y-6">
  <h2 className="text-xl font-semibold">Savings Goals Progress</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {savingsGoals.map((goal) => {
      const percentage = (goal.current / goal.target) * 100;
      const variant =
        percentage >= 100
          ? 'success'
          : percentage >= 75
          ? 'info'
          : percentage >= 50
          ? 'warning'
          : 'error';

      return (
        <div key={goal.name} className="p-4 border rounded-lg">
          <div className="mb-3">
            <h3 className="font-medium">{goal.name}</h3>
            <p className="text-sm text-gray-600">{goal.category}</p>
          </div>
          <ProgressBar
            value={goal.current}
            max={goal.target}
            variant={variant}
            valueFormat="percentage"
            statusText={`$${goal.current.toLocaleString()} of $${goal.target.toLocaleString()} target`}
          />
        </div>
      );
    })}
  </div>
</div>;
```

### Data Migration Progress

```tsx
const [migrationProgress, setMigrationProgress] = useState(72);

useEffect(() => {
  const interval = setInterval(() => {
    setMigrationProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + Math.random() * 3;
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

const isComplete = migrationProgress >= 100;

<div className="p-6 border rounded-lg">
  <h2 className="text-xl font-semibold mb-4">Cost Data Migration</h2>
  <ProgressBar
    value={migrationProgress}
    max={100}
    label="Migration Progress"
    variant={isComplete ? 'success' : 'info'}
    valueFormat="percentage"
    statusText={
      isComplete
        ? 'Migration completed successfully'
        : 'Migrating historical cost data...'
    }
    size="lg"
  />
</div>;
```

## Accessibility

- **Screen Reader Support**: Progress value and label are announced to screen readers
- **ARIA Attributes**: Proper progressbar role and value attributes
- **High Contrast**: Visible in high contrast modes
- **Keyboard Navigation**: Focusable when interactive
- **Status Updates**: Status text provides additional context for screen readers

## Best Practices

1. **Meaningful Labels**: Always provide descriptive labels for context
2. **Appropriate Variants**: Use color variants to convey meaning (red for critical, green for good)
3. **Status Text**: Include additional context when helpful
4. **Realistic Updates**: Update progress in meaningful increments
5. **Completion Feedback**: Clearly indicate when progress is complete
6. **Performance**: Avoid excessive re-renders with frequent updates

## Cost Management Use Cases

- **Budget Tracking**: Show budget utilization across departments or projects
- **Resource Usage**: Monitor CPU, memory, storage, and network utilization
- **Cost Optimization**: Track progress of cost optimization initiatives
- **Savings Goals**: Display progress toward annual or quarterly savings targets
- **Data Processing**: Show progress of cost analysis or report generation
- **Migration Progress**: Track data migration or system upgrade progress
- **Compliance Monitoring**: Display progress toward cost governance compliance
- **Performance Metrics**: Show KPI achievement progress for cost management teams
