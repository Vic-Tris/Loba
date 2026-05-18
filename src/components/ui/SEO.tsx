import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | Loba Consulting</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Loba Consulting`} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
