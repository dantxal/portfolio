import Layout from '../../components/Layout'

// TODO
import { Project } from '../../styles/pages/Home'

export default function Apps(): JSX.Element {
  return (
    <Layout>
      <Project>
        <h2>Bíblia Sagrada Gratuita</h2>
        <p>
          A social network app, with posts and comments. <br />
          Built with React and Relay on the front-end, for performance and
          scalability.
        </p>
      </Project>
    </Layout>
  )
}
