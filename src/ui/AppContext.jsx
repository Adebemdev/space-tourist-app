import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = createContext();

const backgroundMap = {
  '/home': {
    desktop: '/assets/home/background-home-desktop.jpg',
    tablet: '/assets/home/background-home-tablet.jpg',
    mobile: '/assets/home/background-home-mobile.jpg',
  },
  '/destination': {
    desktop: '/assets/destination/background-destination-desktop.jpg',
    tablet: '/assets/destination/background-destination-tablet.jpg',
    mobile: '/assets/destination/background-destination-mobile.jpg',
  },
  '/crew': {
    desktop: '/assets/crew/background-crew-desktop.jpg',
    tablet: '/assets/crew/background-crew-tablet.jpg',
    mobile: '/assets/crew/background-crew-mobile.jpg',
  },
  '/technology': {
    desktop: '/assets/technology/background-technology-desktop.jpg',
    tablet: '/assets/technology/background-technology-tablet.jpg',
    mobile: '/assets/technology/background-technology-mobile.jpg',
  },
};

export const AppProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState('desktop');
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    console.log('Current route:', currentRoute);
    console.log('Screen size:', screenSize);
    console.log('Background map:', backgroundMap);

    const route =
      Object.keys(backgroundMap).find((path) => path === currentRoute) ||
      Object.keys(backgroundMap).find((path) =>
        currentRoute.startsWith(path)
      ) ||
      '/';
    console.log('Matched route:', route);
    const background = backgroundMap[route]?.[screenSize];
    console.log('Background image:', background);
    if (background) {
      setBackgroundImage(background);
    } else {
      setBackgroundImage(null);
    }
  }, [currentRoute, screenSize]);

  return (
    <AppContext.Provider value={{ screenSize, currentRoute, backgroundImage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
