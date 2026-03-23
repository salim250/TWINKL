import { BookOpen, Target, Award } from 'lucide-react';
import { SystemPageLayout } from '../components/SystemPageLayout';
import { useTranslation } from '../context/TranslationContext';
import { trackEvent } from '../helpers/analytics';
import { useEffect } from 'react';

export const CambridgePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    trackEvent('system_view', 'engagement', 'cambridge');
  }, []);

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
      title={t('cambridge.title')}
      subtitle={t('cambridge.subtitle')}
      heroImage="/img/cambridge_school.jpg"
      sideImage="/img/cambridge_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('cambridge.content.p1')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('cambridge.content.p2')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('cambridge.content.p3')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('cambridge.content.p4')}
          </p>
        </>
      }
    />
  );
};