import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  max-width: 1200px;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navbar = styled.div`
  width: 320px;
  max-width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`
