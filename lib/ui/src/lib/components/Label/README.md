# Label Component

The Label component provides accessible form labeling built on Radix UI primitives. It ensures proper association between labels and form controls, essential for accessibility and user experience in cost management forms and interfaces.

## Usage

```tsx
import { Label } from "@alphaus/ripple-ui";

// Basic label
<Label htmlFor="email">Email Address</Label>

// Label with input
<div className="space-y-2">
  <Label htmlFor="budget">Monthly Budget</Label>
  <input id="budget" type="number" className="w-full p-2 border rounded" />
</div>
```

## Props

The Label component accepts all props from Radix UI Label Root, including:

| Prop        | Type              | Default | Description                       |
| ----------- | ----------------- | ------- | --------------------------------- |
| `htmlFor`   | `string`          | -       | ID of the associated form control |
| `className` | `string`          | -       | Additional CSS classes            |
| `children`  | `React.ReactNode` | -       | Label content                     |

## Examples

### Basic Form Labels

```tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="account-name">Account Name</Label>
    <input
      id="account-name"
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Enter account name"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="monthly-budget">Monthly Budget</Label>
    <input
      id="monthly-budget"
      type="number"
      className="w-full p-2 border rounded"
      placeholder="0.00"
    />
  </div>
</div>
```

### Required Field Labels

```tsx
<div className="space-y-2">
  <Label htmlFor="cost-center" className="flex items-center gap-1">
    Cost Center
    <span className="text-red-500">*</span>
  </Label>
  <select id="cost-center" className="w-full p-2 border rounded">
    <option value="">Select a cost center</option>
    <option value="eng">Engineering</option>
    <option value="mkt">Marketing</option>
    <option value="sales">Sales</option>
  </select>
</div>
```

### Labels with Help Text

```tsx
<div className="space-y-2">
  <Label htmlFor="alert-threshold" className="flex items-center gap-2">
    Alert Threshold
    <span className="text-xs text-gray-500 font-normal">
      (Percentage of budget)
    </span>
  </Label>
  <input
    id="alert-threshold"
    type="number"
    min="0"
    max="100"
    className="w-full p-2 border rounded"
    placeholder="80"
  />
  <p className="text-xs text-gray-600">
    You'll receive alerts when spending reaches this percentage of your budget
  </p>
</div>
```

### Checkbox and Radio Labels

```tsx
<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <input id="enable-alerts" type="checkbox" className="w-4 h-4" />
    <Label htmlFor="enable-alerts" className="cursor-pointer">
      Enable cost alerts
    </Label>
  </div>

  <div className="space-y-2">
    <Label className="text-base font-semibold">Billing Frequency</Label>
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <input
          id="monthly"
          type="radio"
          name="frequency"
          value="monthly"
          className="w-4 h-4"
        />
        <Label htmlFor="monthly" className="cursor-pointer">
          Monthly
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="quarterly"
          type="radio"
          name="frequency"
          value="quarterly"
          className="w-4 h-4"
        />
        <Label htmlFor="quarterly" className="cursor-pointer">
          Quarterly
        </Label>
      </div>
    </div>
  </div>
</div>
```

### Form Section Labels

```tsx
<form className="space-y-6">
  <div className="space-y-4">
    <Label className="text-lg font-semibold text-gray-900">
      Account Information
    </Label>

    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="account-id">Account ID</Label>
        <input
          id="account-id"
          type="text"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="account-type">Account Type</Label>
        <select id="account-type" className="w-full p-2 border rounded">
          <option value="production">Production</option>
          <option value="development">Development</option>
          <option value="testing">Testing</option>
        </select>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <Label className="text-lg font-semibold text-gray-900">
      Budget Settings
    </Label>

    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="budget-amount">Budget Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-500">$</span>
          <input
            id="budget-amount"
            type="number"
            className="w-full p-2 pl-8 border rounded"
            placeholder="0.00"
          />
        </div>
      </div>
    </div>
  </div>
</form>
```

### Error State Labels

```tsx
const [error, setError] = useState('This field is required');

<div className="space-y-2">
  <Label htmlFor="required-field" className={error ? 'text-red-600' : ''}>
    Required Field
    <span className="text-red-500 ml-1">*</span>
  </Label>
  <input
    id="required-field"
    type="text"
    className={`w-full p-2 border rounded ${
      error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
    }`}
  />
  {error && <p className="text-red-600 text-sm">{error}</p>}
</div>;
```

