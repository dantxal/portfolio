import Layout from '../components/Layout'

import { Info, Technologies } from '../styles/pages/Social'

export default function Social(): JSX.Element {
  return (
    <Layout>
      <Info>
        <h1>Relay Social App</h1>
        <p>
          Social app with Relay is a project that makes use of newest
          technologies of React and Relay for{' '}
          <strong>faster data-fetching</strong> and optimized renders for the
          true &quot;<strong>real-time experience</strong>&quot; of the user.
          <br />
          <br />
          In order to achieve that we make use of features from React 17 and
          Relay experimental. The result is very fast data-fetching with minimal
          loading time.
          <br />
          <br />
          One big advantage of using Relay in this case is the{' '}
          <strong>scalability</strong> of the application given we are able to
          make changes in a single place (component) and have that be populated
          in all other places automatically, due to fragments. Plus the
          optimization of graphql queries with relay-compiler avoids fetching
          unnecessary data or having a broken query.
        </p>
      </Info>
      <Technologies>
        <div>
          <strong>Technologies</strong>
          <p>React, Relay, Styled-components, ESLint, Typescript</p>
        </div>
        <div>
          <strong>Code</strong>
          <a href="https://github.com/dantxal/social-react-relay-ts">
            GITHUB REPOSITORY
          </a>
        </div>
        <div>
          <strong>Live</strong>
          <a href="https://social-react-relay-ts.vercel.app/">VERCEL APP</a>
        </div>
      </Technologies>
    </Layout>
  )
}
