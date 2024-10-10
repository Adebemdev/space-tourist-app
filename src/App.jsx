import Home from './pages/Home';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import DesktopBackground from './assets/home/background-home-desktop.jpg';
import MobileBackground from './assets/home/background-home-mobile.jpg';
import TabletBackground from './assets/home/background-home-tablet.jpg';
import Technology from './pages/Technology';
import { Route, Routes } from 'react-router';
import Navigation from './ui/Navigation';
import useScreenSize from './hooks/useScreenSize';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

const App = () => {
  const location = useLocation();
  const { pathname } = location;
  const screenSize = useScreenSize();
  const [backgroundImage, setBackgroundImage] = useState();

  const getBackgroundImage = () => {
    const screenWidth = screenSize.width;
    switch (true) {
      case screenWidth >= 360 && screenWidth < 767:
        return MobileBackground;
      case screenWidth <= 767 && screenWidth < 1023:
        return TabletBackground;
      case screenWidth > 1024: {
        return DesktopBackground;
      }
    }
  };

  useEffect(() => {
    if (
      pathname.includes('destination') ||
      pathname.includes('crew') ||
      pathname.includes('technology')
    ) {
      setBackgroundImage(null);
    } else {
      const image = getBackgroundImage();
      setBackgroundImage(image);
    }
  }, [screenSize.width, pathname]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: 'black',
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
};

export default App;
