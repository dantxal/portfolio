import styled from 'styled-components'

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navbar = styled.div`
  max-width: 60%;

  a {
    margin-left: 30px;
    text-decoration: none;
    color: ${props => props.theme.colors.text1};
  }

  @media all and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`
