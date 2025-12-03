# Switch Component

The Switch component provides a toggle control for binary states. Built on Radix UI Switch, it's commonly used in cost management applications for feature toggles, notification preferences, report settings, and any on/off configurations.

## Usage

```tsx
import { Switch } from '@alphaus/ripple-ui';

// Basic switch
<Switch
  variant="off"
  label="Enable notifications"
  onChange={() => setNotificationsEnabled(!notificationsEnabled)}
/>;
```

## Props

| Prop        | Type            | Default | Description                        |
| ----------- | --------------- | ------- | ---------------------------------- |
| `variant`   | `'off' \| 'on'` | `'off'` | Visual state of the switch         |
| `label`     | `string`        | -       | Label text (required)              |
| `onChange`  | `() => void`    | -       | Change handler function (required) |
| `className` | `string`        | -       | Additional CSS classes             |
| `disabled`  | `boolean`       | `false` | Disable the switch                 |

## Examples

### Basic Toggle States

```tsx
// Off state
<Switch
  variant="off"
  label="Email notifications"
  onChange={() => setEmailNotifications(!emailNotifications)}
/>

// On state
<Switch
  variant="on"
  label="Email notifications"
  onChange={() => setEmailNotifications(!emailNotifications)}
/>
```

### Cost Management Settings

```tsx
function CostManagementSettings() {
  const [settings, setSettings] = useState({
    autoReports: false,
    budgetAlerts: true,
    costOptimization: false,
    weeklyDigest: true,
    realTimeAlerts: false,
  });

  const updateSetting = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Notification Preferences</h3>

      <div className="space-y-3">
        <Switch
          variant={settings.autoReports ? 'on' : 'off'}
          label="Automatic monthly reports"
          onChange={() => updateSetting('autoReports')}
        />

        <Switch
          variant={settings.budgetAlerts ? 'on' : 'off'}
          label="Budget threshold alerts"
          onChange={() => updateSetting('budgetAlerts')}
        />

        <Switch
          variant={settings.costOptimization ? 'on' : 'off'}
          label="Cost optimization recommendations"
          onChange={() => updateSetting('costOptimization')}
        />

        <Switch
          variant={settings.weeklyDigest ? 'on' : 'off'}
          label="Weekly cost digest"
          onChange={() => updateSetting('weeklyDigest')}
        />

        <Switch
          variant={settings.realTimeAlerts ? 'on' : 'off'}
          label="Real-time spending alerts"
          onChange={() => updateSetting('realTimeAlerts')}
        />
      </div>
    </div>
  );
}
```

### Report Configuration

```tsx
function ReportConfiguration() {
  const [reportConfig, setReportConfig] = useState({
    includeCharts: true,
    includeBreakdown: false,
    includeTrends: true,
    includeRecommendations: false,
  });

  const toggleConfig = (key: string) => {
    setReportConfig((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Report Settings</h3>

      <div className="space-y-3">
        <Switch
          variant={reportConfig.includeCharts ? 'on' : 'off'}
          label="Include cost trend charts"
          onChange={() => toggleConfig('includeCharts')}
        />

        <Switch
          variant={reportConfig.includeBreakdown ? 'on' : 'off'}
          label="Include service breakdown"
          onChange={() => toggleConfig('includeBreakdown')}
        />

        <Switch
          variant={reportConfig.includeTrends ? 'on' : 'off'}
          label="Include usage trends"
          onChange={() => toggleConfig('includeTrends')}
        />

        <Switch
          variant={reportConfig.includeRecommendations ? 'on' : 'off'}
          label="Include optimization recommendations"
          onChange={() => toggleConfig('includeRecommendations')}
        />
      </div>
    </div>
  );
}
```

### Account Features

```tsx
function AccountFeatures() {
  const [features, setFeatures] = useState({
    autoPayments: false,
    consolidatedBilling: true,
    detailedReports: false,
    apiAccess: true,
  });

  const toggleFeature = (feature: string) => {
    setFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Account Features</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Auto-payments</div>
            <div className="text-sm text-gray-600">
              Automatically pay invoices when due
            </div>
          </div>
          <Switch
            variant={features.autoPayments ? 'on' : 'off'}
            label=""
            onChange={() => toggleFeature('autoPayments')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Consolidated billing</div>
            <div className="text-sm text-gray-600">
              Combine all accounts into one invoice
            </div>
          </div>
          <Switch
            variant={features.consolidatedBilling ? 'on' : 'off'}
            label=""
            onChange={() => toggleFeature('consolidatedBilling')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Detailed reports</div>
            <div className="text-sm text-gray-600">
              Enable granular usage reporting
            </div>
          </div>
          <Switch
            variant={features.detailedReports ? 'on' : 'off'}
            label=""
            onChange={() => toggleFeature('detailedReports')}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">API access</div>
            <div className="text-sm text-gray-600">
              Enable programmatic access to billing data
            </div>
          </div>
          <Switch
            variant={features.apiAccess ? 'on' : 'off'}
            label=""
            onChange={() => toggleFeature('apiAccess')}
          />
        </div>
      </div>
    </div>
  );
}
```

### Controlled Switch

```tsx
function ControlledSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsEnabled(!isEnabled);
    } catch (error) {
      console.error('Failed to update setting:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <Switch
        variant={isEnabled ? 'on' : 'off'}
        label="Real-time monitoring"
        onChange={handleToggle}
        disabled={isLoading}
      />
      {isLoading && <span className="text-sm text-gray-500">Updating...</span>}
    </div>
  );
}
```

## Variants

### Off State

```tsx
<Switch variant="off" label="Feature disabled" onChange={() => {}} />
```

### On State

```tsx
<Switch variant="on" label="Feature enabled" onChange={() => {}} />
```

## Accessibility

- **Keyboard Navigation**: Can be toggled using Space key
- **Screen Reader Support**: Proper ARIA attributes and labels
- **Focus Management**: Clear focus indicators
- **State Announcement**: State changes are announced to screen readers
- **Label Association**: Label is properly associated with switch

## Best Practices

### Usage Guidelines

- **Clear Labels**: Use descriptive text that clearly indicates what the switch controls
- **Immediate Effect**: Changes should take effect immediately when toggled
- **Visual Feedback**: Provide clear visual indication of on/off states
- **Consistent Behavior**: Maintain consistent toggle behavior across the application

### UX Patterns

- **Settings Screens**: Group related switches in logical sections
- **Feature Toggles**: Use for enabling/disabling features
- **Preferences**: Allow users to customize their experience
- **Quick Actions**: Provide immediate on/off control

### State Management

- **Controlled Components**: Use controlled state for switches that affect other components
- **Async Operations**: Handle loading states for switches that trigger API calls
- **Error Handling**: Provide feedback when toggle operations fail
- **Persistence**: Save switch states to maintain user preferences

## Related Components

- [Checkbox](../Checkbox/README.md) - For multiple selection options
- [Radio](../Radio/README.md) - For exclusive selection
- [Button](../Button/README.md) - For action triggers
- [Toggle](../Toggle/README.md) - Alternative toggle implementation
