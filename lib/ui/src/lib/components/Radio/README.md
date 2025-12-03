# Radio Component

The Radio component provides single-selection functionality within a group of options. It offers both individual radio buttons and integrated radio group functionality, perfect for scenarios where users must choose exactly one option from a set of mutually exclusive choices in cost management interfaces.

## Usage

```tsx
import { Radio, RadioButton } from "@alphaus/ripple-ui";
import { useState } from "react";

// Individual Radio Button
<Radio
  label="Option 1"
  variant="selected"
  onClick={() => setSelected("option1")}
/>

// Using RadioButton with RadioGroup
<RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
  <RadioButton value="option1" />
  <RadioButton value="option2" />
  <RadioButton value="option3" />
</RadioGroup>
```

## Components

### Radio

A standalone radio button component with integrated label and state management.

| Prop        | Type                                       | Default        | Description                           |
| ----------- | ------------------------------------------ | -------------- | ------------------------------------- |
| `label`     | `string`                                   | -              | Text label for the radio option       |
| `variant`   | `'unselected' \| 'selected' \| 'disabled'` | `'unselected'` | Visual state of the radio             |
| `onClick`   | `() => void`                               | -              | Function called when radio is clicked |
| `className` | `string`                                   | -              | Additional CSS classes                |

### RadioButton

A Radix-based radio button for use within RadioGroup contexts.

| Prop        | Type      | Default | Description                        |
| ----------- | --------- | ------- | ---------------------------------- |
| `value`     | `string`  | -       | Unique value for this radio option |
| `disabled`  | `boolean` | `false` | Whether the radio is disabled      |
| `className` | `string`  | -       | Additional CSS classes             |

## Variants

### Unselected State

```tsx
<Radio
  label="Monthly Billing"
  variant="unselected"
  onClick={() => setBillingCycle('monthly')}
/>
```

### Selected State

```tsx
<Radio
  label="Annual Billing"
  variant="selected"
  onClick={() => setBillingCycle('annual')}
/>
```

### Disabled State

```tsx
<Radio
  label="Enterprise Billing (Coming Soon)"
  variant="disabled"
  onClick={() => {}} // No-op for disabled state
/>
```

## Cost Management Examples

### Billing Cycle Selection

```tsx
const [billingCycle, setBillingCycle] = useState('monthly');

<div className="space-y-3">
  <Radio
    label="Monthly Billing - Flexible payments"
    variant={billingCycle === 'monthly' ? 'selected' : 'unselected'}
    onClick={() => setBillingCycle('monthly')}
  />
  <Radio
    label="Annual Billing - 20% discount"
    variant={billingCycle === 'annual' ? 'selected' : 'unselected'}
    onClick={() => setBillingCycle('annual')}
  />
  <Radio
    label="Quarterly Billing - 10% discount"
    variant={billingCycle === 'quarterly' ? 'selected' : 'unselected'}
    onClick={() => setBillingCycle('quarterly')}
  />
</div>;
```

### Report Period Selection

```tsx
const [reportPeriod, setReportPeriod] = useState('current');

<div className="space-y-2">
  <Radio
    label="Current Month"
    variant={reportPeriod === 'current' ? 'selected' : 'unselected'}
    onClick={() => setReportPeriod('current')}
  />
  <Radio
    label="Previous Month"
    variant={reportPeriod === 'previous' ? 'selected' : 'unselected'}
    onClick={() => setReportPeriod('previous')}
  />
  <Radio
    label="Last 3 Months"
    variant={reportPeriod === 'quarter' ? 'selected' : 'unselected'}
    onClick={() => setReportPeriod('quarter')}
  />
  <Radio
    label="Custom Date Range"
    variant={reportPeriod === 'custom' ? 'selected' : 'unselected'}
    onClick={() => setReportPeriod('custom')}
  />
</div>;
```

### Cost Allocation Method

```tsx
const [allocationMethod, setAllocationMethod] = useState('equal');

<div className="space-y-3">
  <Radio
    label="Equal Distribution - Split costs evenly"
    variant={allocationMethod === 'equal' ? 'selected' : 'unselected'}
    onClick={() => setAllocationMethod('equal')}
  />
  <Radio
    label="Usage-Based - Allocate by actual usage"
    variant={allocationMethod === 'usage' ? 'selected' : 'unselected'}
    onClick={() => setAllocationMethod('usage')}
  />
  <Radio
    label="Tag-Based - Use resource tags for allocation"
    variant={allocationMethod === 'tags' ? 'selected' : 'unselected'}
    onClick={() => setAllocationMethod('tags')}
  />
  <Radio
    label="Custom Rules - Manual allocation rules"
    variant={allocationMethod === 'custom' ? 'selected' : 'unselected'}
    onClick={() => setAllocationMethod('custom')}
  />
</div>;
```

