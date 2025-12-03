# SortableTable Component

The SortableTable component provides an advanced data table with built-in sorting functionality, optional row selection, and customizable column rendering. It extends the basic Table component with interactive features essential for cost management data analysis, allowing users to sort, select, and interact with tabular data efficiently.

## Usage

```tsx
import { SortableTable } from '@alphaus/ripple-ui';
import { useState } from 'react';

const [selectedRows, setSelectedRows] = useState([]);

const data = [
  { id: 1, service: 'EC2', cost: 245.5, usage: '120 hours' },
  { id: 2, service: 'S3', cost: 89.25, usage: '500 GB' },
  { id: 3, service: 'RDS', cost: 156.75, usage: '744 hours' },
];

const columns = [
  { key: 'service', label: 'Service', sortable: true },
  { key: 'cost', label: 'Cost ($)', sortable: true, cellAlign: 'right' },
  { key: 'usage', label: 'Usage', sortable: false },
];

<SortableTable
  data={data}
  columns={columns}
  isCheckable={true}
  selectedData={selectedRows}
  selectKey="id"
  onSelectAll={handleSelectAll}
  onSelect={handleRowSelect}
/>;
```

## Props

| Prop           | Type               | Default | Description                           |
| -------------- | ------------------ | ------- | ------------------------------------- |
| `data`         | `T[]`              | -       | Array of data objects to display      |
| `columns`      | `Column<T>[]`      | -       | Column configuration array            |
| `caption`      | `string`           | -       | Optional table caption                |
| `isCheckable`  | `boolean`          | `false` | Enable row selection with checkboxes  |
| `selectedData` | `T[]`              | `[]`    | Array of selected rows                |
| `selectKey`    | `keyof T`          | -       | Unique key for row identification     |
| `onSelectAll`  | `() => void`       | -       | Callback for select all action        |
| `onSelect`     | `(row: T) => void` | -       | Callback for individual row selection |

## Column Configuration

### Column Interface

```typescript
interface Column<T> {
  key: keyof T; // Property key from data object
  label: string; // Column header label
  sortable?: boolean; // Enable sorting for this column
  render?: (row: T) => React.ReactNode; // Custom cell renderer
  headerAlign?: 'left' | 'center' | 'right'; // Header text alignment
  cellAlign?: 'left' | 'center' | 'right'; // Cell text alignment
}
```

### Basic Column

```tsx
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'status', label: 'Status', sortable: false },
];
```

### Column with Custom Rendering

```tsx
const columns = [
  {
    key: 'cost',
    label: 'Cost',
    sortable: true,
    cellAlign: 'right',
    render: (row) => `$${row.cost.toFixed(2)}`,
  },
  {
    key: 'status',
    label: 'Status',
    render: (row) => (
      <span
        className={`px-2 py-1 rounded ${
          row.status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {row.status}
      </span>
    ),
  },
];
```

## Examples

### Cost Analysis Table

```tsx
const [costData, setCostData] = useState([
  {
    id: 1,
    service: 'Amazon EC2',
    account: 'Production',
    cost: 1245.5,
    change: 12.5,
    region: 'us-east-1',
  },
  {
    id: 2,
    service: 'Amazon S3',
    account: 'Production',
    cost: 389.25,
    change: -5.2,
    region: 'us-east-1',
  },
  {
    id: 3,
    service: 'Amazon RDS',
    account: 'Development',
    cost: 756.75,
    change: 8.1,
    region: 'us-west-2',
  },
]);

const [selectedServices, setSelectedServices] = useState([]);

const costColumns = [
  {
    key: 'service',
    label: 'Service',
    sortable: true,
  },
  {
    key: 'account',
    label: 'Account',
    sortable: true,
  },
  {
    key: 'cost',
    label: 'Cost',
    sortable: true,
    cellAlign: 'right',
    render: (row) => `$${row.cost.toLocaleString()}`,
  },
  {
    key: 'change',
    label: 'Change',
    sortable: true,
    cellAlign: 'right',
    render: (row) => (
      <span className={row.change >= 0 ? 'text-red-600' : 'text-green-600'}>
        {row.change >= 0 ? '+' : ''}
        {row.change.toFixed(1)}%
      </span>
    ),
  },
  {
    key: 'region',
    label: 'Region',
    sortable: true,
  },
];

