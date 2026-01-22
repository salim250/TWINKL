import { SystemPageLayout } from '../components/SystemPageLayout';

export const FrenchSystemPage = () => {
  return (
    <SystemPageLayout
      title="French System"
      subtitle="Excellence in French education following the national curriculum"
      heroImage="/img/french_school.jpg"
      sideImage="/img/french_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            At TWINKL Education, we are proud to follow the excellence of the French education
            system, known for its strong academic foundation, critical thinking, and structured
            learning approach.
          </p>

          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            Our curriculum emphasizes rigor, discipline, and analytical skills, helping students
            develop a deep understanding of sciences, languages, and humanities.
          </p>

          <p className="text-lg font-body text-text-muted leading-relaxed">
            Through personalized teaching and a supportive environment, we guide learners to
            achieve outstanding results and prepare confidently for national and international
            examinations.
          </p>
        </>
      }
    />
  );
};