export const FrenchSystemPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1600)',
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
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              The French education system is renowned worldwide for its academic rigor and
              comprehensive approach to learning. Our French system program follows the French
              national curriculum, providing students with a structured and demanding educational
              pathway that prepares them for the French Baccalauréat and beyond.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              Students benefit from a well-rounded education that emphasizes critical thinking,
              analytical skills, and a deep understanding of core subjects. The curriculum is
              designed to develop intellectual curiosity and academic excellence while fostering
              cultural awareness and linguistic proficiency in French.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed">
              Our experienced native French-speaking teachers deliver authentic instruction aligned
              with French Ministry of Education standards. From École Primaire through Lycée,
              students receive a world-class education that opens doors to French universities and
              international opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
