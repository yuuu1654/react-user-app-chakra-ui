import { FC, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { HomeRoutes } from './HomeRoutes';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/template/HeaderLayout';
import { LoginUserProvider } from '../providers/LoginUserProvider';

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        {/* ログイン前の画面 */}
        <Route path="/" element={<Login />} />
        {/* ログイン後の画面 */}
        <Route path="/home" element={<HeaderLayout><Home /></HeaderLayout>} />
        <Route
          path="/home/*"
          element={
            <Routes>
              {HomeRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<HeaderLayout>{route.children}</HeaderLayout>}
                />
              ))}
            </Routes>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
