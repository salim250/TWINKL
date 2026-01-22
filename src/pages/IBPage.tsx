import { BookOpen, Target, Award } from 'lucide-react';
import { SystemPageLayout } from '../components/SystemPageLayout';

export const IBPage = () => {
  return (
    <SystemPageLayout
      title="International Baccalaureate"
      subtitle="Comprehensive IB programs fostering critical thinking and global citizenship"
      heroImage="/img/international_school.jpg"
      sideImage="/img/international_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            At TWINKL Education, we proudly support the principles of the International Baccalaureate (IB) — a world-class academic framework that inspires students to become confident, compassionate, and globally minded learners.
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            The IB program encourages critical thinking, creativity, and international awareness, empowering students to explore ideas, question assumptions, and engage with real-world challenges. Through an inquiry-based approach, learners develop the skills and mindset needed to succeed in higher education and beyond.
          </p>
        </>
      }
    />
  );
};
