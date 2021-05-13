/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function BannerVideo() {
  const colors = ['#FBBF3D', '#FA537A'];
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' sx={styles.banner.heroTitle}>
            Robô Premiado
          </Heading>

          <Text as='p' sx={styles.banner.secondaryText}>
            Descubra agora mesmo
          </Text>
          <Text as='p' sx={styles.banner.secondaryText}>
            <b>como ganhar</b>
          </Text>
          <Text as='p' sx={styles.banner.secondaryText}>
            os melhores <span>sorteios</span> no instagram
          </Text>
          <Text as='div' sx={styles.banner.secondaryText}>
            <p>Assista ao vídeo para liberar a página</p>
          </Text>

          {/* <Button variant='primary'>Explore</Button> */}
        </Box>
        {/* <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner' />
        </Box> */}
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
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
      fontFamily: 'Fredoka One',
      fontSize: [10, 70],
      background: '-webkit-linear-gradient(#FF0000, #FFFF00)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    secondaryText: {
      fontFamily: 'Kanit',
      textTransform: 'uppercase',
      fontSize: [6, 40],
      b: {
        color: '#FA537A',
        fontSize: [8, 50],
      },
      span: {
        color: '#FA537A',
      },
      div: {
        fontSize: [4, 35],
      },
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
        ml: 10,
        mr: 10,
      },
    },
  },
};
