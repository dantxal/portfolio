import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  h1 {
    font-size: 60px;
    font-weight: 500;

  }

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 55px;
  }

  @media all and (max-width: 520px) {
    body {
    }

    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      line-height: 25px;

    }
  }
`
