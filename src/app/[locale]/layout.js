import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "@/components/header/header";

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
      <html lang={locale}>
      <body>
      <Header />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}
