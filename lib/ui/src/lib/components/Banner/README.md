# Banner Component

The Banner component displays prominent notifications and announcements across the top of pages or sections. It's commonly used in cost management applications for system announcements, maintenance notices, billing alerts, and important updates that need persistent visibility.

## Usage

```tsx
import { Banner } from '@alphaus/ripple-ui';

// Basic banner
<Banner>Important announcement message</Banner>;
```

## Props

| Prop        | Type                                                                | Default     | Description                             |
| ----------- | ------------------------------------------------------------------- | ----------- | --------------------------------------- |
| `variant`   | `'default' \| 'informational' \| 'success' \| 'error' \| 'warning'` | `'default'` | Visual style and severity               |
| `removable` | `boolean`                                                           | `false`     | Whether banner can be dismissed by user |
| `children`  | `React.ReactNode`                                                   | -           | Banner content                          |
| `className` | `string`                                                            | -           | Additional CSS classes                  |

## Examples

### System Maintenance Banner

```tsx
<Banner variant="warning" removable>
  Scheduled maintenance will occur on March 15th from 2:00 AM to 4:00 AM EST.
  Billing reports may be temporarily unavailable during this time.
</Banner>
```

### Billing Alert Banner

```tsx
<Banner variant="error">
  Payment processing failed for invoice INV-2024-001. Please update your payment
  method to avoid service interruption.
</Banner>
```

### Success Notification Banner

```tsx
<Banner variant="success" removable>
  Your monthly cost report has been successfully generated and emailed to your
  team.
</Banner>
```

### Informational Banner

```tsx
<Banner variant="informational">
  New cost optimization recommendations are available. Review your dashboard for
  potential savings opportunities.
</Banner>
```

## Variants

### Default

```tsx
<Banner>Default neutral banner for general announcements</Banner>
```

### Informational

```tsx
<Banner variant="informational">
  <strong>New Feature:</strong> Enhanced cost allocation reporting is now
  available
</Banner>
```

### Success

```tsx
<Banner variant="success">
  Invoice INV-2024-001 has been successfully processed and payment received
</Banner>
```

### Warning

```tsx
<Banner variant="warning">
  Budget threshold reached: 85% of monthly limit used ($8,500 of $10,000)
</Banner>
```

### Error

```tsx
<Banner variant="error">
  Critical: Multiple payment failures detected. Immediate action required.
</Banner>
```

## Dismissible Banners

When `removable={true}`, banners can be dismissed by users. The dismissal state is stored in localStorage to persist across sessions.

```tsx
<Banner variant="informational" removable>
  This banner can be dismissed and won't show again until localStorage is
  cleared
</Banner>
```

## Cost Management Use Cases

### Budget Alerts

```tsx
<Banner variant="warning" removable>
  <strong>Budget Alert:</strong> Account "Production Environment" has exceeded
  90% of its monthly budget. Current usage: $4,500 / $5,000 limit.
</Banner>
```

### Payment Notifications

```tsx
<Banner variant="success">
  Payment of $12,450.30 has been successfully processed for invoice
  INV-2024-001. Your account is current and all services remain active.
</Banner>
```

### Service Updates

```tsx
<Banner variant="informational" removable>
  <strong>Enhanced Reporting:</strong> New cost breakdown views are now
  available in your dashboard.{' '}
  <a href="/reports" className="underline">
    Explore new features
  </a>
</Banner>
```

## Accessibility

- **ARIA Role**: Automatically includes `role="alert"` for screen readers
- **Keyboard Navigation**: Dismiss button is keyboard accessible
- **Color Independence**: Icons and styling don't rely solely on color
- **Focus Management**: Proper focus handling for interactive elements

## Best Practices

### Content Guidelines

- **Be Specific**: Include relevant details like dates, amounts, or account names
- **Action-Oriented**: Provide clear next steps when appropriate
- **Concise**: Keep messages brief but informative
- **Contextual**: Ensure message is relevant to current user context

### Usage Patterns

- **Persistent Information**: Use for information that should remain visible
- **High Priority**: Reserve for important announcements that need attention
- **Appropriate Variants**: Match severity to content importance
- **Dismissible When Appropriate**: Allow users to dismiss non-critical announcements

## Related Components

- [Alert](../Alert/README.md) - For inline notifications within content
- [Toaster](../Toaster/README.md) - For temporary toast notifications
- [Dialog](../Dialog/README.md) - For modal confirmations and alerts
