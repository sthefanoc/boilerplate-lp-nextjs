import React from 'react';
import Head from 'next/head';

import { siteUrl } from '../utils/variables';

import image from '../assets/robopremiado.png';

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
      property: `og:image`,
      content: image,
    },
    {
      property: `og:url`,
      content: siteUrl,
    },
    {
      property: `og:site_name`,
      content: 'Robô Premiado',
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
