import { SystemPageLayout } from "../components/SystemPageLayout";

export const TunisianSystemPage = () => {
  return (
    <SystemPageLayout
      title="Tunisian System"
      subtitle="Quality education aligned with Tunisian national standards"
      heroImage="/img/tunisian_school.jpg"
      sideImage="/img/tunisian_flyer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            At TWINKL Education, we provide programs aligned with the Tunisian national curriculum, ensuring students gain a strong academic foundation while developing critical thinking and problem-solving skills.
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            Our approach emphasizes core subjects such as Mathematics, Sciences, Languages, and Humanities, preparing learners for national examinations and higher education opportunities.
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed">
            We combine structured teaching with personalized support to help students excel academically, grow personally, and build the skills needed for future success.
          </p>
        </>
      }
    />
  );
};
