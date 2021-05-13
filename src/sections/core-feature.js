/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';
import { checkoutLink } from '../utils/variables';
// import Image from 'components/image';

import FeatureThumb from 'assets/facildeusar.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: 'Fácil de usar',
  title: 'Só precisa de um computador',
  description:
    'Sem configurações complicadas. Apenas um computador que seja capaz de acessar o Google Chrome já resolve tudo que o robô precisa para funcionar. Não fique fora dessa.',
  btnName: 'Compre Agora',
  btnURL: { checkoutLink },
};

// btnURL: 'https://app.monetizze.com.br/checkout/PDP172047',
// btnURL: 'https://go.kiwify.com.br/Dz8Kudp',
export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt='Thumbnail' />
          {/* <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt='Shape' />
          </Box> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, null],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [250, 400],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
