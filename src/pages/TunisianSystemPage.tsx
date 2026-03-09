import { SystemPageLayout } from '../components/SystemPageLayout';
import { useTranslation } from '../context/TranslationContext';

export const TunisianSystemPage = () => {
  const { t } = useTranslation();

  return (
    <SystemPageLayout
      title={t('tunisian.title')}
      subtitle={t('tunisian.subtitle')}
      heroImage="/img/tunisian_school.jpg"
      sideImage="/img/tunisian_flyer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('tunisian.content.p1')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('tunisian.content.p2')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed">
            {t('tunisian.content.p3')}
          </p>
        </>
      }
    />
  );
};