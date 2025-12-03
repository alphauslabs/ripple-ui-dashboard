# Checkbox Component

The Checkbox component provides a customizable checkbox input with multiple states and styling variants. It's commonly used in cost management applications for bulk actions, filtering options, report selections, and user preferences.

## Usage

```tsx
import { Checkbox } from '@alphaus/ripple-ui';

// Basic checkbox
<Checkbox
  variant="unchecked"
  label="Select item"
  onClick={() => console.log('clicked')}
/>;
```

## Props

| Prop         | Type                                                       | Default       | Description                       |
| ------------ | ---------------------------------------------------------- | ------------- | --------------------------------- |
| `variant`    | `'unchecked' \| 'checked' \| 'indetermined' \| 'disabled'` | `'unchecked'` | Visual state of the checkbox      |
| `label`      | `string`                                                   | -             | Optional label text               |
| `onClick`    | `() => void`                                               | -             | Click handler function (required) |
| `dataTestid` | `string`                                                   | -             | Test ID for testing purposes      |
| `className`  | `string`                                                   | -             | Additional CSS classes            |

## Examples

### Basic Checkbox States

```tsx
// Unchecked state
<Checkbox
  variant="unchecked"
  label="Include tax calculations"
  onClick={() => setIncludeTax(!includeTax)}
/>

// Checked state
<Checkbox
  variant="checked"
  label="Include tax calculations"
  onClick={() => setIncludeTax(!includeTax)}
/>

// Indeterminate state (partial selection)
<Checkbox
  variant="indetermined"
  label="Select all services"
  onClick={() => handleSelectAll()}
/>

// Disabled state
<Checkbox
  variant="disabled"
  label="Premium features (unavailable)"
  onClick={() => {}}
/>
```

### Cost Management Examples

```tsx
// Service selection
<div className="space-y-2">
  <Checkbox
    variant={selectedServices.includes('ec2') ? 'checked' : 'unchecked'}
    label="EC2 Instances ($5,234.56)"
    onClick={() => toggleService('ec2')}
    dataTestid="service-ec2"
  />
  <Checkbox
    variant={selectedServices.includes('s3') ? 'checked' : 'unchecked'}
    label="S3 Storage ($2,145.78)"
    onClick={() => toggleService('s3')}
    dataTestid="service-s3"
  />
  <Checkbox
    variant={selectedServices.includes('rds') ? 'checked' : 'unchecked'}
    label="RDS Database ($1,876.23)"
    onClick={() => toggleService('rds')}
    dataTestid="service-rds"
  />
</div>

// Report options
<div className="space-y-2">
  <Checkbox
    variant={reportOptions.includeCharts ? 'checked' : 'unchecked'}
    label="Include cost trend charts"
    onClick={() => setReportOptions({...reportOptions, includeCharts: !reportOptions.includeCharts})}
  />
  <Checkbox
    variant={reportOptions.includeBreakdown ? 'checked' : 'unchecked'}
    label="Include detailed service breakdown"
    onClick={() => setReportOptions({...reportOptions, includeBreakdown: !reportOptions.includeBreakdown})}
  />
</div>
```

### Bulk Selection with Indeterminate State

```tsx
function BulkSelectionExample() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const allItems = ['item1', 'item2', 'item3', 'item4'];

  const isAllSelected = selectedItems.length === allItems.length;
  const isPartiallySelected =
    selectedItems.length > 0 && selectedItems.length < allItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allItems);
    }
  };

  const handleItemToggle = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="space-y-2">
      <Checkbox
        variant={
          isAllSelected
            ? 'checked'
            : isPartiallySelected
            ? 'indetermined'
            : 'unchecked'
        }
        label="Select all invoices"
        onClick={handleSelectAll}
      />
      <div className="ml-4 space-y-1">
        {allItems.map((item) => (
          <Checkbox
            key={item}
            variant={selectedItems.includes(item) ? 'checked' : 'unchecked'}
            label={`Invoice ${item.toUpperCase()}`}
            onClick={() => handleItemToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}
```

### Filter Options

```tsx
<div className="space-y-2">
  <h3 className="font-medium">Filter by Service Type</h3>
  <Checkbox
    variant={filters.compute ? 'checked' : 'unchecked'}
    label="Compute Services"
    onClick={() => setFilters({ ...filters, compute: !filters.compute })}
  />
  <Checkbox
    variant={filters.storage ? 'checked' : 'unchecked'}
    label="Storage Services"
    onClick={() => setFilters({ ...filters, storage: !filters.storage })}
  />
  <Checkbox
    variant={filters.networking ? 'checked' : 'unchecked'}
    label="Networking Services"
    onClick={() => setFilters({ ...filters, networking: !filters.networking })}
  />
</div>
```

## Variants

### Unchecked

```tsx
<Checkbox variant="unchecked" label="Unchecked checkbox" onClick={() => {}} />
```

### Checked

```tsx
<Checkbox variant="checked" label="Checked checkbox" onClick={() => {}} />
```

### Indeterminate

```tsx
<Checkbox
  variant="indetermined"
  label="Partially selected"
  onClick={() => {}}
/>
```

### Disabled

```tsx
<Checkbox variant="disabled" label="Disabled checkbox" onClick={() => {}} />
```

## Accessibility

- **Keyboard Navigation**: Focusable and activatable with Space key
- **Screen Reader Support**: Proper ARIA attributes and labels
- **Visual States**: Clear visual indication of all states
- **Focus Management**: Proper focus indicators
- **Label Association**: Label is properly associated with checkbox

## Best Practices

### Usage Guidelines

- **Clear Labels**: Use descriptive text that clearly indicates what the checkbox controls
- **Consistent States**: Maintain consistent visual feedback across all states
- **Logical Grouping**: Group related checkboxes together
- **Indeterminate Use**: Use indeterminate state only for parent/child relationships

### UX Patterns

- **Bulk Actions**: Provide "Select All" functionality for lists
- **Filter Options**: Allow users to filter content by multiple criteria
- **Settings**: Use for toggleable preferences and options
- **Form Validation**: Show clear error states when validation fails

### Performance

- **State Management**: Use efficient state updates for large lists
- **Event Handling**: Debounce rapid state changes if needed
- **Memoization**: Consider memoizing expensive operations in change handlers

## Related Components

- [Radio](../Radio/README.md) - For exclusive selection
- [Switch](../Switch/README.md) - For on/off toggles
- [Button](../Button/README.md) - For action triggers
- [Table](../Table/README.md) - Often used with checkboxes for row selection
