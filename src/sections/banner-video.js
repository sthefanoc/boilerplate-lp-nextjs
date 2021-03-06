import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Link,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { IoIosPlay } from 'react-icons/io';

import { checkoutLink } from '../utils/variables';

import ServiceThumb from 'assets/robopremiado-video.jpg';
import shapePattern from 'assets/shape-pattern1.png';

import Smart from 'assets/services/smart.svg';
import Secure from 'assets/services/secure.svg';

import BannerImg from 'assets/logo_dinheiro.png';

const data = {
  subTitle: 'Sobre nós',
  title: 'Por que criar o robô premiado?',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'Estudos no Instagram',
      title: 'Sorteios no Instagram',
      text:
        'Depois de anos de desenvolvimento e estudos sobre sorteios no Instagram nossa equipe percebeu que seria possível criar um robô que pudesse aumentar nossas chances de ganhar alguns dos milhares de sorteios que acontecem diariamente.',
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Nossa missão',
      title: 'Nossa missão',
      text:
        'O principal objetivo é criar chances reais de ganhar qualquer sorteio, desde o menos concorrido até o mais disputado.',
    },
  ],
};

export default function BannerVideo() {
  const [videoWatched, setVideoWatched] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const cleanPage = () => {
    let sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id == 'banner-video' || sections[i].id == 'home') {
        console.log('eeeeeeeeeee');
      } else {
        sections[i] ? (sections[i].style.display = 'none') : '';
      }
    }
    document.querySelector('#banner-logo').style.display = 'none';
    document.querySelector('#buy-now-btn').style.display = 'none';
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    Array.from(header.querySelectorAll('a')).map((item) => {
      item.style.display = 'none';
    });
    Array.from(footer.querySelectorAll('a')).map((item) => {
      item.style.display = 'none';
    });
    Array.from(document.querySelectorAll('.drawer-link')).map((item) => {
      item.style.display = 'none';
    });
  };

  const showPage = () => {
    console.log('show!');
    window.localStorage.setItem('robopremiado-video', 'true');
    let sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id == 'banner-video' || sections[i].id == 'home') {
        console.log('eeeeeeeeeee');
      } else {
        sections[i] ? (sections[i].style.display = null) : '';
      }
    }
    document.querySelector('#banner-logo').style.display = null;
    document.querySelector('#buy-now-btn').style.display = null;
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    Array.from(header.querySelectorAll('a')).map((item) => {
      item.style.display = null;
    });
    Array.from(footer.querySelectorAll('a')).map((item) => {
      item.style.display = null;
    });
    Array.from(document.querySelectorAll('.drawer-link')).map((item) => {
      item.style.display = null;
    });
  };

  useEffect(() => {
    if (
      window.localStorage.getItem('robopremiado-video') == 'false' ||
      window.localStorage.getItem('robopremiado-video') == null
    ) {
      cleanPage();
    }
  }, []);

  const triggerCount = () => {
    setTimeout(() => {
      showPage();
      // setVideoWatched({ videoWatched: true });
      // if (videoWatched) {
      //   showPage();
      // }
    }, 120 * 1000);
  };

  const handleVideoPlaying = () => {
    document.querySelector('.vp-controls-wrapper').classList.add('hidden');
  };
  const checkVideoDuration = () => {
    const video = document.querySelector('video');
    console.log(video.currentTime);
    return video.currentTime;
  };
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
    triggerCount();
    // let iframe = document.querySelector('iframe');
    // iframe.contentWindow.document.querySelector(
    //   '.vp-controls-wrapper'
    // ).style.display = 'none';
    // handleVideoPlaying();
  };
  const btnName = 'Compre agora';
  const btnURL = checkoutLink;
  // const btnURL = 'https://go.kiwify.com.br/Dz8Kudp';

  return (
    <section sx={{ variant: 'section.services' }} id='banner-video'>
      <Container sx={styles.containerBox} style={{ justifyContent: 'center' }}>
        <Box sx={styles.thumbnail}>
          <Image src={ServiceThumb} alt='Thumbnail' />
          <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            aria-label='Play Button'
          >
            <span>
              <IoIosPlay />
            </span>
          </Button>
          {/* <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='shape' />
          </Box> */}
        </Box>
        {/* <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />
          <Grid sx={styles.grid}>
            {data.features.map((feature) => (
              <Box sx={styles.card} key={feature.id}>
                <Image
                  src={feature.imgSrc}
                  alt={feature.altText}
                  sx={styles.icon}
                />
                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{feature.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{feature.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box> */}
      </Container>
      <ModalVideo
        channel='vimeo'
        isOpen={videoOpen}
        videoId='546245610'
        autoplay={true}
        onClose={() => setVideoOpen(false)}
      />
      <Box sx={styles.btnBox}>
        <Link href={btnURL} variant='default'>
          <Button
            id='buy-now-btn'
            aria-label={btnName}
            sx={styles.btn}
            style={{ fontSize: '2rem' }}
          >
            {btnName}
          </Button>
        </Link>
      </Box>
      <Box sx={styles.imageBox} id='banner-logo'>
        <Image src={BannerImg} alt='banner' />
      </Box>
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
    // pt: [7, null, null, null, null, 7],
    pt: 0,
  },
  thumbnail: {
    // mr: ['auto', null, null, 6, 60, 85],
    mr: 'auto',
    order: [2, null, null, 0],
    // ml: ['auto', null, null, 0],
    ml: 'auto',
    display: 'inline-flex',
    position: 'relative',
    alignItems: 'flex-start',
    '> img': {
      position: 'relative',
      borderRadius: '1rem',
      zIndex: 1,
      // height: [310, 'auto'],
      height: 'auto',
      maxWidth: '100%',
      width: '50rem',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
  btnBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    mt: '2rem',
  },
  btn: {
    // width: '40%',
    height: 'auto',
    fontSize: '3rem',
    textAlign: 'center',
  },
  imageBox: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    textAlign: 'center',
    display: 'inline-flex',
    width: '100%',
    alignItems: 'flex-start',
    // mb: [0, null, -6, null, null, '-40px', null, -3],
    // mt: 10,
    mb: [4, 0],
    mt: 10,

    img: {
      position: 'relative',
      height: 'auto',
      width: '30%',
      top: '-3rem',
      // border: '5px solid red',
    },
  },
};
