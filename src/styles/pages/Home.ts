import styled from 'styled-components'
import splash from '../../assets/splash-1160.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
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

  padding-left: 30px;

  h1 {
    margin-top: 20px;
    color: ${props => props.theme.colors.text1};
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
export const About = styled.div`
  width: 100%;

  p {
    max-width: 520px;
    margin-top: 20px;
  }
`
export const RecentTitle = styled.h2`
  margin-top: 40px;
`
export const Project = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  width: 100%;

  img {
    width: 100%;
  }

  h2 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }

  p {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`
