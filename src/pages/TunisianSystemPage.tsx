export const TunisianSystemPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(../../../assets/img/tunisian_school.jpg)',
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
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="../../../assets/img/tunisian_flyer.jpg"
                alt="Tunisian System Flyer"
                className="w-full max-w-md rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                At TWINKL Education, we provide programs aligned with the Tunisian national curriculum, ensuring students gain a strong academic foundation while developing critical thinking and problem-solving skills.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
                Our approach emphasizes core subjects such as Mathematics, Sciences, Languages, and Humanities, preparing learners for national examinations and higher education opportunities.
              </p>
              <p className="text-lg font-body text-text-muted leading-relaxed">
                We combine structured teaching with personalized support to help students excel academically, grow personally, and build the skills needed for future success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
