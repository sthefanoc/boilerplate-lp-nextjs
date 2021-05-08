/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

// import porquePublico from 'assets/porquePublico.mp4';

import aviao from 'assets/aviao.png';
import grafico from 'assets/grafico.png';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

import ModalVideo from 'react-modal-video';

export default function BannerBenefits() {
  const colors = ['#FBBF3D', '#FA537A'];
  return (
    <section sx={styles.banner} id='beneficios'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading
            as='h2'
            sx={styles.banner.heroTitle}
            style={{ marginBottom: '2rem' }}
          >
            Benefícios
          </Heading>
          {/* <ModalVideo channel='custom' url={porquePublico} autoplay={true} /> */}

          <Box sx={styles.banner.imageBox}>
            <Image src={aviao} />
          </Box>
          <Box sx={styles.banner.imageBox}>
            <Image src={grafico} sx={styles.banner.imageBox.smallImg} />
          </Box>

          {/* <Heading
            as='h3'
            sx={styles.banner.heroTitle}
            style={{ marginTop: '10rem', fontSize: '2.5rem' }}
          >
            Só precisa de um computador.
          </Heading> */}

          {/* <x1 variant='primary'>Explore</x1> */}
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
    pt: 2,
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
      width: ['100%', '90%', '535px', null, '80%', '80%', '80%', '80%'],
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
      alignItems: 'flex-start',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      smallImg: {
        mt: ['2rem', '3rem'],
        width: ['45%', '50%'],
      },
      img: {
        position: 'relative',
        // height: [245, 'auto'],
        // height: '50vh',
        // maxWidth: '100%',
        height: 'auto',
        // maxWidth: ['100%', '70%'],
        maxWidth: '100%',
      },
    },
  },
};
