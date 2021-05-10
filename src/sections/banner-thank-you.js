/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';

// import porquePublico from 'assets/porquePublico.mp4';

import BannerImg from 'assets/croped_logo.png';

export default function BannerThankYou() {
  const colors = ['#FBBF3D', '#FA537A'];
  return (
    <section sx={styles.banner} id='sobre-nos'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h2' sx={styles.banner.heroTitle}>
            Parabéns por adquirir o Robô Premiado!
            <Image src={BannerImg} />
          </Heading>
          {/* <ModalVideo channel='custom' url={porquePublico} autoplay={true} /> */}

          <Text as='p' sx={styles.banner.secondaryText}>
            Você irá receber todas as informações necessárias no e-mail
            cadastrado
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
      width: ['70%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
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
      mt: '3rem',
      fontFamily: 'Arial',
      fontSize: '1.5rem',
    },
    img: {
      height: '20vh',
      ml: 10,
      right: ['-3rem', '-2rem', '0rem', '2rem', '10rem'],
      bottom: '8rem',
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
