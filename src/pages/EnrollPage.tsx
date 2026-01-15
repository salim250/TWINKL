import { CheckCircle } from 'lucide-react';

export const EnrollPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
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
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-text-dark mb-6 tracking-heading">
                Why Choose TWINKL Education?
              </h2>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-8">
                Join a learning community committed to excellence, innovation, and personalized
                education. Our proven track record of student success speaks for itself.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Expert teachers with international credentials',
                  'Multiple curriculum options (Cambridge, IB, French, Tunisian, Canadian)',
                  'Small class sizes for personalized attention',
                  'Modern facilities and learning resources',
                  'Proven track record of academic excellence',
                  'Flexible scheduling options',
                  'Regular progress reports and parent communication',
                  'University preparation and guidance',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="font-body text-text-muted leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/10 p-6 rounded-xl">
                <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                  Need Help Choosing?
                </h3>
                <p className="font-body text-text-muted leading-relaxed mb-4">
                  Our education counselors are available to discuss your needs and help you select
                  the best program for your goals.
                </p>
                <a
                  href="mailto:info@twinkl-education.com"
                  className="text-secondary font-body font-semibold hover:underline"
                >
                  Schedule a consultation
                </a>
              </div>
            </div>

            <div>
              <div className="bg-background-light p-8 rounded-xl">
                <h2 className="text-2xl font-heading font-bold text-text-dark mb-6">
                  Enrollment Form
                </h2>
                <form>
                  <div className="space-y-6">
                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Student Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                        placeholder="Student's full name"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Grade Level
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body">
                        <option>Select grade level</option>
                        <option>Primary (Ages 5-11)</option>
                        <option>Middle School (Ages 11-14)</option>
                        <option>High School (Ages 14-16)</option>
                        <option>A-Level / Baccalaureate (Ages 16-19)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Curriculum Preference
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body">
                        <option>Select curriculum</option>
                        <option>Cambridge International</option>
                        <option>International Baccalaureate</option>
                        <option>French System</option>
                        <option>Tunisian System</option>
                        <option>Canadian System</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Parent/Guardian Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                        placeholder="Parent or guardian name"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="block font-body font-semibold text-text-dark mb-2">
                        Additional Information
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary font-body resize-none"
                        placeholder="Any specific needs, questions, or comments..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-secondary text-white px-6 py-4 rounded-lg font-body font-semibold text-lg hover:bg-secondary/90 transition-colors"
                    >
                      Submit Enrollment Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
