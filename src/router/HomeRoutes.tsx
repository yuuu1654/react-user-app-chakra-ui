import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const HomeRoutes = [
  {
    path: '/setting',
    children: <Setting />,
  },
  {
    path: '/user-mng',
    children: <UserManagement />,
  },
  {
    path: '*',
    children: <Page404 />,
  },
];