### Multi-column Form Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="space-y-2">
    <Label htmlFor="service-name">Service Name</Label>
    <input
      id="service-name"
      type="text"
      className="w-full p-2 border rounded"
      placeholder="e.g., EC2, S3, RDS"
    />
  </div>

  <div className="space-y-2">
    <Label htmlFor="region">Region</Label>
    <select id="region" className="w-full p-2 border rounded">
      <option value="">Select region</option>
      <option value="us-east-1">US East (N. Virginia)</option>
      <option value="us-west-2">US West (Oregon)</option>
      <option value="eu-west-1">Europe (Ireland)</option>
    </select>
  </div>

  <div className="space-y-2">
    <Label htmlFor="cost-limit">Cost Limit</Label>
    <div className="relative">
      <span className="absolute left-3 top-2 text-gray-500">$</span>
      <input
        id="cost-limit"
        type="number"
        className="w-full p-2 pl-8 border rounded"
        placeholder="1000.00"
      />
    </div>
  </div>
</div>
```

### Responsive Form Labels

```tsx
<div className="space-y-6">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <Label htmlFor="date-range" className="sm:w-1/3">
      Date Range
    </Label>
    <div className="sm:w-2/3">
      <input
        id="date-range"
        type="date"
        className="w-full p-2 border rounded"
      />
    </div>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <Label htmlFor="cost-threshold" className="sm:w-1/3">
      Cost Threshold
    </Label>
    <div className="sm:w-2/3">
      <input
        id="cost-threshold"
        type="number"
        className="w-full p-2 border rounded"
        placeholder="Enter threshold amount"
      />
    </div>
  </div>
</div>
```

### Custom Styled Labels

```tsx
<div className="space-y-4">
  <div className="space-y-2">
    <Label
      htmlFor="priority-level"
      className="text-base font-bold text-blue-900 uppercase tracking-wide"
    >
      Priority Level
    </Label>
    <select id="priority-level" className="w-full p-2 border rounded">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="critical">Critical</option>
    </select>
  </div>

  <div className="space-y-2">
    <Label htmlFor="description" className="text-sm font-normal text-gray-700">
      Description (Optional)
    </Label>
    <textarea
      id="description"
      rows={3}
      className="w-full p-2 border rounded"
      placeholder="Add any additional notes..."
    />
  </div>
</div>
```

### Labels with Icons

```tsx
import { DollarSign, Calendar, Users } from 'lucide-react';

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="budget" className="flex items-center gap-2">
      <DollarSign className="w-4 h-4" />
      Budget Amount
    </Label>
    <input id="budget" type="number" className="w-full p-2 border rounded" />
  </div>

  <div className="space-y-2">
    <Label htmlFor="period" className="flex items-center gap-2">
      <Calendar className="w-4 h-4" />
      Billing Period
    </Label>
    <select id="period" className="w-full p-2 border rounded">
      <option value="monthly">Monthly</option>
      <option value="quarterly">Quarterly</option>
      <option value="annually">Annually</option>
    </select>
  </div>

  <div className="space-y-2">
    <Label htmlFor="team" className="flex items-center gap-2">
      <Users className="w-4 h-4" />
      Assigned Team
    </Label>
    <input
      id="team"
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Enter team name"
    />
  </div>
</div>;
```

## Accessibility

- **Proper Association**: Uses `htmlFor` to associate labels with form controls
- **Screen Reader Support**: Provides clear context for form elements
- **Keyboard Navigation**: Works seamlessly with keyboard navigation
- **Focus Management**: Clicking the label focuses the associated input
- **Required Indicators**: Clear visual indicators for required fields

## Best Practices

1. **Always Associate**: Use `htmlFor` attribute to properly associate labels with form controls
2. **Clear Text**: Use descriptive, concise label text
3. **Required Indicators**: Clearly mark required fields
4. **Consistent Styling**: Maintain consistent label styling across forms
5. **Help Text**: Provide additional context when needed
6. **Error States**: Update label styling to match form validation states

## Styling

The Label component includes:

- **Default Styling**: Small text with medium font weight
- **Disabled State**: Reduced opacity for disabled form controls
- **Customizable**: Easy to extend with additional CSS classes
- **Responsive**: Works well in responsive layouts

### Custom Styling Examples

```tsx
// Large section label
<Label className="text-lg font-bold text-gray-900">
  Account Settings
</Label>

// Subtle optional field label
<Label className="text-sm font-normal text-gray-600">
  Additional Notes (Optional)
</Label>

// Error state label
<Label className="text-sm font-medium text-red-600">
  Invalid Input
</Label>
```

## Cost Management Use Cases

- **Form Fields**: Label all cost management form inputs clearly
- **Budget Settings**: Provide context for budget configuration options
- **Account Management**: Label account and billing information fields
- **Report Configuration**: Label report parameters and filters
- **Alert Settings**: Label cost alert and notification preferences
- **Resource Tagging**: Label fields for resource categorization
- **Cost Allocation**: Label department and project assignment fields
- **Billing Information**: Label payment and billing preference fields
