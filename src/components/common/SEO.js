import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Cladach Cottage, Port Charlotte, Isle of Islay',
  title: 'Cladach Cottage',
  url: 'https://www.cladachcottage.co.uk',
  keywords: ['port charlotte', 'islay', 'accomodation', 'self catering', 'holiday', 'vacation', 'scotland'],
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
