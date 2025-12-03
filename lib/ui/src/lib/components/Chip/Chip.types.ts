import { ReactNode } from 'react';

export interface ChipProps {
  children: ReactNode;
  variant?: 'warning' | 'success' | 'error' | 'disabled' | 'default' | 'info';
  size?: 'sm' | 'md' | 'lg';
  onRemove?: () => void;
}
