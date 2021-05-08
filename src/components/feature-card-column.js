/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.card.imageContainer}>
        <Image src={src} altText={altText} sx={styles.img} />
      </Box>
      <Box sx={styles.wrapper}>
        <Heading
          sx={styles.wrapper.heroTitle}
          dangerouslySetInnerHTML={{ __html: `${title}` }}
        />
        <Text sx={styles.wrapper.secondaryText}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    width: '95%',
    display: 'flex',
    alignItems: 'center',

    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
  },
  imageContainer: {
    display: 'block',
    textAlign: 'center',
  },
  img: {
    mx: 'auto',
    mb: -2,
    width: '80%',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    heroTitle: {
      textTransform: 'uppercase',
      fontFamily: 'Kanit',
      fontSize: '2rem',
      lineHeight: 1.4,
      mt: '1.5rem',
      pt: '1rem',
      pb: '1rem',
    },
    secondaryText: {
      fontFamily: 'Arial',
      fontSize: '1.5rem',
      lineHeight: '2.3',
    },
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
    span: {
      color: '#FA537A',
      fontWeight: 'bold',
    },
  },
};
