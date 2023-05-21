import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppBar/AppBar';
import { Suspense } from 'react';

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
