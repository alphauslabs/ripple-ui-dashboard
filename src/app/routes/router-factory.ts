import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';
import { RoutingStrategy } from './types';

interface CreateRouterProps {
  strategy?: RoutingStrategy;
  initialPathname?: string;
}

export function createRouter({ strategy, initialPathname }: CreateRouterProps) {
  if (strategy === 'browser') {
    console.log('Creating browser router');
    return createBrowserRouter(routes);
  }
  const initialEntries = [initialPathname || '/'];
  console.log('Creating memory router with initial entries:', initialEntries);
  return createMemoryRouter(routes, { initialEntries: initialEntries });
}
