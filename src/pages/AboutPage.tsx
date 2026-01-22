import { motion } from 'framer-motion';
import { Target, Heart, Users, Award } from 'lucide-react';

export const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and student achievement',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Care',
      description: 'We create a supportive environment where every student feels valued',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Collaboration',
      description: 'We work together with students, parents, and educators for success',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Innovation',
      description: 'We embrace modern teaching methods and educational technology',
    },
  ];

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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            About TWINKL Education
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Nurturing excellence through personalized education
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Our Story
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                TWINKL Education, part of TWINKL, is a dedicated tutoring and learning center committed to nurturing curious, confident, and capable students.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed">
                We provide high-quality education through personalized teaching, innovative programs, and a supportive environment, preparing every learner for academic success and lifelong growth.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About TWINKL Education"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-heading font-bold text-text-dark mb-12 text-center tracking-heading"
            >
              Our Values
            </motion.h2>
            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-background-light p-8 rounded-xl text-center hover:shadow-lg"
                >
                  <div className="text-secondary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="order-2 md:order-1"
            >
              <img
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Approach"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Our Approach
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                At TWINKL Education, we believe in a holistic approach to learning that addresses
                both academic excellence and personal development. Our experienced educators employ
                innovative teaching methods tailored to each student's unique learning style.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed">
                We offer comprehensive support across multiple international curricula, ensuring
                that students receive authentic instruction aligned with their chosen educational
                pathway. From Cambridge International to IB, French, Tunisian, and Canadian
                systems, we provide expert guidance every step of the way.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
