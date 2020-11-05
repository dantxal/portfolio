import Link from 'next/link'
import Image from 'next/image'

import { FooterContainer, Nav } from '../styles/components/Footer'

export default function Header(): JSX.Element {
  return (
    <FooterContainer>
      <Link href="/">
        <a aria-label="dantxal logo">
          <Image src="/assets/logo.svg" width={136} height={36} />
        </a>
      </Link>
      <Nav>
        <a href="https://github.com/dantxal">GITHUB</a>
        <a href="https://linkedin.com/in/daniel-txal">LINKEDIN</a>
      </Nav>
    </FooterContainer>
  )
}
