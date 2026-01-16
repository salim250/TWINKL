import { BookOpen, Target, Award } from 'lucide-react';

export const CambridgePage = () => {
  const levels = [
    {
      title: 'Primary',
      description: 'Cambridge Primary for ages 5-11, building strong foundations',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'Lower Secondary',
      description: 'Cambridge Lower Secondary for ages 11-14, developing skills',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'IGCSE & A-Level',
      description: 'Cambridge IGCSE and A-Levels for ages 14-19, university preparation',
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(../../../assets/img/cambridge_school.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Cambridge International
          </h1>
          <p className="text-xl font-body leading-relaxed">
            World-class international education with globally recognized qualifications
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                At TWINKL Education, we follow the Cambridge International curriculum, a globally recognized program designed to develop confident, responsible, and independent learners.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                The curriculum emphasizes critical thinking, creativity, and practical problem-solving, preparing students for academic success and future opportunities worldwide.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                Our Cambridge programs offer structured learning pathways, from Primary (Cambridge Primary) to Secondary (IGCSE) and Advanced (AS & A Levels), ensuring a seamless academic journey.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                With personalized guidance and supportive teaching, we help every student achieve their full potential while fostering a love for learning.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="../../../assets/img/cambridge_flayer.jpg"
                alt="Cambridge Flyer"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 tracking-heading">
              Program Levels
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-secondary mb-4">{level.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-text-dark mb-3">
                  {level.title}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
