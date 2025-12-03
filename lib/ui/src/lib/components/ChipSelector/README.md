# ChipSelector Component

The ChipSelector component provides a multi-select interface using chips to display selected items. Built on Radix UI Popover primitives, it offers an elegant way to select multiple options from a list while showing selected items as compact chips in the trigger. Perfect for selecting multiple cost centers, services, regions, or tags in cost management applications.

## Usage

```tsx
import {
  ChipSelector,
  ChipSelectorTrigger,
  ChipSelectorContent,
  ChipSelectorItem,
} from '@alphaus/ripple-ui';
import { useState } from 'react';

const [selectedServices, setSelectedServices] = useState([]);

<ChipSelector
  selectedItems={selectedServices}
  onSelectionChange={setSelectedServices}
>
  <ChipSelectorTrigger
    label="Select Services"
    placeholder="Choose services..."
  />
  <ChipSelectorContent>
    <ChipSelectorItem value="ec2" displayText="Amazon EC2" />
    <ChipSelectorItem value="s3" displayText="Amazon S3" />
    <ChipSelectorItem value="rds" displayText="Amazon RDS" />
    <ChipSelectorItem value="lambda" displayText="AWS Lambda" />
  </ChipSelectorContent>
</ChipSelector>;
```

## Components

### ChipSelector

The root container that manages the selection state and popover behavior.

#### Props

| Prop                | Type                                                           | Default | Description                                        |
| ------------------- | -------------------------------------------------------------- | ------- | -------------------------------------------------- |
| `selectedItems`     | `Array<{value: string, displayText: string}>`                  | -       | Currently selected items                           |
| `onSelectionChange` | `(items: Array<{value: string, displayText: string}>) => void` | -       | Callback when selection changes                    |
| `allItems`          | `Array<{value: string, displayText: string}>`                  | `[]`    | All available items (auto-populated from children) |
| `open`              | `boolean`                                                      | -       | Controlled open state                              |
| `onOpenChange`      | `(open: boolean) => void`                                      | -       | Callback when open state changes                   |

### ChipSelectorTrigger

The trigger element that displays selected items as chips and opens the dropdown.

#### Props

| Prop          | Type                                              | Default          | Description                             |
| ------------- | ------------------------------------------------- | ---------------- | --------------------------------------- |
| `label`       | `string`                                          | -                | Label text displayed above the trigger  |
| `placeholder` | `string`                                          | `'Select Items'` | Placeholder text when no items selected |
| `required`    | `boolean`                                         | `false`          | Whether the field is required           |
| `variant`     | `'default' \| 'success' \| 'error' \| 'disabled'` | `'default'`      | Visual variant                          |
| `className`   | `string`                                          | -                | Additional CSS classes                  |

### ChipSelectorContent

The dropdown content container that holds the selectable items.

#### Props

| Prop         | Type                           | Default    | Description                   |
| ------------ | ------------------------------ | ---------- | ----------------------------- |
| `align`      | `'start' \| 'center' \| 'end'` | `'center'` | Alignment relative to trigger |
| `sideOffset` | `number`                       | `4`        | Distance from trigger         |
| `className`  | `string`                       | -          | Additional CSS classes        |

### ChipSelectorItem

Individual selectable items within the dropdown.

#### Props

| Prop          | Type     | Default | Description                    |
| ------------- | -------- | ------- | ------------------------------ |
| `value`       | `string` | -       | Unique identifier for the item |
| `displayText` | `string` | -       | Text displayed for the item    |
| `className`   | `string` | -       | Additional CSS classes         |

## Examples

### Service Selection

```tsx
const [selectedServices, setSelectedServices] = useState([]);

const services = [
  { value: 'ec2', displayText: 'Amazon EC2' },
  { value: 's3', displayText: 'Amazon S3' },
  { value: 'rds', displayText: 'Amazon RDS' },
  { value: 'lambda', displayText: 'AWS Lambda' },
  { value: 'cloudfront', displayText: 'CloudFront' },
  { value: 'route53', displayText: 'Route 53' },
];

<ChipSelector
  selectedItems={selectedServices}
  onSelectionChange={setSelectedServices}
>
  <ChipSelectorTrigger
    label="AWS Services"
    placeholder="Select services to analyze..."
    required
  />
  <ChipSelectorContent>
    {services.map((service) => (
      <ChipSelectorItem
        key={service.value}
        value={service.value}
        displayText={service.displayText}
      />
    ))}
  </ChipSelectorContent>
</ChipSelector>;
```

### Cost Center Selection

