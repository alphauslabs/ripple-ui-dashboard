# Slider Component

The Slider component provides an intuitive interface for selecting values within a range using a draggable handle. Built on Radix UI primitives, it offers smooth interaction and accessibility features, making it perfect for setting budget thresholds, allocation percentages, and other numeric ranges in cost management applications.

## Usage

```tsx
import { Slider } from '@alphaus/ripple-ui';
import { useState } from 'react';

const [budget, setBudget] = useState([5000]);

<Slider
  value={budget}
  onValueChange={setBudget}
  max={10000}
  min={0}
  step={100}
  className="w-full"
/>;
```

## Props

The Slider component accepts all props from Radix UI Slider Root, including:

| Prop            | Type                         | Default        | Description                    |
| --------------- | ---------------------------- | -------------- | ------------------------------ |
| `value`         | `number[]`                   | -              | Current value(s) of the slider |
| `onValueChange` | `(value: number[]) => void`  | -              | Callback when value changes    |
| `min`           | `number`                     | `0`            | Minimum value                  |
| `max`           | `number`                     | `100`          | Maximum value                  |
| `step`          | `number`                     | `1`            | Step increment                 |
| `disabled`      | `boolean`                    | `false`        | Whether the slider is disabled |
| `orientation`   | `'horizontal' \| 'vertical'` | `'horizontal'` | Slider orientation             |
| `className`     | `string`                     | -              | Additional CSS classes         |

## Examples

### Budget Threshold Slider

```tsx
const [budgetThreshold, setBudgetThreshold] = useState([7500]);
const maxBudget = 10000;

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-medium">Budget Alert Threshold</label>
    <span className="text-sm text-gray-600">
      ${budgetThreshold[0].toLocaleString()} / ${maxBudget.toLocaleString()}
    </span>
  </div>

  <Slider
    value={budgetThreshold}
    onValueChange={setBudgetThreshold}
    max={maxBudget}
    min={0}
    step={250}
    className="w-full"
  />

  <div className="flex justify-between text-xs text-gray-500">
    <span>$0</span>
    <span>${(maxBudget / 2).toLocaleString()}</span>
    <span>${maxBudget.toLocaleString()}</span>
  </div>

  <p className="text-sm text-gray-600">
    You'll receive an alert when spending reaches $
    {budgetThreshold[0].toLocaleString()}
  </p>
</div>;
```

### Percentage Allocation Slider

```tsx
const [allocation, setAllocation] = useState([75]);

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-medium">Cost Allocation</label>
    <span className="text-sm font-bold text-blue-600">{allocation[0]}%</span>
  </div>

  <Slider
    value={allocation}
    onValueChange={setAllocation}
    max={100}
    min={0}
    step={5}
    className="w-full"
  />

  <div className="grid grid-cols-2 gap-4 text-sm">
    <div className="p-3 bg-blue-50 rounded">
      <div className="font-medium">Engineering</div>
      <div className="text-blue-600">{allocation[0]}%</div>
    </div>
    <div className="p-3 bg-gray-50 rounded">
      <div className="font-medium">Other Departments</div>
      <div className="text-gray-600">{100 - allocation[0]}%</div>
    </div>
  </div>
</div>;
```

### Range Slider for Cost Analysis

```tsx
const [costRange, setCostRange] = useState([1000, 8000]);
const maxCost = 10000;

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-medium">Cost Analysis Range</label>
    <span className="text-sm text-gray-600">
      ${costRange[0].toLocaleString()} - ${costRange[1].toLocaleString()}
    </span>
  </div>

  <Slider
    value={costRange}
    onValueChange={setCostRange}
    max={maxCost}
    min={0}
    step={500}
    className="w-full"
  />

  <div className="grid grid-cols-3 gap-4 text-xs text-center text-gray-500">
    <div>
      <div>Minimum</div>
      <div>${costRange[0].toLocaleString()}</div>
    </div>
    <div>
      <div>Range</div>
      <div>${(costRange[1] - costRange[0]).toLocaleString()}</div>
    </div>
    <div>
      <div>Maximum</div>
      <div>${costRange[1].toLocaleString()}</div>
    </div>
  </div>
</div>;
```

### Time Period Slider

```tsx
const [days, setDays] = useState([30]);
const maxDays = 365;

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-medium">Analysis Period</label>
    <span className="text-sm text-gray-600">{days[0]} days</span>
  </div>

  <Slider
    value={days}
    onValueChange={setDays}
    max={maxDays}
    min={1}
    step={1}
    className="w-full"
  />

  <div className="flex justify-between text-xs text-gray-500">
    <span>1 day</span>
    <span>6 months</span>
    <span>1 year</span>
  </div>

  <div className="text-sm text-gray-600">
    Analyzing cost data for the last {days[0]} day{days[0] !== 1 ? 's' : ''}
  </div>
</div>;
```

