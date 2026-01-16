import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Timer } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const Footer = () => {
  const { setCurrentPage } = useNavigation();

  const handleNavigate = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">About TWINKL</h3>
            <p className="text-white/80 font-body leading-relaxed mb-4">
              A dedicated tutoring and learning center committed to nurturing students through
              personalized teaching and various international curricula.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Info</h3>
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
                    Monday – Sunday
                    <span className="block text-white/80">
                      9:00 AM – 9:00 PM
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Us', page: 'about' },
                { label: 'Programs', page: 'home' },
                { label: 'Meet Our Team', page: 'team' },
                { label: 'Career', page: 'career' },
                { label: 'Contact', page: 'contact' },
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
            <h3 className="text-xl font-heading font-bold mb-4">Our Location</h3>
            <div className="bg-white/10 rounded-lg overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps?q=36.84783326804408,10.17257186818187&z=15&output=embed"
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
            &copy; {new Date().getFullYear()} TWINKL Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
