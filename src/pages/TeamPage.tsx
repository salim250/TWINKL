import { Award, BookOpen, Globe } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../helpers/animations';

export const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Cyrine Belhadj',
      role: 'CEO/Founder of TWINKL Education',
      image: '/img/team/cyrine_photo.jpg',
      specialization: 'Biochemistry Teacher',
      description: 'Dr. Cyrine Belhadj, Founder & CEO of TWINKL Education, is a highly qualified engineer and  university educator with over 10 years of experience in teaching and educational leadership. She is a Certified Cambridge Teacher specializing in Science, committed to fostering academic excellence and holistic development in students. Under her guidance, TWINKL Education provides a structured, innovative, and student-centered learning environment, empowering learners to achieve their full potential and succeed in a global academic landscape.'
    },
    {
      name: 'Ms. Soumaya Oualha',
      role: 'Founder, Owner of TWINKL',
      image: '/img/team/soumaya_photo.jpg',
      specialization: 'French Teacher',
      description: `Mrs. Soumaya Oualha is the Founder and the Owner of TWINKL organization and a highly experienced French teacher. 
      She is dedicated to fostering academic excellence and cultural understanding, providing students with personalized guidance and effective language instruction. 
      Under her leadership, TWINKL Education promotes a student-centered, innovative learning environment, empowering learners to achieve their full potential.`
    },
    {
      name: 'Mr. Salim Brahim',
      role: 'Teacher',
      image: '/img/team/salim_photo.jpg',
      specialization: 'ICT Teacher',
      description: `Mr. Salim Brahim is a highly qualified Software Engineer and ICT Teacher with over three years of experience in developing and maintaining enterprise-level web applications. 
      He holds a National Engineering Diploma in Computer Engineering from ESPRIT, obtained in 2022. 
      His expertise includes building robust and scalable solutions, system integration, automated testing, and ensuring quality and reliability. 
      As a qualified ICT educator, he effectively delivers technology-based instruction and integrates digital tools into modern learning environments.`
    },
    {
      name: 'Ms. Rim Hana',
      role: 'Teacher',
      image: '/img/team/rim_photo.jpg',
      specialization: 'English Teacher',
      description: `Ms. Rim Hana is a professional English teacher and translator with expertise in language instruction and intercultural communication. 
      She holds a Master’s Degree in Translation and Interpreting from the Higher Institute of Human Sciences of Tunis and a Bachelor’s Degree in English Language, Literature, and Civilization from the Faculty of Human and Social Sciences of Tunis. 
      Ms. Bechraoui has taught in several international institutions. She designs interactive, learner-focused lessons aligned with the Cambridge curriculum, integrating digital tools and modern teaching strategies to enhance students’ language proficiency and confidence.`
    },
    {
      name: 'Mr. Achref Ben Brahim',
      role: 'Teacher',
      image: '/img/team/achref_photo.jpg',
      specialization: 'Mathemathics Teacher',
      description: `Mr Achref is an engineer and computer science educator with international experience. He teaches ICT, Mathematics, and Business Studies within the British Curriculum framework. With a background in digital inclusion and technical support, he bridges education and technology. Passionate about empowering youth, he promotes creative and responsible tech learning. Achref fosters innovation and critical thinking through engaging, student-centered teaching.`
    },
    {
      name: 'Ms. Salma ben Khalifa',
      role: 'Teacher',
      image: '/img/team/salma_photo.png',
      specialization: 'Business Teacher',
      description: `Ms. Salma Ben Khelifa brings strong experience in business development, strategic communication, and organizational leadership. She has served in business-focused roles at both national and international levels, including Business Development Responsible positions at AIESEC and Artiphany, where she managed partnerships, supported talent development, and led training programs in leadership and professional skills. Ms. Ben Khelifa has also worked as Public Relations Manager at iWatch and Events Coordinator at Mdinti, gaining valuable experience in stakeholder management, project coordination, and event strategy. Her professional background in entrepreneurship and youth-centered initiatives allows her to connect business theory with practical, real-world application, inspiring students to develop creativity, leadership, and a global business mindset.`
    },
  ];

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
            Meet Our Team
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-body leading-relaxed">
            Experienced educators dedicated to student success
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
              Our Expert Educators
            </h2>
            <p className="text-lg font-body text-text-muted max-w-3xl mx-auto leading-relaxed">
              Our team comprises highly qualified educators with extensive experience in
              international curricula. Each member brings passion, expertise, and a commitment to
              nurturing student potential.
            </p>
          </div>

          <Swiper
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
            {teamMembers.map((member, index) => (
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
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading font-bold text-text-dark mb-1">
                      {member.name}
                    </h3>

                    <p className="text-secondary font-body font-semibold mb-2">
                      {member.role}
                    </p>

                    <p className="text-sm text-text-muted mb-3">
                      {member.specialization}
                    </p>

                    <button
                      className="mt-3 text-secondary text-sm font-medium hover:underline"
                      onClick={() => setSelectedMember(member)}
                    >
                      Read more
                    </button>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
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
              Why Our Team Stands Out
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
                  Qualified Experts
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  Advanced degrees and certifications in their respective fields
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <BookOpen className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  Curriculum Specialists
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  Deep expertise in international curricula and examination systems
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  Global Experience
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  International teaching experience across diverse educational contexts
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
