# Collapsible Component

The Collapsible component provides a simple way to show and hide content with smooth animations. Built on Radix UI primitives, it offers accessible expand/collapse functionality perfect for organizing detailed information, settings panels, and optional content sections in cost management interfaces.

## Usage

```tsx
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@alphaus/ripple-ui';
import { ChevronDown } from 'lucide-react';

<Collapsible>
  <CollapsibleTrigger asChild>
    <button className="flex items-center justify-between w-full p-2 text-left">
      <span>Advanced Settings</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <div className="pt-4">
      <p>Additional configuration options...</p>
    </div>
  </CollapsibleContent>
</Collapsible>;
```

## Components

### Collapsible

The root container that manages the collapsible state.

#### Props

| Prop           | Type                      | Default | Description                               |
| -------------- | ------------------------- | ------- | ----------------------------------------- |
| `open`         | `boolean`                 | -       | Controlled open state                     |
| `defaultOpen`  | `boolean`                 | `false` | Default open state for uncontrolled usage |
| `onOpenChange` | `(open: boolean) => void` | -       | Callback when open state changes          |
| `disabled`     | `boolean`                 | `false` | Whether the collapsible is disabled       |
| `className`    | `string`                  | -       | Additional CSS classes                    |

### CollapsibleTrigger

The element that triggers the expand/collapse action.

#### Props

| Prop        | Type              | Default | Description             |
| ----------- | ----------------- | ------- | ----------------------- |
| `asChild`   | `boolean`         | `false` | Render as child element |
| `className` | `string`          | -       | Additional CSS classes  |
| `children`  | `React.ReactNode` | -       | Trigger content         |

### CollapsibleContent

The content that is shown/hidden when the collapsible is toggled.

#### Props

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | -       | Additional CSS classes |
| `children`  | `React.ReactNode` | -       | Collapsible content    |

## Examples

### Basic Cost Breakdown

```tsx
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const CostBreakdown = ({ totalCost, breakdownData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button className="flex items-center justify-between w-full p-4 text-left hover:bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-semibold">Total Monthly Cost</h3>
            <p className="text-2xl font-bold text-blue-600">
              ${totalCost.toLocaleString()}
            </p>
          </div>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pt-4 space-y-2">
          {breakdownData.map((item) => (
            <div
              key={item.service}
              className="flex justify-between py-2 border-b last:border-b-0"
            >
              <span className="text-gray-600">{item.service}</span>
              <span className="font-medium">${item.cost.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
```

### Advanced Filter Options

```tsx
import { Filter, ChevronDown } from 'lucide-react';

const AdvancedFilters = ({ filters, onFiltersChange }) => (
  <Collapsible defaultOpen={false}>
    <CollapsibleTrigger asChild>
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
        <Filter className="w-4 h-4" />
        Advanced Filters
        <ChevronDown className="w-4 h-4" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cost Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usage Type
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Types</option>
              <option value="on-demand">On-Demand</option>
              <option value="reserved">Reserved</option>
              <option value="spot">Spot</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags
          </label>
          <input
            type="text"
            placeholder="Enter tags separated by commas"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply Filters
          </button>
          <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
            Reset
          </button>
        </div>
      </div>
    </CollapsibleContent>
  </Collapsible>
);
```

### Resource Details Panel

```tsx
import { Server, ChevronDown, Cpu, HardDrive, Wifi } from 'lucide-react';

const ResourceDetails = ({ resource }) => (
  <div className="space-y-2">
    <Collapsible>
      <CollapsibleTrigger asChild>
        <button className="flex items-center justify-between w-full p-3 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-blue-500" />
            <div>
              <h4 className="font-medium">{resource.name}</h4>
              <p className="text-sm text-gray-500">{resource.type}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">${resource.cost}/month</p>
            <ChevronDown className="w-4 h-4 text-gray-400 mx-auto" />
          </div>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 bg-gray-50 rounded-b-lg space-y-3">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span>{resource.cpu} vCPUs</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-green-500" />
              <span>{resource.memory} GB RAM</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-blue-500" />
              <span>{resource.network}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200">
            <h5 className="font-medium text-sm mb-2">Usage Metrics</h5>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>CPU Utilization:</span>
                <span>{resource.cpuUsage}%</span>
              </div>
              <div className="flex justify-between">
                <span>Memory Usage:</span>
                <span>{resource.memoryUsage}%</span>
              </div>
              <div className="flex justify-between">
                <span>Network I/O:</span>
                <span>{resource.networkIO}</span>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);
```

