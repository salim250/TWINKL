import { Award, BookOpen, Globe } from 'lucide-react';

export const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Director of Studies',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Cambridge International',
    },
    {
      name: 'Prof. Ahmed Ben Ali',
      role: 'Head of Sciences',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Physics & Chemistry',
    },
    {
      name: 'Marie Dubois',
      role: 'French Program Lead',
      image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'French System',
    },
    {
      name: 'David Thompson',
      role: 'Mathematics Coordinator',
      image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'Advanced Mathematics',
    },
    {
      name: 'Fatima Khalil',
      role: 'IB Coordinator',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'International Baccalaureate',
    },
    {
      name: 'Michael Chen',
      role: 'Language Department Head',
      image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialization: 'English & French',
    },
  ];

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
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Meet Our Team
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Experienced educators dedicated to student success
          </p>
        </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-body font-semibold mb-2">{member.role}</p>
                  <p className="text-text-muted font-body">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-background-light rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold text-text-dark mb-8 text-center tracking-heading">
              Why Our Team Stands Out
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <Award className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  Qualified Experts
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  Advanced degrees and certifications in their respective fields
                </p>
              </div>
              <div className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <BookOpen className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  Curriculum Specialists
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  Deep expertise in international curricula and examination systems
                </p>
              </div>
              <div className="text-center">
                <div className="text-secondary mb-4 flex justify-center">
                  <Globe className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  Global Experience
                </h3>
                <p className="font-body text-text-muted leading-relaxed">
                  International teaching experience across diverse educational contexts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
