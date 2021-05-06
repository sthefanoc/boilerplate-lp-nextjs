/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';

function Whatsapp() {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=5511987998135&text=Ol%C3%A1!%20Gostaria%20de%20comprar%20minha%20licen%C3%A7a%20para%20rob%C3%B4%20premiado!'
      sx={styles.float}
      target='_blank'
    >
      <i className='fa fa-whatsapp' sx={styles.myFloat}></i>
    </a>
  );
}

export default Whatsapp;

const styles = {
  float: {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#25d366',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: '30px',
    boxShadow: '2px 2px 3px #999',
    zIndex: '100',
  },
  myFloat: {
    marginTop: '16px',
  },
};
