# Accordion Component

The Accordion component provides collapsible content sections that allow users to show and hide information in an organized, space-efficient manner. It's particularly useful for organizing complex billing information, cost breakdowns, and detailed reports in cost management applications.

## Usage

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@alphaus/ripple-ui';

// Basic accordion
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section Title</AccordionTrigger>
    <AccordionContent>Content goes here</AccordionContent>
  </AccordionItem>
</Accordion>;
```

## Props

### Accordion

| Prop            | Type                                  | Default | Description                                      |
| --------------- | ------------------------------------- | ------- | ------------------------------------------------ |
| `type`          | `'single' \| 'multiple'`              | -       | Whether one or multiple items can be open        |
| `collapsible`   | `boolean`                             | `false` | Whether items can be collapsed (for single type) |
| `value`         | `string \| string[]`                  | -       | Controlled open state                            |
| `defaultValue`  | `string \| string[]`                  | -       | Default open state                               |
| `onValueChange` | `(value: string \| string[]) => void` | -       | Change handler                                   |

### AccordionItem

| Prop       | Type      | Default | Description                    |
| ---------- | --------- | ------- | ------------------------------ |
| `value`    | `string`  | -       | Unique identifier for the item |
| `disabled` | `boolean` | `false` | Whether the item is disabled   |

### AccordionTrigger

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Trigger content        |
| `className` | `string`          | -       | Additional CSS classes |

### AccordionContent

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Content to show/hide   |
| `className` | `string`          | -       | Additional CSS classes |

## Examples

### Basic Billing Information Accordion

```tsx
<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="billing-summary">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <DollarSignIcon className="h-4 w-4" />
        Billing Summary - March 2024
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium">Total Cost</Label>
            <p className="text-lg font-semibold">$12,450.30</p>
          </div>
          <div>
            <Label className="text-sm font-medium">Services</Label>
            <p className="text-lg font-semibold">8 Active</p>
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="cost-breakdown">
    <AccordionTrigger>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <BarChartIcon className="h-4 w-4" />
          Service Cost Breakdown
        </div>
        <Badge variant="outline">8 services</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span>EC2 Instances</span>
          <span className="font-mono">$5,234.56</span>
        </div>
        <div className="flex justify-between items-center">
          <span>S3 Storage</span>
          <span className="font-mono">$2,145.78</span>
        </div>
        <div className="flex justify-between items-center">
          <span>RDS Database</span>
          <span className="font-mono">$1,876.23</span>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Open Sections (Customer Details)

```tsx
<Accordion type="multiple" className="w-full">
  <AccordionItem value="profile">
    <AccordionTrigger>Customer Profile</AccordionTrigger>
    <AccordionContent>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Company Name</Label>
          <p>Acme Corporation</p>
        </div>
        <div>
          <Label>Account ID</Label>
          <p className="font-mono">123456789012</p>
        </div>
        <div>
          <Label>Contact Email</Label>
          <p>billing@acme.com</p>
        </div>
        <div>
          <Label>Monthly Budget</Label>
          <p className="font-mono">$15,000.00</p>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="billing-history">
    <AccordionTrigger>Billing History</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span>March 2024</span>
          <span className="font-mono">$12,450.30</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>February 2024</span>
          <span className="font-mono">$10,892.15</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>January 2024</span>
          <span className="font-mono">$11,234.87</span>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="alerts">
    <AccordionTrigger>Cost Alerts & Notifications</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-3">
        <Alert>
          <AlertTitle>Budget Alert</AlertTitle>
          <AlertDescription>83% of monthly budget utilized</AlertDescription>
        </Alert>
        <Alert variant="inform">
          <AlertTitle>Usage Spike</AlertTitle>
          <AlertDescription>EC2 usage increased 25% this week</AlertDescription>
        </Alert>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Accordion Types

### Single (Collapsible)

Only one section can be open at a time, and sections can be collapsed.

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="section1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="section2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple

Multiple sections can be open simultaneously.

```tsx
<Accordion type="multiple">
  <AccordionItem value="section1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="section2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

## Controlled State

### Controlled Single Accordion

```tsx
function ControlledAccordion() {
  const [value, setValue] = useState('');

  return (
    <Accordion type="single" value={value} onValueChange={setValue}>
      <AccordionItem value="billing">
        <AccordionTrigger>Billing Information</AccordionTrigger>
        <AccordionContent>
          <p>Billing details and payment information</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="usage">
        <AccordionTrigger>Usage Statistics</AccordionTrigger>
        <AccordionContent>
          <p>Monthly usage breakdown and trends</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Controlled Multiple Accordion

```tsx
function ControlledMultipleAccordion() {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Accordion type="multiple" value={values} onValueChange={setValues}>
      <AccordionItem value="overview">
        <AccordionTrigger>Cost Overview</AccordionTrigger>
        <AccordionContent>Monthly cost summary</AccordionContent>
      </AccordionItem>
      <AccordionItem value="details">
        <AccordionTrigger>Detailed Breakdown</AccordionTrigger>
        <AccordionContent>Service-by-service costs</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Accessibility

- **Keyboard Navigation**: Use arrow keys to navigate between triggers, Enter/Space to toggle
- **Screen Reader Support**: Proper ARIA attributes for expandable content
- **Focus Management**: Focus moves appropriately when sections open/close
- **ARIA States**: `aria-expanded` and `aria-controls` properly managed

## Best Practices

- **Clear Trigger Labels**: Use descriptive text that indicates what content will be revealed
- **Logical Grouping**: Group related information together in sections
- **Performance**: Avoid heavy content in accordion items that aren't visible by default
- **Mobile Friendly**: Test touch interactions and ensure adequate touch targets
- **Visual Hierarchy**: Use consistent styling for triggers and maintain content hierarchy

## Common Use Cases

### Invoice Details

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="line-items">
    <AccordionTrigger>Line Items (12)</AccordionTrigger>
    <AccordionContent>
      <Table>{/* Invoice line items table */}</Table>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="payment-terms">
    <AccordionTrigger>Payment Terms</AccordionTrigger>
    <AccordionContent>
      <p>Net 30 days from invoice date</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### FAQ Section

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="billing-cycle">
    <AccordionTrigger>How does the billing cycle work?</AccordionTrigger>
    <AccordionContent>
      <p>Billing cycles run from the 1st to the last day of each month...</p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="cost-allocation">
    <AccordionTrigger>
      How are costs allocated across accounts?
    </AccordionTrigger>
    <AccordionContent>
      <p>Costs are allocated based on actual usage patterns...</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Related Components

- [Collapsible](../Collapsible/README.md) - For simple show/hide content
- [Tabs](../Tabs/README.md) - For mutually exclusive content sections
- [Card](../Card/README.md) - For grouping related content
