import React from 'react';
import Head from 'next/head';

import image from '../../public/robopremiado.png';

export default function SEO({
  description = 'Página oficial do melhor robô de sorteios no Instagram! Ganhe sorteios esnquanto seu computador faz o trabalho.',
  author = 'SthefanoC',
  meta,
  title = 'Robô Premiado | Ganhe sorteios sem esforço',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `og:image`,
      content: image,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
};
