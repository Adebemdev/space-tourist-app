import Navigation from './ui/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import { useAppContext } from './ui/AppContent';
import { AppProvider } from './ui/AppContent';

const App = () => {
  const AppContent = () => {
    const { backgroundImage } = useAppContext();

    return (
      <div
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    );
  };

  return (
    <AppProvider>
      <div>
        <AppContent />
      </div>
    </AppProvider>
  );
};

export default App;
