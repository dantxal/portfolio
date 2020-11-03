import React from 'react'

import officePicture from '../assets/office-1200.jpeg'
import socialSplash from '../assets/social-splash@1200.png'
import bibleSplash from '../assets/bible-splash@1200.png'
import {
  Splash,
  OfficePic,
  About,
  RecentTitle,
  Project
} from '../styles/pages/Home'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
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
          technologies specially in the React ecosystem andI strive for
          delivering code that is simple, and yet has great performance.
        </p>
        <p>
          Although I love Typescript, I&apos;m not limited to it. I had some
          experience with C languages in the past and I&apos;m up to working
          with whatever technology is best to delivering the solution.
        </p>
        <p>
          Through studying and working with React and Typescript I&apos;ve
          developed a solid understanding of some advanced concepts such as Data
          Fetching, DOM Manipulation, Higher Order Functions, Inheritance and
          the prototype chain.
        </p>
      </About>

      <RecentTitle>Recent projects</RecentTitle>

      <Project>
        <img src={socialSplash} />
        <h2>Relay Social App</h2>
        <p>
          A social network app, with posts and comments. <br />
          Built with React and Relay on the front-end, for performance and
          scalability.
        </p>
      </Project>

      <Project>
        <img src={bibleSplash} />
        <h2>Free Sacred Bible</h2>
        <p>
          A Bible app with no ads or monetization, I plan to open source it
          soon.
          <br />
          This app is currently only available in the brazilian marketplace.
        </p>
      </Project>
    </Layout>
  )
}

export default Home
