import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { TranslationProvider } from './context/TranslationContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CambridgePage } from './pages/CambridgePage';
import { IBPage } from './pages/IBPage';
import { FrenchSystemPage } from './pages/FrenchSystemPage';
import { TunisianSystemPage } from './pages/TunisianSystemPage';
import { CanadianSystemPage } from './pages/CanadianSystemPage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { CareerPage } from './pages/CareerPage';
import { EnrollPage } from './pages/EnrollPage';
import { useEffect } from 'react';
import { initGA } from './helpers/analytics';
import { logPageView } from './helpers/analytics';

function PageRouter() {
  const { currentPage } = useNavigation();

  const renderPage = () => {

    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'cambridge':
        return <CambridgePage />;
      case 'ib':
        return <IBPage />;
      case 'french':
        return <FrenchSystemPage />;
      case 'tunisian':
        return <TunisianSystemPage />;
      case 'canadian':
        return <CanadianSystemPage />;
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      case 'career':
        return <CareerPage />;
      case 'enroll':
        return <EnrollPage />;
      default:
        return <HomePage />;
    }
  };

  return <>{renderPage()}</>;
}

function AppContent() {
  const { currentPage } = useNavigation(); // ✅ now inside provider

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <PageRouter />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <TranslationProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </TranslationProvider>
  );
}

export default App;