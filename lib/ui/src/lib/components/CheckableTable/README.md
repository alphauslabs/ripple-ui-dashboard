# CheckableTable Component

The CheckableTable component extends the basic Table component with row selection functionality, enabling users to select individual rows or all rows at once. It features sortable columns, customizable column configuration, and comprehensive selection management, making it ideal for bulk operations in cost management workflows.

## Usage

```tsx
import { CheckableTable } from '@alphaus/ripple-ui';
import { useState } from 'react';

interface CostItem {
  id: string;
  service: string;
  cost: number;
  date: string;
  region: string;
}

function CostManagementTable() {
  const [selectedItems, setSelectedItems] = useState<CostItem[]>([]);

  const costData: CostItem[] = [
    {
      id: '1',
      service: 'EC2',
      cost: 245.5,
      date: '2024-01-15',
      region: 'us-east-1',
    },
    {
      id: '2',
      service: 'S3',
      cost: 89.25,
      date: '2024-01-15',
      region: 'us-west-2',
    },
    {
      id: '3',
      service: 'RDS',
      cost: 167.8,
      date: '2024-01-15',
      region: 'eu-west-1',
    },
  ];

  const columns = [
    { key: 'service' as keyof CostItem, label: 'Service', isSortable: true },
    { key: 'cost' as keyof CostItem, label: 'Cost ($)', isSortable: true },
    { key: 'date' as keyof CostItem, label: 'Date', isSortable: true },
    { key: 'region' as keyof CostItem, label: 'Region', isSortable: false },
  ];

  const handleSelectAll = () => {
    if (selectedItems.length === costData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(costData);
    }
  };

  return (
    <CheckableTable
      data={costData}
      selectedData={selectedItems}
      columns={columns}
      onSelectAll={handleSelectAll}
    />
  );
}
```

## Props

### CheckableTableProps<T>

| Prop           | Type                        | Default | Description                                          |
| -------------- | --------------------------- | ------- | ---------------------------------------------------- |
| `data`         | `Array<T>`                  | -       | Array of data objects to display in the table        |
| `selectedData` | `Array<T>`                  | -       | Array of currently selected data objects             |
| `columns`      | `Array<CheckableColumn<T>>` | -       | Column configuration for the table                   |
| `onSelectAll`  | `() => void`                | -       | Callback function for select all/deselect all action |

### CheckableColumn<T>

| Prop         | Type      | Default | Description                              |
| ------------ | --------- | ------- | ---------------------------------------- |
| `key`        | `keyof T` | -       | Property key from data object to display |
| `label`      | `string`  | -       | Display label for the column header      |
| `isSortable` | `boolean` | `false` | Whether the column supports sorting      |

## Features

### Row Selection

- **Individual Selection**: Click checkboxes to select/deselect individual rows
- **Select All**: Header checkbox to select or deselect all rows at once
- **Visual Feedback**: Selected rows are visually indicated with checked checkboxes

### Sorting

- **Sortable Columns**: Configure which columns support sorting
- **Sort Indicators**: Visual arrows indicate current sort direction
- **Multiple Data Types**: Supports sorting for numbers, strings, and dates
- **Toggle Sorting**: Click column headers to toggle between ascending and descending

### Responsive Design

- **Mobile Friendly**: Table adapts to different screen sizes
- **Hover Effects**: Row highlighting on hover for better user experience
- **Clean Layout**: Modern styling with proper spacing and typography

## Examples

### Cost Analysis Table

```tsx
function CostAnalysisTable() {
  const [selectedCosts, setSelectedCosts] = useState<CostAnalysis[]>([]);

  const analysisData = [
    { service: 'EC2', lastMonth: 1250.0, thisMonth: 1100.0, variance: -12.0 },
    { service: 'S3', lastMonth: 345.5, thisMonth: 389.25, variance: 12.7 },
    { service: 'Lambda', lastMonth: 78.9, thisMonth: 92.15, variance: 16.8 },
  ];

  const columns = [
    { key: 'service', label: 'Service', isSortable: true },
    { key: 'lastMonth', label: 'Last Month ($)', isSortable: true },
    { key: 'thisMonth', label: 'This Month ($)', isSortable: true },
    { key: 'variance', label: 'Variance (%)', isSortable: true },
  ];

  return (
    <CheckableTable
      data={analysisData}
      selectedData={selectedCosts}
      columns={columns}
      onSelectAll={() => {
        setSelectedCosts(
          selectedCosts.length === analysisData.length ? [] : analysisData
        );
      }}
    />
  );
}
```

