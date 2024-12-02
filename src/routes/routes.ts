import D1 from '../pages/D1';
import D2 from '../pages/D2';
import D3 from '../pages/D3';
import Home from '../pages/Home';

export type RouteConfig = {
  path: string;
  label: string;
  day: number;
  component: React.ComponentType<{ inputType: 'sample' | 'full' }>;
  description?: string;
};

export const routes: RouteConfig[] = [
  { path: '/', label: 'Home', day: 0, component: Home, description: 'Home' },
  { path: '/d1', label: 'Day 1', day: 1, component: D1, description: 'Historian Hysteria' },
  { path: '/d2', label: 'Day 2', day: 2, component: D2, description: 'Red-Nosed Reports' },
  { path: '/d3', label: 'Day 3', day: 3, component: D3, description: 'Mull It Over' },
];