const handleSelectAll = () => {
  if (selectedServices.length === costData.length) {
    setSelectedServices([]);
  } else {
    setSelectedServices(costData);
  }
};

const handleRowSelect = (row) => {
  setSelectedServices((prev) => {
    const isSelected = prev.some((item) => item.id === row.id);
    if (isSelected) {
      return prev.filter((item) => item.id !== row.id);
    } else {
      return [...prev, row];
    }
  });
};

<div className="space-y-4">
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">Service Costs</h3>
    {selectedServices.length > 0 && (
      <span className="text-sm text-gray-600">
        {selectedServices.length} service
        {selectedServices.length !== 1 ? 's' : ''} selected
      </span>
    )}
  </div>

  <SortableTable
    data={costData}
    columns={costColumns}
    caption="Monthly service costs with percentage change from last month"
    isCheckable={true}
    selectedData={selectedServices}
    selectKey="id"
    onSelectAll={handleSelectAll}
    onSelect={handleRowSelect}
  />

  {selectedServices.length > 0 && (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Export Selected
      </button>
      <button className="px-4 py-2 bg-gray-600 text-white rounded">
        Create Alert
      </button>
    </div>
  )}
</div>;
```

### Resource Utilization Table

```tsx
const resourceData = [
  {
    id: 'i-1234567890abcdef0',
    name: 'web-server-01',
    type: 't3.medium',
    cpu: 65.5,
    memory: 78.2,
    cost: 45.6,
    status: 'running',
  },
  {
    id: 'i-0987654321fedcba0',
    name: 'database-01',
    type: 'r5.large',
    cpu: 42.1,
    memory: 55.8,
    cost: 89.4,
    status: 'running',
  },
  {
    id: 'i-1122334455667788',
    name: 'cache-server-01',
    type: 't3.small',
    cpu: 28.7,
    memory: 35.2,
    cost: 22.8,
    status: 'stopped',
  },
];

