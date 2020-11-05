import Link from 'next/link'
import Image from 'next/image'
import loadable from '@loadable/component'

import {
  Splash,
  OfficePic,
  About,
  RecentTitle,
  Project
} from '../styles/pages/Home'

const Layout = loadable(() => import('../components/Layout'))

const Home: React.FC = () => {
  return (
    <Layout>
      <Splash>
        <h1>Daniel Teixeira</h1>
        <h2>
          Full-stack developer, React enthusiast self-directed and ambitious
        </h2>
      </Splash>

      <OfficePic
        src="/assets/office-1200.jpeg"
        width={1200}
        height={600}
        alt="picture of a desk's top with one monitor showing an IDE interface and the other one some white content, to the right there is an open computer case with running hardware inside, there are speakers a keyboard and a cup with some latte drink"
      />

      <About>
        <p>
          I&apos;m a developer that loves working with bleeding edge
          technologies specially in the React ecosystem and I strive for
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
        <Image
          src="/assets/social-splash@1200.png"
          width={1200}
          height={600}
          alt="banner with the logo of Social App, information about features and a picture of the app. The features listed on the left are React plus Relay, real-time updates, graphql client and server, pagination in the Relay style, infinite scrolling, React Suspense and Error Boundary implementation"
        />
        <h2>Relay Social App</h2>
        <p>
          A social network app, with posts and comments. <br />
          Built with React and Relay on the front-end, for performance and
          scalability.
        </p>
        <Link href="/social">
          <a>VIEW PROJECT ➤ </a>
        </Link>
      </Project>

      <Project>
        <Image
          src="/assets/bible-splash@1200.png"
          width={1200}
          height={600}
          alt="banner with the logo of Free Sacred Bible, information about features and a picture of the app running on mobile. The features listed on the left are React Native, typescript plus ESLint, real-time interface, stack navigation, splash and screens assets"
        />
        <h2>Free Sacred Bible</h2>
        <p>
          A Bible app with no ads or monetization, I plan to open source it
          soon.
          <br />
          This app is currently only available in the brazilian marketplace.
        </p>

        <Link href="/bible">
          <a>VIEW PROJECT ➤ </a>
        </Link>
      </Project>
    </Layout>
  )
}

export default Home
