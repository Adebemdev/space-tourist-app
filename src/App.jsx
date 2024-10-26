import { AppProvider } from './ui/AppContext';
import AppContent from './ui/AppContent';

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
