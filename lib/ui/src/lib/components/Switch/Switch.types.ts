import { type VariantProps, cva } from 'class-variance-authority';

export const switchRootVariants = cva(
  'relative inline-flex items-center justify-center w-[40px] h-[24px] border-2 rounded-full cursor-pointer bg-white transition-colors',
  {
    variants: {
      variant: {
        off: 'border-[#C2C5D9]',
        on: 'border-[#8CA8FF]',
      },
    },
    defaultVariants: {
      variant: 'off',
    },
  }
);

export const switchThumbVariants = cva(
  'w-[16px] h-[16px] rounded-full shadow transition-transform duration-200 will-change-transform',
  {
    variants: {
      variant: {
        off: 'bg-[#A7ABBE] translate-x-[-8px]',
        on: 'bg-[#1D55CE] translate-x-[8px]',
      },
    },
    defaultVariants: {
      variant: 'off',
    },
  }
);

export interface SwitchProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof switchRootVariants> {
  label: string;
  onChange: () => void;
}
