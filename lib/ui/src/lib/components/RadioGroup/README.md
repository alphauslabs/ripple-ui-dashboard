# RadioGroup Component

The RadioGroup component provides a group of radio buttons for single-selection scenarios. It offers both a simple label-based interface and an advanced key-value pair interface with support for sibling components, making it perfect for settings forms and configuration options in cost management applications.

## Usage

```tsx
import { RadioGroup, RadioButtonGroup } from '@alphaus/ripple-ui';
import { useState } from 'react';

// Simple label-based radio group
const [activeLabel, setActiveLabel] = useState('Monthly');

<RadioGroup
  labels={['Daily', 'Weekly', 'Monthly', 'Yearly']}
  activeLabel={activeLabel}
  setActiveLabel={setActiveLabel}
/>;

// Advanced key-value radio group
const [groupValue, setGroupValue] = useState('usd');

<RadioButtonGroup
  keyValuePairs={[
    { key: 'usd', value: 'US Dollar' },
    { key: 'eur', value: 'Euro' },
    { key: 'jpy', value: 'Japanese Yen' },
  ]}
  groupValue={groupValue}
  onChangeCallback={setGroupValue}
/>;
```

## Components

### RadioGroup

A simple radio group component that uses string labels for both keys and display values.

#### Props

| Prop             | Type                      | Default | Description                              |
| ---------------- | ------------------------- | ------- | ---------------------------------------- |
| `labels`         | `string[]`                | -       | Array of label strings for radio options |
| `activeLabel`    | `string`                  | -       | Currently selected label                 |
| `setActiveLabel` | `(label: string) => void` | -       | Callback to update selected label        |
| `className`      | `string`                  | `''`    | Additional CSS classes                   |

### RadioButtonGroup

An advanced radio group component with key-value pairs and support for additional components.

#### Props

| Prop               | Type                                                 | Default | Description                                   |
| ------------------ | ---------------------------------------------------- | ------- | --------------------------------------------- |
| `keyValuePairs`    | `Array<{ key: string; value: string }>`              | -       | Options with separate keys and display values |
| `groupValue`       | `string`                                             | -       | Currently selected key                        |
| `onChangeCallback` | `(value: string) => void`                            | -       | Callback when selection changes               |
| `disabled`         | `boolean`                                            | `false` | Whether the entire group is disabled          |
| `siblingComponent` | `Array<{ key: string; component: React.ReactNode }>` | -       | Additional components for specific options    |

## Examples

### Billing Period Selection

```tsx
const [billingPeriod, setBillingPeriod] = useState('monthly');

<RadioGroup
  labels={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
  activeLabel={billingPeriod}
  setActiveLabel={setBillingPeriod}
  className="mb-4"
/>;
```

### Currency Selection with Icons

```tsx
const [currency, setCurrency] = useState('usd');

<RadioButtonGroup
  keyValuePairs={[
    { key: 'usd', value: 'US Dollar ($)' },
    { key: 'eur', value: 'Euro (€)' },
    { key: 'gbp', value: 'British Pound (£)' },
    { key: 'jpy', value: 'Japanese Yen (¥)' },
  ]}
  groupValue={currency}
  onChangeCallback={setCurrency}
  siblingComponent={[
    { key: 'usd', component: <span className="text-blue-500">🇺🇸</span> },
    { key: 'eur', component: <span className="text-blue-500">🇪🇺</span> },
    { key: 'gbp', component: <span className="text-blue-500">🇬🇧</span> },
    { key: 'jpy', component: <span className="text-blue-500">🇯🇵</span> },
  ]}
/>;
```

### Report Frequency Settings

```tsx
const [frequency, setFrequency] = useState('weekly');

<RadioButtonGroup
  keyValuePairs={[
    { key: 'daily', value: 'Daily Reports' },
    { key: 'weekly', value: 'Weekly Summary' },
    { key: 'monthly', value: 'Monthly Overview' },
    { key: 'custom', value: 'Custom Schedule' },
  ]}
  groupValue={frequency}
  onChangeCallback={setFrequency}
  siblingComponent={[
    {
      key: 'custom',
      component: (
        <input
          type="text"
          placeholder="Enter custom schedule"
          className="ml-2 px-2 py-1 border rounded text-sm"
        />
      ),
    },
  ]}
/>;
```

### Disabled State

```tsx
<RadioButtonGroup
  keyValuePairs={[
    { key: 'option1', value: 'Option 1' },
    { key: 'option2', value: 'Option 2' },
    { key: 'option3', value: 'Option 3' },
  ]}
  groupValue="option1"
  disabled={true}
/>
```

## Accessibility

- Uses proper ARIA attributes for screen reader support
- Keyboard navigation with arrow keys
- Clear focus indicators
- Proper labeling with associated form controls
- Supports disabled state with appropriate visual and interactive feedback

## Best Practices

1. **Limit Options**: Keep radio groups to 7 or fewer options for better usability
2. **Clear Labels**: Use descriptive labels that clearly indicate what each option represents
3. **Default Selection**: Always provide a sensible default selection
4. **Logical Order**: Arrange options in a logical order (alphabetical, chronological, or by importance)
5. **Consistent Spacing**: Maintain consistent spacing between options for visual clarity

## Cost Management Use Cases

- **Billing Period Selection**: Choose reporting periods for cost analysis
- **Currency Options**: Select currency for financial reports
- **Report Types**: Choose between different cost report formats
- **Data Granularity**: Select daily, weekly, or monthly data aggregation
- **Cost Centers**: Select specific departments or teams for cost allocation
- **Cloud Providers**: Choose between AWS, Azure, GCP for provider-specific reports
