import { CheckCircle, Briefcase, Heart, TrendingUp } from 'lucide-react';

export const CareerPage = () => {
  const requirements = [
    'Bachelor\'s degree or higher in Education or subject specialization',
    'Teaching certification or relevant credentials',
    'Experience with international curricula (Cambridge, IB, etc.)',
    'Excellent communication and interpersonal skills',
    'Passion for education and student development',
    'Proficiency in English (additional languages a plus)',
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Professional Development',
      description: 'Continuous training and growth opportunities',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Supportive Environment',
      description: 'Collaborative team culture and resources',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Competitive Package',
      description: 'Attractive salary and benefits',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Join Our Team
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Shape the future of education at TWINKL
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-text-dark mb-6 text-center tracking-heading">
              Why Work With Us?
            </h2>
            <p className="text-lg font-body text-text-muted text-center max-w-3xl mx-auto leading-relaxed mb-12">
              At TWINKL Education, we believe that great teachers deserve great support. Join a
              team that values excellence, innovation, and the power of education to transform
              lives.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background-light p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-secondary mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-text-muted leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Requirements
              </h2>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="font-body text-text-muted leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Career at TWINKL"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center tracking-heading">
              Application Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold">1</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Submit Application</h3>
                <p className="font-body">Send your CV and cover letter</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold">2</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Interview</h3>
                <p className="font-body">Meet with our education team</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-heading font-bold">3</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Join Us</h3>
                <p className="font-body">Start your journey with TWINKL</p>
              </div>
            </div>
            <div className="text-center">
              <p className="font-body text-lg mb-6">
                Ready to make a difference in students' lives?
              </p>
              <a
                href="mailto:careers@twinkl-education.com"
                className="bg-white text-primary px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
