import { type VariantProps } from 'class-variance-authority';

import { checkboxVariants } from '.';

export interface CheckboxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  onClick: () => void;
  dataTestid?: string;
}
