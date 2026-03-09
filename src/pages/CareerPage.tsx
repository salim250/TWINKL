import { CheckCircle, Briefcase, Heart, TrendingUp, Mail } from 'lucide-react';
import { useState, useRef } from 'react';
import { CareerApplicationForm } from '../components/CareerApplicationForm';
import { fadeUp, staggerContainer } from '../helpers/animations';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/TranslationContext';

export const CareerPage = () => {
  const { t } = useTranslation();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const applicationRef = useRef<HTMLDivElement | null>(null);

  const requirements = [
    t('career.requirements.1'),
    t('career.requirements.2'),
    t('career.requirements.3'),
    t('career.requirements.4'),
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: t('career.benefits.professional'),
      description: t('career.benefits.professional.desc'),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('career.benefits.environment'),
      description: t('career.benefits.environment.desc'),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('career.benefits.package'),
      description: t('career.benefits.package.desc'),
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            {t('career.hero.title')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-body leading-relaxed">
            {t('career.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-heading font-bold text-text-dark mb-6 text-center tracking-heading">
              {t('career.why.title')}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg font-body text-text-muted text-center max-w-3xl mx-auto leading-relaxed mb-12">
              {t('career.why.subtitle')}
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-background-light p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-secondary mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 mb-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                {t('career.requirements.title')}
              </h2>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    variants={fadeUp}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="font-body text-text-muted leading-relaxed">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp}>
              <img
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Career at TWINKL"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-center tracking-heading">
              {t('career.process.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[1, 2, 3].map((step) => (
                <motion.div key={step} variants={fadeUp} className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold">{step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {t(`career.process.step${step}`)}
                  </h3>
                  <p className="font-body">
                    {t(`career.process.step${step}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <p className="font-body text-lg mb-6">
                {t('career.process.ready')}
              </p>
              <button
                onClick={() => {
                  setShowApplicationForm(!showApplicationForm);
                  setTimeout(() => {
                    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                {t('career.process.apply')}
              </button>
            </div>
          </motion.div>

          <div ref={applicationRef} />

          {showApplicationForm && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-text-dark mb-4 tracking-heading">
                  {t('career.apply.title')}
                </h2>
                <p className="text-lg font-body text-text-muted mb-6">
                  {t('career.apply.instruction')}
                </p>
                <a
                  href="mailto:teducm@gmail.com"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  {t('career.apply.email')}
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};