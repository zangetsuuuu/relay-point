import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
];

export const router = createBrowserRouter(routes);
