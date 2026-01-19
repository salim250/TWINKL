export const FrenchSystemPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(/img/french_school.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            French System
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Excellence in French education following the national curriculum
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                At TWINKL Education, we are proud to follow the excellence of the French education system, known for its strong academic foundation, critical thinking, and structured learning approach.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                Our curriculum emphasizes rigor, discipline, and analytical skills, helping students develop a deep understanding of sciences, languages, and humanities.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed">
                Through personalized teaching and a supportive environment, we guide learners to achieve outstanding results and prepare confidently for national and international examinations. The French system at TWINKL Education encourages intellectual curiosity, cultural awareness, and lifelong learning.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/img/french_flayer.jpg"
                alt="French Flyer"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
