import { Children } from 'react'
import Link from 'next/link'

import Logo from '../assets/logo.svg'

import { HeaderContainer, Navbar } from '../styles/components/Header'

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar>
        <Link href="/">PORTFOLIO</Link>
        <Link href="/apps">APPS</Link>
        <Link href="/blog">BLOG</Link>
      </Navbar>
    </HeaderContainer>
  )
}
