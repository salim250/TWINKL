import { createContext, useContext, useState, ReactNode } from 'react';

type Page =
  | 'home'
  | 'cambridge'
  | 'ib'
  | 'french'
  | 'tunisian'
  | 'canadian'
  | 'about'
  | 'team'
  | 'career'
  | 'contact'
  | 'enroll';

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
