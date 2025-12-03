# Tabs Component

The Tabs component provides a comprehensive tab system built on Radix UI primitives, featuring both tab navigation and associated content panels. This component is ideal for organizing complex interfaces where users need to switch between different views while maintaining context within the same page area.

## Usage

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@alphaus/ripple-ui';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content goes here...</TabsContent>
  <TabsContent value="details">Detailed information content...</TabsContent>
  <TabsContent value="settings">Settings panel content...</TabsContent>
</Tabs>;
```

## Components

### Tabs (Root)

The root container that manages the tab state and coordination.

| Prop            | Type                         | Default        | Description                 |
| --------------- | ---------------------------- | -------------- | --------------------------- |
| `defaultValue`  | `string`                     | -              | Initially active tab value  |
| `value`         | `string`                     | -              | Controlled active tab value |
| `onValueChange` | `(value: string) => void`    | -              | Callback when tab changes   |
| `orientation`   | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab layout direction        |

### TabsList

Container for the tab triggers with styling and layout.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | -       | Additional CSS classes |
| `children`  | `React.ReactNode` | -       | TabsTrigger components |

### TabsTrigger

Individual tab button that triggers content switching.

| Prop        | Type              | Default | Description                   |
| ----------- | ----------------- | ------- | ----------------------------- |
| `value`     | `string`          | -       | Unique identifier for the tab |
| `children`  | `React.ReactNode` | -       | Tab label content             |
| `disabled`  | `boolean`         | `false` | Whether tab is disabled       |
| `className` | `string`          | -       | Additional CSS classes        |

### TabsContent

Content panel associated with a specific tab.

| Prop        | Type              | Default | Description                       |
| ----------- | ----------------- | ------- | --------------------------------- |
| `value`     | `string`          | -       | Tab value this content belongs to |
| `children`  | `React.ReactNode` | -       | Panel content                     |
| `className` | `string`          | -       | Additional CSS classes            |

## Advanced Usage

### Controlled Tabs

```tsx
const [activeTab, setActiveTab] = useState('costs');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="costs">Costs</TabsTrigger>
    <TabsTrigger value="usage">Usage</TabsTrigger>
    <TabsTrigger value="trends">Trends</TabsTrigger>
  </TabsList>
  <TabsContent value="costs">Cost analysis content...</TabsContent>
  <TabsContent value="usage">Usage metrics content...</TabsContent>
  <TabsContent value="trends">Trend analysis content...</TabsContent>
</Tabs>;
```

### Vertical Orientation

```tsx
<Tabs orientation="vertical" defaultValue="summary">
  <TabsList className="flex-col h-auto">
    <TabsTrigger value="summary">Summary</TabsTrigger>
    <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
    <TabsTrigger value="forecast">Forecast</TabsTrigger>
  </TabsList>
  <TabsContent value="summary">Summary dashboard...</TabsContent>
  <TabsContent value="breakdown">Cost breakdown analysis...</TabsContent>
  <TabsContent value="forecast">Cost forecasting tools...</TabsContent>
</Tabs>
```

### With Disabled Tabs

```tsx
<Tabs defaultValue="current">
  <TabsList>
    <TabsTrigger value="current">Current Period</TabsTrigger>
    <TabsTrigger value="previous">Previous Period</TabsTrigger>
    <TabsTrigger value="forecast" disabled>
      Forecast (Coming Soon)
    </TabsTrigger>
  </TabsList>
  <TabsContent value="current">Current period data...</TabsContent>
  <TabsContent value="previous">Previous period comparison...</TabsContent>
</Tabs>
```

## Cost Management Examples

### Dashboard Analytics Tabs

```tsx
<Tabs defaultValue="summary" className="w-full">
  <TabsList>
    <TabsTrigger value="summary">Cost Summary</TabsTrigger>
    <TabsTrigger value="services">By Service</TabsTrigger>
    <TabsTrigger value="departments">By Department</TabsTrigger>
    <TabsTrigger value="regions">By Region</TabsTrigger>
  </TabsList>

  <TabsContent value="summary" className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Total Spend This Month</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">$24,892</div>
        <p className="text-muted-foreground">+12% from last month</p>
      </CardContent>
    </Card>
  </TabsContent>

  <TabsContent value="services" className="space-y-4">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Cost</TableHead>
          <TableHead>Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>EC2</TableCell>
          <TableCell>$8,245</TableCell>
          <TableCell className="text-green-600">-5%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TabsContent>
