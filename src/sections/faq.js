/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: 'PERGUNTAS FREQUENTES',
  rows: [
    {
      title: 'Preciso informar a minha senha e fornecer informações pessoais? ',
      content:
        'Não, não precisamos de senha e também não teremos acesso as suas informações pessoais com o robô.',
    },
    {
      title:
        'Vou poder usar a minha conta no Instagram enquanto o robô está sendo utilizado?',
      content: 'Sim, você pode usar normalmente a sua conta no Instagram.',
    },
    {
      title: 'Como vou saber utilizar o Robô Premiado?',
      content:
        'Você terá acesso a um tutorial em vídeo aulas, onde iremos explicar como utilizar o robô premiado da forma correta. O tutorial vai estar disponível 24 horas por dia. ',
    },
    {
      title: 'Em caso de dúvidas ou problemas, vou ter ajuda?',
      content:
        'Sim, temos um sistema de suporte de segunda a sábado das 09h às 18h através do WhatsApp ou e-mail.',
    },
    {
      title: 'Posso compartilhar o robô com outra pessoa?',
      content:
        'Não, o sistema que desenvolvemos não permite acesso mutou. Cada usuário tem uma chave de acesso e se o sistema detectar dois acessos simultâneos estará violando uma das nossas diretrizes e haverá um bloqueio. Se acontecer um bloqueio na chave de acesso de um usuário o nosso robô irá parar as suas funções automaticamente.',
    },
    {
      title: 'Corro o Risco de perder o meu Instagram?',
      content:
        'Utilizando o robô premiado da forma correta e orientada por nós e desrespeitando as diretrizes do Instagram não haverá nenhum problema com a sua conta.',
    },
  ],
};

const styles = {
  fontFamily: 'Arial',
  bgColor: 'transparent',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: '#ededed',
  arrowColor: 'gray',
  rowTitleTextSize: '1.5rem',
  rowContentTextSize: '1.2rem',
  titleTextSize: '3rem',
};

const allStyles = {
  faq: {
    pt: '3rem',
    display: 'flex',
    alignContent: 'center',
    width: '100%',
    fontFamily: 'Arial',
    alignContent: 'center',
    justifyContent: 'center',

    h2: {
      mt: ['4rem'],
      bb: '4rem',
      textAlign: 'center',
      fontFamily: 'Kanit',
      fontSize: '3rem',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontSize: '1.5rem',
    },
    textBox: {
      mt: '2rem',
      color: '#ededed',
      fontStyle: 'italic',
    },
  },
};

const config = {
  animate: true,
  //   arrowIcon: "V",
  tabFocus: true,
};

// const addColors = () => {
//   let openedQuestions = document.querySelectorAll('.row-title.expanded');
//   let closedQuestions = document.querySelectorAll('.row-title.closed');
//   openedQuestions.forEach((item) => {
//     item.style.color = 'red';
//   });
// };

export default function FaqComponent() {
  return (
    <section sx={allStyles.faq} id='faq'>
      <Container sx={allStyles.faq.container}>
        <Faq data={data} styles={styles} config={config} />
        <Text sx={allStyles.faq.textBox}>
          Ainda tem dúvidas? Fale com nosso suporte{' '}
          <a
            href='http://bit.ly/vendas-robo-premiado'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: '#FBBF3D' }}
          >
            aqui.
          </a>
        </Text>
      </Container>
    </section>
  );
}
