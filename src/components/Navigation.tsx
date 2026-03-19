import { useState, useEffect } from 'react';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTranslation } from '../context/Translationcontext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = useNavigation();
  const { language, setLanguage, t } = useTranslation();
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t('nav.home'), page: 'home' as const },

    {
      label: t('nav.systems'),
      children: [
        { label: t('systems.cambridge'), page: 'cambridge' as const },
        { label: t('systems.ib'), page: 'ib' as const },
        { label: t('systems.tunisian'), page: 'tunisian' as const },
        { label: t('systems.french'), page: 'french' as const },
        { label: t('systems.canadian'), page: 'canadian' as const },
      ],
    },

    { label: t('nav.about'), page: 'about' as const },
    { label: t('nav.team'), page: 'team' as const },
    { label: t('nav.career'), page: 'career' as const },
  ];

  const handleNavigate = (page: typeof menuItems[0]['page']) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
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
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-body uppercase tracking-wider text-text-dark hover:text-secondary">
                    {item.label}
                  </button>

                  <div className="absolute left-0 top-full mt-3 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.children.map((child) => (
                      <button
                        key={child.page}
                        onClick={() => handleNavigate(child.page)}
                        className="block w-full text-left px-5 py-3 text-sm hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`text-sm font-body uppercase tracking-wider transition-colors ${currentPage === item.page
                      ? 'text-secondary font-semibold'
                      : 'text-text-dark hover:text-secondary'
                    }`}
                >
                  {item.label}
                </button>
              )
            )}

            {/* Language Selector - Desktop */}
            <LanguageSwitcher />

            <button
              onClick={() => handleNavigate('enroll')}
              className="bg-secondary text-white px-6 py-2.5 rounded-lg font-body font-medium hover:bg-secondary/90 transition-all duration-200 transform hover:scale-105"
            >
              {t('nav.enrollNow')}
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
          <div className="px-4 py-4 space-y-3 max-h-[70vh] overflow-visible">
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenu(
                        openMobileSubmenu === item.label ? null : item.label
                      )
                    }
                    className="w-full flex justify-between items-center px-4 py-2 text-sm font-body rounded-lg hover:bg-gray-100"
                  >
                    {item.label}
                    <span>{openMobileSubmenu === item.label ? '−' : '+'}</span>
                  </button>

                  {openMobileSubmenu === item.label && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <button
                          key={child.page}
                          onClick={() => handleNavigate(child.page)}
                          className="block w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className="block w-full text-left px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
                >
                  {item.label}
                </button>
              )
            )}

            {/* Language Selector - Mobile */}
            <LanguageSwitcher isMobile={true} />

            <button
              onClick={() => handleNavigate('enroll')}
              className="w-full bg-secondary text-white px-6 py-2.5 rounded-lg font-body font-medium hover:bg-secondary/90 transition-colors"
            >
              {t('nav.enrollNow')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};