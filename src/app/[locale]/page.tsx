import styles from './page.module.scss';
import { translation } from '@/utils/localization/server';
import { LocaleTypes } from '@/utils/localization/setting';

interface PageProps {
  params: { locale: LocaleTypes };
}

export default async function Home({ params: { locale } }: PageProps) {
  const { t } = await translation(locale, 'common');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('hello')}</h1>
        <div className={styles.ctas}>
          <h1></h1>
          <button className={styles.primary}>Deploy now</button>
          <button className={styles.secondary}>Read our docs</button>
        </div>
      </main>
    </div>
  );
}
