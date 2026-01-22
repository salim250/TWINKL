import { CheckCircle, Briefcase, Heart, TrendingUp } from 'lucide-react';
import { useState, useRef } from 'react';
import { CareerApplicationForm } from '../components/CareerApplicationForm';
import { fadeUp, staggerContainer } from '../helpers/animations';
import { motion } from 'framer-motion';

export const CareerPage = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const applicationRef = useRef<HTMLDivElement | null>(null);

  const requirements = [
    'Bachelor\'s degree in the subject area (Master\'s preferred)',
    'Teaching certification or proven experience',
    'Strong communication and classroom management skills',
    'Understanding of international education systems'
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Professional Development',
      description: 'Continuous training and growth opportunities',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Supportive Environment',
      description: 'Collaborative team culture and resources',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Competitive Package',
      description: 'Attractive salary and benefits',
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
            Join Our Team
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-body leading-relaxed">
            Shape the future of education at TWINKL
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
              Why Work With Us?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg font-body text-text-muted text-center max-w-3xl mx-auto leading-relaxed mb-12">
              At TWINKL Education, we believe that great teachers deserve great support. Join a
              team that values excellence, innovation, and the power of education to transform
              lives.
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
                Requirements
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
              Application Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[1, 2, 3].map((step) => (
                <motion.div key={step} variants={fadeUp} className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold">{step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {step === 1 ? 'Submit Application' : step === 2 ? 'Interview' : 'Join Us'}
                  </h3>
                  <p className="font-body">
                    {step === 1
                      ? 'Send your CV and cover letter'
                      : step === 2
                        ? 'Meet with our education team'
                        : 'Start your journey with TWINKL'}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <p className="font-body text-lg mb-6">
                Ready to make a difference in students' lives?
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
                Apply Now
              </button>

            </div>
          </motion.div>

          <div ref={applicationRef} />

          {showApplicationForm && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-white rounded-2xl p-8 md:p-10 text-text-dark max-w-3xl mx-auto"
            >
              <CareerApplicationForm />
            </motion.div>
          )}

        </div>
      </section >
    </div >
  );
};
