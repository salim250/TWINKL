import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { AuthProvider } from './context/AuthContext';
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
import { SchedulesPage } from './pages/SchedulesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { useEffect, useState } from 'react';
import { initGA, logPageView } from './helpers/analytics';
import { TranslationProvider } from './context/TranslationContext';
import SplashScreens from './components/SplashScreens';
import { Capacitor } from '@capacitor/core';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      case 'schedules':
        return <SchedulesPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return <>
    {renderPage()}
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
  </>;
}

function AppContent() {
  const { currentPage } = useNavigation();
  const [showSplash, setShowSplash] = useState(
    Capacitor.isNativePlatform()
  );

  useEffect(() => {
    // initGA?.();
  }, []);

  useEffect(() => {
    // logPageView?.(currentPage);
  }, [currentPage]);

  if (showSplash && Capacitor.isNativePlatform()) {
    return (
      <SplashScreens
        onComplete={() => setShowSplash(false)}
      />
    );
  }

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
    <AuthProvider>
      <TranslationProvider>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </TranslationProvider>
    </AuthProvider>
  );
}

export default App;
