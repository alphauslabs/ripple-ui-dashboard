# Badge Component

The Badge component displays small status indicators, labels, or counters. It's commonly used in cost management applications to show service status, billing states, cost categories, and numerical indicators like item counts or alert levels.

## Usage

```tsx
import { Badge } from '@alphaus/ripple-ui';

// Basic usage
<Badge>New</Badge>;
```

## Props

| Prop       | Type                                                                     | Default     | Description          |
| ---------- | ------------------------------------------------------------------------ | ----------- | -------------------- |
| `children` | `React.ReactNode`                                                        | -           | Badge content        |
| `variant`  | `'default' \| 'info' \| 'error' \| 'success' \| 'warning' \| 'disabled'` | `'default'` | Visual style variant |
| `size`     | `'sm' \| 'md' \| 'lg'`                                                   | `'sm'`      | Badge size           |

## Examples

### Basic Status Badge

```tsx
<Badge variant="success">Active</Badge>
```

### Cost Management Examples

```tsx
// Service status indicators
<Badge variant="success">Billable</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Overdue</Badge>
<Badge variant="info">Trial</Badge>

// Billing status
<Badge variant="success">Paid</Badge>
<Badge variant="warning">Due Soon</Badge>
<Badge variant="error">Overdue</Badge>

// Cost categories
<Badge variant="info">Compute</Badge>
<Badge variant="default">Storage</Badge>
<Badge variant="info">Network</Badge>
```

## Variants

### Default

```tsx
<Badge variant="default">Default</Badge>
```

### Info

```tsx
<Badge variant="info">Information</Badge>
```

### Success

```tsx
<Badge variant="success">Success</Badge>
```

### Warning

```tsx
<Badge variant="warning">Warning</Badge>
```

### Error

```tsx
<Badge variant="error">Error</Badge>
```

### Disabled

```tsx
<Badge variant="disabled">Disabled</Badge>
```

### Cost Management Example

```tsx
// Example relevant to cost management workflows
<Badge>Financial data example</Badge>
```

## Variants

### Default

```tsx
<Badge>Default variant</Badge>
```

## Accessibility

- Screen reader compatible
- Keyboard navigation support
- Proper ARIA attributes
- Focus management

## Best Practices

- Use clear, descriptive content
- Follow accessibility guidelines
- Maintain consistent styling
- Consider responsive design

## Related Components

- [Button](../Button/README.md) - For actions
- [Card](../Card/README.md) - For containers
