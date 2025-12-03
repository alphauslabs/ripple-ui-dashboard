# ScrollArea Component

A global scrollable area component built with Radix UI and styled with the project's design system colors.

## Usage

```tsx
import { ScrollArea } from '@project-ed/lib-ui';

// Basic usage
<ScrollArea className="h-96 w-full rounded-md border">
  <div className="p-4">
    {/* Your scrollable content */}
  </div>
</ScrollArea>

// With custom styling
<ScrollArea className="h-72 w-96 rounded-lg border border-neutral-30">
  <div className="space-y-4 p-4">
    {items.map((item) => (
      <div key={item.id} className="p-2 border-b">
        {item.content}
      </div>
    ))}
  </div>
</ScrollArea>
```

## Features

- Built on Radix UI ScrollArea primitive
- Smooth scrolling with customizable scrollbars
- Responsive design
- Consistent with project's design system colors
- TypeScript support
- Accessible by default

## Props

The component accepts all props from `@radix-ui/react-scroll-area` Root component.

| Prop      | Type      | Default | Description                   |
| --------- | --------- | ------- | ----------------------------- |
| className | string    | -       | Additional CSS classes        |
| children  | ReactNode | -       | Content to be made scrollable |

## Styling

The component uses the project's design system colors:

- Scrollbar: `bg-neutral-30` with `hover:bg-neutral-40`
- Supports all Tailwind CSS classes for customization
