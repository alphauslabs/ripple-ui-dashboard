import { NavigateFunction, Navigate } from 'react-router-dom';

export interface StoreState {
  hostNavigateFunction?: NavigateFunction;
  email?: string;
}

export interface StoreActions {
  setHostNavigateFunction: (navigate: NavigateFunction) => void;
  hostNavigate(path: string): void;
  setEmail: (email: string) => void;
  resetState: () => void;
}
