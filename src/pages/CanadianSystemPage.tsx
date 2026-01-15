export const CanadianSystemPage = () => {
  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5212706/pexels-photo-5212706.jpeg?auto=compress&cs=tinysrgb&w=1600)',
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
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              The Canadian education system is internationally recognized for its high quality,
              inclusive approach, and emphasis on critical thinking. Our Canadian System program
              follows provincial curricula, offering students a progressive and student-centered
              learning experience that prepares them for global success.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
              Canadian education emphasizes creativity, innovation, and practical application of
              knowledge. Students engage in inquiry-based learning that develops problem-solving
              skills, collaboration, and independent thinking. The curriculum integrates technology
              and real-world applications to make learning relevant and engaging.
            </p>
            <p className="text-lg font-body text-text-muted leading-relaxed">
              Our teachers, trained in Canadian pedagogical approaches, create supportive learning
              environments where students feel valued and empowered to take ownership of their
              education. From elementary through secondary levels, students develop the skills and
              knowledge needed for admission to Canadian universities and success in the global
              workplace.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
