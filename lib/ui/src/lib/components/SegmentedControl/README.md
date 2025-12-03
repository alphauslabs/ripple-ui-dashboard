# SegmentedControl Component

A segmented control component with smooth sliding animation for selecting between multiple options.

## Features

- Smooth sliding animation between options
- Configurable sizes (sm, md, lg)
- Type-safe option handling
- Responsive design with proper hover states
- Accessibility support

## Usage

```tsx
import { SegmentedControl } from '@project-ed/lib-ui';

const options = [
  { label: 'Not Applied', value: 'not-applied' },
  { label: 'Applied', value: 'applied' },
];

function MyComponent() {
  const [value, setValue] = useState('not-applied');

  return (
    <SegmentedControl
      options={options}
      value={value}
      onChange={setValue}
      size="md"
    />
  );
}
```

## Props

| Prop        | Type                       | Default | Description                           |
| ----------- | -------------------------- | ------- | ------------------------------------- |
| `options`   | `SegmentedControlOption[]` | -       | Array of options with label and value |
| `value`     | `string`                   | -       | Current selected value                |
| `onChange`  | `(value: string) => void`  | -       | Callback when selection changes       |
| `size`      | `'sm' \| 'md' \| 'lg'`     | `'md'`  | Size variant                          |
| `className` | `string`                   | -       | Additional CSS classes                |

## Types

```tsx
interface SegmentedControlOption {
  label: string;
  value: string;
}
```

## Styling

The component uses the design system colors:

- Background: `neutral-95`
- Active slider: `white` with `neutral-90` border
- Active text: `neutral-10`
- Inactive text: `neutral-50` with `neutral-30` hover
