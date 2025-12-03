# TablePagination Component

The TablePaginationControl component provides comprehensive pagination functionality for tables and data lists. It includes page navigation controls, page size selection, and result count display with internationalization support, making it essential for managing large datasets in cost management applications.

## Usage

```tsx
import { TablePaginationControl } from '@alphaus/ripple-ui';
import { useState } from 'react';

function CostDataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const totalItems = 1250; // Total number of cost records

  return (
    <div>
      {/* Your table content here */}

      <TablePaginationControl
        currentPage={currentPage}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setCurrentPage(1); // Reset to first page when changing page size
        }}
      />
    </div>
  );
}
```

## Props

### TablePaginationProps

| Prop                   | Type                         | Default                  | Description                            |
| ---------------------- | ---------------------------- | ------------------------ | -------------------------------------- |
| `currentPage`          | `number`                     | -                        | Current active page number (1-based)   |
| `totalItems`           | `number`                     | -                        | Total number of items across all pages |
| `pageSize`             | `number`                     | -                        | Number of items to display per page    |
| `pageSizeOptions`      | `number[]`                   | `[10, 25, 50, 100, 200]` | Available page size options            |
| `onPageChange`         | `(page: number) => void`     | -                        | Callback when page changes             |
| `onPageSizeChange`     | `(pageSize: number) => void` | -                        | Callback when page size changes        |
| `showPageSizeSelector` | `boolean`                    | `true`                   | Whether to show the page size selector |
| `className`            | `string`                     | `''`                     | Additional CSS classes to apply        |

## Features

### Page Navigation

- **Previous/Next Controls**: Arrow buttons for page navigation
- **Automatic Disable**: Navigation buttons disabled at boundaries
- **Smart State Management**: Handles edge cases and boundary conditions

### Page Size Selection

- **Configurable Options**: Customizable page size options
- **Dropdown Interface**: Clean select dropdown for page size changes
- **Responsive Design**: Compact layout that works on all screen sizes

### Information Display

- **Result Range**: Shows current range of displayed items
- **Total Count**: Displays total number of items
- **Internationalization**: Full i18n support for all text elements

## Examples

### Cost Report Pagination

```tsx
function CostReportTable() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(50);

  // Simulate API data
  const costData = {
    items: [], // Your cost data
    total: 2340,
  };

  const handlePageSizeChange = (newSize: number) => {
    setSize(newSize);
    setPage(1); // Reset to first page
    // Trigger data refetch with new page size
  };

  return (
    <div className="space-y-4">
      {/* Cost table here */}

      <TablePaginationControl
        currentPage={page}
        totalItems={costData.total}
        pageSize={size}
        pageSizeOptions={[25, 50, 100, 200]}
        onPageChange={setPage}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}
```

### Invoice List with Custom Options

```tsx
function InvoiceList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const invoices = {
    data: [], // Invoice data
    totalCount: 456,
  };

  return (
    <div>
      {/* Invoice list content */}

      <TablePaginationControl
        currentPage={currentPage}
        totalItems={invoices.totalCount}
        pageSize={pageSize}
        pageSizeOptions={[10, 20, 50]}
        onPageChange={setCurrentPage}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setCurrentPage(1);
        }}
        showPageSizeSelector={true}
        className="border-t pt-4"
      />
    </div>
  );
}
```

### Resource Management with Large Datasets

```tsx
function ResourceManager() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);

  const resources = {
    items: [], // Resource data
    total: 15750,
  };

  return (
    <div>
      <div className="mb-4">
        <h2>Resource Management</h2>
        <p>Managing {resources.total} cloud resources</p>
      </div>

      {/* Resource table */}

      <TablePaginationControl
        currentPage={page}
        totalItems={resources.total}
        pageSize={itemsPerPage}
        pageSizeOptions={[50, 100, 200, 500]}
        onPageChange={setPage}
        onPageSizeChange={setItemsPerPage}
      />
    </div>
  );
}
```

### Minimal Pagination (No Page Size Selector)

```tsx
function SimpleCostList() {
  const [page, setPage] = useState(1);
  const pageSize = 20; // Fixed page size

  const costItems = {
    data: [], // Cost data
    totalItems: 89,
  };

  return (
    <div>
      {/* Simple cost list */}

      <TablePaginationControl
        currentPage={page}
        totalItems={costItems.totalItems}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={() => {}} // No-op since selector is hidden
        showPageSizeSelector={false}
      />
    </div>
  );
}
```

## Internationalization

The component uses react-i18next for internationalization. The following translation keys are used:

```json
{
  "Showing {{startItem}} - {{endItem}} of {{totalItems}} results": "Showing {{startItem}} - {{endItem}} of {{totalItems}} results",
  "Records per page:": "Records per page:"
}
```

### Custom Translations

```tsx
// Example translations for different locales
const translations = {
  en: {
    'Showing {{startItem}} - {{endItem}} of {{totalItems}} results':
      'Showing {{startItem}} - {{endItem}} of {{totalItems}} results',
    'Records per page:': 'Records per page:',
  },
  es: {
    'Showing {{startItem}} - {{endItem}} of {{totalItems}} results':
      'Mostrando {{startItem}} - {{endItem}} de {{totalItems}} resultados',
    'Records per page:': 'Registros por página:',
  },
  fr: {
    'Showing {{startItem}} - {{endItem}} of {{totalItems}} results':
      'Affichage {{startItem}} - {{endItem}} sur {{totalItems}} résultats',
    'Records per page:': 'Enregistrements par page:',
  },
};
```

## Accessibility

The TablePaginationControl component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Descriptive labels and ARIA attributes
- **Focus Management**: Clear focus indicators for navigation controls
- **Disabled States**: Proper handling of disabled navigation buttons

## Best Practices

### State Management

- Always reset to page 1 when changing page size
- Implement proper loading states during page transitions
- Handle edge cases like empty result sets
- Consider URL synchronization for shareable pagination states

### Performance

- Implement efficient data fetching for page changes
- Consider caching strategies for frequently accessed pages
- Use virtual scrolling for very large datasets
- Debounce rapid page size changes

### User Experience

- Provide clear feedback during page transitions
- Show loading indicators for slow data fetching
- Consider preserving page state in navigation
- Use appropriate page size defaults for your data type

## Cost Management Use Cases

The TablePaginationControl component is essential for:

- **Cost Reports**: Navigate through large cost datasets efficiently
- **Invoice Management**: Page through monthly/yearly invoice collections
- **Resource Lists**: Manage large numbers of cloud resources
- **Transaction History**: Browse through detailed transaction records
- **Budget Analysis**: Navigate multi-period budget data
- **Audit Logs**: Page through extensive audit trail information

## Related Components

- [Table](../Table/README.md) - Basic table component
- [SortableTable](../SortableTable/README.md) - Table with sorting functionality
- [CheckableTable](../CheckableTable/README.md) - Table with row selection
- [Select](../Select/README.md) - Select component used for page size selection
- [IconButton](../IconButton/README.md) - Button component used for navigation
