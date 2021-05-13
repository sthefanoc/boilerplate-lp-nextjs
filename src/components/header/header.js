/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import { checkoutLink } from '../../utils/variables';
import Logo from 'components/logo';
import LogoDark from 'assets/robopremiado-logo.png';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id='header'>
      <Container sx={styles.container}>
        <Logo sx={styles.logo} src={LogoDark} />
        <Flex as='nav' sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass='active'
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={`header-${i}`}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        {/* https://app.monetizze.com.br/checkout/PDP172047 */}
        {/* https://go.kiwify.com.br/Dz8Kudp */}
        <a href={checkoutLink}>
          <Button
            className='donate__btn'
            variant='secondary'
            aria-label='Get Started'
            sx={styles.container.mainBtn}
          >
            Compre Agora
          </Button>
        </a>

        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#FFF',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mainBtn: {
      backgroundColor: 'primary',
      color: '#FFF',
      transition: 'all 0.25s',
      '&:hover': {
        fontSize: 3,
      },
    },
  },
  logo: {
    maxWidth: '6rem',
    height: 'auto',
    alignItems: 'flex-start',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