### CPU/Memory Resource Slider

```tsx
const [resources, setResources] = useState({
  cpu: [4],
  memory: [8],
});

<div className="space-y-6">
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium">CPU Cores</label>
      <span className="text-sm text-gray-600">
        {resources.cpu[0]} core{resources.cpu[0] !== 1 ? 's' : ''}
      </span>
    </div>

    <Slider
      value={resources.cpu}
      onValueChange={(value) =>
        setResources((prev) => ({ ...prev, cpu: value }))
      }
      max={32}
      min={1}
      step={1}
      className="w-full"
    />
  </div>

  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium">Memory (GB)</label>
      <span className="text-sm text-gray-600">{resources.memory[0]} GB</span>
    </div>

    <Slider
      value={resources.memory}
      onValueChange={(value) =>
        setResources((prev) => ({ ...prev, memory: value }))
      }
      max={128}
      min={1}
      step={1}
      className="w-full"
    />
  </div>

  <div className="p-4 bg-gray-50 rounded-lg">
    <div className="text-sm font-medium mb-2">Estimated Monthly Cost</div>
    <div className="text-lg font-bold text-blue-600">
      ${(resources.cpu[0] * 50 + resources.memory[0] * 8).toLocaleString()}
    </div>
    <div className="text-xs text-gray-500">
      Based on current pricing: $50/core/month, $8/GB/month
    </div>
  </div>
</div>;
```

### Discount Percentage Slider

```tsx
const [discount, setDiscount] = useState([15]);
const originalPrice = 1000;

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-medium">Discount Rate</label>
    <span className="text-sm font-bold text-green-600">{discount[0]}% off</span>
  </div>

  <Slider
    value={discount}
    onValueChange={setDiscount}
    max={50}
    min={0}
    step={5}
    className="w-full"
  />

  <div className="p-4 border rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm">Original Price:</span>
      <span className="text-sm line-through text-gray-500">
        ${originalPrice}
      </span>
    </div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm">Discount ({discount[0]}%):</span>
      <span className="text-sm text-green-600">
        -${((originalPrice * discount[0]) / 100).toFixed(2)}
      </span>
    </div>
    <div className="flex justify-between items-center font-bold">
      <span>Final Price:</span>
      <span className="text-lg text-blue-600">
        ${(originalPrice * (1 - discount[0] / 100)).toFixed(2)}
      </span>
    </div>
  </div>
</div>;
```

### Disabled State

```tsx
const [lockedBudget] = useState([5000]);

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <label className="text-sm font-medium text-gray-400">
      Locked Budget (Admin Only)
    </label>
    <span className="text-sm text-gray-400">
      ${lockedBudget[0].toLocaleString()}
    </span>
  </div>

  <Slider
    value={lockedBudget}
    max={10000}
    min={0}
    disabled
    className="w-full opacity-50"
  />

  <p className="text-xs text-gray-500">
    Contact your administrator to modify this budget limit
  </p>
</div>;
```

## Accessibility

- **Keyboard Navigation**: Full support for arrow keys and page up/down
- **Screen Reader Support**: Proper ARIA attributes and value announcements
- **Focus Indicators**: Clear visual focus indicators
- **Value Communication**: Current values are announced to screen readers
- **Touch Support**: Works well on touch devices with appropriate touch targets

## Styling

The Slider component uses a custom design with:

- **Track**: Light blue background (`bg-info-200`)
- **Range**: Darker blue fill (`bg-info-600`)
- **Thumb**: White circle with blue border
- **Focus Ring**: Visible focus ring for accessibility

## Best Practices

1. **Clear Labels**: Always provide clear labels indicating what the slider controls
2. **Value Display**: Show the current value prominently near the slider
3. **Appropriate Steps**: Choose step sizes that make sense for your use case
4. **Range Indicators**: Show min/max values or key reference points
5. **Immediate Feedback**: Provide immediate visual feedback when values change
6. **Logical Defaults**: Set sensible default values for your use case

## Cost Management Use Cases

- **Budget Thresholds**: Set spending alerts and budget limits
- **Cost Allocation**: Distribute costs between departments or projects
- **Resource Scaling**: Adjust CPU, memory, and storage allocations
- **Time Periods**: Select date ranges for cost analysis
- **Discount Application**: Apply percentage-based discounts or credits
- **Utilization Targets**: Set target utilization percentages for resources
- **Price Ranges**: Filter cost data by spending ranges
- **Commitment Levels**: Set reserved instance or savings plan commitment percentages
