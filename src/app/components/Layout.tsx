import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-vh-100">
      <Outlet />
    </div>
  );
}
