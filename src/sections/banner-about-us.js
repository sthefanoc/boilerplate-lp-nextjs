/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function BannerAbout() {
  const colors = ['#FBBF3D', '#FA537A'];
  return (
    <section sx={styles.banner} id='sobre-nos'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' sx={styles.banner.heroTitle}>
            Sobre nós
          </Heading>

          <Text as='p' sx={styles.banner.secondaryText}>
            Depois de anos de desenvolvimento e estudos sobre sorteios no
            Instagram, nossa equipe percebeu que seria possível criar um robô
            que pudesse aumentar nossas chances de ganhar alguns dos milhares de
            sorteios que acontecem diariamente. O principal objetivo é criar
            chances reais de ganhar qualquer sorteio, desde o menos concorrido
            até o mais disputado.
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
    pt: 0,
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
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
