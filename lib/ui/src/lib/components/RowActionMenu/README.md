# RowActionMenu Component

A reusable dropdown action menu component designed for table rows, providing both primary and secondary actions with a consistent interface pattern across applications.

## Features

- **Split Button Design**: Primary action button + dropdown menu for secondary actions
- **Flexible Configuration**: Support for icons, disabled states, danger variants, and separators
- **Responsive**: Consistent styling and behavior across different screen sizes
- **Accessible**: Built with proper ARIA attributes and keyboard navigation
- **Design System Compliant**: Uses approved colors from the Tangible design system

## Usage

```tsx
import { RowActionMenu } from '@project-ed/lib-ui';
import { Edit, Trash2, Download, Eye } from 'lucide-react';

// Basic usage with primary action and dropdown
<RowActionMenu
  primaryAction={{
    label: 'Preview',
    onClick: () => handlePreview(item),
    disabled: !item.canPreview
  }}
  actions={[
    {
      key: 'edit',
      label: 'Edit',
      icon: <Edit className="w-4 h-4" />,
      onClick: () => handleEdit(item.id)
    },
    {
      key: 'download',
      label: 'Download',
      icon: <Download className="w-4 h-4" />,
      onClick: () => handleDownload(item.id),
      separator: true
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => handleDelete(item.id),
      variant: 'danger'
    }
  ]}
/>

// Dropdown only (no primary action)
<RowActionMenu
  actions={[
    {
      key: 'view',
      label: 'View Details',
      icon: <Eye className="w-4 h-4" />,
      onClick: () => handleView(item.id)
    },
    {
      key: 'apply',
      label: 'Apply Changes',
      onClick: () => handleApply(item.id)
    }
  ]}
/>
```

## Props

### RowActionMenuProps

| Prop            | Type                  | Default      | Description                                 |
| --------------- | --------------------- | ------------ | ------------------------------------------- |
| `primaryAction` | `PrimaryActionConfig` | -            | Configuration for the primary action button |
| `actions`       | `RowActionItem[]`     | **required** | Array of secondary actions for the dropdown |
| `className`     | `string`              | -            | Additional CSS classes for the container    |
| `size`          | `'sm' \| 'md'`        | `'sm'`       | Size of the action buttons                  |

### PrimaryActionConfig

| Prop       | Type         | Default      | Description                            |
| ---------- | ------------ | ------------ | -------------------------------------- |
| `label`    | `string`     | **required** | Text to display on the primary button  |
| `onClick`  | `() => void` | **required** | Click handler for the primary action   |
| `disabled` | `boolean`    | `false`      | Whether the primary button is disabled |

### RowActionItem

| Prop           | Type                    | Default      | Description                                        |
| -------------- | ----------------------- | ------------ | -------------------------------------------------- |
| `key`          | `string`                | **required** | Unique identifier for the action                   |
| `label`        | `string`                | **required** | Text to display for the action                     |
| `icon`         | `ReactNode`             | -            | Optional icon to display before the label          |
| `onClick`      | `() => void`            | -            | Click handler for the action (not needed for subs) |
| `disabled`     | `boolean`               | `false`      | Whether the action is disabled                     |
| `variant`      | `'default' \| 'danger'` | `'default'`  | Visual variant of the action                       |
| `separator`    | `boolean`               | `false`      | Add separator line after this action               |
| `submenu`      | `RowActionItem[]`       | -            | Nested submenu items                               |
| `tooltip`      | `string`                | -            | Tooltip text to show when disabled                 |
| `customRender` | `ReactNode`             | -            | Custom JSX for complex menu items                  |

## Examples

### Invoice Table Actions

```tsx
const invoiceActions = [
  {
    key: 'generate',
    label: 'Generate',
    onClick: () => generateInvoice(invoice.id),
    disabled: !canGenerate,
  },
  {
    key: 'publish',
    label: isPublished ? 'Unpublish from Wave' : 'Publish to Wave',
    onClick: () => toggleWavePublishing(invoice.id),
    disabled: !canPublish,
  },
  {
    key: 'settings',
    label: 'Reseller Settings',
    onClick: () => openResellerSettings(invoice.id),
    separator: true,
  },
  {
    key: 'export',
    label: 'Export PDF',
    icon: <Download className="w-4 h-4" />,
    onClick: () => exportPdf(invoice.id),
  },
];

<RowActionMenu
  primaryAction={{
    label: 'Preview',
    onClick: () => previewInvoice(invoice),
    disabled: !invoice.urlId,
  }}
  actions={invoiceActions}
/>;
```

