import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/Layout'
import bibleIcon from '../../assets/bible-icon.png'

import { Project } from '../../styles/pages/AppsIndex'

export default function Apps(): JSX.Element {
  return (
    <Layout>
      <Project>
        <Image
          src={bibleIcon}
          alt="logo of Free Sacred Bible app, a black background with a yellow cross in the middle of a rectangle which resembles a book"
        />
        <h2>Free Sacred Bible</h2>
        <p>
          A Bible app with no ads or monetization, I plan to open source it
          soon.
          <br />
          This app is currently only available in the brazilian marketplace.
        </p>
        <Link href="/apps/bible/privacy">
          <a>Privacy Policy</a>
        </Link>
      </Project>
    </Layout>
  )
}
