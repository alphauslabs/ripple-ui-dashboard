# Modal Component

The Modal component provides a flexible modal overlay for displaying content that requires user focus or interaction. It's commonly used in cost management applications for confirmations, forms, detailed views, and any content that needs to temporarily take over the user interface.

## Usage

```tsx
import { Modal } from '@alphaus/ripple-ui';

// Basic modal
<Modal
  isVisible={isModalOpen}
  title="Modal Title"
  onClose={() => setIsModalOpen(false)}
>
  Modal content goes here
</Modal>;
```

## Props

| Prop                 | Type                      | Default       | Description                              |
| -------------------- | ------------------------- | ------------- | ---------------------------------------- |
| `isVisible`          | `boolean`                 | -             | Controls modal visibility (required)     |
| `title`              | `string`                  | -             | Modal title text                         |
| `customTitle`        | `React.ReactNode`         | -             | Custom title component (overrides title) |
| `onClose`            | `() => void`              | -             | Close handler function (required)        |
| `onAction`           | `() => void`              | -             | Primary action handler                   |
| `actionText`         | `string`                  | -             | Primary action button text               |
| `onActionDisabled`   | `boolean`                 | -             | Disable primary action button            |
| `onClear`            | `() => void`              | -             | Secondary action handler                 |
| `clearText`          | `string`                  | -             | Secondary action button text             |
| `onClearDisabled`    | `boolean`                 | -             | Disable secondary action button          |
| `clearButtonVariant` | `'secondary' \| 'danger'` | `'secondary'` | Secondary button style                   |
| `width`              | `string`                  | `'w-[576px]'` | Modal width class                        |
| `children`           | `React.ReactNode`         | -             | Modal content                            |
| `className`          | `string`                  | -             | Additional CSS classes                   |
| `dataTestid`         | `string`                  | -             | Test ID for testing                      |

## Examples

### Basic Confirmation Modal

```tsx
<Modal
  isVisible={showDeleteConfirm}
  title="Delete Budget Alert"
  onClose={() => setShowDeleteConfirm(false)}
  onAction={() => handleDeleteAlert()}
  actionText="Delete"
  onClear={() => setShowDeleteConfirm(false)}
  clearText="Cancel"
  clearButtonVariant="danger"
>
  <p>Are you sure you want to delete this budget alert?</p>
  <p className="text-sm text-gray-600 mt-2">
    This action cannot be undone. The alert for "Production Environment" will be
    permanently removed.
  </p>
</Modal>
```

### Form Modal

```tsx
function CreateBudgetModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    threshold: '',
  });

  const handleSubmit = () => {
    // Handle form submission
    console.log('Creating budget:', formData);
    setIsVisible(false);
  };

  return (
    <Modal
      isVisible={isVisible}
      title="Create Budget"
      onClose={() => setIsVisible(false)}
      onAction={handleSubmit}
      actionText="Create Budget"
      onActionDisabled={!formData.name || !formData.amount}
      width="w-[640px]"
    >
      <div className="space-y-4">
        <div>
          <Label htmlFor="budget-name">Budget Name</Label>
          <Input
            id="budget-name"
            placeholder="e.g., Production Environment"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="budget-amount">Monthly Budget ($)</Label>
          <Input
            id="budget-amount"
            type="number"
            placeholder="10000"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </div>
        <div>
          <Label htmlFor="budget-threshold">Alert Threshold (%)</Label>
          <Input
            id="budget-threshold"
            type="number"
            placeholder="85"
            value={formData.threshold}
            onChange={(e) =>
              setFormData({ ...formData, threshold: e.target.value })
            }
          />
        </div>
      </div>
    </Modal>
  );
}
```

### Invoice Details Modal

