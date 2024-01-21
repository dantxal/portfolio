import loadable from '@loadable/component'
import Image from 'next/image'
import Link from 'next/link'

import {
  About,
  OfficePic,
  Project,
  ProjectLink,
  RecentTitle,
  ResponsiveIFrame,
  ResponsiveIFrameContainer,
  Splash
} from '../styles/pages/Home'

const Layout = loadable(() => import('../components/Layout'))

const Home: React.FC = () => {
  return (
    <Layout>
      <Splash>
        <h1>Daniel Faria</h1>
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
          I&apos;m a developer that loves working with programming specially in
          the React ecosystem and I strive for delivering code that is simple,
          and yet has great performance.
        </p>
        <p>
          I am the type of person who likes to get problems solved and I am also
          very communicative.
        </p>
      </About>

      <RecentTitle>Recent projects</RecentTitle>

      <Project>
        <h2>Eldrum: Redtide</h2>
        <ResponsiveIFrameContainer>
          <ResponsiveIFrame
            src="https://www.youtube.com/embed/XESBFvpXiKI?rel=0"
            title="Eldrum: Red Tide - Release Trailer"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></ResponsiveIFrame>
        </ResponsiveIFrameContainer>

        <p>
          A mobile <strong>text-based adventure RPG game</strong> developed with
          <strong>React Native</strong>.
        </p>
        <p>
          Worked with one of the Founders making improvements to the Engine
          (React Native) and the Editor (React.js + Node.js). Working on a
          kanban-style board where I would take issues assigned to me, or add
          better specification and plan issues on the backlog, so those could be
          approved for me to work on them.
        </p>
        <p>
          The work included improving the performance of the React Native app by
          profiling the app, reducing re-renders and finding balance between the
          different threads running in the native app.
        </p>
        <p>
          As well as creating/updating components to new specifications,
          reworking the entire save system to a more robust solution, adding
          achievements system, all of that and much more whilst maintaining
          compatibility with the previous title, &quot;Eldrum: Untold&quot;.
        </p>
        <p>
          Also solved some other issues the team had like the website not
          working as intended if Javascript was disabled which was a concern
          related to accessibility.
        </p>
        <ProjectLink href="https://eldrum.com/">VISIT WEBSITE</ProjectLink>
      </Project>

      <Project>
        <h2>Free Sacred Bible</h2>

        <Image
          src="/assets/bible-splash@1200.png"
          width={1200}
          height={600}
          alt="banner with the logo of Free Sacred Bible, information about features and a picture of the app running on mobile. The features listed on the left are React Native, typescript, ESLint, real-time interface, stack navigation, splash and screens assets"
        />
        <p>
          A Bible app with no ads or monetization, I plan to open source it
          soon.
          <br />
          This app is currently only available in the brazilian marketplace.
        </p>

        <Link href="/bible">
          <ProjectLink>VIEW PROJECT ➤ </ProjectLink>
        </Link>
      </Project>

      <Project>
        <h2>GoBarber</h2>

        <Image
          src="/assets/projects/gobarber/web/dashboardWithAvatar.png"
          width={1200}
          height={600}
          alt="example of a page within the project where the user can update their profile"
        />
        <p>
          Web-app, Mobile app and API for users to find a barber they like and
          schedule a date for the service.
          <br />
          Barbers, on the other side, have an admin panel to manage their
          schedule.
        </p>
        <Link href="/gobarber">
          <ProjectLink>VIEW PROJECT ➤ </ProjectLink>
        </Link>
      </Project>

      <Project>
        <h2>Meetapp</h2>

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
        <p>
          Web-app, Mobile app and API for users to find a meetups and sign up
          for them.
          <br />
          Owners of the meetups have an admin panel to manage their owned
          meetups.
        </p>
        <Link href="/meetapp">
          <ProjectLink>VIEW PROJECT ➤ </ProjectLink>
        </Link>
      </Project>
    </Layout>
  )
}

export default Home
