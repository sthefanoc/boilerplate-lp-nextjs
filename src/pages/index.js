import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BannerVideo from '../sections/service-section-banner';
import BannerAbout from '../sections/banner-about-us';
import BannerWhy from '../sections/banner-why';
import BannerBenefits from '../sections/banner-benefits';
import StateSwitch from '../components/helpers/state-switch';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title='Robô Premiado | Ganhe Sorteios' />
        <Banner />
        <BannerVideo />
        <BannerAbout />
        <BannerWhy />
        <BannerBenefits />
        <StateSwitch />
        {/* <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard /> */}
      </Layout>
    </ThemeProvider>
  );
}
