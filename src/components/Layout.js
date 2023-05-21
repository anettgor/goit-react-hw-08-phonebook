import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ width: '100vw', margin: '0 auto', padding: '0' }}>
      <AppHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
