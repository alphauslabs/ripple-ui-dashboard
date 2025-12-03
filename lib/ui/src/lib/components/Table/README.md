# Table Component

The Table component provides a structured way to display tabular data, particularly suited for financial information, cost breakdowns, and billing details. It offers sorting, filtering, and responsive design capabilities essential for data-heavy applications.

## Usage

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@alphaus/ripple-ui';

// Basic table
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead>Cost</TableHead>
      <TableHead>Usage</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>EC2 Instances</TableCell>
      <TableCell>$1,234.56</TableCell>
      <TableCell>720 hours</TableCell>
    </TableRow>
  </TableBody>
</Table>;
```

## Components

### Table

Main table container with proper styling and accessibility.

#### Props

| Prop              | Type                | Default      | Description                                          |
| ----------------- | ------------------- | ------------ | ---------------------------------------------------- |
| `tableLayout`     | `'fixed' \| 'auto'` | `'fixed'`    | CSS table layout algorithm                           |
| `scrollable`      | `boolean`           | `false`      | Enable vertical scrolling with fixed height          |
| `maxHeight`       | `string`            | `'max-h-96'` | Maximum height for scrollable container              |
| `alternatingRows` | `boolean`           | `true`       | Enable alternating row colors for better readability |

#### Basic Usage

```tsx
<Table className="w-full">{/* Table content */}</Table>
```

#### Alternating Row Colors

By default, tables have alternating row colors (zebra striping) for better readability. You can disable this feature if needed:

```tsx
// Default behavior - alternating rows enabled
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead>Cost</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>EC2</TableCell>
      <TableCell>$1,234</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>S3</TableCell>
      <TableCell>$567</TableCell>
    </TableRow>
    {/* Alternating white and neutral-95 backgrounds */}
  </TableBody>
</Table>

// Disable alternating rows
<Table alternatingRows={false}>
  {/* All rows will have the same background */}
</Table>
```

#### Hover Effects

Table rows include built-in hover effects that work seamlessly with alternating row colors:

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead>Cost</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>EC2</TableCell>
      <TableCell>$1,234</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>S3</TableCell>
      <TableCell>$567</TableCell>
    </TableRow>
    {/* 
      Hover Effects:
      - Even rows (white): bg-white → hover:bg-neutral-90
      - Odd rows (neutral-95): bg-neutral-95 → hover:bg-neutral-90
      - All transitions are smooth with transition-colors
    */}
  </TableBody>
</Table>
```

#### Scrollable Table

The scrollable feature keeps the table header fixed while making only the table body scrollable. This provides better UX as users always see column headers while scrolling through data.

```tsx
// Default scrollable (384px max height) - Fixed header, scrollable body
<Table scrollable>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead>Cost</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>EC2</TableCell>
      <TableCell>$1,234</TableCell>
    </TableRow>
    {/* More rows... */}
  </TableBody>
</Table>

// Custom max height
<Table scrollable maxHeight="max-h-80">
  {/* Table content */}
</Table>

// Custom height with arbitrary value
<Table scrollable maxHeight="max-h-[500px]">
  {/* Table content */}
</Table>
```

**Features:**

- ✅ **Fixed Header**: Column headers remain visible while scrolling
- ✅ **Scrollable Body**: Only table rows scroll, not the entire table
- ✅ **Professional UX**: Matches spreadsheet application behavior
- ✅ **Better Navigation**: Users never lose context of column meanings

#### Comparison: Scrollable vs Non-Scrollable

```tsx
// Non-scrollable (default) - Entire table scrolls with page
<Table>
  <TableHeader>...</TableHeader>
  <TableBody>...</TableBody>
</Table>

// Scrollable - Fixed header, scrollable body only
<Table scrollable>
  <TableHeader>...</TableHeader>  {/* Always visible */}
  <TableBody>...</TableBody>      {/* Scrollable content */}
</Table>
```

### TableHeader

Container for table headers with proper styling.

```tsx
<TableHeader>
  <TableRow>
    <TableHead>Column 1</TableHead>
    <TableHead>Column 2</TableHead>
  </TableRow>
</TableHeader>
```

### TableBody

Container for table data rows.

```tsx
<TableBody>
  <TableRow>
    <TableCell>Data 1</TableCell>
    <TableCell>Data 2</TableCell>
  </TableRow>
</TableBody>
```

### TableRow

Individual row container with hover and selection states. Includes smooth transitions and proper design system colors.

```tsx
// Basic row with hover effects
<TableRow>
  <TableCell>Content</TableCell>
</TableRow>

// Custom styling (hover effects are applied automatically)
<TableRow className="border-b">
  <TableCell>Content with custom border</TableCell>
</TableRow>
```

**Built-in Hover Effects:**

- `hover:bg-neutral-90` - Subtle neutral background on hover that works with alternating row colors
- `transition-colors` - Smooth color transitions
- `data-[state=selected]:bg-neutral-80` - Selected state styling