```tsx
<Modal
  isVisible={showInvoiceDetails}
  title="Invoice Details"
  onClose={() => setShowInvoiceDetails(false)}
  onAction={() => downloadInvoice()}
  actionText="Download PDF"
  width="w-[800px]"
>
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Label className="text-sm font-medium">Invoice Number</Label>
        <p className="font-mono">INV-2024-001</p>
      </div>
      <div>
        <Label className="text-sm font-medium">Date</Label>
        <p>March 31, 2024</p>
      </div>
      <div>
        <Label className="text-sm font-medium">Due Date</Label>
        <p>April 30, 2024</p>
      </div>
      <div>
        <Label className="text-sm font-medium">Status</Label>
        <Badge variant="success">Paid</Badge>
      </div>
    </div>

    <div>
      <Label className="text-sm font-medium">Service Breakdown</Label>
      <div className="mt-2 space-y-2">
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
        <div className="flex justify-between font-semibold pt-2 border-t">
          <span>Total</span>
          <span className="font-mono">$9,256.57</span>
        </div>
      </div>
    </div>
  </div>
</Modal>
```

### Custom Title Modal

```tsx
<Modal
  isVisible={showCostAnalysis}
  customTitle={
    <div className="flex items-center gap-2">
      <BarChart className="h-5 w-5" />
      <span className="text-lg font-semibold">Cost Analysis Report</span>
      <Badge variant="info">March 2024</Badge>
    </div>
  }
  onClose={() => setShowCostAnalysis(false)}
  width="w-[1000px]"
>
  <div className="space-y-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold">$12,450</div>
        <div className="text-sm text-gray-600">Total Cost</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">+15%</div>
        <div className="text-sm text-gray-600">vs Last Month</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">8</div>
        <div className="text-sm text-gray-600">Active Services</div>
      </div>
    </div>
    {/* Chart component would go here */}
  </div>
</Modal>
```

### Dangerous Action Modal

```tsx
<Modal
  isVisible={showDangerousAction}
  title="Delete Account"
  onClose={() => setShowDangerousAction(false)}
  onAction={() => handleDeleteAccount()}
  actionText="Delete Account"
  onClear={() => setShowDangerousAction(false)}
  clearText="Cancel"
  clearButtonVariant="danger"
  onActionDisabled={!confirmText}
>
  <div className="space-y-4">
    <div className="p-3 bg-red-50 border border-red-200 rounded">
      <p className="text-red-800 font-medium">⚠️ This action is irreversible</p>
      <p className="text-red-700 text-sm mt-1">
        All billing data, reports, and configurations will be permanently
        deleted.
      </p>
    </div>

    <div>
      <Label htmlFor="confirm-text">Type "DELETE" to confirm this action</Label>
      <Input
        id="confirm-text"
        placeholder="DELETE"
        value={confirmText}
        onChange={(e) => setConfirmText(e.target.value)}
      />
    </div>
  </div>
</Modal>
```

## Accessibility

- **Focus Management**: Focus is trapped within the modal when open
- **Keyboard Navigation**:
  - `Escape` key closes the modal
  - `Tab` cycles through interactive elements
- **Screen Reader Support**: Proper ARIA attributes for modal content
- **Backdrop Click**: Clicking the overlay closes the modal
- **Focus Return**: Focus returns to trigger element when modal closes

## Best Practices

### Content Guidelines

- **Clear Purpose**: Make the modal's purpose immediately clear
- **Concise Content**: Keep content focused and avoid overwhelming users
- **Action Buttons**: Use clear, action-oriented button labels
- **Consistent Layout**: Maintain consistent spacing and typography

### UX Patterns

- **Appropriate Size**: Choose modal width based on content needs
- **Loading States**: Show progress for async operations
- **Error Handling**: Display validation errors clearly
- **Confirmation**: Require confirmation for destructive actions

### Performance

- **Conditional Rendering**: Only render modal content when visible
- **Event Handlers**: Clean up event listeners properly
- **State Management**: Manage modal state efficiently

## Related Components

- [Dialog](../Dialog/README.md) - Radix-based modal alternative
- [Popover](../Popover/README.md) - For non-modal overlays
- [Alert](../Alert/README.md) - For inline notifications
- [Button](../Button/README.md) - For modal actions
