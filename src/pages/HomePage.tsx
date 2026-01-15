import { BookOpen, GraduationCap, Globe, Users, Award, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const HomePage = () => {
  const { setCurrentPage } = useNavigation();

  const subjects = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Sciences',
      description: 'Physics, Chemistry, Biology, and Environmental Sciences',
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Mathematics',
      description: 'Algebra, Geometry, Calculus, and Statistics',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Languages',
      description: 'English, French, Arabic, and other world languages',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Humanities',
      description: 'History, Geography, Economics, and Social Studies',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Arts',
      description: 'Visual Arts, Music, Drama, and Creative Expression',
    },
  ];

  const programs = [
    {
      title: 'Cambridge International',
      description:
        'World-class international education with globally recognized qualifications',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      page: 'cambridge' as const,
    },
    {
      title: 'International Baccalaureate',
      description: 'Comprehensive IB programs fostering critical thinking and global citizenship',
      image: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=800',
      page: 'ib' as const,
    },
    {
      title: 'French System',
      description: 'Excellence in French education following the national curriculum',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
      page: 'french' as const,
    },
    {
      title: 'Tunisian System',
      description: 'Quality education aligned with Tunisian national standards',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800',
      page: 'tunisian' as const,
    },
    {
      title: 'Canadian System',
      description: 'Innovative Canadian curriculum promoting inquiry-based learning',
      image: 'https://images.pexels.com/photos/5212706/pexels-photo-5212706.jpeg?auto=compress&cs=tinysrgb&w=800',
      page: 'canadian' as const,
    },
  ];

  const handleNavigate = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-heading">
            Empowering Students
            <br />
            Through Excellence
          </h1>
          <p className="text-xl md:text-2xl font-body mb-8 leading-relaxed">
            Premium tutoring and learning center offering multiple international curricula
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigate('enroll')}
              className="bg-secondary text-white px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary/90 transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Enroll Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                About TWINKL Education
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                TWINKL Education is a dedicated tutoring and learning center committed to nurturing
                students through personalized teaching and various international curricula. We
                believe in creating a supportive environment where every student can thrive and
                reach their full potential.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                Our experienced educators employ innovative teaching methods tailored to each
                student's unique learning style, ensuring comprehensive understanding and academic
                excellence.
              </p>
              <button
                onClick={() => handleNavigate('about')}
                className="text-secondary font-body font-semibold inline-flex items-center hover:gap-2 transition-all"
              >
                Discover Our Story
                <ArrowRight className="ml-1 w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background-light">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 tracking-heading">
              Subjects We Teach
            </h2>
            <p className="text-lg font-body text-text-muted max-w-2xl mx-auto leading-relaxed">
              Comprehensive academic support across all major subject areas
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-dark mb-3">
                  {subject.title}
                </h3>
                <p className="font-body text-text-muted leading-relaxed">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-4 tracking-heading">
              Our Educational Programs
            </h2>
            <p className="text-lg font-body text-text-muted max-w-2xl mx-auto leading-relaxed">
              Choose from internationally recognized curricula tailored to your educational goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => handleNavigate(program.page)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-3 group-hover:text-secondary transition-colors">
                    {program.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <span className="text-secondary font-body font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 tracking-heading">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto leading-relaxed">
            Join TWINKL Education today and experience personalized, world-class education that
            empowers you to achieve your academic goals.
          </p>
          <button
            onClick={() => handleNavigate('enroll')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Enroll Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