### Budget Alert Frequency

```tsx
const [alertFrequency, setAlertFrequency] = useState('daily');

<fieldset className="space-y-2">
  <legend className="text-sm font-medium mb-3">Alert Frequency</legend>
  <Radio
    label="Real-time alerts"
    variant={alertFrequency === 'realtime' ? 'selected' : 'unselected'}
    onClick={() => setAlertFrequency('realtime')}
  />
  <Radio
    label="Daily summary"
    variant={alertFrequency === 'daily' ? 'selected' : 'unselected'}
    onClick={() => setAlertFrequency('daily')}
  />
  <Radio
    label="Weekly digest"
    variant={alertFrequency === 'weekly' ? 'selected' : 'unselected'}
    onClick={() => setAlertFrequency('weekly')}
  />
  <Radio
    label="Monthly report only"
    variant={alertFrequency === 'monthly' ? 'selected' : 'unselected'}
    onClick={() => setAlertFrequency('monthly')}
  />
</fieldset>;
```

## Advanced Usage

### With Form Integration

```tsx
const [formData, setFormData] = useState({
  paymentMethod: 'card',
  billingFrequency: 'monthly',
});

const updateFormData = (field: string, value: string) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
};

<form className="space-y-6">
  <fieldset>
    <legend className="text-lg font-semibold mb-4">Payment Method</legend>
    <div className="space-y-3">
      <Radio
        label="Credit/Debit Card"
        variant={formData.paymentMethod === 'card' ? 'selected' : 'unselected'}
        onClick={() => updateFormData('paymentMethod', 'card')}
      />
      <Radio
        label="Bank Transfer"
        variant={formData.paymentMethod === 'bank' ? 'selected' : 'unselected'}
        onClick={() => updateFormData('paymentMethod', 'bank')}
      />
      <Radio
        label="Digital Wallet"
        variant={
          formData.paymentMethod === 'wallet' ? 'selected' : 'unselected'
        }
        onClick={() => updateFormData('paymentMethod', 'wallet')}
      />
    </div>
  </fieldset>
</form>;
```

### Conditional Rendering

```tsx
const [costModel, setCostModel] = useState('standard');

<div className="space-y-4">
  <Radio
    label="Standard Pricing"
    variant={costModel === 'standard' ? 'selected' : 'unselected'}
    onClick={() => setCostModel('standard')}
  />
  <Radio
    label="Reserved Instance Pricing"
    variant={costModel === 'reserved' ? 'selected' : 'unselected'}
    onClick={() => setCostModel('reserved')}
  />
  <Radio
    label="Spot Instance Pricing"
    variant={costModel === 'spot' ? 'selected' : 'unselected'}
    onClick={() => setCostModel('spot')}
  />

  {costModel === 'reserved' && (
    <div className="ml-8 mt-3 p-4 bg-blue-50 rounded-lg">
      <p className="text-sm text-blue-800">
        Reserved instances offer up to 75% savings compared to standard pricing.
      </p>
    </div>
  )}
</div>;
```

## Design Tokens

- **Border Color (Unselected)**: `#C2C5D9`
- **Border Color (Selected)**: `#1D55CE` (blue)
- **Background**: `#FFFFFF` (white)
- **Selected Indicator**: `#1D55CE` (blue dot)
- **Disabled Background**: `#DFE2F6`
- **Disabled Border**: `#DFE2F6`
- **Disabled Text**: `#8E90A3`
- **Text Color**: `#161B29`
- **Size**: `24px` (6x6 grid units)

## Accessibility

- **ARIA Roles**: Proper radio role and group associations
- **Keyboard Navigation**: Arrow key navigation within groups
- **Focus Indicators**: Clear focus rings for keyboard users
- **Screen Reader**: Descriptive labels and state announcements
- **Label Association**: Proper label-input relationships
- **Group Context**: Clear grouping for related options

## Best Practices

1. **Mutually Exclusive**: Use for options where only one can be selected
2. **Clear Labels**: Make option labels descriptive and distinct
3. **Logical Grouping**: Group related options together with fieldset/legend
4. **Default Selection**: Provide a sensible default selection when appropriate
5. **Visual Hierarchy**: Use spacing and typography to create clear option groups
6. **Disabled States**: Clearly indicate unavailable options

## Implementation Notes

- The component uses controlled state management
- Each radio requires individual click handlers for state updates
- Visual state is managed through the variant prop
- Labels are integrated into the component for proper accessibility
- The component supports both standalone and group usage patterns

## Related Components

- `RadioGroup`: For managing groups of radio buttons
- `Checkbox`: For multiple selection scenarios
- `Select`: For dropdown selection from many options
- `ButtonTab`: For tab-style single selection
- `Switch`: For binary on/off states