### Resource Management Table

```tsx
function ResourceTable() {
  const [selectedResources, setSelectedResources] = useState<Resource[]>([]);

  const resources = [
    { id: 'i-1234567890', type: 't3.medium', status: 'running', cost: 24.5 },
    { id: 'i-0987654321', type: 't3.large', status: 'stopped', cost: 0.0 },
    { id: 'i-1122334455', type: 'm5.xlarge', status: 'running', cost: 96.2 },
  ];

  const columns = [
    { key: 'id', label: 'Instance ID', isSortable: false },
    { key: 'type', label: 'Type', isSortable: true },
    { key: 'status', label: 'Status', isSortable: true },
    { key: 'cost', label: 'Daily Cost ($)', isSortable: true },
  ];

  return (
    <div>
      <CheckableTable
        data={resources}
        selectedData={selectedResources}
        columns={columns}
        onSelectAll={() => {
          setSelectedResources(
            selectedResources.length === resources.length ? [] : resources
          );
        }}
      />
      {selectedResources.length > 0 && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p>{selectedResources.length} resource(s) selected</p>
          <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
            Terminate Selected
          </button>
        </div>
      )}
    </div>
  );
}
```

### Budget Allocation Table

```tsx
function BudgetTable() {
  const [selectedBudgets, setSelectedBudgets] = useState<Budget[]>([]);

  const budgets = [
    { department: 'Engineering', allocated: 5000, spent: 4250, remaining: 750 },
    { department: 'Marketing', allocated: 3000, spent: 2890, remaining: 110 },
    { department: 'Sales', allocated: 2500, spent: 2100, remaining: 400 },
  ];

  const columns = [
    { key: 'department', label: 'Department', isSortable: true },
    { key: 'allocated', label: 'Allocated ($)', isSortable: true },
    { key: 'spent', label: 'Spent ($)', isSortable: true },
    { key: 'remaining', label: 'Remaining ($)', isSortable: true },
  ];

  return (
    <CheckableTable
      data={budgets}
      selectedData={selectedBudgets}
      columns={columns}
      onSelectAll={() => {
        setSelectedBudgets(
          selectedBudgets.length === budgets.length ? [] : budgets
        );
      }}
    />
  );
}
```

## Accessibility

The CheckableTable component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support for table navigation and selection
- **Screen Reader Support**: Proper ARIA labels and table semantics
- **Focus Management**: Clear focus indicators for interactive elements
- **Selection State**: Clear indication of selected state for assistive technologies

## Best Practices

### Selection Management

- Implement proper state management for selected items
- Provide clear visual feedback for selection state
- Handle edge cases like empty data arrays
- Consider performance with large datasets

### Column Configuration

- Use meaningful column labels for better user experience
- Enable sorting only for columns where it makes sense
- Consider column width and responsive behavior
- Provide appropriate data formatting for different types

### User Experience

- Provide bulk action options when multiple items are selected
- Show selection count and available actions clearly
- Consider pagination for large datasets
- Implement proper loading states

## Cost Management Use Cases

The CheckableTable component is particularly useful for:

- **Cost Analysis**: Select multiple cost items for detailed analysis
- **Resource Management**: Bulk operations on cloud resources
- **Budget Tracking**: Multi-department budget comparisons
- **Invoice Processing**: Select specific charges for dispute or allocation
- **Optimization Recommendations**: Bulk apply cost optimization suggestions
- **Report Generation**: Select data points for custom reports

## Related Components

- [Table](../Table/README.md) - Basic table component
- [SortableTable](../SortableTable/README.md) - Table with sorting functionality
- [TablePagination](../TablePagination/README.md) - Pagination controls for tables
- [Checkbox](../Checkbox/README.md) - Individual checkbox component
