/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

// import porquePublico from 'assets/porquePublico.mp4';

import BannerImg from 'assets/croped_logo.png';
import BannerPremios from 'assets/premiosdesorteio.png';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

import ModalVideo from 'react-modal-video';

export default function BannerWhyBuy() {
  const colors = ['#FBBF3D', '#FA537A'];
  return (
    <section sx={styles.banner} id='por-que-comprar'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h2' sx={styles.banner.heroTitle}>
            Por que comprar?
            {/* <Image src={BannerImg} /> */}
          </Heading>
          {/* <ModalVideo channel='custom' url={porquePublico} autoplay={true} /> */}

          <Text as='p' sx={styles.banner.secondaryText}>
            Por que você pode ganhar <span>milhares de prêmios</span> como esses
            diariamente no <span>Instagram</span>!
          </Text>

          {/* <Button variant='primary'>Explore</Button> */}
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerPremios} alt='banner' />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      // backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      // backgroundImage: `url(${ShapeRight})`,
      // backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    heroTitle: {
      textTransform: 'uppercase',
      fontFamily: 'Kanit',
      fontSize: '3rem',
    },
    secondaryText: {
      fontFamily: 'Arial',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      span: {
        color: '#FA537A',
      },
    },
    // img: {
    //   height: '20vh',
    //   mr: 10,
    //   left: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //   top: 12,
    //   position: 'absolute',
    // },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      alignItems: 'flex-start',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: 'auto',
        width: ['100%', '80%'],
      },
    },
  },
};
