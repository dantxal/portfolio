import React from 'react'
import Head from 'next/head'

import officePicture from '../assets/office-1200.jpeg'
import { Container, Content, Splash, OfficePic } from '../styles/pages/Home'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>dantxal</title>
      </Head>

      <Header />

      <Content>
        <Splash>
          <h1>Daniel Teixeira</h1>
          <h2>
            Full-stack developer, React enthusiast self-directed and ambitious
          </h2>
        </Splash>

        <OfficePic src={officePicture} />
      </Content>
    </Container>
  )
}

export default Home
