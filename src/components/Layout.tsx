import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Wrapper, Content } from '../styles/components/Layout'

type Props = {
  title?: string
  description?: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({
  title = 'dantxal',
  description = 'Full-stack developer, React enthusiast self-directed and ambitious',
  children
}) => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

      <Wrapper>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </Container>
  )
}

export default Layout
