import { SystemPageLayout } from '../components/SystemPageLayout';
import { useTranslation } from '../context/TranslationContext';

export const CanadianSystemPage = () => {
  const { t } = useTranslation();

  return (
    <SystemPageLayout
      title={t('canadian.title')}
      subtitle={t('canadian.subtitle')}
      heroImage="/img/canadian_school.jpg"
      sideImage="/img/canadian_flayer.jpg"
      content={
        <>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('canadian.content.p1')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed mb-6">
            {t('canadian.content.p2')}
          </p>
          <p className="text-lg font-body text-text-muted leading-relaxed">
            {t('canadian.content.p3')}
          </p>
        </>
      }
    />
  );
};