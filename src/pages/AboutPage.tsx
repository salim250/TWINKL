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
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            About TWINKL Education
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Nurturing excellence through personalized education
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Our Story
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                TWINKL Education was founded with a vision to provide world-class educational
                support that empowers students to reach their full potential. As a dedicated
                tutoring and learning center, we understand that every student has unique learning
                needs and aspirations.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed">
                Through personalized teaching approaches and access to multiple international
                curricula, we create tailored learning experiences that build confidence,
                competence, and a lifelong love of learning. Our commitment to excellence has made
                us a trusted partner for families seeking quality education.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About TWINKL Education"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-12 text-center tracking-heading">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background-light p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-secondary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Approach"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