</Tabs>
```

### Invoice Management Interface

```tsx
<Tabs defaultValue="pending" className="w-full">
  <TabsList>
    <TabsTrigger value="pending">Pending ({pendingCount})</TabsTrigger>
    <TabsTrigger value="paid">Paid ({paidCount})</TabsTrigger>
    <TabsTrigger value="overdue">Overdue ({overdueCount})</TabsTrigger>
    <TabsTrigger value="all">All Invoices</TabsTrigger>
  </TabsList>

  <TabsContent value="pending">
    <InvoiceTable
      invoices={pendingInvoices}
      actions={['pay', 'view', 'download']}
    />
  </TabsContent>

  <TabsContent value="paid">
    <InvoiceTable invoices={paidInvoices} actions={['view', 'download']} />
  </TabsContent>

  <TabsContent value="overdue">
    <Alert variant="destructive" className="mb-4">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Overdue Invoices</AlertTitle>
      <AlertDescription>
        These invoices require immediate attention.
      </AlertDescription>
    </Alert>
    <InvoiceTable
      invoices={overdueInvoices}
      actions={['pay', 'contact', 'view']}
    />
  </TabsContent>
</Tabs>
```

### Budget Planning Workflow

```tsx
<Tabs defaultValue="setup" value={currentStep} onValueChange={setCurrentStep}>
  <TabsList>
    <TabsTrigger value="setup">Budget Setup</TabsTrigger>
    <TabsTrigger value="allocation">Resource Allocation</TabsTrigger>
    <TabsTrigger value="alerts">Alert Configuration</TabsTrigger>
    <TabsTrigger value="review">Review & Approve</TabsTrigger>
  </TabsList>

  <TabsContent value="setup">
    <BudgetSetupForm onComplete={() => setCurrentStep('allocation')} />
  </TabsContent>

  <TabsContent value="allocation">
    <ResourceAllocationGrid onComplete={() => setCurrentStep('alerts')} />
  </TabsContent>

  <TabsContent value="alerts">
    <AlertConfigurationPanel onComplete={() => setCurrentStep('review')} />
  </TabsContent>

  <TabsContent value="review">
    <BudgetReviewSummary onApprove={handleBudgetApproval} />
  </TabsContent>
</Tabs>
```

## Design Tokens

- **Border Color**: `#DFE2F6` (neutral border)
- **Active Border**: `#2563EB` (blue-600)
- **Active Text**: `#2563EB` (blue-600)
- **Inactive Text**: `#6B7280` (gray-500)
- **Border Width**: `2px` for active indicator
- **Padding**: `16px` horizontal, `8px` vertical
- **Margin**: `8px` top for content panels

## Accessibility

- **Keyboard Navigation**: Arrow keys navigate between tabs
- **Focus Management**: Proper focus ring and outline handling
- **ARIA Attributes**: Full ARIA support from Radix primitives
- **Screen Reader**: Proper role and state announcements
- **Tab Index**: Appropriate tab order for keyboard users

## Best Practices

1. **Logical Grouping**: Group related content under appropriate tabs
2. **Clear Labels**: Use descriptive, concise tab labels
3. **Content Loading**: Consider lazy loading for heavy content panels
4. **State Persistence**: Remember active tab across navigation when appropriate
5. **Mobile Experience**: Consider responsive behavior on smaller screens
6. **Performance**: Avoid rendering all content panels simultaneously if heavy

## Performance Considerations

- Content panels are only rendered when active (Radix behavior)
- Use React.memo for expensive content components
- Consider virtualization for large data sets within panels
- Implement lazy loading for data-heavy tabs

## Related Components

- `TabBar`: For simpler tab navigation without content panels
- `ButtonTab`: For pill-style tab interfaces
- `Card`: For organizing content within tab panels
- `Accordion`: For collapsible content organization
