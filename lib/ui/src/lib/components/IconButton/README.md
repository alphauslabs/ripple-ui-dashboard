# IconButton Component

The IconButton component provides compact, icon-only buttons for actions where space is limited or visual simplicity is preferred. With support for different variants, sizes, and loading states, it's perfect for toolbar actions, table row actions, and quick access controls in cost management interfaces.

## Usage

```tsx
import { IconButton } from "@alphaus/ripple-ui";
import { Settings, Download, Edit } from "lucide-react";

// Basic icon button
<IconButton>
  <Settings />
</IconButton>

// Icon button with variant and size
<IconButton variant="secondary" size="lg">
  <Download />
</IconButton>

// Loading state
<IconButton loading>
  <Edit />
</IconButton>
```

## Props

| Prop       | Type                                    | Default  | Description                    |
| ---------- | --------------------------------------- | -------- | ------------------------------ |
| `variant`  | `'fill' \| 'secondary' \| 'text'`       | `'fill'` | Visual style variant           |
| `size`     | `'2xs' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'`   | Size of the button             |
| `loading`  | `boolean`                               | `false`  | Show loading spinner           |
| `disabled` | `boolean`                               | `false`  | Whether the button is disabled |
| `asChild`  | `boolean`                               | `false`  | Render as child element        |
| `onClick`  | `() => void`                            | -        | Click handler                  |
| `children` | `React.ReactNode`                       | -        | Icon content (typically SVG)   |

## Variants

### Fill (Primary)

Filled background with primary color, used for primary actions.

```tsx
import { Save } from 'lucide-react';

<IconButton variant="fill">
  <Save />
</IconButton>;
```

### Secondary

White background with border, used for secondary actions.

```tsx
import { Edit } from 'lucide-react';

<IconButton variant="secondary">
  <Edit />
</IconButton>;
```

### Text

No background, just the icon, used for subtle actions.

```tsx
import { MoreHorizontal } from 'lucide-react';

<IconButton variant="text">
  <MoreHorizontal />
</IconButton>;
```

## Sizes

```tsx
import { Star } from 'lucide-react';

<div className="flex items-center gap-2">
  <IconButton size="2xs">
    <Star />
  </IconButton>
  <IconButton size="xs">
    <Star />
  </IconButton>
  <IconButton size="sm">
    <Star />
  </IconButton>
  <IconButton size="md">
    <Star />
  </IconButton>
  <IconButton size="lg">
    <Star />
  </IconButton>
</div>;
```

## Examples

### Table Row Actions

```tsx
import { Edit, Copy, Trash2, MoreHorizontal } from 'lucide-react';

const TableRow = ({ item, onEdit, onCopy, onDelete }) => (
  <tr className="border-b">
    <td className="p-3">{item.name}</td>
    <td className="p-3">${item.cost}</td>
    <td className="p-3">
      <div className="flex items-center gap-1">
        <IconButton
          variant="text"
          size="sm"
          onClick={() => onEdit(item.id)}
          aria-label="Edit item"
        >
          <Edit />
        </IconButton>
        <IconButton
          variant="text"
          size="sm"
          onClick={() => onCopy(item.id)}
          aria-label="Copy item"
        >
          <Copy />
        </IconButton>
        <IconButton
          variant="text"
          size="sm"
          onClick={() => onDelete(item.id)}
          aria-label="Delete item"
        >
          <Trash2 />
        </IconButton>
        <IconButton variant="text" size="sm" aria-label="More options">
          <MoreHorizontal />
        </IconButton>
      </div>
    </td>
  </tr>
);
```

### Toolbar Actions

```tsx
import { Download, Upload, Refresh, Filter, Settings } from 'lucide-react';

const CostAnalysisToolbar = ({
  onExport,
  onImport,
  onRefresh,
  onFilter,
  onSettings,
}) => (
  <div className="flex items-center justify-between p-4 border-b">
    <h2 className="text-lg font-semibold">Cost Analysis</h2>
    <div className="flex items-center gap-2">
      <IconButton
        variant="secondary"
        onClick={onExport}
        aria-label="Export data"
      >
        <Download />
      </IconButton>
      <IconButton
        variant="secondary"
        onClick={onImport}
        aria-label="Import data"
      >
        <Upload />
      </IconButton>
      <IconButton
        variant="secondary"
        onClick={onRefresh}
        aria-label="Refresh data"
      >
        <Refresh />
      </IconButton>
      <IconButton
        variant="secondary"
        onClick={onFilter}
        aria-label="Open filters"
      >
        <Filter />
      </IconButton>
      <IconButton variant="text" onClick={onSettings} aria-label="Settings">
        <Settings />
      </IconButton>
    </div>
  </div>
);
```

