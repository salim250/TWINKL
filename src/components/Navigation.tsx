import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', page: 'home' as const },
    { label: 'Cambridge International', page: 'cambridge' as const },
    { label: 'International Baccalaureate', page: 'ib' as const },
    { label: 'French System', page: 'french' as const },
    { label: 'Tunisian System', page: 'tunisian' as const },
    { label: 'Canadian System', page: 'canadian' as const },
    { label: 'About Us', page: 'about' as const },
    { label: 'Meet Our Team', page: 'team' as const },
    { label: 'Career', page: 'career' as const },
    { label: 'Contact', page: 'contact' as const },
  ];

  const handleNavigate = (page: typeof menuItems[0]['page']) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleNavigate('home')}
            >
              <img src="/logo.png" alt="TWINKL Education" className="h-12 w-auto" />
              <span className="ml-3 text-xl font-heading font-bold text-primary">
                TWINKL Education
              </span>
            </div>

            <div className="hidden xl:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`text-sm font-body uppercase tracking-wider transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-secondary font-semibold'
                      : 'text-text-dark hover:text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('enroll')}
                className="bg-secondary text-white px-6 py-2.5 rounded-lg font-body font-medium hover:bg-secondary/90 transition-all duration-200 transform hover:scale-105"
              >
                Enroll Now
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-text-dark hover:text-secondary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <button
              className="xl:hidden text-text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-body transition-colors ${
                    currentPage === item.page
                      ? 'bg-secondary/10 text-secondary font-semibold'
                      : 'text-text-dark hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('enroll')}
                className="w-full bg-secondary text-white px-6 py-2.5 rounded-lg font-body font-medium hover:bg-secondary/90 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white shadow-2xl">
            <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-bold text-text-dark">Search</h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-text-muted hover:text-text-dark"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <input
                type="text"
                placeholder="Search for programs, courses, or information..."
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
