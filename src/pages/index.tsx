import loadable from '@loadable/component'
import Image from 'next/image'
import Link from 'next/link'

import {
  About,
  OfficePic,
  Project,
  RecentTitle,
  Splash
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

      <Project>
        <Image
          src="/assets/projects/gobarber/web/dashboardWithAvatar.png"
          width={1200}
          height={600}
          alt="example of a page within the project where the user can update their profile"
        />
        <h2>GoBarber</h2>
        <p>
          An app for users to find a barber they like and schedule a date for
          the service.
          <br />
          Barbers, on the other side, have an admin panel to manage their
          schedule.
        </p>
        <Link href="/gobarber">
          <a>VIEW PROJECT ➤ </a>
        </Link>
      </Project>

      <Project>
        <div
          style={{
            backgroundColor: '#eee',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image
            src="/assets/projects/meetapp/web/dashboard.png"
            width={1009}
            height={600}
            alt="example of a page within the project where the user can see the scheduled meetups"
          />
        </div>
        <h2>Meetapp</h2>
        <p>
          An app for users to find a meetups and sign up for them.
          <br />
          Owners of the meetups have an admin panel to manage their owned
          meetups.
        </p>
        <Link href="/meetapp">
          <a>VIEW PROJECT ➤ </a>
        </Link>
      </Project>
    </Layout>
  )
}

export default Home
