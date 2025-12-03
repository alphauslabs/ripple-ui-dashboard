# Alert Component

The Alert component provides persistent notifications for important information, warnings, and status updates. It's used throughout cost management applications to communicate system state, budget alerts, billing notifications, and user feedback.

## Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from '@alphaus/ripple-ui';

// Basic alert
<Alert>
  <AlertTitle>Alert Title</AlertTitle>
  <AlertDescription>Alert description text goes here.</AlertDescription>
</Alert>;
```

## Props

### Alert

| Prop        | Type                                     | Default     | Description            |
| ----------- | ---------------------------------------- | ----------- | ---------------------- |
| `variant`   | `'default' \| 'destructive' \| 'inform'` | `'default'` | Visual style variant   |
| `children`  | `React.ReactNode`                        | -           | Alert content          |
| `className` | `string`                                 | -           | Additional CSS classes |

### AlertTitle

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Title content          |
| `className` | `string`          | -       | Additional CSS classes |

### AlertDescription

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Description content    |
| `className` | `string`          | -       | Additional CSS classes |

## Variants

### Default (Info)

```tsx
<Alert>
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Your monthly cost report is ready for review.
  </AlertDescription>
</Alert>
```

### Destructive (Error)

```tsx
<Alert variant="destructive">
  <AlertCircleIcon className="h-4 w-4" />
  <AlertTitle>Payment Failed</AlertTitle>
  <AlertDescription>
    Invoice payment could not be processed. Please check your payment method.
  </AlertDescription>
</Alert>
```

### Inform (Neutral)

```tsx
<Alert variant="inform">
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>System Update</AlertTitle>
  <AlertDescription>
    The billing system has been updated with new features and improvements.
  </AlertDescription>
</Alert>
```

## Cost Management Examples

### Budget Monitoring Alerts

```tsx
// Budget threshold warning (using default variant with warning styling)
<Alert>
  <WarningIcon className="h-4 w-4" />
  <AlertTitle>Budget Threshold Reached</AlertTitle>
  <AlertDescription>
    Monthly spending has exceeded 85% of the allocated budget.
    Current: $8,500 | Budget: $10,000
  </AlertDescription>
  <div className="mt-4 flex gap-2">
    <Button variant="outline" size="sm">View Details</Button>
    <Button variant="outline" size="sm">Adjust Budget</Button>
  </div>
</Alert>

// Budget exceeded error
<Alert variant="destructive">
  <AlertCircleIcon className="h-4 w-4" />
  <AlertTitle>Budget Exceeded</AlertTitle>
  <AlertDescription>
    Monthly spending has exceeded the allocated budget by $1,450.
    Immediate action required.
  </AlertDescription>
  <div className="mt-4 flex gap-2">
    <Button variant="outline" size="sm">Review Costs</Button>
    <Button variant="primary" size="sm">Contact Support</Button>
  </div>
</Alert>
```

### System Status Alerts

```tsx
// Data sync notification
<Alert>
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>Cost Data Synchronization</AlertTitle>
  <AlertDescription>
    Latest AWS usage data has been synchronized and is now available in reports.
    Last updated: 2 minutes ago
  </AlertDescription>
</Alert>

// Maintenance notification
<Alert variant="inform">
  <ClockIcon className="h-4 w-4" />
  <AlertTitle>Scheduled Maintenance</AlertTitle>
  <AlertDescription>
    The billing system will be offline for maintenance from 2:00 AM to 4:00 AM EST on March 15th.
    No data will be lost during this time.
  </AlertDescription>
</Alert>
```

### Billing and Invoice Alerts

```tsx
// Successful invoice generation (using default variant for positive info)
<Alert>
  <CheckCircleIcon className="h-4 w-4" />
  <AlertTitle>Invoice Generated Successfully</AlertTitle>
  <AlertDescription>
    Invoice INV-2024-001 for $12,450.30 has been generated and sent to customer@acme.com.
  </AlertDescription>
  <div className="mt-4">
    <Button variant="outline" size="sm">Download PDF</Button>
  </div>
</Alert>

// Payment processing error
<Alert variant="destructive">
  <XCircleIcon className="h-4 w-4" />
  <AlertTitle>Payment Processing Failed</AlertTitle>
  <AlertDescription>
    Payment for invoice INV-2024-001 could not be processed.
    Error: Insufficient funds in linked account.
  </AlertDescription>
  <div className="mt-4 flex gap-2">
    <Button variant="outline" size="sm">Update Payment Method</Button>
    <Button variant="outline" size="sm">Contact Customer</Button>
  </div>
</Alert>
```

## Interactive Alerts with Actions

### Dismissible Alert

```tsx
function DismissibleAlert() {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  return (
    <Alert className="relative">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Cost Optimization Available</AlertTitle>
      <AlertDescription>
        We found potential savings of $1,200/month in your AWS infrastructure.
      </AlertDescription>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 h-6 w-6 p-0"
        onClick={() => setShowAlert(false)}
      >
        <XIcon className="h-4 w-4" />
      </Button>
      <div className="mt-4 flex gap-2">
        <Button size="sm">View Recommendations</Button>
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </div>
    </Alert>
  );
}
```

## Accessibility

- **Screen Reader Support**: Proper ARIA roles and labels
- **Color Independence**: Icons and text provide meaning, not just color
- **Focus Management**: Interactive elements are keyboard accessible
- **High Contrast**: Meets WCAG color contrast requirements

## Best Practices

### Content Guidelines

- **Be Specific**: Include relevant details like amounts, dates, or error codes
- **Actionable**: Provide clear next steps when possible
- **Contextual**: Include enough context for users to understand the situation

### Visual Design

- **Consistent Icons**: Use appropriate icons that reinforce the alert type
- **Proper Hierarchy**: Use AlertTitle for main message, AlertDescription for details
- **Action Placement**: Place action buttons in a logical, accessible location

### Usage Patterns

- **Temporary vs Persistent**: Use alerts for important information that needs attention
- **Don't Overuse**: Too many alerts can overwhelm users
- **Progressive Disclosure**: Link to detailed information when needed

## Related Components

- [Toaster](../Toaster/README.md) - For temporary notifications
- [Banner](../Banner/README.md) - For system-wide announcements
- [Dialog](../Dialog/README.md) - For critical confirmations
