import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
      <div>
        <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      </div>
  );
}