### TableHead

Header cell with sorting and alignment options.

```tsx
<TableHead className="text-left">Service Name</TableHead>
<TableHead className="text-right">Cost</TableHead>
<TableHead className="text-center">Status</TableHead>
```

### TableCell

Data cell with proper padding and alignment.

```tsx
<TableCell className="font-medium">Primary data</TableCell>
<TableCell className="text-right">$1,234.56</TableCell>
<TableCell className="text-muted-foreground">Secondary info</TableCell>
```

## Financial Data Examples

### Cost Breakdown Table

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Service</TableHead>
      <TableHead className="text-right">Cost</TableHead>
      <TableHead className="text-right">Usage</TableHead>
      <TableHead className="text-right">% of Total</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">EC2 Instances</TableCell>
      <TableCell className="text-right font-mono">$1,234.56</TableCell>
      <TableCell className="text-right">720 hours</TableCell>
      <TableCell className="text-right">45.2%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">S3 Storage</TableCell>
      <TableCell className="text-right font-mono">$567.89</TableCell>
      <TableCell className="text-right">2.3 TB</TableCell>
      <TableCell className="text-right">20.8%</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">RDS Database</TableCell>
      <TableCell className="text-right font-mono">$432.10</TableCell>
      <TableCell className="text-right">720 hours</TableCell>
      <TableCell className="text-right">15.8%</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Invoice Line Items

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Description</TableHead>
      <TableHead className="text-right">Quantity</TableHead>
      <TableHead className="text-right">Unit Price</TableHead>
      <TableHead className="text-right">Total</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>AWS Compute Services</TableCell>
      <TableCell className="text-right">720</TableCell>
      <TableCell className="text-right">$1.715</TableCell>
      <TableCell className="text-right font-mono">$1,234.80</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Storage Services</TableCell>
      <TableCell className="text-right">2,340</TableCell>
      <TableCell className="text-right">$0.243</TableCell>
      <TableCell className="text-right font-mono">$568.62</TableCell>
    </TableRow>
    <TableRow className="border-t-2 font-semibold">
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right font-mono">$1,803.42</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Customer Billing Summary

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Customer</TableHead>
      <TableHead>Account ID</TableHead>
      <TableHead className="text-right">Monthly Cost</TableHead>
      <TableHead className="text-right">YTD Cost</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Acme Corporation</TableCell>
      <TableCell className="font-mono">123456789012</TableCell>
      <TableCell className="text-right font-mono">$12,450.30</TableCell>
      <TableCell className="text-right font-mono">$145,620.80</TableCell>
      <TableCell>
        <Badge variant="success">Active</Badge>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">Beta Industries</TableCell>
      <TableCell className="font-mono">234567890123</TableCell>
      <TableCell className="text-right font-mono">$8,932.15</TableCell>
      <TableCell className="text-right font-mono">$98,450.65</TableCell>
      <TableCell>
        <Badge variant="warning">Over Budget</Badge>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Responsive Design

### Mobile-First Approach

```tsx
<div className="overflow-x-auto">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="min-w-[200px]">Service</TableHead>
        <TableHead className="min-w-[120px] text-right">Cost</TableHead>
        <TableHead className="min-w-[100px] text-right">Usage</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>{/* Table content */}</TableBody>
  </Table>
</div>
```

### Stacked Layout for Small Screens

```tsx
<div className="block md:hidden">
  {/* Card-based layout for mobile */}
  <div className="space-y-4">
    {items.map(item => (
      <Card key={item.id} className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{item.service}</h3>
            <p className="text-sm text-muted-foreground">{item.usage}</p>
          </div>
          <div className="text-right">
            <p className="font-mono font-semibold">{item.cost}</p>
          </div>
        </div>
      </Card>
    ))}
  </div>
</div>

<div className="hidden md:block">
  {/* Regular table for desktop */}
  <Table>
    {/* Table content */}
  </Table>
</div>
```

## Accessibility

- Proper table structure with thead, tbody, and proper headers
- Screen reader friendly with proper ARIA labels
- Keyboard navigation support
- Focus management for interactive elements
- Sortable columns announced to screen readers

## Best Practices

### Financial Data Presentation

- Right-align numeric values
- Use monospace fonts for numbers to ensure proper alignment
- Include currency symbols or units
- Highlight totals and important values

### Performance

- Implement virtual scrolling for large datasets
- Use pagination for better performance
- Consider lazy loading for complex data

### Visual Hierarchy

- Use consistent spacing and typography
- Highlight important rows or values
- Provide clear visual separation between sections

## Related Components

- [SortableTable](../SortableTable/README.md) - For sortable tables
- [TablePagination](../TablePagination/README.md) - For pagination controls
- [CheckableTable](../CheckableTable/README.md) - For selectable rows
