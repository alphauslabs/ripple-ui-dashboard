# ComboBox Component

The ComboBox component provides a searchable dropdown interface that combines the functionality of a select dropdown with text input filtering. It allows users to either select from predefined options or search through them by typing, making it ideal for scenarios with large option sets such as cost centers, accounts, or resource lists in cost management applications.

## Usage

```tsx
import { ComboBox } from '@alphaus/ripple-ui';
import { useState } from 'react';

const [selectedAccount, setSelectedAccount] = useState(null);

const accounts = [
  { id: '1', name: 'Production Account' },
  { id: '2', name: 'Development Account' },
  { id: '3', name: 'Testing Account' },
];

<ComboBox
  label="Select Account"
  placeholder="Search for an account..."
  options={accounts}
  selectedItem={selectedAccount}
  setSelectedItem={setSelectedAccount}
/>;
```

## Props

| Prop              | Type                                | Default | Description                                      |
| ----------------- | ----------------------------------- | ------- | ------------------------------------------------ |
| `options`         | `ComboBoxItem[]`                    | -       | Array of selectable options                      |
| `selectedItem`    | `ComboBoxItem \| null \| undefined` | -       | Currently selected item                          |
| `setSelectedItem` | `(item: ComboBoxItem) => void`      | -       | Callback when an item is selected                |
| `placeholder`     | `string`                            | -       | Placeholder text for the input field             |
| `label`           | `string`                            | -       | Label displayed above the component              |
| `blocked`         | `boolean`                           | `false` | Whether options should display as block elements |
| `dataTestId`      | `string`                            | `''`    | Test ID for testing purposes                     |

## Types

### ComboBoxItem

```typescript
interface ComboBoxItem {
  id: string;
  name: string;
}
```

The basic structure for each option in the ComboBox. The `id` should be unique, and `name` is what gets displayed to the user.

## Examples

### Account Selection

```tsx
const [selectedAccount, setSelectedAccount] = useState(null);

const accounts = [
  { id: 'prod-001', name: 'Production Account (AWS)' },
  { id: 'dev-001', name: 'Development Account (AWS)' },
  { id: 'test-001', name: 'Testing Account (Azure)' },
  { id: 'staging-001', name: 'Staging Account (GCP)' },
];

<ComboBox
  label="Select Cloud Account"
  placeholder="Type to search accounts..."
  options={accounts}
  selectedItem={selectedAccount}
  setSelectedItem={setSelectedAccount}
  dataTestId="account-selector"
/>;
```

### Cost Center Selection

```tsx
const [selectedCostCenter, setSelectedCostCenter] = useState(null);

const costCenters = [
  { id: 'eng-001', name: 'Engineering Department' },
  { id: 'mkt-001', name: 'Marketing Department' },
  { id: 'sales-001', name: 'Sales Department' },
  { id: 'hr-001', name: 'Human Resources' },
  { id: 'ops-001', name: 'Operations' },
];

<ComboBox
  label="Cost Center"
  placeholder="Select or search cost center..."
  options={costCenters}
  selectedItem={selectedCostCenter}
  setSelectedItem={setSelectedCostCenter}
/>;
```

### Resource Selection with Large Dataset

```tsx
const [selectedResource, setSelectedResource] = useState(null);

const resources = [
  { id: 'i-1234567890abcdef0', name: 'web-server-01 (t3.medium)' },
  { id: 'i-0987654321fedcba0', name: 'database-01 (r5.large)' },
  { id: 'i-1122334455667788', name: 'cache-server-01 (t3.small)' },
  // ... many more resources
];

<ComboBox
  label="Select Resource"
  placeholder="Search by instance name or ID..."
  options={resources}
  selectedItem={selectedResource}
  setSelectedItem={setSelectedResource}
  blocked={true}
/>;
```

### Service Category Selection

```tsx
const [selectedService, setSelectedService] = useState(null);

const services = [
  { id: 'compute', name: 'Compute Services' },
  { id: 'storage', name: 'Storage Services' },
  { id: 'database', name: 'Database Services' },
  { id: 'networking', name: 'Networking Services' },
  { id: 'analytics', name: 'Analytics Services' },
  { id: 'ml', name: 'Machine Learning Services' },
];

<ComboBox
  label="Service Category"
  placeholder="Choose service category..."
  options={services}
  selectedItem={selectedService}
  setSelectedItem={setSelectedService}
/>;
```

### Project Selection with Search

