import { BookOpen, GraduationCap, Globe, Users, Award, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useTranslation } from '../context/TranslationContext';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();
  const { t } = useTranslation();

  const subjects = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: t('home.subjects.sciences'),
      description: t('home.subjects.sciences.desc'),
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: t('home.subjects.math'),
      description: t('home.subjects.math.desc'),
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: t('home.subjects.languages'),
      description: t('home.subjects.languages.desc'),
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('home.subjects.humanities'),
      description: t('home.subjects.humanities.desc'),
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: t('home.subjects.arts'),
      description: t('home.subjects.arts.desc'),
    },
  ];

  const programs = [
    {
      title: t('home.programs.cambridge.title'),
      description: t('home.programs.cambridge.desc'),
      image: '/img/cambridge.jpg',
      page: 'cambridge' as const,
    },
    {
      title: t('home.programs.ib.title'),
      description: t('home.programs.ib.desc'),
      image: '/img/internationalBac.png',
      page: 'ib' as const,
    },
    {
      title: t('home.programs.french.title'),
      description: t('home.programs.french.desc'),
      image: '/img/french.jpg',
      page: 'french' as const,
    },
    {
      title: t('home.programs.tunisian.title'),
      description: t('home.programs.tunisian.desc'),
      image: '/img/tunisian.jpg',
      page: 'tunisian' as const,
    },
    {
      title: t('home.programs.canadian.title'),
      description: t('home.programs.canadian.desc'),
      image: '/img/canadian.png',
      page: 'canadian' as const,
    },
  ];

  const handleNavigate = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="pt-20">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-heading">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate('enroll')}
              className="bg-secondary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              {t('home.hero.enrollToday')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              {t('home.hero.learnMore')}
            </button>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="py-20 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                {t('home.about.title')}
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                {t('home.about.description1')}
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                {t('home.about.description2')}
              </p>
              <button
                onClick={() => handleNavigate('about')}
                className="text-secondary font-body font-semibold inline-flex items-center hover:gap-2 transition-all"
              >
                {t('home.about.discoverStory')}
                <ArrowRight className="ml-1 w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-background-light">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 tracking-heading">
              {t('home.subjects.title')}
            </h2>
            <p className="text-lg font-body text-text-muted max-w-2xl mx-auto leading-relaxed">
              {t('home.subjects.subtitle')}
            </p>
          </div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-dark mb-3">
                  {subject.title}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">{subject.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-20 bg-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 tracking-heading">
              {t('home.programs.title')}
            </h2>
            <p className="text-lg font-body text-text-muted max-w-2xl mx-auto leading-relaxed">
              {t('home.programs.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                onClick={() => handleNavigate(program.page)}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-3 group-hover:text-secondary transition-colors">
                    {program.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <span className="text-secondary font-body font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    {t('home.programs.learnMore')}
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-r from-primary to-secondary text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 tracking-heading">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('home.cta.subtitle')}
          </p>
          <button
            onClick={() => handleNavigate('enroll')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            {t('home.cta.enrollNow')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </motion.section>
    </div>
  );
};