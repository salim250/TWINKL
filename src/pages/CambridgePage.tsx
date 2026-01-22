import { BookOpen, Target, Award } from 'lucide-react';
import { SystemPageLayout } from '../components/SystemPageLayout';

export const CambridgePage = () => {
  const levels = [
    {
      title: 'Primary',
      description: 'Cambridge Primary for ages 5-11, building strong foundations',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'Lower Secondary',
      description: 'Cambridge Lower Secondary for ages 11-14, developing skills',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: 'IGCSE & A-Level',
      description: 'Cambridge IGCSE and A-Levels for ages 14-19, university preparation',
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <SystemPageLayout
      title="Cambridge International"
      subtitle="World-class international education with globally recognized qualifications"
      heroImage="/img/cambridge_school.jpg"
      sideImage="/img/cambridge_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            At TWINKL Education, we follow the Cambridge International curriculum, a globally recognized program designed to develop confident, responsible, and independent learners.
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            The curriculum emphasizes critical thinking, creativity, and practical problem-solving, preparing students for academic success and future opportunities worldwide.
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            Our Cambridge programs offer structured learning pathways, from Primary (Cambridge Primary) to Secondary (IGCSE) and Advanced (AS & A Levels), ensuring a seamless academic journey.
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            With personalized guidance and supportive teaching, we help every student achieve their full potential while fostering a love for learning.
          </p>
        </>
      }
    />
  );
};
