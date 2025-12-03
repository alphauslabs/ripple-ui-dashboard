import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'warning' | 'success' | 'error' | 'disabled' | 'default' | 'info';
  size?: 'sm' | 'md' | 'lg';
}
