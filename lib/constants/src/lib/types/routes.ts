import { FC } from 'react';
export interface IRoute {
  to: string; // Path for the route
  component: FC; // React component to render for the route
  label: string; // Label for the route (used for display purposes)
  hostMenuAddress: string; // The address in the host menu
}
