# ButtonTab Component

The ButtonTab component provides a clean, button-based tab navigation interface for switching between different views or sections. It features a pill-style design with smooth transitions and active state indicators, perfect for organizing related content in cost management dashboards.

## Usage

```tsx
import { ButtonTab } from '@alphaus/ripple-ui';
import { useState } from 'react';

const [activeLabel, setActiveLabel] = useState('Overview');

<ButtonTab
  labels={['Overview', 'Details', 'History']}
  activeLabel={activeLabel}
  setActiveLabel={setActiveLabel}
/>;
```

## Props

| Prop             | Type                      | Default | Description                    |
| ---------------- | ------------------------- | ------- | ------------------------------ |
| `labels`         | `Array<string>`           | -       | Array of tab labels to display |
| `activeLabel`    | `string`                  | -       | Currently active tab label     |
| `setActiveLabel` | `(label: string) => void` | -       | Function to update active tab  |
| `className`      | `string`                  | -       | Additional CSS classes         |

## Features

- **Pill-style Design**: Clean, modern appearance with rounded corners
- **Smooth Transitions**: Animated state changes with CSS transitions
- **Active State Indicator**: Clear visual distinction for selected tab
- **Accessible**: Proper keyboard and mouse interaction support
- **Responsive**: Adapts to different screen sizes

## Cost Management Examples

### Dashboard View Switcher

```tsx
const [view, setView] = useState('Summary');

<ButtonTab
  labels={['Summary', 'Detailed', 'Trends']}
  activeLabel={view}
  setActiveLabel={setView}
/>;
```

### Report Time Range Selector

```tsx
const [period, setPeriod] = useState('Monthly');

<ButtonTab
  labels={['Daily', 'Weekly', 'Monthly', 'Yearly']}
  activeLabel={period}
  setActiveLabel={setPeriod}
/>;
```

### Cost Analysis Modes

```tsx
const [analysisMode, setAnalysisMode] = useState('Costs');

<ButtonTab
  labels={['Costs', 'Usage', 'Efficiency']}
  activeLabel={analysisMode}
  setActiveLabel={setAnalysisMode}
/>;
```

## Design Tokens

The component uses the following design tokens:

- **Background**: `#EEF0FF` (light blue background)
- **Active Background**: `#FFFFFF` (white active state)
- **Active Text**: `#1D55CE` (blue text for active state)
- **Inactive Text**: `#434657` (gray text for inactive state)
- **Border Radius**: `6px` for container, `4px` for individual tabs
- **Spacing**: `8px` horizontal padding, `6px` vertical padding

## Accessibility

- Uses semantic HTML structure
- Supports keyboard navigation
- Provides clear visual focus indicators
- Maintains proper color contrast ratios
- Screen reader friendly with appropriate labels

## Best Practices

1. **Use Clear Labels**: Keep tab labels concise and descriptive
2. **Logical Order**: Arrange tabs in order of importance or workflow
3. **Consistent Grouping**: Use for related content that makes sense to switch between
4. **Reasonable Number**: Limit to 2-5 tabs for optimal usability
5. **Responsive Design**: Consider how tabs will appear on different screen sizes

## Related Components

- `Tabs`: For more complex tab implementations with content panels
- `TabBar`: For primary navigation tab bars
- `Button`: For standalone action buttons