### Loading States

```tsx
import { Save, Download, Send } from 'lucide-react';
import { useState } from 'react';

const ActionButtons = () => {
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await saveData();
    setSaving(false);
  };

  const handleDownload = async () => {
    setDownloading(true);
    await downloadReport();
    setDownloading(false);
  };

  const handleSend = async () => {
    setSending(true);
    await sendReport();
    setSending(false);
  };

  return (
    <div className="flex gap-2">
      <IconButton
        loading={saving}
        onClick={handleSave}
        aria-label="Save changes"
      >
        <Save />
      </IconButton>
      <IconButton
        variant="secondary"
        loading={downloading}
        onClick={handleDownload}
        aria-label="Download report"
      >
        <Download />
      </IconButton>
      <IconButton
        variant="text"
        loading={sending}
        onClick={handleSend}
        aria-label="Send report"
      >
        <Send />
      </IconButton>
    </div>
  );
};
```

### Chart Interaction Controls

```tsx
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Download } from 'lucide-react';

const ChartControls = ({
  onZoomIn,
  onZoomOut,
  onReset,
  onFullscreen,
  onExport,
}) => (
  <div className="absolute top-2 right-2 flex gap-1 bg-white rounded-lg shadow-sm border p-1">
    <IconButton
      variant="text"
      size="sm"
      onClick={onZoomIn}
      aria-label="Zoom in"
    >
      <ZoomIn />
    </IconButton>
    <IconButton
      variant="text"
      size="sm"
      onClick={onZoomOut}
      aria-label="Zoom out"
    >
      <ZoomOut />
    </IconButton>
    <IconButton
      variant="text"
      size="sm"
      onClick={onReset}
      aria-label="Reset view"
    >
      <RotateCcw />
    </IconButton>
    <IconButton
      variant="text"
      size="sm"
      onClick={onFullscreen}
      aria-label="Fullscreen"
    >
      <Maximize2 />
    </IconButton>
    <IconButton
      variant="text"
      size="sm"
      onClick={onExport}
      aria-label="Export chart"
    >
      <Download />
    </IconButton>
  </div>
);
```

### Service Management Actions

```tsx
import { Play, Pause, Square, RotateCw, AlertTriangle } from 'lucide-react';

const ServiceControls = ({ service, onAction }) => {
  const getActionIcon = () => {
    switch (service.status) {
      case 'running':
        return <Pause />;
      case 'stopped':
        return <Play />;
      case 'error':
        return <RotateCw />;
      default:
        return <Play />;
    }
  };

  const getActionLabel = () => {
    switch (service.status) {
      case 'running':
        return 'Stop service';
      case 'stopped':
        return 'Start service';
      case 'error':
        return 'Restart service';
      default:
        return 'Start service';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">{service.name}</span>
        {service.status === 'error' && (
          <IconButton variant="text" size="xs" aria-label="Service error">
            <AlertTriangle className="text-red-500" />
          </IconButton>
        )}
      </div>
      <div className="flex gap-1">
        <IconButton
          variant="secondary"
          size="sm"
          onClick={() =>
            onAction(
              service.id,
              service.status === 'running' ? 'stop' : 'start'
            )
          }
          aria-label={getActionLabel()}
        >
          {getActionIcon()}
        </IconButton>
        {service.status === 'running' && (
          <IconButton
            variant="text"
            size="sm"
            onClick={() => onAction(service.id, 'restart')}
            aria-label="Restart service"
          >
            <RotateCw />
          </IconButton>
        )}
        <IconButton
          variant="text"
          size="sm"
          onClick={() => onAction(service.id, 'force-stop')}
          aria-label="Force stop service"
        >
          <Square />
        </IconButton>
      </div>
    </div>
  );
};
```

### Quick Action Menu

