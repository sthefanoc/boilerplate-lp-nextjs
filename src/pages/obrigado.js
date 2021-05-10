import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';

import BannerThankYou from '../sections/banner-thank-you';

export default function ThankYouPage() {
  useEffect(() => {
    try {
      let btn = document.querySelector('button');
      btn.style.display = 'none';
    } catch {}
    try {
      let footerLinks = document.querySelector('footer').querySelectorAll('a');
      Array.from(footerLinks).map((item) => {
        if (item.href.includes('obrigado')) {
          item.href = item.href.replace('obrigado', '');
        }
      });
    } catch {
      console.log('footer links not found.');
    }
    try {
      let headerLinks = document.querySelector('nav').querySelectorAll('a');
      Array.from(headerLinks).map((item) => {
        item.style.display = 'none';
      });
    } catch {
      console.log('header links not found');
    }
    try {
      document
        .querySelector('#__next-prerender-indicator')
        .classList.add('hidden');
    } catch {
      console.log('did not find next btn');
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title='Robô Premiado | Ganhe Sorteios' />
        <BannerThankYou />
      </Layout>
    </ThemeProvider>
  );
}
