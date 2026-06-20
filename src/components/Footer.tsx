import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Timer } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTranslation } from '../context/TranslationContext';

export const Footer = () => {
  const { setCurrentPage } = useNavigation();
  const { t } = useTranslation();

  const handleNavigate = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t('footer.about.title')}</h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              {t('footer.about.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Twinkleducation"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/twinkleducation"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/twinkl-education-a799a238a/"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t('footer.contact.title')}</h3>
            <div className="space-y-3 font-body">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  Rue Fadhel Ben Achour
                  <br />
                  Ariana 1004, Tunisia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">
                  +216 28 557 779
                  <br />
                  +216 20 222 226
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">teducm@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Timer className="w-5 h-5 text-secondary" />

                <div>
                  <p className="text-white font-medium leading-relaxed">
                    {t('footer.contact.hours.days')}
                    <span className="block text-white/80">
                      {t('footer.contact.hours.time')}
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2 font-body">
              {[
                { label: t('footer.links.home'), page: 'home' },
                { label: t('footer.links.about'), page: 'about' },
                { label: t('footer.links.programs'), page: 'home' },
                { label: t('footer.links.team'), page: 'team' },
                { label: t('footer.links.career'), page: 'career' },
                { label: t('footer.links.contact'), page: 'contact' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">{t('footer.location.title')}</h3>
            <div className="bg-white/10 rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps?q=36.8476523390942,10.172592760862017&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TWINKL Education Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 font-body">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
