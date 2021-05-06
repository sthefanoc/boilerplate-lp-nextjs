/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

// import porquePublico from 'assets/porquePublico.mp4';

import BannerImg from 'assets/croped_logo.png';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

import ModalVideo from 'react-modal-video';

export default function BannerWhy() {
  const colors = ['#FBBF3D', '#FA537A'];
  return (
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' sx={styles.banner.heroTitle}>
            Então por que abrir ao público?
            <Image src={BannerImg} />
          </Heading>
          {/* <ModalVideo channel='custom' url={porquePublico} autoplay={true} /> */}

          <Text as='p' sx={styles.banner.secondaryText}>
            Durante a nossa longa pesquisa e fase de teste, constatamos que
            seria impossível participar dos milhares de sorteios que acontecem
            diariamente no Instagram. O grupo que participou do período de teste
            obteve resultados excelentes utilizando o robô, então decidimos
            abrir ao público e dar chances reais para que as pessoas também
            possam ganhar esses sorteios.
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
    pt: 10,
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
    img: {
      height: '20vh',
      ml: 10,
      right: 10,
      position: 'absolute',
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