### Billing Groups Actions

```tsx
<RowActionMenu
  actions={[
    {
      key: 'finalize',
      label: 'Finalize Cost',
      onClick: () => finalizeCost(group.id),
    },
    {
      key: 'view',
      label: 'View Details',
      onClick: () => viewDetails(group.id),
      separator: true,
    },
    {
      key: 'edit',
      label: 'Edit Group',
      onClick: () => editGroup(group.id),
    },
    {
      key: 'delete',
      label: 'Delete Group',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => deleteGroup(group.id),
      variant: 'danger',
      separator: true,
    },
  ]}
/>
```

### Adjustment Entry Actions

```tsx
<RowActionMenu
  primaryAction={{
    label: 'Apply',
    onClick: () => applyEntry(entry),
    disabled: entry.isApplied,
  }}
  actions={[
    {
      key: 'edit',
      label: 'Edit Entry',
      icon: <Edit className="w-4 h-4" />,
      onClick: () => editEntry(entry.id),
    },
    {
      key: 'duplicate',
      label: 'Duplicate',
      icon: <Copy className="w-4 h-4" />,
      onClick: () => duplicateEntry(entry.id),
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: () => deleteEntry(entry.id),
      variant: 'danger',
      separator: true,
    },
  ]}
/>
```

### With Submenus and Tooltips

```tsx
<RowActionMenu
  primaryAction={{
    label: 'Preview',
    onClick: () => previewInvoice(invoice),
    disabled: !invoice.urlId,
  }}
  actions={[
    {
      key: 'generate',
      label: 'Generate',
      onClick: () => generateInvoice(invoice.id),
      disabled: !canGenerate,
    },
    {
      key: 'reseller-settings',
      label: 'Reseller Charge Settings',
      disabled: !isInvoiceCreated,
      tooltip:
        "Reseller charges can only be set for invoices with 'Created' status",
      submenu: [
        {
          key: 'reseller-aws',
          label: 'Amazon Web Services',
          onClick: () => openResellerModal(invoice.id, 'aws'),
        },
        {
          key: 'reseller-azure',
          label: 'Microsoft Azure',
          onClick: () => openResellerModal(invoice.id, 'azure'),
        },
        {
          key: 'reseller-gcp',
          label: 'Google Cloud',
          onClick: () => openResellerModal(invoice.id, 'gcp'),
        },
      ],
    },
  ]}
/>
```

## Design Patterns

### Split Button Pattern (Recommended)

Use when there's a clear primary action that users perform frequently, with additional secondary actions available in the dropdown.

### Dropdown Only Pattern

Use when all actions have similar importance or when space is limited.

### Action Grouping

Use separators to group related actions together and create visual hierarchy.

### Danger Actions

Use `variant="danger"` for destructive actions like delete, and typically place them at the bottom with a separator.

### Submenu Pattern

Use submenus for related actions that can be grouped together (e.g., vendor-specific settings). Add tooltips when submenus are disabled to explain why.

## Styling

The component uses the approved Tangible design system colors:

- `border-neutral-80` for borders
- `text-neutral-1000` for primary text
- `text-danger-60` for danger variant text
- Standard hover and focus states from the design system

## Accessibility

- Full keyboard navigation support
- Proper ARIA labels and roles
- Focus management for dropdown interactions
- Screen reader compatible action descriptions
- Tooltip support for disabled items

## Best Practices

1. **Limit Actions**: Keep the number of actions reasonable (typically 3-7 items)
2. **Consistent Ordering**: Maintain consistent action ordering across similar tables
3. **Clear Labels**: Use clear, action-oriented labels that describe what will happen
4. **State Management**: Properly disable actions when they're not available
5. **Tooltips for Disabled Items**: Always provide tooltip explanations for disabled submenu items
6. **Submenu Depth**: Keep submenus to one level deep for better UX
7. **Confirmation**: For destructive actions, consider adding confirmation modals
8. **Icons**: Use icons sparingly and ensure they're meaningful and consistent
