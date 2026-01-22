import { CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EnrollmentApplicationForm } from '../components/EnrollmentApplicationForm';
import { motion } from 'framer-motion';

export const EnrollPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/mail/enrollment`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed');

      alert('Enrollment application sent successfully!');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert('Failed to submit enrollment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const benefits = [
    'Expert teachers with international credentials',
    'Multiple curriculum options (Cambridge, IB, French, Tunisian, Canadian)',
    'Small class sizes for personalized attention',
    'Modern facilities and learning resources',
    'Proven track record of academic excellence',
    'Flexible scheduling options',
    'Regular progress reports and parent communication',
    'University preparation and guidance',
  ];
  return (
    <div className="pt-20">
      <motion.section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Enroll Today
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Start your journey to academic excellence
          </p>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 }
                }
              }}
            >
              <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-3xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Why Choose TWINKL Education?
              </motion.h2>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg font-body text-text-muted leading-relaxed mb-8">
                Join a learning community committed to excellence, innovation, and personalized
                education. Our proven track record of student success speaks for itself.
              </motion.p>
              <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="font-body text-text-muted leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="bg-background-light p-8 rounded-xl">
                <h2 className="text-2xl font-heading font-bold text-text-dark mb-6">
                  Enrollment Form
                </h2>
                <EnrollmentApplicationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
