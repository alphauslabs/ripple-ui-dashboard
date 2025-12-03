# Button Component

The Button component serves as the primary action trigger throughout the application, providing users with clear, accessible ways to initiate actions. The component supports various visual styles and sizes to accommodate different interaction contexts and visual hierarchies.

## Usage

```tsx
import { Button } from "@alphaus/ripple-ui";

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="destructive">Delete</Button>
```

## Props

| Prop       | Type                                                                | Default     | Description                    |
| ---------- | ------------------------------------------------------------------- | ----------- | ------------------------------ |
| `variant`  | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style variant           |
| `size`     | `'small' \| 'medium' \| 'large'`                                    | `'medium'`  | Size of the button             |
| `disabled` | `boolean`                                                           | `false`     | Whether the button is disabled |
| `onClick`  | `() => void`                                                        | -           | Click handler                  |
| `children` | `React.ReactNode`                                                   | -           | Button content                 |

## Variants

### Primary Button

Used for the main action in a context. Only one primary button should be visible at a time.

```tsx
<Button variant="primary">Save Changes</Button>
```

### Secondary Button

Used for secondary actions that are important but not the primary focus.

```tsx
<Button variant="secondary">Cancel</Button>
```

### Outline Button

Used for actions that need to be visible but not prominent.

```tsx
<Button variant="outline">View Details</Button>
```

### Ghost Button

Used for subtle actions or when the button needs to blend with the background.

```tsx
<Button variant="ghost">Learn More</Button>
```

### Destructive Button

Used for dangerous actions like deletion or irreversible operations.

```tsx
<Button variant="destructive">Delete Account</Button>
```

## Sizes

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## Examples

### Cost Management Actions

```tsx
// Invoice processing actions
<div className="flex gap-2">
  <Button variant="primary">Process Invoice</Button>
  <Button variant="secondary">Save Draft</Button>
  <Button variant="outline">Preview</Button>
</div>

// Billing management actions
<div className="flex gap-2">
  <Button variant="primary">Generate Report</Button>
  <Button variant="destructive">Delete Billing Group</Button>
</div>
```

### Form Actions

```tsx
// Form submission
<div className="flex gap-2 justify-end">
  <Button variant="secondary" onClick={handleCancel}>
    Cancel
  </Button>
  <Button variant="primary" type="submit">
    Save Customer
  </Button>
</div>
```

## Accessibility

- Supports keyboard navigation with Enter and Space keys
- Proper ARIA attributes for screen readers
- Focus management with visible focus indicators
- Disabled state properly communicated to assistive technologies

## Related Components

- [IconButton](../IconButton/README.md) - For icon-only buttons
- [ButtonTab](../ButtonTab/README.md) - For tab-style buttons
