# Toaster Component

The Toaster component provides a toast notification system for displaying temporary messages, alerts, and feedback to users. It's essential for communicating the results of actions, system status, and important updates in cost management applications.

## Usage

```tsx
import { Toaster, toast } from '@alphaus/ripple-ui';

// Add Toaster to your app root
function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  );
}

// Trigger toasts
toast.success('Invoice processed successfully!');
toast.error('Failed to update billing information');
toast.warning('Budget threshold reached');
toast.info('New cost report available');
```

## Toast Types

### Success Toast

Used to confirm successful operations like data saves, invoice processing, or report generation.

```tsx
// Single action success
toast.success('Customer saved successfully!');

// Complex operation success
toast.success('Monthly billing report generated', {
  description: 'Report includes 125 accounts and $45,230 in charges',
  duration: 5000,
});
```

### Error Toast

Used to communicate failures, validation errors, or system issues.

```tsx
// Simple error
toast.error('Failed to process payment');

// Detailed error with action
toast.error('Invoice generation failed', {
  description: 'Please check your billing configuration and try again',
  action: {
    label: 'Retry',
    onClick: () => retryInvoiceGeneration(),
  },
});
```

### Warning Toast

Used to alert users about important conditions that need attention.

```tsx
// Budget warning
toast.warning('Monthly budget exceeded', {
  description: 'Current spending: $12,450 (Budget: $10,000)',
  duration: 8000,
});

// System warning
toast.warning('Maintenance scheduled', {
  description: 'Billing system will be offline from 2-4 AM EST',
});
```

### Info Toast

Used to provide informational updates and system notifications.

```tsx
// Status update
toast.info('Cost data sync in progress', {
  description: 'Latest AWS usage data is being processed',
});

// Feature announcement
toast.info('New dashboard features available', {
  description: 'Check out enhanced cost analytics in the Reports section',
});
```

## Configuration Options

### Duration

Control how long toasts remain visible.

```tsx
// Short duration for simple confirmations
toast.success('Saved!', { duration: 2000 });

// Long duration for complex information
toast.warning('Important system update', { duration: 10000 });

// Persistent toast (manual dismiss only)
toast.error('Critical error', { duration: Infinity });
```

### Position

Configure where toasts appear on screen.

```tsx
<Toaster position="top-right" />
<Toaster position="top-center" />
<Toaster position="bottom-left" />
<Toaster position="bottom-right" />
```

### Actions

Add interactive elements to toasts.

```tsx
toast.error('Payment failed', {
  action: {
    label: 'Retry Payment',
    onClick: () => handleRetryPayment(),
  },
});

toast.info('New invoice ready', {
  action: {
    label: 'View Invoice',
    onClick: () => navigateToInvoice(),
  },
});
```

## Cost Management Examples

### Billing Operations

```tsx
// Invoice processing
const processInvoice = async () => {
  try {
    await generateInvoice();
    toast.success('Invoice generated successfully', {
      description: 'Invoice #INV-2024-001 ready for review',
    });
  } catch (error) {
    toast.error('Invoice generation failed', {
      description: error.message,
      action: {
        label: 'Contact Support',
        onClick: () => openSupportTicket(),
      },
    });
  }
};

// Budget monitoring
const checkBudgetStatus = (spent: number, budget: number) => {
  const percentage = (spent / budget) * 100;

  if (percentage >= 90) {
    toast.warning('Budget alert: 90% utilized', {
      description: `$${spent.toFixed(2)} of $${budget.toFixed(2)} budget used`,
      duration: 8000,
    });
  }
};
```

### Data Synchronization

```tsx
// Cost data sync
const syncCostData = async () => {
  toast.info('Syncing cost data...', {
    description: 'Fetching latest usage from AWS, Azure, and GCP',
  });

  try {
    await fetchLatestCosts();
    toast.success('Cost data synchronized', {
      description: 'Data updated through yesterday',
    });
  } catch (error) {
    toast.error('Sync failed', {
      description: 'Some cost data may be outdated',
      action: {
        label: 'Retry Sync',
        onClick: () => syncCostData(),
      },
    });
  }
};
```

### User Actions

```tsx
// Customer management
const saveCustomer = async (customerData) => {
  try {
    await updateCustomer(customerData);
    toast.success('Customer updated', {
      description: `${customerData.name} profile saved successfully`,
    });
  } catch (error) {
    toast.error('Update failed', {
      description: 'Please check your input and try again',
    });
  }
};
```

## Best Practices

### Message Content

- **Be specific**: "Invoice #INV-2024-001 generated" vs "Success"
- **Include context**: Show amounts, dates, or affected items
- **Provide guidance**: Suggest next steps or corrective actions

### Duration Guidelines

- **Success messages**: 3-4 seconds
- **Error messages**: 6-8 seconds or manual dismiss
- **Warnings**: 6-10 seconds
- **Info messages**: 4-6 seconds

### Error Handling

- Always include actionable error messages
- Provide retry options when appropriate
- Link to support or documentation for complex issues

## Accessibility

- Screen reader announcements for all toast types
- Keyboard navigation support for interactive elements
- Proper ARIA roles and properties
- Respects user's motion preferences

## Related Components

- [Alert](../Alert/README.md) - For persistent notifications
- [Banner](../Banner/README.md) - For system-wide announcements
- [Modal](../Modal/README.md) - For important confirmations
