import Link from 'next/link'
import Layout from '../../components/Layout'
import bibleIcon from '../../assets/bible-icon.png'

import { Project } from '../../styles/pages/AppsIndex'

export default function Apps(): JSX.Element {
  return (
    <Layout>
      <Project>
        <img src={bibleIcon} />
        <h2>Free Sacred Bible</h2>
        <p>
          A Bible app with no ads or monetization, I plan to open source it
          soon.
          <br />
          This app is currently only available in the brazilian marketplace.
        </p>
        <Link href="/apps/biblia/privacy">
          <a>Privacy Policy</a>
        </Link>
      </Project>
    </Layout>
  )
}
