import { Award, BookOpen, Globe } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../helpers/animations';
import { useTranslation } from '../context/TranslationContext';

export const TeamPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { id: 'cyrine', image: '/img/team/cyrine_photo.jpg' },
    { id: 'soumaya', image: '/img/team/soumaya_photo.jpg' },
    { id: 'salim', image: '/img/team/salim_photo.jpg' },
    { id: 'rim', image: '/img/team/rim_photo.jpg' },
    { id: 'achref', image: '/img/team/achref_photo.jpg' },
    { id: 'salma', image: '/img/team/salma_photo.png' },
    { id: 'mohamedsaadallah', image: '/img/team/mohamedsaadallah_photo.jpg' },
    { id: 'mohamedhomsi', image: '/img/team/mohamedhomsi_photo.jpg' },
  ];

  const getMemberText = (memberId: string) => ({
    name: t(`team.${memberId}.name`),
    role: t(`team.${memberId}.role`),
    specialization: t(`team.${memberId}.specialization`),
    description: t(`team.${memberId}.description`),
  });

  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1600)',
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
            {t('team.hero.title')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-body leading-relaxed">
            {t('team.hero.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
              {t('team.experts.title')}
            </h2>
            <p className="text-lg font-body text-text-muted max-w-3xl mx-auto leading-relaxed">
              {t('team.experts.subtitle')}
            </p>
          </div>

          <Swiper
            dir={t('lang') === 'ar' ? 'rtl' : 'ltr'}
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamMembers.map((member, index) => {
              const text = getMemberText(member.id);
              return (
                <SwiperSlide key={index}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative h-64 bg-gray-200">
                      <img src={member.image} alt={text.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-heading font-bold text-text-dark mb-1">{text.name}</h3>
                      <p className="text-secondary font-body font-semibold mb-2">{text.role}</p>
                      <p className="text-sm text-text-muted mb-3">{text.specialization}</p>
                      <button
                        className="mt-3 text-secondary text-sm font-medium hover:underline"
                        onClick={() => setSelectedMember({ ...member, ...text })}
                      >
                        {t('team.member.readmore')}
                      </button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {selectedMember && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl max-w-lg w-full p-8 relative"
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
                  onClick={() => setSelectedMember(null)}
                >
                  ✕
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedMember.image}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      {selectedMember.name}
                    </h3>
                    <p className="text-secondary font-medium">
                      {selectedMember.role}
                    </p>
                  </div>
                </div>

                <p className="text-text-muted leading-relaxed">
                  {selectedMember.description}
                </p>
              </motion.div>
            </motion.div>
          )}

          <br />
          <br />
          <br />

          <div className="bg-background-light rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center tracking-heading">
              {t('team.standout.title')}
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <Award className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  {t('team.standout.qualified')}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  {t('team.standout.qualified.desc')}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <BookOpen className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  {t('team.standout.curriculum')}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  {t('team.standout.curriculum.desc')}
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  {t('team.standout.global')}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  {t('team.standout.global.desc')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};