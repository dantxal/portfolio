import Layout from '../components/Layout'

import { Info, Technologies } from '../styles/pages/Social'

export default function Bible(): JSX.Element {
  return (
    <Layout>
      <Info>
        <h1>Free Sacred Bible</h1>
        <p>
          This is a free app I developed to make it easier for people to have a
          Bible on their phones. The app is not monetized in any way (no ads, no
          in-app purchases).
          <br />
          <br />
          The app includes stack router for navigation, real-time search for
          books and a simple interface.
          <br />
          <br />
          The version of the scriptures included in the app is a brazilian open
          source translation:{' '}
          <a href="https://github.com/blivre/BibliaLivre">BLIVRE</a>. I chose to
          keep the text in memory, given the small size of it when converted to
          JSON (6.02 MB). With that the app provides a fast user experience,
          although I might change to a different method once I start introducing
          more features, the goal is to do so without affecting user experience.
        </p>
      </Info>
      <Technologies>
        <div>
          <strong>Technologies</strong>
          <p>React, React-Native, Styled-components, ESLint, Typescript</p>
        </div>
        <div>
          <strong>Code</strong>
          <p>Coming soon (not open sourced yet)</p>
        </div>
        <div>
          <strong>Marketplace</strong>
          <a href="https://play.google.com/store/apps/details?id=com.appbiblia">
            BRAZILIAN PLAY STORE
          </a>
        </div>
      </Technologies>
    </Layout>
  )
}
