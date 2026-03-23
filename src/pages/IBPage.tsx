import { BookOpen, Target, Award } from 'lucide-react';
import { SystemPageLayout } from '../components/SystemPageLayout';
import { useTranslation } from '../context/TranslationContext';
import { trackEvent } from '../helpers/analytics';
import { useEffect } from 'react';

export const IBPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    trackEvent('system_view', 'engagement', 'IB');
  }, []);

  return (
    <SystemPageLayout
      title={t('ib.title')}
      subtitle={t('ib.subtitle')}
      heroImage="/img/international_school.jpg"
      sideImage="/img/international_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('ib.content.p1')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('ib.content.p2')}
          </p>
        </>
      }
    />
  );
};