# DropdownMenu Component

The DropdownMenu component provides a flexible, accessible dropdown menu system built on Radix UI primitives. It offers various interaction patterns including regular menu items, checkboxes, radio groups, and nested submenus, making it perfect for contextual actions and selection interfaces in cost management applications.

## Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@alphaus/ripple-ui';

<DropdownMenu>
  <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

## Components

### DropdownMenu

Root component that manages the dropdown state.

### DropdownMenuTrigger

Button that opens the dropdown menu.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Trigger button content |
| `className` | `string`          | -       | Additional CSS classes |

### DropdownMenuChevronTrigger

Trigger button with a chevron icon that rotates when opened.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Trigger button content |
| `className` | `string`          | -       | Additional CSS classes |

### DropdownMenuContent

Container for menu items with animation and positioning.

| Prop         | Type              | Default | Description            |
| ------------ | ----------------- | ------- | ---------------------- |
| `children`   | `React.ReactNode` | -       | Menu content           |
| `sideOffset` | `number`          | `4`     | Offset from trigger    |
| `className`  | `string`          | -       | Additional CSS classes |

### DropdownMenuItem

Individual menu item with hover and focus states.

| Prop        | Type              | Default | Description              |
| ----------- | ----------------- | ------- | ------------------------ |
| `children`  | `React.ReactNode` | -       | Item content             |
| `disabled`  | `boolean`         | `false` | Whether item is disabled |
| `className` | `string`          | -       | Additional CSS classes   |

### DropdownMenuCheckboxItem

Menu item with checkbox functionality.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Item content           |
| `checked`   | `boolean`         | `false` | Checkbox state         |
| `className` | `string`          | -       | Additional CSS classes |

### DropdownMenuRadioItem

Menu item for radio button groups.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Item content           |
| `value`     | `string`          | -       | Radio value            |
| `className` | `string`          | -       | Additional CSS classes |

## Advanced Usage

### With Chevron Trigger

```tsx
<DropdownMenu>
  <DropdownMenuChevronTrigger>Select Option</DropdownMenuChevronTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Option 1</DropdownMenuItem>
    <DropdownMenuItem>Option 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Checkboxes

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Filters</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem checked>Show Active</DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem>Show Inactive</DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Radio Group

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Sort By</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuRadioGroup value={sortBy}>
      <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="amount">Amount</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Separators and Labels

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Actions</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Account</DropdownMenuLabel>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>Data</DropdownMenuLabel>
    <DropdownMenuItem>Export</DropdownMenuItem>
    <DropdownMenuItem>Import</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### With Submenus

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>More Options</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Copy Link</DropdownMenuItem>
        <DropdownMenuItem>Export PDF</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Cost Management Examples

### Cost Report Actions

```tsx
<DropdownMenu>
  <DropdownMenuChevronTrigger>Report Actions</DropdownMenuChevronTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Download className="mr-2 h-4 w-4" />
      Export CSV
    </DropdownMenuItem>
    <DropdownMenuItem>
      <FileText className="mr-2 h-4 w-4" />
      Export PDF
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Share className="mr-2 h-4 w-4" />
      Share Report
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Mail className="mr-2 h-4 w-4" />
      Schedule Email
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Budget Filter Options

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Filter Budgets</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuCheckboxItem checked={showActive}>
      Active Budgets
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={showExpired}>
      Expired Budgets
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={showOverBudget}>
      Over Budget
    </DropdownMenuCheckboxItem>
    <DropdownMenuSeparator />
    <DropdownMenuLabel>Department</DropdownMenuLabel>
    <DropdownMenuCheckboxItem checked={showDev}>
      Development
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={showOps}>
      Operations
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### Invoice Actions Menu

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>
    <MoreVertical className="h-4 w-4" />
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>
      <Eye className="mr-2 h-4 w-4" />
      View Details
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Download className="mr-2 h-4 w-4" />
      Download
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <CreditCard className="mr-2 h-4 w-4" />
      Mark as Paid
    </DropdownMenuItem>
    <DropdownMenuItem className="text-red-600">
      <Trash className="mr-2 h-4 w-4" />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Design Tokens

- **Background**: White with subtle border
- **Border**: `#E5E7EB` (gray-300)
- **Shadow**: Subtle drop shadow
- **Hover State**: `#EFF0FF` (light blue)
- **Active State**: `#DBE1FF` (blue tint)
- **Disabled State**: `#A7ABBE` (muted gray)
- **Border Radius**: `8px` for items, `6px` for container
- **Padding**: `12px` for items, `8px` for container

## Accessibility

- **Keyboard Navigation**: Full arrow key support
- **Screen Reader**: Proper ARIA labels and roles
- **Focus Management**: Automatic focus handling
- **Escape Key**: Closes menu and returns focus
- **Click Outside**: Closes menu when clicking outside
- **Disabled States**: Proper disabled state handling

## Best Practices

1. **Use Clear Labels**: Make menu items descriptive and actionable
2. **Group Related Items**: Use separators to group related functionality
3. **Logical Order**: Place most common actions first
4. **Icon Consistency**: Use consistent icon styling throughout
5. **Keyboard Support**: Ensure all actions are keyboard accessible
6. **Mobile Consideration**: Test on touch devices for proper interaction

## Related Components

- `Select`: For single-value selection dropdowns
- `ComboBox`: For searchable selection interfaces
- `Popover`: For more complex content overlays
- `Button`: For trigger elements and actions
