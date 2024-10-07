import { Outlet } from 'react-router';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="h-screen bg-dark">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