const resourceColumns = [
  { key: 'name', label: 'Instance Name', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  {
    key: 'cpu',
    label: 'CPU %',
    sortable: true,
    cellAlign: 'right',
    render: (row) => (
      <div className="flex items-center justify-end">
        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
          <div
            className={`h-2 rounded-full ${
              row.cpu > 80
                ? 'bg-red-500'
                : row.cpu > 60
                ? 'bg-yellow-500'
                : 'bg-green-500'
            }`}
            style={{ width: `${row.cpu}%` }}
          />
        </div>
        <span>{row.cpu.toFixed(1)}%</span>
      </div>
    ),
  },
  {
    key: 'memory',
    label: 'Memory %',
    sortable: true,
    cellAlign: 'right',
    render: (row) => (
      <div className="flex items-center justify-end">
        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
          <div
            className={`h-2 rounded-full ${
              row.memory > 80
                ? 'bg-red-500'
                : row.memory > 60
                ? 'bg-yellow-500'
                : 'bg-green-500'
            }`}
            style={{ width: `${row.memory}%` }}
          />
        </div>
        <span>{row.memory.toFixed(1)}%</span>
      </div>
    ),
  },
  {
    key: 'cost',
    label: 'Daily Cost',
    sortable: true,
    cellAlign: 'right',
    render: (row) => `$${row.cost.toFixed(2)}`,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    cellAlign: 'center',
    render: (row) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          row.status === 'running'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

<SortableTable
  data={resourceData}
  columns={resourceColumns}
  caption="EC2 Instance Resource Utilization and Costs"
/>;
```

### Budget Allocation Table

```tsx
const budgetData = [
  {
    id: 1,
    department: 'Engineering',
    allocated: 50000,
    spent: 42350,
    remaining: 7650,
    utilization: 84.7,
  },
  {
    id: 2,
    department: 'Marketing',
    allocated: 25000,
    spent: 18200,
    remaining: 6800,
    utilization: 72.8,
  },
  {
    id: 3,
    department: 'Sales',
    allocated: 15000,
    spent: 12800,
    remaining: 2200,
    utilization: 85.3,
  },
];

const budgetColumns = [
  { key: 'department', label: 'Department', sortable: true },
  {
    key: 'allocated',
    label: 'Allocated',
    sortable: true,
    cellAlign: 'right',
    render: (row) => `$${row.allocated.toLocaleString()}`,
  },
  {
    key: 'spent',
    label: 'Spent',
    sortable: true,
    cellAlign: 'right',
    render: (row) => `$${row.spent.toLocaleString()}`,
  },
  {
    key: 'remaining',
    label: 'Remaining',
    sortable: true,
    cellAlign: 'right',
    render: (row) => (
      <span
        className={
          row.remaining < row.allocated * 0.1
            ? 'text-red-600 font-semibold'
            : ''
        }
      >
        ${row.remaining.toLocaleString()}
      </span>
    ),
  },
  {
    key: 'utilization',
    label: 'Utilization',
    sortable: true,
    cellAlign: 'right',
    render: (row) => (
      <div className="flex items-center justify-end">
        <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
          <div
            className={`h-2 rounded-full ${
              row.utilization > 90
                ? 'bg-red-500'
                : row.utilization > 75
                ? 'bg-yellow-500'
                : 'bg-green-500'
            }`}
            style={{ width: `${Math.min(row.utilization, 100)}%` }}
          />
        </div>
        <span
          className={row.utilization > 90 ? 'text-red-600 font-semibold' : ''}
        >
          {row.utilization.toFixed(1)}%
        </span>
      </div>
    ),
  },
];

<SortableTable
  data={budgetData}
  columns={budgetColumns}
  caption="Quarterly Budget Allocation by Department"
/>;
```

## Sorting

- **Click to Sort**: Click any sortable column header to sort
- **Toggle Direction**: Click again to reverse sort order
- **Visual Indicators**: Triangle arrows show current sort direction (▲ ascending, ▼ descending)
- **Multi-type Support**: Handles strings, numbers, dates, and other comparable types

## Selection

- **Individual Selection**: Click checkboxes to select specific rows
- **Select All**: Header checkbox selects/deselects all rows
- **Selection State**: Visual feedback shows selected rows
- **Programmatic Access**: Access selected data through `selectedData` prop

## Accessibility

- **Keyboard Navigation**: Full keyboard support for table navigation
- **Screen Reader Support**: Proper table structure with headers and captions
- **Sort Indicators**: Clear visual and textual indicators for sort state
- **Checkbox Labels**: Proper labeling for selection checkboxes
- **Focus Management**: Clear focus indicators throughout the table

## Best Practices

1. **Meaningful Captions**: Use descriptive captions for screen readers and context
2. **Appropriate Sorting**: Only enable sorting for columns where it makes sense
3. **Consistent Alignment**: Align numeric data to the right, text to the left
4. **Custom Rendering**: Use custom renderers for complex data types (currency, percentages, status)
5. **Selection Purpose**: Only enable selection when users need to perform actions on multiple rows
6. **Performance**: For large datasets, consider pagination or virtualization

## Cost Management Use Cases

- **Service Cost Analysis**: Sort and compare costs across different cloud services
- **Resource Utilization**: Monitor and sort resources by utilization metrics
- **Budget Tracking**: Track department or project budget allocation and spending
- **Invoice Analysis**: Sort and filter invoice line items
- **Cost Optimization**: Identify high-cost resources for optimization
- **Usage Reports**: Analyze usage patterns across different time periods
- **Billing Reconciliation**: Compare and verify billing data across accounts
