# Card Component

The Card component provides a container for grouping related content and actions. It's extensively used for displaying cost summaries, customer information, and billing details with proper visual hierarchy.

## Usage

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@alphaus/ripple-ui';

// Basic card
<Card>
  <CardHeader>
    <CardTitle>Monthly Cost Summary</CardTitle>
    <CardDescription>AWS charges for March 2024</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold">$12,450.30</div>
    <p className="text-sm text-muted-foreground">+15.2% from last month</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">View Details</Button>
  </CardFooter>
</Card>;
```

## Components

### Card

Main container with proper spacing and styling.

```tsx
<Card className="p-6">{/* Card content */}</Card>
```

### CardHeader

Header section for titles and descriptions.

```tsx
<CardHeader>
  <CardTitle>Card Title</CardTitle>
  <CardDescription>Optional description</CardDescription>
</CardHeader>
```

### CardContent

Main content area with consistent padding.

```tsx
<CardContent>
  <p>Card content goes here</p>
</CardContent>
```

### CardFooter

Footer section for actions and additional information.

```tsx
<CardFooter>
  <Button variant="primary">Action</Button>
</CardFooter>
```

## Cost Management Examples

### Cost Dashboard Cards

```tsx
// Monthly cost summary
<Card className="p-6">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-muted-foreground">This Month</p>
      <p className="text-2xl font-bold">$12,450.30</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-green-600">+15.2%</p>
      <p className="text-xs text-muted-foreground">vs last month</p>
    </div>
  </div>
</Card>

// Service cost breakdown
<Card>
  <CardHeader>
    <CardTitle>Top Services</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span>EC2 Instances</span>
        <span className="font-mono">$5,234.56</span>
      </div>
      <div className="flex justify-between">
        <span>S3 Storage</span>
        <span className="font-mono">$2,145.78</span>
      </div>
      <div className="flex justify-between">
        <span>RDS Database</span>
        <span className="font-mono">$1,876.23</span>
      </div>
    </div>
  </CardContent>
</Card>
```

### Customer Information Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Customer Details</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label className="text-sm font-medium">Name</Label>
        <p>Acme Corporation</p>
      </div>
      <div>
        <Label className="text-sm font-medium">Account ID</Label>
        <p className="font-mono">123456789012</p>
      </div>
      <div>
        <Label className="text-sm font-medium">Monthly Budget</Label>
        <p className="font-mono">$15,000.00</p>
      </div>
      <div>
        <Label className="text-sm font-medium">Current Usage</Label>
        <p className="font-mono">$12,450.30</p>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Edit Customer</Button>
  </CardFooter>
</Card>
```

### Invoice Summary Cards

```tsx
<Card>
  <CardHeader>
    <CardTitle>Invoice #INV-2024-001</CardTitle>
    <CardDescription>March 2024 Billing Period</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span className="font-mono">$1,234.56</span>
      </div>
      <div className="flex justify-between">
        <span>Tax (8.25%):</span>
        <span className="font-mono">$101.85</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total:</span>
        <span className="font-mono">$1,336.41</span>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <div className="flex gap-2">
      <Button variant="outline">Download PDF</Button>
      <Button variant="primary">Send Invoice</Button>
    </div>
  </CardFooter>
</Card>
```

## Layout Patterns

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card className="p-4">
    <h3 className="font-semibold mb-2">Metric 1</h3>
    <p className="text-2xl font-bold">$12,450</p>
  </Card>
  <Card className="p-4">
    <h3 className="font-semibold mb-2">Metric 2</h3>
    <p className="text-2xl font-bold">$8,930</p>
  </Card>
  <Card className="p-4">
    <h3 className="font-semibold mb-2">Metric 3</h3>
    <p className="text-2xl font-bold">$5,620</p>
  </Card>
</div>
```

### Stacked Layout

```tsx
<div className="space-y-4">
  <Card>
    <CardHeader>
      <CardTitle>Overview</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Summary information</p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Details</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Detailed information</p>
    </CardContent>
  </Card>
</div>
```

## Accessibility

- Proper semantic structure with heading hierarchy
- Focus management for interactive elements
- Screen reader compatible content structure
- Keyboard navigation support

## Best Practices

- Use consistent padding and spacing
- Maintain proper visual hierarchy with titles and descriptions
- Group related actions in the footer
- Use appropriate typography scales for different content types
- Implement responsive design for mobile devices

## Related Components

- [Button](../Button/README.md) - For card actions
- [Badge](../Badge/README.md) - For status indicators
- [Table](../Table/README.md) - For tabular data within cards
