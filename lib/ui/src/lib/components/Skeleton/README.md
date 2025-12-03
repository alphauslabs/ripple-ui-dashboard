# Skeleton Component

The Skeleton component provides animated loading placeholders that improve perceived performance by showing content structure while data is being fetched. It features a smooth gradient animation and configurable shapes, making it perfect for creating loading states in cost management dashboards and data-heavy interfaces.

## Usage

```tsx
import { Skeleton } from '@alphaus/ripple-ui';

function LoadingCard() {
  return (
    <div className="p-4 border rounded-lg space-y-3">
      {/* Avatar/Icon placeholder */}
      <Skeleton className="h-12 w-12" />

      {/* Title placeholder */}
      <Skeleton isSquare className="h-4 w-3/4" />

      {/* Content placeholders */}
      <Skeleton isSquare className="h-3 w-full" />
      <Skeleton isSquare className="h-3 w-5/6" />
    </div>
  );
}
```

## Props

### SkeletonProps

| Prop        | Type      | Default | Description                                                    |
| ----------- | --------- | ------- | -------------------------------------------------------------- |
| `isSquare`  | `boolean` | `false` | Whether to use square/rounded corners instead of fully rounded |
| `className` | `string`  | -       | Additional CSS classes for custom styling                      |

## Features

### Animated Loading

- **Gradient Animation**: Smooth left-to-right shimmer effect
- **Continuous Loop**: Seamless infinite animation
- **Performance Optimized**: CSS-based animation for smooth performance

### Flexible Shapes

- **Rounded (Default)**: Perfect circles and rounded rectangles
- **Square Mode**: Sharp corners for specific design needs
- **Customizable Size**: Use className to set any dimensions

### Easy Integration

- **Lightweight**: Minimal component with small footprint
- **Flexible**: Works with any CSS sizing and spacing
- **Accessible**: Proper loading state indication

## Examples

### Cost Dashboard Loading

```tsx
function CostDashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <Skeleton isSquare className="h-8 w-48" />
        <Skeleton isSquare className="h-10 w-32" />
      </div>

      {/* Metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 border rounded-lg space-y-2">
            <Skeleton isSquare className="h-4 w-24" />
            <Skeleton isSquare className="h-8 w-20" />
            <Skeleton isSquare className="h-3 w-16" />
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="border rounded-lg p-4">
        <Skeleton isSquare className="h-6 w-32 mb-4" />
        <Skeleton isSquare className="h-64 w-full" />
      </div>
    </div>
  );
}
```

### Table Loading State

```tsx
function TableSkeleton() {
  return (
    <div className="space-y-3">
      {/* Table header */}
      <div className="grid grid-cols-4 gap-4 pb-2 border-b">
        <Skeleton isSquare className="h-4 w-20" />
        <Skeleton isSquare className="h-4 w-24" />
        <Skeleton isSquare className="h-4 w-16" />
        <Skeleton isSquare className="h-4 w-18" />
      </div>

      {/* Table rows */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="grid grid-cols-4 gap-4 py-2">
          <Skeleton isSquare className="h-4 w-full" />
          <Skeleton isSquare className="h-4 w-full" />
          <Skeleton isSquare className="h-4 w-full" />
          <Skeleton isSquare className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
```

### Invoice List Loading

