import { type VariantProps } from 'class-variance-authority';

import { radioVariants } from '.';

export interface RadioProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof radioVariants> {
  label: string;
  onClick: () => void;
}
