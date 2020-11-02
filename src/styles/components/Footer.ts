import styled from 'styled-components'

export const FooterContainer = styled.div`
  height: 100px;
  width: 100%;
  max-width: 1200px;
  /* padding: 0 28px; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Nav = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: row;

  a {
    margin-left: 30px;
    text-decoration: none;
    color: ${props => props.theme.colors.text1};
  }

  @media all and (max-width: 600px) {
    height: 80%;
    flex-direction: column;
    justify-content: space-evenly;

    a {
      margin: 0;
    }
  }
`