```tsx
const [selectedCostCenters, setSelectedCostCenters] = useState([]);

const costCenters = [
  { value: 'eng-001', displayText: 'Engineering - Backend' },
  { value: 'eng-002', displayText: 'Engineering - Frontend' },
  { value: 'eng-003', displayText: 'Engineering - DevOps' },
  { value: 'mkt-001', displayText: 'Marketing - Digital' },
  { value: 'mkt-002', displayText: 'Marketing - Content' },
  { value: 'sales-001', displayText: 'Sales - Enterprise' },
  { value: 'sales-002', displayText: 'Sales - SMB' },
];

<div className="space-y-4">
  <ChipSelector
    selectedItems={selectedCostCenters}
    onSelectionChange={setSelectedCostCenters}
  >
    <ChipSelectorTrigger
      label="Cost Centers"
      placeholder="Choose cost centers..."
    />
    <ChipSelectorContent>
      {costCenters.map((center) => (
        <ChipSelectorItem
          key={center.value}
          value={center.value}
          displayText={center.displayText}
        />
      ))}
    </ChipSelectorContent>
  </ChipSelector>

  {selectedCostCenters.length > 0 && (
    <div className="text-sm text-gray-600">
      Selected {selectedCostCenters.length} cost center
      {selectedCostCenters.length !== 1 ? 's' : ''}
    </div>
  )}
</div>;
```

### Region and Account Filter

```tsx
const [selectedRegions, setSelectedRegions] = useState([]);
const [selectedAccounts, setSelectedAccounts] = useState([]);

const regions = [
  { value: 'us-east-1', displayText: 'US East (N. Virginia)' },
  { value: 'us-west-2', displayText: 'US West (Oregon)' },
  { value: 'eu-west-1', displayText: 'Europe (Ireland)' },
  { value: 'ap-southeast-1', displayText: 'Asia Pacific (Singapore)' },
];

const accounts = [
  { value: 'prod', displayText: 'Production Account' },
  { value: 'dev', displayText: 'Development Account' },
  { value: 'test', displayText: 'Testing Account' },
  { value: 'staging', displayText: 'Staging Account' },
];

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <ChipSelector
    selectedItems={selectedRegions}
    onSelectionChange={setSelectedRegions}
  >
    <ChipSelectorTrigger label="Regions" placeholder="Select regions..." />
    <ChipSelectorContent>
      {regions.map((region) => (
        <ChipSelectorItem
          key={region.value}
          value={region.value}
          displayText={region.displayText}
        />
      ))}
    </ChipSelectorContent>
  </ChipSelector>

  <ChipSelector
    selectedItems={selectedAccounts}
    onSelectionChange={setSelectedAccounts}
  >
    <ChipSelectorTrigger label="Accounts" placeholder="Select accounts..." />
    <ChipSelectorContent>
      {accounts.map((account) => (
        <ChipSelectorItem
          key={account.value}
          value={account.value}
          displayText={account.displayText}
        />
      ))}
    </ChipSelectorContent>
  </ChipSelector>
</div>;
```

### Tag-based Filtering

```tsx
const [selectedTags, setSelectedTags] = useState([]);

const availableTags = [
  { value: 'env:production', displayText: 'Environment: Production' },
  { value: 'env:development', displayText: 'Environment: Development' },
  { value: 'team:backend', displayText: 'Team: Backend' },
  { value: 'team:frontend', displayText: 'Team: Frontend' },
  { value: 'project:webapp', displayText: 'Project: Web Application' },
  { value: 'project:mobile', displayText: 'Project: Mobile App' },
  { value: 'criticality:high', displayText: 'Criticality: High' },
  { value: 'criticality:medium', displayText: 'Criticality: Medium' },
];

<div className="space-y-6">
  <ChipSelector
    selectedItems={selectedTags}
    onSelectionChange={setSelectedTags}
  >
    <ChipSelectorTrigger
      label="Resource Tags"
      placeholder="Filter by tags..."
    />
    <ChipSelectorContent className="max-h-64 overflow-y-auto">
      {availableTags.map((tag) => (
        <ChipSelectorItem
          key={tag.value}
          value={tag.value}
          displayText={tag.displayText}
        />
      ))}
    </ChipSelectorContent>
  </ChipSelector>

  {selectedTags.length > 0 && (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Applied Filters:</h4>
      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <span
            key={tag.value}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
          >
            {tag.displayText}
          </span>
        ))}
      </div>
    </div>
  )}
</div>;
```

### Form Integration with Validation

