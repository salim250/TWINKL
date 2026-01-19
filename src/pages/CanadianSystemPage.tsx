export const CanadianSystemPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(/img/canadian_school.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Canadian System
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Innovative Canadian curriculum promoting inquiry-based learning
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                At TWINKL Education, we offer programs inspired by the Canadian education system, known for its student-centered approach and emphasis on holistic development.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                The curriculum encourages critical thinking, creativity, collaboration, and problem-solving, helping students develop strong academic skills while fostering personal growth.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed">
                Our Canadian-inspired programs cover core subjects, languages, arts, and sciences, preparing learners for higher education and equipping them with the knowledge and skills needed to succeed in a global environment.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/canadian_flayer.jpg"
                alt="Canadian Flyer"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
