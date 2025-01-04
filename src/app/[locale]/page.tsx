import styles from './page.module.scss';
import { translation } from '@/utils/localization/server';
import { LocaleTypes } from '@/utils/localization/setting';
import ChangeLocale from '@/components/ChangeLocale/ChangeLocale';

interface PageProps {
  params: { locale: LocaleTypes };
}

export default async function Home({ params: { locale } }: PageProps) {
  const { t } = await translation(locale, ['about', 'common']);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('hello')}</h1>
        <p>{t('about:description')}</p>
        <ChangeLocale />
      </main>
    </div>
  );
}
