import Router from 'next/router';
import React, { useEffect } from 'react';
import { GTMPageView } from '../utils/gtm';

import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'components/helpers/helper.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return <Component {...pageProps} />;
}
