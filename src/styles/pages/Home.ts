import styled from 'styled-components'
import splash from '../../assets/splash-1160.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
`
export const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 120px;
  background-image: url(${splash});
  background-size: auto;
  width: 100%;
  height: 340px;

  padding: 0 55px;

  h1 {
    margin-top: 20px;
    color: ${props => props.theme.colors.text};
  }

  h2 {
    max-width: 750px;
    margin-top: 60px;
    color: ${props => props.theme.colors.text2};
  }
`

export const OfficePic = styled.img`
  margin-top: 100px;
  width: 100%;
`
