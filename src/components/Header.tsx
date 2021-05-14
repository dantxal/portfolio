import Link from 'next/link'
import Image from 'next/image'

import { HeaderContainer, Navbar } from '../styles/components/Header'

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Link href="/">
        <a aria-label="dantxal logo">
          <Image src="/assets/logo.svg" width={136} height={36} />
        </a>
      </Link>
      <Navbar>
        <Link href="/">
          <a>PORTFOLIO</a>
        </Link>
        <Link href="/apps">
          <a>APPS</a>
        </Link>
        {/* <Link href="/blog">
          <a>BLOG</a>
        </Link> */}
      </Navbar>
    </HeaderContainer>
  )
}
