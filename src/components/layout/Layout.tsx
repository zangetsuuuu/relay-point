import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import type { LayoutProps } from '@/types';
import { Header, Footer } from '@/components/layout';

export const Layout = ({
  title = import.meta.env.VITE_APP_TITLE,
  description = import.meta.env.VITE_APP_DESCRIPTION,
  children,
}: LayoutProps) => {
  const { pathname } = useLocation();
  const url = `${import.meta.env.VITE_APP_BASE_URL}${pathname}`;

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
      </Helmet>
      <div className="container relative max-w-screen-sm mx-auto min-h-svh sm:min-h-screen">
        <Header />
        <main className='p-6'>{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