```tsx
const [selectedProject, setSelectedProject] = useState(null);
const [projects, setProjects] = useState([]);

// Load projects from API
useEffect(() => {
  fetchProjects().then(setProjects);
}, []);

<div className="space-y-2">
  <ComboBox
    label="Project"
    placeholder="Type to search projects..."
    options={projects}
    selectedItem={selectedProject}
    setSelectedItem={setSelectedProject}
  />

  {selectedProject && (
    <div className="text-sm text-gray-600">
      Selected: {selectedProject.name}
    </div>
  )}
</div>;
```

### Form Integration

```tsx
const [formData, setFormData] = useState({
  account: null,
  costCenter: null,
  project: null,
});

const handleSubmit = () => {
  console.log('Form Data:', {
    accountId: formData.account?.id,
    costCenterId: formData.costCenter?.id,
    projectId: formData.project?.id,
  });
};

<form className="space-y-4">
  <ComboBox
    label="Account *"
    placeholder="Select account..."
    options={accounts}
    selectedItem={formData.account}
    setSelectedItem={(item) =>
      setFormData((prev) => ({ ...prev, account: item }))
    }
  />

  <ComboBox
    label="Cost Center *"
    placeholder="Select cost center..."
    options={costCenters}
    selectedItem={formData.costCenter}
    setSelectedItem={(item) =>
      setFormData((prev) => ({ ...prev, costCenter: item }))
    }
  />

  <ComboBox
    label="Project"
    placeholder="Select project (optional)..."
    options={projects}
    selectedItem={formData.project}
    setSelectedItem={(item) =>
      setFormData((prev) => ({ ...prev, project: item }))
    }
  />

  <button
    type="button"
    onClick={handleSubmit}
    disabled={!formData.account || !formData.costCenter}
    className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
  >
    Submit
  </button>
</form>;
```

## Features

### Search Functionality

- **Real-time filtering**: Options are filtered as you type
- **Case-insensitive search**: Matches regardless of case
- **Partial matching**: Finds options containing the search term
- **Clear feedback**: Shows "No matches found" when no options match

### Keyboard Navigation

- **Arrow keys**: Navigate through options
- **Enter**: Select the highlighted option
- **Escape**: Close the dropdown
- **Tab**: Move focus to next element

### Mouse Interaction

- **Click to open**: Click the input to show all options
- **Click to select**: Click any option to select it
- **Click outside**: Close dropdown when clicking outside

## Accessibility

- **ARIA support**: Proper ARIA attributes for screen readers
- **Keyboard navigation**: Full keyboard support
- **Focus management**: Clear focus indicators
- **Screen reader friendly**: Announces selections and changes
- **Label association**: Proper label-input association

## Styling

### Default Style

Standard appearance with subtle borders and hover effects.

### Block Layout

Use `blocked={true}` for options that should display as full-width blocks rather than inline elements.

```tsx
<ComboBox
  options={options}
  selectedItem={selected}
  setSelectedItem={setSelected}
  blocked={true}
/>
```

## Performance Considerations

1. **Large Datasets**: For very large option lists (1000+ items), consider implementing virtual scrolling or server-side filtering
2. **Debounced Search**: For remote data, implement debouncing to avoid excessive API calls
3. **Memoization**: Use React.memo for option rendering if options are complex objects

```tsx
// Example with debounced search for remote data
const [options, setOptions] = useState([]);
const [loading, setLoading] = useState(false);

const debouncedSearch = useCallback(
  debounce(async (searchTerm) => {
    if (searchTerm.length > 2) {
      setLoading(true);
      const results = await searchRemoteOptions(searchTerm);
      setOptions(results);
      setLoading(false);
    }
  }, 300),
  []
);
```

## Best Practices

1. **Clear Placeholders**: Use descriptive placeholder text that guides users
2. **Reasonable Option Limits**: Consider pagination or lazy loading for very large datasets
3. **Consistent Naming**: Use consistent naming patterns for option labels
4. **Default Selections**: Provide sensible defaults when appropriate
5. **Error Handling**: Handle cases where no options are available gracefully

## Cost Management Use Cases

- **Account Selection**: Choose from multiple cloud accounts or billing accounts
- **Cost Center Assignment**: Select departmental cost centers for expense allocation
- **Service Selection**: Choose from available cloud services for cost analysis
- **Resource Filtering**: Filter by specific resources, instances, or services
- **Project Assignment**: Assign costs to specific projects or initiatives
- **Tag Selection**: Choose from available resource tags for cost categorization
- **Budget Category**: Select budget categories for expense tracking
- **Report Templates**: Choose from predefined report templates
