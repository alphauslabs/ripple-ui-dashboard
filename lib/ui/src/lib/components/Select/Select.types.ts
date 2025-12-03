import * as SelectPrimitive from '@radix-ui/react-select';

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  label?: string;
  required?: boolean;
}
