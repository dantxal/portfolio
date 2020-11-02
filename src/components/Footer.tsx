import Logo from '../assets/logo.svg'

import { FooterContainer, Nav } from '../styles/components/Footer'

export default function Header(): JSX.Element {
  return (
    <FooterContainer>
      <Logo />
      <Nav>
        <a href="https://github.com/dantxal">GITHUB</a>
        <a href="https://linkedin.com/in/daniel-txal">LINKEDIN</a>
      </Nav>
    </FooterContainer>
  )
}
