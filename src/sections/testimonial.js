/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Container,
  Heading,
  Text,
  Box,
  Image,
  Link,
  Button,
} from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import { checkoutLink } from '../utils/variables';

import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';
import headerData from 'components/header/header.data';

import ScreenShot01 from 'assets/prova-social-01.jpg';
import ScreenShot02 from 'assets/prova-social-02.jpg';
import ScreenShot03 from 'assets/prova-social-03.jpg';

const data = [
  {
    id: 1,
    title: 'Testing look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4.7,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar3,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar4,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: '',
  containerClass: 'carousel-container',
  customButtonGroup: <ButtonGroup />,
  dotListClass: '',
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: '',
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: '',
  slidesToSlide: 1,
};

const testimonialImages = [ScreenShot01, ScreenShot02, ScreenShot03];

export default function TestimonialCard() {
  const btnName = 'Compre agora';
  const btnURL = checkoutLink;
  // const btnURL = 'https://go.kiwify.com.br/Dz8Kudp';
  return (
    <section id='testemunhos' sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan='' title='O que est??o achando do rob??' />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {testimonialImages.map((item, i) => (
            <Box sx={styles.carouselWrapper.imageBox} key={i}>
              <Image src={item} />
            </Box>
          ))}
        </Carousel>
        <Box sx={styles.btnBox}>
          <Link href={btnURL} variant='default'>
            <Button
              aria-label={btnName}
              sx={styles.btn}
              style={{ fontSize: '2rem' }}
            >
              {btnName}
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '1rem',
    px: '15px',
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      alignItems: 'flex-start',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: 'auto',
        width: ['80%', '80%'],
        borderRadius: '1.5rem',
      },
    },
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  btnBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    mt: '3rem',
  },
  btn: {
    // width: '40%',
    height: 'auto',
    fontSize: '3rem',
    textAlign: 'center',
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
