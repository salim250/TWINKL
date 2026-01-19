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
            'url(/img/international_school.jpg)',
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                At TWINKL Education, we proudly support the principles of the International Baccalaureate (IB) — a world-class academic framework that inspires students to become confident, compassionate, and globally minded learners.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                The IB program encourages critical thinking, creativity, and international awareness, empowering students to explore ideas, question assumptions, and engage with real-world challenges. Through an inquiry-based approach, learners develop the skills and mindset needed to succeed in higher education and beyond.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/international_flayer.jpg"
                alt="IB Flyer"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
