# TabBar Component

The TabBar component provides a traditional tab navigation interface with underline indicators for active tabs. It's designed for primary navigation between major sections of an application, offering a clean, minimalist approach to organizing content in cost management dashboards.

## Usage

```tsx
import { TabBar } from '@alphaus/ripple-ui';
import { useState } from 'react';

const [selectedTab, setSelectedTab] = useState('Overview');

<TabBar
  tabs={['Overview', 'Costs', 'Usage', 'Settings']}
  selectedTab={selectedTab}
  onTabClick={setSelectedTab}
/>;
```

## Props

| Prop          | Type                    | Default | Description                         |
| ------------- | ----------------------- | ------- | ----------------------------------- |
| `tabs`        | `string[]`              | -       | Array of tab labels                 |
| `selectedTab` | `string`                | -       | Currently selected tab              |
| `onTabClick`  | `(tab: string) => void` | -       | Function called when tab is clicked |
| `className`   | `string`                | -       | Additional CSS classes              |

## Features

- **Underline Indicator**: Active tab shows blue underline
- **Hover Effects**: Subtle background change on hover
- **Full Width**: Spans the full width of container
- **Border Separator**: Bottom border separates tabs from content
- **Responsive**: Adapts to different screen sizes
- **Keyboard Accessible**: Supports keyboard navigation

## Cost Management Examples

### Dashboard Navigation

```tsx
const [activeSection, setActiveSection] = useState('Dashboard');

<TabBar
  tabs={['Dashboard', 'Reports', 'Budgets', 'Billing']}
  selectedTab={activeSection}
  onTabClick={setActiveSection}
/>;
```

### Cost Analysis Views

```tsx
const [analysisView, setAnalysisView] = useState('Summary');

<TabBar
  tabs={['Summary', 'Detailed Breakdown', 'Trends', 'Forecasting']}
  selectedTab={analysisView}
  onTabClick={setAnalysisView}
/>;
```

### Report Categories

```tsx
const [reportType, setReportType] = useState('Cost Reports');

<TabBar
  tabs={['Cost Reports', 'Usage Reports', 'Budget Reports', 'Invoice Reports']}
  selectedTab={reportType}
  onTabClick={setReportType}
/>;
```

### Account Management Sections

```tsx
const [accountSection, setAccountSection] = useState('Profile');

<TabBar
  tabs={['Profile', 'Billing', 'Teams', 'Integrations', 'Settings']}
  selectedTab={accountSection}
  onTabClick={setAccountSection}
/>;
```

## Design Tokens

- **Border Color**: `#C2C5D9` (gray border)
- **Active Text**: `#2563EB` (blue-600)
- **Inactive Text**: `#4B5563` (gray-600)
- **Hover Background**: `#F9FAFB` (gray-50)
- **Active Indicator**: `#2563EB` (blue-600)
- **Indicator Height**: `2px` (0.5rem)
- **Padding**: `8px` vertical, `16px` right margin

## Layout Structure

The TabBar uses a flexbox layout with:

- Full width container with bottom border
- Individual tab buttons with relative positioning
- Absolute positioned indicator for active state
- Invisible text element to maintain proper indicator width

## Accessibility

- **Semantic HTML**: Uses proper button elements
- **Keyboard Navigation**: Standard tab and enter key support
- **ARIA Labels**: Inherent button accessibility
- **Focus States**: Browser default focus indicators
- **Screen Reader**: Clear text content for screen readers

## Styling Customization

### Custom Tab Spacing

```tsx
<TabBar
  className="space-x-8" // Increase spacing between tabs
  tabs={tabs}
  selectedTab={selectedTab}
  onTabClick={onTabClick}
/>
```

### Alternative Color Scheme

```tsx
<TabBar
  className="border-gray-200" // Lighter border
  tabs={tabs}
  selectedTab={selectedTab}
  onTabClick={onTabClick}
/>
```

## Best Practices

1. **Tab Order**: Arrange tabs in logical order of importance or workflow
2. **Concise Labels**: Keep tab labels short and descriptive
3. **Consistent Grouping**: Group related functionality under the same tab
4. **Reasonable Count**: Limit to 3-7 tabs for optimal usability
5. **Mobile Considerations**: Consider how tabs will wrap or scroll on mobile
6. **State Persistence**: Remember selected tab across page refreshes when appropriate

## Implementation Notes

- The active indicator automatically sizes to match the tab text width
- Hover states provide visual feedback for interactive elements
- The component is fully controlled, requiring external state management
- Border bottom creates visual separation from content below
- Text alignment is left-aligned for consistency

## Related Components

- `ButtonTab`: For pill-style tab interfaces
- `Tabs`: For more complex tab implementations with content panels
- `Button`: For individual action buttons
- `Card`: For organizing content within tab panels

## Migration from Other Tab Components

When migrating from other tab systems:

- Replace `activeTab` prop with `selectedTab`
- Update callback function to use `onTabClick`
- Ensure tab array contains string values
- Remove any complex tab objects and use simple strings
