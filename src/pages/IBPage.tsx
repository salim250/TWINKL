import { BookOpen, Target, Award } from 'lucide-react';

export const IBPage = () => {
  const levels = [
    {
      title: 'PYP',
      description: 'Primary Years Programme for ages 3-12',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'MYP',
      description: 'Middle Years Programme for ages 11-16',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'DP',
      description: 'Diploma Programme for ages 16-19',
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            International Baccalaureate
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Comprehensive IB programs fostering critical thinking and global citizenship
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              The International Baccalaureate offers a continuum of education that challenges
              students to excel in their studies and in their personal development. IB programs
              encourage students to become active, compassionate lifelong learners who understand
              that other people, with their differences, can also be right.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              Our IB-trained educators create an engaging learning environment that promotes
              inquiry-based learning, critical thinking, and international-mindedness. Students
              develop the knowledge, skills, and attitudes they need to succeed in a rapidly
              changing world.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed">
              From the Primary Years Programme through the Diploma Programme, IB learners strive to
              be inquirers, knowledgeable, thinkers, communicators, principled, open-minded,
              caring, risk-takers, balanced, and reflective. These learner profile attributes guide
              our approach to teaching and learning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 tracking-heading">
              IB Programs
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
