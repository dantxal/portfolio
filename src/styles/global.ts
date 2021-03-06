import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text3};
    font: 400 16px Roboto, sans-serif;
    line-height: 150%;
  }

  h1 {
    font-weight: 500;
    color: ${props => props.theme.colors.text1};
  }

  h2 {
    font-weight: 500;
    color: ${props => props.theme.colors.text2};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    &:hover {
      color: ${props => props.theme.colors.text2};
    }
  }

  @media all and (max-width: 600px) {
    body {
    }

    h1 {
      font-size: 40px;
      line-height: 120%;
    }

    h2 {
      font-size: 20px;
      line-height: 25px;

    }
  }
`