```tsx
function InvoiceListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center space-x-4 p-4 border rounded-lg"
        >
          {/* Status indicator */}
          <Skeleton className="h-3 w-3" />

          {/* Invoice details */}
          <div className="flex-1 space-y-2">
            <Skeleton isSquare className="h-4 w-32" />
            <Skeleton isSquare className="h-3 w-48" />
          </div>

          {/* Amount */}
          <div className="text-right space-y-2">
            <Skeleton isSquare className="h-5 w-20" />
            <Skeleton isSquare className="h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Profile Card Loading

```tsx
function ProfileCardSkeleton() {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <Skeleton className="h-16 w-16" />

        {/* User info */}
        <div className="space-y-2">
          <Skeleton isSquare className="h-5 w-32" />
          <Skeleton isSquare className="h-4 w-24" />
          <Skeleton isSquare className="h-3 w-40" />
        </div>
      </div>

      {/* Additional details */}
      <div className="mt-6 space-y-3">
        <Skeleton isSquare className="h-4 w-full" />
        <Skeleton isSquare className="h-4 w-5/6" />
        <Skeleton isSquare className="h-4 w-4/5" />
      </div>
    </div>
  );
}
```

### Chart Loading State

```tsx
function ChartSkeleton() {
  return (
    <div className="p-4 border rounded-lg">
      {/* Chart title */}
      <div className="flex justify-between items-center mb-4">
        <Skeleton isSquare className="h-6 w-48" />
        <Skeleton isSquare className="h-8 w-24" />
      </div>

      {/* Legend */}
      <div className="flex space-x-6 mb-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton className="h-3 w-3" />
            <Skeleton isSquare className="h-3 w-16" />
          </div>
        ))}
      </div>

      {/* Chart area */}
      <Skeleton isSquare className="h-80 w-full" />

      {/* X-axis labels */}
      <div className="flex justify-between mt-2">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} isSquare className="h-3 w-12" />
        ))}
      </div>
    </div>
  );
}
```

## Loading Patterns

### Progressive Loading

```tsx
function ProgressiveLoadingSkeleton({ stage }: { stage: number }) {
  return (
    <div className="space-y-4">
      {/* Always show header */}
      <Skeleton isSquare className="h-8 w-64" />

      {/* Stage 1: Basic info */}
      {stage >= 1 && (
        <div className="grid grid-cols-2 gap-4">
          <Skeleton isSquare className="h-20 w-full" />
          <Skeleton isSquare className="h-20 w-full" />
        </div>
      )}

      {/* Stage 2: Detailed data */}
      {stage >= 2 && (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} isSquare className="h-4 w-full" />
          ))}
        </div>
      )}

      {/* Stage 3: Charts */}
      {stage >= 3 && <Skeleton isSquare className="h-64 w-full" />}
    </div>
  );
}
```

### Conditional Loading

```tsx
function ConditionalSkeleton({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data?: any;
}) {
  if (!isLoading && data) {
    return <ActualContent data={data} />;
  }

  return (
    <div className="space-y-4">
      <Skeleton isSquare className="h-6 w-48" />
      <Skeleton isSquare className="h-32 w-full" />
      <div className="flex space-x-4">
        <Skeleton isSquare className="h-10 w-24" />
        <Skeleton isSquare className="h-10 w-24" />
      </div>
    </div>
  );
}
```

## Styling

### Custom Dimensions

```tsx
// Different sizes for various content types
<Skeleton className="h-4 w-32" />        {/* Text line */}
<Skeleton className="h-8 w-8" />         {/* Small icon */}
<Skeleton className="h-12 w-12" />       {/* Large icon/avatar */}
<Skeleton isSquare className="h-64 w-full" /> {/* Chart/image */}
```

### Custom Colors

```tsx
// Override default gradient with CSS custom properties
<Skeleton
  className="h-8 w-32"
  style={{
    background:
      'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.3) 50%, rgba(59, 130, 246, 0.1) 75%)',
    backgroundSize: '200% 100%',
    animation: 'gradient 2s ease-in-out infinite',
  }}
/>
```

## Accessibility

The Skeleton component supports accessibility:

- **Screen Reader Awareness**: Indicates loading state to assistive technologies
- **Reduced Motion**: Respects user preferences for reduced motion
- **Semantic Meaning**: Conveys loading state appropriately

### Enhanced Accessibility

```tsx
function AccessibleSkeleton() {
  return (
    <div aria-label="Loading content" role="status">
      <Skeleton isSquare className="h-4 w-32" />
      <span className="sr-only">Loading cost data...</span>
    </div>
  );
}
```

## Best Practices

### Performance

- Use appropriate number of skeleton elements
- Match skeleton layout to actual content structure
- Consider progressive loading for complex interfaces
- Avoid excessive animation on low-power devices

### User Experience

- Show skeletons immediately on load
- Match skeleton shapes to actual content
- Use consistent timing with data loading
- Provide fallback states for failed loads

### Design

- Keep skeleton shapes simple and recognizable
- Use consistent spacing and proportions
- Consider dark mode variations
- Test with various screen sizes

## Cost Management Use Cases

The Skeleton component is essential for:

- **Dashboard Loading**: Cost overview widgets and metrics
- **Report Generation**: Financial reports and analytics
- **Data Tables**: Large dataset loading states
- **Chart Rendering**: Complex cost visualizations
- **Invoice Processing**: Document loading and parsing
- **Real-time Updates**: Live cost monitoring interfaces

## Related Components

- [SpinnerLoader](../SpinnerLoader/README.md) - Alternative loading indicator
- [ProgressBar](../ProgressBar/README.md) - Progress indication
- [Card](../Card/README.md) - Container component often used with skeletons
- [Table](../Table/README.md) - Data display component that benefits from skeleton states
