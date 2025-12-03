# DatePicker Component

A modern, accessible date picker component with consistent design system integration.

## Features

- ✅ **Follows design system**: Uses CONST coloring system (tangBlue, neutral, etc.)
- ✅ **Plus icon indicator**: Clean visual indicator with PlusIcon
- ✅ **Language independent**: Works regardless of i18n language settings
- ✅ **Accessible**: Built with Radix UI primitives for screen reader support
- ✅ **Flexible**: Support for Month, Quarter, and Year selection
- ✅ **Consistent**: Matches other dropdown components in the system
- ✅ **Range highlighting**: Visual indication of all dates within selected range
- ✅ **Enhanced UX**: Clear visual feedback for date range selections

## Components

### Basic Usage (Recommended)

The DatePicker uses a compound component pattern with context:

```tsx
import {
  DatePicker,
  DatePickerTrigger,
  DatePickerContent,
} from '@project-ed/lib/ui';

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DatePicker value={selectedDate} onDateSelect={setSelectedDate}>
      <DatePickerTrigger placeholder="Pick a date" />
      <DatePickerContent
        availableTabs={['Month', 'Quarter', 'Year']}
        isSingleDatePicker={false}
        disableFutureDates={false}
      />
    </DatePicker>
  );
}
```

### Single Date Selection

```tsx
<DatePicker value={selectedDate} onDateSelect={setSelectedDate}>
  <DatePickerTrigger placeholder="Select month" />
  <DatePickerContent
    availableTabs={['Month', 'Year']}
    isSingleDatePicker={true}
  />
</DatePicker>
```

### Historical Data Only

```tsx
<DatePicker value={selectedDate} onDateSelect={setSelectedDate}>
  <DatePickerTrigger placeholder="Select historical period" />
  <DatePickerContent
    availableTabs={['Quarter', 'Year']}
    disableFutureDates={true}
  />
</DatePicker>
```

## Props

### `DatePicker` (Root Component)

| Prop           | Type                          | Default  | Description                             |
| -------------- | ----------------------------- | -------- | --------------------------------------- |
| `value`        | `string`                      | Required | Current selected date/range value       |
| `onDateSelect` | `(dateRange: string) => void` | Required | Callback when date is selected          |
| `children`     | `ReactNode`                   | Required | DatePickerTrigger and DatePickerContent |

### `DatePickerContent`

| Prop                 | Type                           | Default   | Description                                       |
| -------------------- | ------------------------------ | --------- | ------------------------------------------------- |
| `availableTabs`      | `Tab[]`                        | Required  | Array of tabs to show: 'Month', 'Quarter', 'Year' |
| `isSingleDatePicker` | `boolean`                      | `false`   | Single date vs date range selection               |
| `disableFutureDates` | `boolean`                      | `false`   | Disable current and future dates                  |
| `align`              | `'start' \| 'center' \| 'end'` | `'start'` | Alignment of the popover                          |
| `sideOffset`         | `number`                       | `4`       | Offset from trigger in pixels                     |
| `className`          | `string`                       | -         | Additional CSS classes                            |

### `DatePickerTrigger`

| Prop          | Type                   | Default         | Description                       |
| ------------- | ---------------------- | --------------- | --------------------------------- |
| `placeholder` | `string`               | `'Pick a date'` | Placeholder when no date selected |
| `className`   | `string`               | -               | Additional CSS classes            |
| `...props`    | `ButtonHTMLAttributes` | -               | All standard button props         |

## Color System

The DatePicker uses the CONST coloring system:

- **Primary**: `tangBlue-50` for selected states and focus
- **Neutral**: `neutral-20` to `neutral-95` for text and borders
- **Backgrounds**: `tangBlue-95` for selected backgrounds
- **Disabled**: `neutral-70` and `neutral-95` for disabled states

## Visual Indicator

The DatePicker uses a `PlusIcon` as a visual indicator:

```tsx
// Automatically included in DatePickerTrigger
<PlusIcon width={10} height={10} color="#161b29" />
```

## Migration from Old DatePicker

### Before (Old Pattern)

```tsx
// ❌ Old - complex positioning logic or separate components
<DatePicker
  position="auto"
  offsetX={10}
  offsetY={5}
  availableTabs={['Month']}
  onDateSelect={handleSelect}
/>

// Or separate trigger and content
<DatePickerTrigger onClick={handleOpen} />
<DatePickerPopover>...</DatePickerPopover>
```

### After (New Pattern)

```tsx
// ✅ New - compound component with context
<DatePicker value={selectedDate} onDateSelect={handleSelect}>
  <DatePickerTrigger placeholder="Pick a date" />
  <DatePickerContent
    availableTabs={['Month', 'Quarter', 'Year']}
    isSingleDatePicker={false}
  />
</DatePicker>
```

## Date Range Highlighting

When using range selection (`isSingleDatePicker={false}`), the DatePicker now provides visual highlighting for all dates within the selected range:

### Visual Indicators

- **Selected dates** (start/end): Dark blue background (`bg-tangBlue-95`) with strong border (`border-tangBlue-50`)
- **Range dates** (in-between): Light blue background (`bg-tangBlue-98`) with standard border (`border-neutral-90`)
- **Unselected dates**: Standard neutral styling with hover effects

### How It Works

The highlighting works across all date types:

```tsx
// Month range: "Jan 2023 - Mar 2023" highlights Jan, Feb, Mar
// Quarter range: "Q1 2023 - Q3 2023" highlights Q1, Q2, Q3
// Year range: "2021-2025" highlights 2021, 2022, 2023, 2024, 2025
```

### Example Usage

```tsx
<DatePicker value={selectedDateRange} onDateSelect={setSelectedDateRange}>
  <DatePickerTrigger placeholder="Select date range" />
  <DatePickerContent
    availableTabs={['Month', 'Quarter', 'Year']}
    isSingleDatePicker={false} // Enable range selection
  />
</DatePicker>
```

## Best Practices

1. **Use compound component pattern** for most use cases
2. **Always provide meaningful placeholders** that work in any language
3. **Use consistent tab combinations** across your app
4. **Consider `disableFutureDates`** for historical data selection
5. **Follow the design system** - don't override colors with arbitrary values
6. **Leverage range highlighting** for better UX in range selections

## Accessibility

The component follows WAI-ARIA guidelines:

- Keyboard navigation support
- Screen reader announcements
- Focus management
- High contrast support via design system colors

## Advanced Examples

### With Custom Styling

```tsx
<DatePicker value={selectedDate} onDateSelect={setSelectedDate}>
  <DatePickerTrigger
    placeholder="Custom styled picker"
    className="w-48 font-semibold"
  />
  <DatePickerContent
    availableTabs={['Month']}
    className="border-2 border-tangBlue-50"
  />
</DatePicker>
```
