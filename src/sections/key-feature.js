/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import SoComputador from 'assets/so-computador.jpg';
import FacilUsar from 'assets/facil-de-usar.png';
import SuporteDedicado from 'assets/suporte-dedicado.png';
import Funciona24h from 'assets/funciona-24h.png';
import FeatureCard from 'components/feature-card';

const data = [
  // {
  //   id: 1,
  //   imgSrc: Performance,
  //   altText: 'Só precisa de um computador',
  //   title: 'Só precisa de um computador',
  //   text:
  //     'Sem necessidade de sistemas complicados. Apenas um computador com acesso a internet.',
  // },
  {
    id: 2,
    imgSrc: FacilUsar,
    altText: 'Fácil de usar',
    title: '<span>Fácil</span> de usar',
    text:
      'Em poucos minutos, com as instruções em vídeo de nossos especialistas você já vai dominar a ferramenta.',
  },
  {
    id: 3,
    imgSrc: SuporteDedicado,
    altText: 'Suporte dedicado',
    title: '<span>Suporte</span> dedicado',
    text:
      'Sem dores de cabeça! Nosso time está preparado para sanar suas dúvidas e te ajudar a ganhar sorteios!',
  },
  {
    id: 4,
    imgSrc: Funciona24h,
    altText: 'Funciona 24h',
    title: 'Funciona <span>24h</span>',
    text:
      'Já pensou em ganhar sorteios dormindo? O Robô Premiado funciona 24 horas por dia!.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='diferenciais'>
      <Container>
        <SectionHeader
          slogan=''
          title='Diferenciais'
          // sx={styles.grid.heroTitle}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <Box sx={styles.grid.imageBox}>
          <Image src={SoComputador} sx={styles.grid.imageBox.smallImg} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
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
        width: ['100%', '80%'],
        // maxWidth: ['100%', '70%'],
        maxWidth: '100%',
      },
    },
    // heroTitle: {
    //   textTransform: 'uppercase',
    //   fontFamily: 'Kanit',
    //   fontSize: '2rem',
    //   color: 'red',
    // },
    // secondaryText: {
    //   fontFamily: 'Arial',
    //   fontSize: '1.5rem',
    // },
  },
};
