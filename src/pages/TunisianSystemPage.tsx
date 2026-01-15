export const TunisianSystemPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
            Tunisian System
          </h1>
          <p className="text-xl font-body leading-relaxed">
            Quality education aligned with Tunisian national standards
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              Our Tunisian System program provides comprehensive support for students following the
              Tunisian national curriculum. We offer expert tutoring aligned with the Ministry of
              Education's requirements, helping students excel in their studies and prepare for the
              Baccalauréat examination.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              With deep understanding of the Tunisian educational framework, our qualified teachers
              deliver targeted instruction that addresses the specific needs of Tunisian students.
              We cover all subjects including Arabic, French, Mathematics, Sciences, and Social
              Studies, ensuring students build a strong foundation for academic success.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed">
              Whether students need support with daily homework, exam preparation, or comprehensive
              subject mastery, our personalized approach helps them achieve their full potential
              within the Tunisian education system. We combine traditional values with modern
              teaching methodologies to create an effective learning experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
