import { NavigateFunction } from 'react-router-dom';

export interface MfePropTypes {
  language?: string;
  setLanguage?: (language: string) => void;
  email?: string; // Add userId for user-specific features
  navigate?: NavigateFunction; // Navigation function for micro-frontends
}
