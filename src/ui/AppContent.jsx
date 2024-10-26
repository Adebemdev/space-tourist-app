import React from 'react';
import Navigation from '../ui/Navigation';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppContext } from '../ui/AppContext';
import Spinner from '../ui/Spinner';

const Home = lazy(() => import('../pages/Home'));
const Crew = lazy(() => import('../pages/Crew'));
const Technology = lazy(() => import('../pages/Technology'));
const Destination = lazy(() => import('../pages/Destination'));

const AppContent = () => {
  const { backgroundImage } = useAppContext();

  return (
    <div
      data-testid="background-element"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'background-image 0.3s ease-in-out',
      }}
    >
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppContent;
