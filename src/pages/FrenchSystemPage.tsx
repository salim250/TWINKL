import { SystemPageLayout } from '../components/SystemPageLayout';
import { useTranslation } from '../context/TranslationContext';

export const FrenchSystemPage = () => {
  const { t } = useTranslation();

  return (
    <SystemPageLayout
      title={t('french.title')}
      subtitle={t('french.subtitle')}
      heroImage="/img/french_school.jpg"
      sideImage="/img/french_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('french.content.p1')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('french.content.p2')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed">
            {t('french.content.p3')}
          </p>
        </>
      }
    />
  );
};