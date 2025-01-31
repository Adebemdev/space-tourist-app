import { useAppContext } from '../contexts/AppContext';

const backgroundMap = {
  '/': {
    desktop: '/assets/home/background-home-desktop.jpg',
    tablet: '/assets/home/background-home-tablet.jpg',
    mobile: '/assets/home/background-home-mobile.jpg',
  },
  '/destinations': {
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

export const useBackground = () => {
  const { screenSize, currentRoute } = useAppContext();

  const getBackground = () => {
    const route =
      Object.keys(backgroundMap).find((path) =>
        currentRoute.startsWith(path)
      ) || '/';
    return backgroundMap[route][screenSize];
  };

  return getBackground();
};
