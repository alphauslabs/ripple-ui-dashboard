# Dialog Component

The Dialog component provides modal dialogs for user interactions that require immediate attention or confirmation. Built on Radix UI, it's commonly used in cost management applications for confirmations, data entry forms, detailed views, and critical actions that need user focus.

## Usage

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@alphaus/ripple-ui';

// Basic dialog
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description text goes here.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

## Components

### Dialog (Root)

The root component that manages dialog state.

| Prop           | Type                      | Default | Description                      |
| -------------- | ------------------------- | ------- | -------------------------------- |
| `open`         | `boolean`                 | -       | Controlled open state            |
| `onOpenChange` | `(open: boolean) => void` | -       | Callback when open state changes |
| `defaultOpen`  | `boolean`                 | `false` | Default open state               |

### DialogTrigger

Button or element that opens the dialog.

| Prop      | Type      | Default | Description               |
| --------- | --------- | ------- | ------------------------- |
| `asChild` | `boolean` | `false` | Render as child component |

### DialogContent

The modal content container.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `children`  | `React.ReactNode` | -       | Dialog content         |
| `className` | `string`          | -       | Additional CSS classes |

### DialogHeader, DialogFooter

Layout components for organizing dialog content.

### DialogTitle, DialogDescription

Semantic components for dialog text content.

## Examples

### Delete Confirmation Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Delete Account</DialogTitle>
      <DialogDescription>
        Are you sure you want to delete the account "Production Environment"?
        This action cannot be undone and will permanently remove all associated
        billing data and cost reports.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Budget Adjustment Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Adjust Budget</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Adjust Monthly Budget</DialogTitle>
      <DialogDescription>
        Current budget: $10,000/month. Update the budget limit for this account.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="budget" className="text-right">
          New Budget
        </Label>
        <Input
          id="budget"
          type="number"
          placeholder="15000"
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="reason" className="text-right">
          Reason
        </Label>
        <Input
          id="reason"
          placeholder="Increased usage expected"
          className="col-span-3"
        />
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Update Budget</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Invoice Details Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="ghost">View Details</Button>
  </DialogTrigger>
  <DialogContent className="max-w-2xl">
    <DialogHeader>
      <DialogTitle>Invoice INV-2024-001</DialogTitle>
      <DialogDescription>
        Detailed breakdown of charges for March 2024
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-sm font-medium">Invoice Date</Label>
          <p>March 31, 2024</p>
        </div>
        <div>
          <Label className="text-sm font-medium">Due Date</Label>
          <p>April 30, 2024</p>
        </div>
        <div>
          <Label className="text-sm font-medium">Total Amount</Label>
          <p className="text-lg font-semibold">$12,450.30</p>
        </div>
        <div>
          <Label className="text-sm font-medium">Status</Label>
          <Badge variant="success">Paid</Badge>
        </div>
      </div>
      <div>
        <Label className="text-sm font-medium">Service Breakdown</Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Usage</TableHead>
              <TableHead>Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>EC2 Instances</TableCell>
              <TableCell>2,400 hours</TableCell>
              <TableCell>$5,234.56</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S3 Storage</TableCell>
              <TableCell>1.2 TB</TableCell>
              <TableCell>$2,145.78</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
      <Button>Download PDF</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Controlled Dialog

```tsx
function ControlledDialog() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Budget Alert</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Budget Alert</DialogTitle>
          <DialogDescription>
            Set up an alert when spending reaches a certain threshold
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="threshold">Threshold (%)</Label>
            <Input id="threshold" type="number" placeholder="85" />
          </div>
          <div>
            <Label htmlFor="email">Email Recipients</Label>
            <Input id="email" placeholder="admin@company.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Alert'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Accessibility

- **Focus Management**: Focus automatically moves to dialog content when opened
- **Keyboard Navigation**:
  - `Escape` key closes the dialog
  - `Tab` cycles through interactive elements
  - Focus returns to trigger element when closed
- **Screen Reader Support**: Proper ARIA attributes and labels
- **Focus Trapping**: Focus is trapped within the dialog when open

## Best Practices

### Content Guidelines

- **Clear Titles**: Use descriptive titles that indicate the dialog's purpose
- **Descriptive Text**: Provide enough context for users to understand the action
- **Action Buttons**: Use clear, action-oriented button labels
- **Confirmation Patterns**: For destructive actions, require explicit confirmation

### UX Patterns

- **Trigger Clarity**: Make it clear what will happen when the dialog opens
- **Escape Routes**: Always provide a way to cancel or close the dialog
- **Loading States**: Show progress for async operations
- **Size Appropriately**: Use appropriate dialog sizes for content

### Performance

- **Lazy Loading**: Only render dialog content when needed
- **Portal Usage**: Content is automatically portaled to avoid z-index issues
- **Controlled State**: Use controlled state for complex interactions

## Related Components

- [Modal](../Modal/README.md) - Alternative modal implementation
- [Popover](../Popover/README.md) - For non-modal overlays
- [Alert](../Alert/README.md) - For inline notifications
- [Banner](../Banner/README.md) - For persistent notifications
