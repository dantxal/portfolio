import Link from 'next/link'

import Logo from '../assets/logo.svg'

import { HeaderContainer, Navbar } from '../styles/components/Header'

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar>
        <Link href="/">
          <a>PORTFOLIO</a>
        </Link>
        <Link href="/apps">
          <a>APPS</a>
        </Link>
        <Link href="/blog">
          <a>BLOG</a>
        </Link>
      </Navbar>
    </HeaderContainer>
  )
}
