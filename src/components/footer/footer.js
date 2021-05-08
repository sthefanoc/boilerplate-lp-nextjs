/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
// import FooterLogo from 'assets/logo.svg';
import FooterLogo from 'assets/logo.png';
import Whatsapp from 'components/helpers/whatsapp';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Whatsapp />
        <Box sx={styles.footer.footerBottomArea}>
          <Link path='/'>
            <Image src={FooterLogo} alt='Logo' style={{ height: '12rem' }} />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.disclaimer} style={{ fontStyle: 'italic' }}>
            Os dados e informações apresentadas na página são relatados por
            nossos clientes. O robô premiado tem a função de potencializar as
            suas chances, mas não garante que o resultado será igual a todos. Os
            resultados do produto podem variar por fatores externo e individuais
            dos usuários e o resultado é de responsabilidade dele. As
            informações apresentadas foram fornecidas e autorizadas por nossos
            clientes, destinada a passar algumas das experiências dos usuários.
            Não possuímos vínculos com páginas no Facebook e com outros produtos
            de natureza similar.
          </Text>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} Robô Premiado
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    disclaimer: {
      fontSize: '0.8rem',
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
