import Image from 'next/image'

import Layout from '../components/Layout'
import { Info, Technologies, ImageWrapper } from '../styles/pages/Projects'

export default function Social(): JSX.Element {
  return (
    <Layout>
      <Info>
        <h1>GoBarber</h1>
        <p>
          A fullstack application powered by Nodejs, React and React Native.
          <br />
          <br />
          This project includes an API server, a Mobile App and a Web App. It
          was developed in 2018 during Rockeatseat&apos;s Bootcamp, GoStack 8.
          <br />
          <br />
          This project allows it&apos;s users to find a barber wich they like
          and schedule an appointment, while also allowing the barbers to manage
          their schedule within the web app.
          <br />
          <br />
          To achieve this, the project includes a Mobile App, a Web App and an
          API.
        </p>
        <h2>The Mobile App</h2>
        <p>
          The mobile app is built with React Native.
          <br />
          <br />
          It includes 7 screens, using 3 different navigator types.
          <br />
          <br />
          The dashboard uses a Stack Navigator to give the users a funnel-like
          experience.
          <br />
          <br />
          The application&apos;s state is managed through Redux, using sagas and
          redux-persist (for saving state in case the user closes the app).
          <br />
          <br />
          The app is also connected to Reactotron in development for better
          debugging.
        </p>
        <p>
          If you want to know more, you can check the Readme.md file at the
          project&apos;s Github or contact me.
        </p>
      </Info>
      <Technologies>
        <div>
          <strong>Technologies</strong>
          <p>React, React Native, Redux, Styled-components, ESLint</p>
        </div>
        <div>
          <strong>Code</strong>
          <a href="https://github.com/dantxal/gobarber">GITHUB REPOSITORY</a>
        </div>
        {/* <div>
          <strong>Live</strong>
          <a href="#">Check it Live!</a>
        </div> */}
      </Technologies>
      <div>
        <h1>Gallery</h1>

        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/signIn.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/profile.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/select-provider.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/select-date.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/select-time.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/confirm-appointment.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/assets/projects/gobarber/mobile/appointments-cancelable.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
      </div>
    </Layout>
  )
}
