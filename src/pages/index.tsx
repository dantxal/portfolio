import React from 'react'
import Head from 'next/head'

import officePicture from '../assets/office-1200.jpeg'
import {
  Container,
  Content,
  Splash,
  OfficePic,
  About,
  RecentTitle,
  Project
} from '../styles/pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Full-stack developer, React enthusiast self-directed and ambitious"
        />
        <title>dantxal</title>
      </Head>

      <Content>
        <Header />
        <Splash>
          <h1>Daniel Teixeira</h1>
          <h2>
            Full-stack developer, React enthusiast self-directed and ambitious
          </h2>
        </Splash>

        <OfficePic src={officePicture} />

        <About>
          <p>
            I&apos;m a developer that loves working with bleeding edge
            technologies specially in the React ecosystem.
          </p>
          <p>
            I strive for delivering code that is simple, and yet has great
            performance.
          </p>
          <p>
            Although I love Typescript, I&apos;m not limited to it. I had some
            experience with C languages in the past and I&apos;m up to working
            with whatever technology is best to delivering the solution.
          </p>
        </About>

        <RecentTitle>Recent projects</RecentTitle>

        <Project>
          <img src={officePicture} alt={officePicture} />
          <h2>GraphQL Social App</h2>
          <p>
            This project was developed to explore the performance of Relay
            library. It turned out very fast and scalable.
          </p>
        </Project>

        <Project>
          <img src={officePicture} alt={officePicture} />
          <h2>GraphQL Social App</h2>
          <p>
            This project was developed to explore the performance of Relay
            library. It turned out very fast and scalable.
          </p>
        </Project>

        <Project>
          <img src={officePicture} alt={officePicture} />
          <h2>GraphQL Social App</h2>
          <p>
            This project was developed to explore the performance of Relay
            library. It turned out very fast and scalable.
          </p>
        </Project>

        <Footer />
      </Content>
    </Container>
  )
}

export default Home
