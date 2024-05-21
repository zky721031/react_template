import { useRoutes } from 'react-router-dom';
import Auth from '../auth';
import LazyLoad from '../lazyLoad';

export default function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: LazyLoad('Login'),
      children: [{ path: '', element: '' }],
    },
    { path: '/login', element: LazyLoad('Login') },
    { path: '/layout', element: <Auth>{LazyLoad('Layout')}</Auth> },
    { path: '*', element: LazyLoad('NotFound') },
  ]);
  return <>{element}</>;
}