```tsx
import { Plus, FileText, Users, CreditCard, Bell } from 'lucide-react';

const QuickActions = ({
  onCreateReport,
  onManageUsers,
  onBilling,
  onAlerts,
}) => (
  <div className="fixed bottom-6 right-6 flex flex-col gap-2">
    <IconButton
      size="lg"
      onClick={onCreateReport}
      aria-label="Create new report"
    >
      <FileText />
    </IconButton>
    <IconButton
      variant="secondary"
      size="lg"
      onClick={onManageUsers}
      aria-label="Manage users"
    >
      <Users />
    </IconButton>
    <IconButton
      variant="secondary"
      size="lg"
      onClick={onBilling}
      aria-label="Billing settings"
    >
      <CreditCard />
    </IconButton>
    <IconButton
      variant="secondary"
      size="lg"
      onClick={onAlerts}
      aria-label="Alert settings"
    >
      <Bell />
    </IconButton>
    <IconButton
      size="lg"
      className="bg-green-600 hover:bg-green-700 border-green-600"
      aria-label="Add new item"
    >
      <Plus />
    </IconButton>
  </div>
);
```

### Filter Controls

```tsx
import { Calendar, DollarSign, Server, MapPin, X } from 'lucide-react';

const FilterRow = ({ filters, onToggleFilter, onClearAll }) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 border-b">
    <span className="text-sm font-medium">Filters:</span>

    <div className="flex items-center gap-2">
      <IconButton
        variant={filters.date ? 'fill' : 'secondary'}
        size="sm"
        onClick={() => onToggleFilter('date')}
        aria-label="Date filter"
      >
        <Calendar />
      </IconButton>

      <IconButton
        variant={filters.cost ? 'fill' : 'secondary'}
        size="sm"
        onClick={() => onToggleFilter('cost')}
        aria-label="Cost filter"
      >
        <DollarSign />
      </IconButton>

      <IconButton
        variant={filters.service ? 'fill' : 'secondary'}
        size="sm"
        onClick={() => onToggleFilter('service')}
        aria-label="Service filter"
      >
        <Server />
      </IconButton>

      <IconButton
        variant={filters.region ? 'fill' : 'secondary'}
        size="sm"
        onClick={() => onToggleFilter('region')}
        aria-label="Region filter"
      >
        <MapPin />
      </IconButton>
    </div>

    <IconButton
      variant="text"
      size="sm"
      onClick={onClearAll}
      aria-label="Clear all filters"
    >
      <X />
    </IconButton>
  </div>
);
```

## States

### Disabled State

```tsx
import { Save } from 'lucide-react';

<IconButton disabled>
  <Save />
</IconButton>;
```

### Loading State

```tsx
import { Upload } from 'lucide-react';

<IconButton loading>
  <Upload />
</IconButton>;
```

## Accessibility

- **ARIA Labels**: Always provide descriptive `aria-label` attributes
- **Keyboard Navigation**: Full keyboard support with tab and enter/space
- **Focus Indicators**: Clear visual focus indicators
- **Screen Reader Support**: Proper button semantics and state communication
- **Touch Targets**: Appropriate touch target sizes for mobile devices

## Best Practices

1. **Descriptive Labels**: Always include `aria-label` for screen readers
2. **Consistent Sizing**: Use consistent sizes within the same context
3. **Logical Grouping**: Group related actions together visually
4. **Loading States**: Use loading state for async operations
5. **Icon Clarity**: Choose clear, recognizable icons
6. **Color Coding**: Use variants to indicate action importance

## Icon Libraries

The IconButton component works with any icon library. Popular choices include:

- **Lucide React**: `import { Save } from "lucide-react"`
- **Heroicons**: `import { SaveIcon } from "@heroicons/react/outline"`
- **React Icons**: `import { FaSave } from "react-icons/fa"`
- **Custom SVGs**: Any SVG element

## Cost Management Use Cases

- **Data Export**: Quick export buttons for reports and analytics
- **Resource Management**: Start, stop, restart cloud resources
- **Chart Interactions**: Zoom, pan, and export chart data
- **Table Actions**: Edit, delete, copy, and share table rows
- **Filter Controls**: Toggle and manage data filters
- **Quick Actions**: Fast access to common cost management tasks
- **Settings Access**: Quick access to configuration and preferences
- **Alert Management**: Manage cost alerts and notifications