```tsx
const [formData, setFormData] = useState({
  services: [],
  regions: [],
  costCenters: [],
});
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};
  if (formData.services.length === 0) {
    newErrors.services = 'Please select at least one service';
  }
  if (formData.regions.length === 0) {
    newErrors.regions = 'Please select at least one region';
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = () => {
  if (validateForm()) {
    console.log('Form submitted:', formData);
  }
};

<form className="space-y-6">
  <div className="space-y-2">
    <ChipSelector
      selectedItems={formData.services}
      onSelectionChange={(services) =>
        setFormData((prev) => ({ ...prev, services }))
      }
    >
      <ChipSelectorTrigger
        label="Services"
        placeholder="Select services..."
        required
        variant={errors.services ? 'error' : 'default'}
      />
      <ChipSelectorContent>
        <ChipSelectorItem value="ec2" displayText="Amazon EC2" />
        <ChipSelectorItem value="s3" displayText="Amazon S3" />
        <ChipSelectorItem value="rds" displayText="Amazon RDS" />
      </ChipSelectorContent>
    </ChipSelector>
    {errors.services && (
      <p className="text-red-600 text-sm">{errors.services}</p>
    )}
  </div>

  <div className="space-y-2">
    <ChipSelector
      selectedItems={formData.regions}
      onSelectionChange={(regions) =>
        setFormData((prev) => ({ ...prev, regions }))
      }
    >
      <ChipSelectorTrigger
        label="Regions"
        placeholder="Select regions..."
        required
        variant={errors.regions ? 'error' : 'default'}
      />
      <ChipSelectorContent>
        <ChipSelectorItem
          value="us-east-1"
          displayText="US East (N. Virginia)"
        />
        <ChipSelectorItem value="us-west-2" displayText="US West (Oregon)" />
        <ChipSelectorItem value="eu-west-1" displayText="Europe (Ireland)" />
      </ChipSelectorContent>
    </ChipSelector>
    {errors.regions && <p className="text-red-600 text-sm">{errors.regions}</p>}
  </div>

  <ChipSelector
    selectedItems={formData.costCenters}
    onSelectionChange={(costCenters) =>
      setFormData((prev) => ({ ...prev, costCenters }))
    }
  >
    <ChipSelectorTrigger
      label="Cost Centers (Optional)"
      placeholder="Select cost centers..."
    />
    <ChipSelectorContent>
      <ChipSelectorItem value="eng" displayText="Engineering" />
      <ChipSelectorItem value="mkt" displayText="Marketing" />
      <ChipSelectorItem value="sales" displayText="Sales" />
    </ChipSelectorContent>
  </ChipSelector>

  <button
    type="button"
    onClick={handleSubmit}
    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
  >
    Generate Report
  </button>
</form>;
```

### Advanced Usage with Dynamic Options

```tsx
const [selectedOptions, setSelectedOptions] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

// Simulate fetching options based on search
const [availableOptions, setAvailableOptions] = useState([
  { value: 'option1', displayText: 'Option 1' },
  { value: 'option2', displayText: 'Option 2' },
  { value: 'option3', displayText: 'Option 3' },
]);

useEffect(() => {
  // Simulate API call with search term
  if (searchTerm) {
    const filtered = allOptions.filter((option) =>
      option.displayText.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAvailableOptions(filtered);
  } else {
    setAvailableOptions(allOptions);
  }
}, [searchTerm]);

<div className="space-y-4">
  <ChipSelector
    selectedItems={selectedOptions}
    onSelectionChange={setSelectedOptions}
  >
    <ChipSelectorTrigger
      label="Dynamic Options"
      placeholder="Select options..."
    />
    <ChipSelectorContent>
      <div className="p-2 border-b">
        <input
          type="text"
          placeholder="Search options..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-2 py-1 text-sm border rounded"
        />
      </div>
      {availableOptions.map((option) => (
        <ChipSelectorItem
          key={option.value}
          value={option.value}
          displayText={option.displayText}
        />
      ))}
    </ChipSelectorContent>
  </ChipSelector>
</div>;
```

## Accessibility

- **Keyboard Navigation**: Full keyboard support for opening, navigating, and selecting items
- **Screen Reader Support**: Proper ARIA attributes and announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Checkbox Semantics**: Uses proper checkbox input elements for multi-selection
- **Label Association**: Proper labeling for form integration

## Best Practices

1. **Unique Values**: Ensure all items have unique `value` props
2. **Descriptive Text**: Use clear, descriptive `displayText` for better UX
3. **Reasonable Limits**: Consider usability with large numbers of selections
4. **Performance**: For large option lists, consider implementing search/filtering
5. **Validation**: Provide clear feedback for required fields
6. **Mobile Friendly**: Test interaction on touch devices

## Chip Display

- **First Item**: Shows the full text of the first selected item
- **Additional Items**: Shows a "+N" chip for additional selections
- **Empty State**: Shows placeholder text when no items are selected
- **Overflow Handling**: Gracefully handles long text and many selections

## Cost Management Use Cases

- **Service Filtering**: Select multiple cloud services for cost analysis
- **Account Selection**: Choose multiple accounts for consolidated reporting
- **Region Filtering**: Filter costs by multiple geographic regions
- **Cost Center Assignment**: Assign expenses to multiple cost centers
- **Tag-based Filtering**: Filter resources by multiple tags or labels
- **Team Selection**: Choose multiple teams for cost allocation
- **Project Filtering**: Select multiple projects for cost tracking
- **Time Period Selection**: Choose multiple time periods for comparison
