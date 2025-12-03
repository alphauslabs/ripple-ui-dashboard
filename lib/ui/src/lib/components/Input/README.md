# Input Component

The Input component provides a flexible, accessible text input field designed for form data collection in cloud cost management applications. It supports various input types, validation states, and styling options to accommodate different use cases.

## Usage

```tsx
import { Input } from "@alphaus/ripple-ui";

// Basic usage
<Input placeholder="Enter text" />

// With label
<Input label="Email Address" type="email" />

// With error state
<Input
  label="Budget Amount"
  type="number"
  error="Amount must be positive"
  value={value}
  onChange={setValue}
/>
```

## Props

| Prop          | Type                                                                        | Default  | Description               |
| ------------- | --------------------------------------------------------------------------- | -------- | ------------------------- |
| `type`        | `'text' \| 'email' \| 'password' \| 'number' \| 'search' \| 'tel' \| 'url'` | `'text'` | Input type                |
| `label`       | `string`                                                                    | -        | Input label               |
| `placeholder` | `string`                                                                    | -        | Placeholder text          |
| `value`       | `string`                                                                    | -        | Input value               |
| `onChange`    | `(value: string) => void`                                                   | -        | Change handler            |
| `error`       | `string`                                                                    | -        | Error message             |
| `disabled`    | `boolean`                                                                   | `false`  | Whether input is disabled |
| `required`    | `boolean`                                                                   | `false`  | Whether input is required |

## Input Types

### Text Input

For general text entry like names, descriptions, and account information.

```tsx
<Input label="Customer Name" type="text" placeholder="Enter customer name" />
```

### Email Input

For email addresses with built-in validation.

```tsx
<Input label="Email Address" type="email" placeholder="user@example.com" />
```

### Number Input

For numeric values like costs, budgets, and quantities.

```tsx
<Input
  label="Budget Amount"
  type="number"
  placeholder="0.00"
  min="0"
  step="0.01"
/>
```

### Search Input

For search functionality across cost data and billing information.

```tsx
<Input
  label="Search Services"
  type="search"
  placeholder="Search AWS services..."
/>
```

## Validation States

### Error State

Used to indicate validation errors or input problems.

```tsx
<Input
  label="Budget Amount"
  type="number"
  value={value}
  error="Amount must be greater than 0"
  onChange={setValue}
/>
```

### Success State

Used to indicate successful validation.

```tsx
<Input
  label="Account ID"
  type="text"
  value={value}
  success="Valid account ID"
  onChange={setValue}
/>
```

## Financial Data Examples

### Cost and Budget Inputs

```tsx
<div className="space-y-4">
  <Input
    label="Monthly Budget"
    type="number"
    placeholder="0.00"
    suffix="USD"
    min="0"
    step="0.01"
  />

  <Input label="Cost Center" type="text" placeholder="Enter cost center code" />

  <Input
    label="Account ID"
    type="text"
    placeholder="123456789012"
    maxLength={12}
  />
</div>
```

### Billing Information

```tsx
<div className="space-y-4">
  <Input
    label="Invoice Number"
    type="text"
    placeholder="INV-2024-001"
    required
  />

  <Input
    label="Tax ID"
    type="text"
    placeholder="Enter tax identification number"
  />

  <Input label="Purchase Order" type="text" placeholder="PO-2024-001" />
</div>
```

## Accessibility

- Proper label association with input fields
- Support for screen readers with ARIA attributes
- Keyboard navigation support
- Clear focus indicators
- Error messages announced to screen readers

## Related Components

- [Select](../Select/README.md) - For dropdown selections
- [NumberInput](../NumberInput/README.md) - For specialized number inputs
- [Label](../Label/README.md) - For standalone labels