### Budget Configuration Section

```tsx
import { DollarSign, Settings, ChevronDown } from 'lucide-react';

const BudgetSettings = () => (
  <div className="space-y-4">
    <Collapsible defaultOpen={true}>
      <CollapsibleTrigger asChild>
        <button className="flex items-center justify-between w-full p-4 text-left bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-900">Budget Limits</h3>
          </div>
          <ChevronDown className="w-5 h-5 text-blue-600" />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Limit
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="5000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alert Threshold (%)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="80"
              />
            </div>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>

    <Collapsible>
      <CollapsibleTrigger asChild>
        <button className="flex items-center justify-between w-full p-4 text-left bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Advanced Settings</h3>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-600" />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 space-y-4">
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Include tax in calculations</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Apply credits automatically</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">Send weekly reports</span>
            </label>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);
```

### FAQ Section

```tsx
const FAQItem = ({ question, answer }) => (
  <Collapsible>
    <CollapsibleTrigger asChild>
      <button className="flex items-center justify-between w-full p-4 text-left border-b border-gray-200 hover:bg-gray-50">
        <h4 className="font-medium text-gray-900">{question}</h4>
        <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className="px-4 pb-4">
        <p className="text-gray-600">{answer}</p>
      </div>
    </CollapsibleContent>
  </Collapsible>
);

const CostManagementFAQ = () => {
  const faqs = [
    {
      question: 'How are costs calculated?',
      answer:
        'Costs are calculated based on actual usage of resources, including compute time, storage, and data transfer. We aggregate billing data from your cloud providers and apply any applicable discounts or credits.',
    },
    {
      question: 'When are cost alerts sent?',
      answer:
        'Cost alerts are sent when your spending reaches the configured threshold percentage of your budget. You can customize these thresholds in your budget settings.',
    },
    {
      question: 'Can I export cost data?',
      answer:
        'Yes, you can export cost data in CSV or PDF format. Use the export button in the top-right corner of any cost report to download your data.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};
```

### Controlled vs Uncontrolled

```tsx
// Uncontrolled (default behavior)
<Collapsible defaultOpen={false}>
  <CollapsibleTrigger asChild>
    <button>Toggle Content</button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content's visibility is managed internally</p>
  </CollapsibleContent>
</Collapsible>;

// Controlled (you manage the state)
const [isOpen, setIsOpen] = useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger asChild>
    <button>Toggle Content</button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content's visibility is controlled by parent component</p>
  </CollapsibleContent>
</Collapsible>;
```

## Accessibility

- **Keyboard Navigation**: Full keyboard support with Enter and Space keys
- **Screen Reader Support**: Proper ARIA attributes for expand/collapse state
- **Focus Management**: Clear focus indicators and logical tab order
- **State Communication**: Screen readers announce when content is expanded or collapsed
- **Semantic Structure**: Uses appropriate button semantics for triggers

## Styling

The Collapsible component includes:

- **Default Container**: White background with border and shadow
- **Smooth Animations**: Built-in expand/collapse animations
- **Customizable**: Easy to override styles with custom classes
- **Responsive**: Works well across different screen sizes

## Best Practices

1. **Clear Triggers**: Use descriptive trigger text and appropriate icons
2. **Visual Indicators**: Include chevron or arrow icons to indicate collapsible state
3. **Logical Grouping**: Group related collapsible sections together
4. **Default States**: Consider whether content should be open or closed by default
5. **Loading States**: Handle loading content gracefully within collapsible sections
6. **Performance**: Avoid putting expensive components in collapsed content unless necessary

## Cost Management Use Cases

- **Cost Breakdowns**: Expandable detailed cost breakdowns for services
- **Resource Details**: Collapsible resource information and metrics
- **Advanced Filters**: Optional filter panels for data analysis
- **Settings Sections**: Organized configuration options
- **Help Content**: FAQ sections and help documentation
- **Account Information**: Expandable account and billing details
- **Report Options**: Collapsible report configuration settings
- **Budget Configuration**: Organized budget and alert settings
