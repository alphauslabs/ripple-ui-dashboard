# NumberInput Component

The NumberInput component provides a specialized input field for numeric values with built-in validation, optional units, and customizable styling. It's designed specifically for cost management scenarios where precise numeric input is crucial, such as budget limits, thresholds, and financial calculations.

## Usage

```tsx
import { NumberInput } from '@alphaus/ripple-ui';
import { useState } from 'react';

const [budget, setBudget] = useState(1000);

<NumberInput
  label="Monthly Budget"
  value={budget}
  onChange={(e) => setBudget(Number(e.target.value))}
  unit="USD"
  maxValue={10000}
/>;
```

## Props

| Prop        | Type                                                                      | Default     | Description                              |
| ----------- | ------------------------------------------------------------------------- | ----------- | ---------------------------------------- |
| `label`     | `string`                                                                  | -           | Label text displayed above the input     |
| `value`     | `number`                                                                  | -           | Current numeric value                    |
| `unit`      | `string`                                                                  | -           | Unit suffix displayed in the input field |
| `maxValue`  | `number`                                                                  | -           | Maximum allowed value                    |
| `variant`   | `'active' \| 'default' \| 'disabled' \| 'error' \| 'filled' \| 'success'` | `'default'` | Visual state of the input                |
| `className` | `string`                                                                  | -           | Additional CSS classes                   |
| `disabled`  | `boolean`                                                                 | `false`     | Whether the input is disabled            |
| `onChange`  | `(event: ChangeEvent<HTMLInputElement>) => void`                          | -           | Change handler                           |
| `onFocus`   | `(event: FocusEvent<HTMLInputElement>) => void`                           | -           | Focus handler                            |
| `onBlur`    | `(event: FocusEvent<HTMLInputElement>) => void`                           | -           | Blur handler                             |

## Variants

### Default

Standard appearance for normal input.

```tsx
<NumberInput label="Amount" value={100} unit="USD" variant="default" />
```

### Active

Highlighted state when the input is focused.

```tsx
<NumberInput label="Budget Limit" value={5000} unit="USD" variant="active" />
```

### Filled

State when the input contains a value.

```tsx
<NumberInput label="Current Spend" value={2500} unit="USD" variant="filled" />
```

### Error

Error state for invalid input or validation failures.

```tsx
<NumberInput label="Invalid Amount" value={-100} unit="USD" variant="error" />
```

### Success

Success state for valid input.

```tsx
<NumberInput
  label="Approved Budget"
  value={3000}
  unit="USD"
  variant="success"
/>
```

### Disabled

Disabled state when input cannot be modified.

```tsx
<NumberInput
  label="System Generated"
  value={1500}
  unit="USD"
  variant="disabled"
  disabled
/>
```

## Examples

### Budget Configuration

```tsx
const [monthlyBudget, setMonthlyBudget] = useState(5000);
const [alertThreshold, setAlertThreshold] = useState(4000);

<div className="space-y-4">
  <NumberInput
    label="Monthly Budget Limit"
    value={monthlyBudget}
    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
    unit="USD"
    maxValue={50000}
    variant={monthlyBudget > 0 ? 'filled' : 'default'}
  />

  <NumberInput
    label="Alert Threshold"
    value={alertThreshold}
    onChange={(e) => setAlertThreshold(Number(e.target.value))}
    unit="USD"
    maxValue={monthlyBudget}
    variant={alertThreshold > monthlyBudget ? 'error' : 'filled'}
  />
</div>;
```

### Cost Center Allocation

```tsx
const [allocation, setAllocation] = useState(75);

<NumberInput
  label="Budget Allocation"
  value={allocation}
  onChange={(e) => setAllocation(Number(e.target.value))}
  unit="%"
  maxValue={100}
  variant={allocation > 100 ? 'error' : 'success'}
/>;
```

### Resource Limits

```tsx
const [cpuLimit, setCpuLimit] = useState(4);
const [memoryLimit, setMemoryLimit] = useState(8);

<div className="grid grid-cols-2 gap-4">
  <NumberInput
    label="CPU Cores"
    value={cpuLimit}
    onChange={(e) => setCpuLimit(Number(e.target.value))}
    unit="cores"
    maxValue={32}
  />

  <NumberInput
    label="Memory"
    value={memoryLimit}
    onChange={(e) => setMemoryLimit(Number(e.target.value))}
    unit="GB"
    maxValue={128}
  />
</div>;
```

### Price Configuration

```tsx
const [hourlyRate, setHourlyRate] = useState(0.15);
const [monthlyRate, setMonthlyRate] = useState(108);

<div className="space-y-4">
  <NumberInput
    label="Hourly Rate"
    value={hourlyRate}
    onChange={(e) => setHourlyRate(Number(e.target.value))}
    unit="USD/hour"
    step={0.01}
  />

  <NumberInput
    label="Monthly Rate"
    value={monthlyRate}
    onChange={(e) => setMonthlyRate(Number(e.target.value))}
    unit="USD/month"
    variant="filled"
    disabled
  />
</div>;
```

## Validation

The NumberInput component automatically handles:

- **Type validation**: Only accepts numeric input
- **Range validation**: Respects `maxValue` when provided
- **Format validation**: Maintains proper number formatting
- **State management**: Automatically updates variant based on input state

```tsx
const [value, setValue] = useState(0);
const [error, setError] = useState('');

const handleChange = (e) => {
  const newValue = Number(e.target.value);
  setValue(newValue);

  if (newValue < 0) {
    setError('Value cannot be negative');
  } else if (newValue > maxValue) {
    setError(`Value cannot exceed ${maxValue}`);
  } else {
    setError('');
  }
};

<NumberInput
  label="Budget Amount"
  value={value}
  onChange={handleChange}
  unit="USD"
  maxValue={10000}
  variant={error ? 'error' : 'default'}
/>;
{
  error && <p className="text-red-500 text-sm mt-1">{error}</p>;
}
```

## Accessibility

- Proper labeling with associated `<label>` elements
- Keyboard navigation support with tab and arrow keys
- Screen reader support with appropriate ARIA attributes
- Clear focus indicators for keyboard users
- Support for disabled state with proper visual feedback

## Best Practices

1. **Use Appropriate Units**: Always specify units for clarity (USD, %, cores, GB, etc.)
2. **Set Reasonable Limits**: Use `maxValue` to prevent unrealistic input
3. **Provide Validation**: Give immediate feedback for invalid input
4. **Clear Labels**: Use descriptive labels that explain what the number represents
5. **Consistent Formatting**: Maintain consistent decimal places and formatting across similar inputs

## Cost Management Use Cases

- **Budget Limits**: Set monthly/quarterly budget thresholds
- **Alert Thresholds**: Configure cost alert triggers
- **Resource Quotas**: Define CPU, memory, and storage limits
- **Billing Rates**: Set custom pricing for services and resources
- **Cost Allocation**: Specify percentage-based cost distribution
- **Discount Values**: Configure percentage or fixed-amount discounts
- **Currency Conversion**: Input exchange rates and conversion factors
