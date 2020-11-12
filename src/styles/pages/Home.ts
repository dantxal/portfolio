import styled from 'styled-components'
import Image from 'next/image'

export const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-top: 85px;
  width: 100%;
  height: 340px;

  padding-left: 30px;

  h1 {
    margin-top: 20px;
    color: ${props => props.theme.colors.text1};
    font-size: 60px;
  }

  h2 {
    max-width: 750px;
    margin-top: 60px;
    color: ${props => props.theme.colors.text2};
    font-size: 40px;
    line-height: 55px;
  }
`

export const OfficePic = styled(Image)`
  margin-top: 150px;
`
export const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;

  p {
    width: 580px;
    margin-right: 20px;
    margin-top: 20px;
  }

  @media all and (max-width: 1200px) {
    flex-wrap: no-wrap;
    height: auto;

    p {
      width: 100%;
      margin-right: 0;
    }
  }
`
export const RecentTitle = styled.h2`
  margin-top: 40px;
`
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 100px;
  width: 100%;

  img {
    width: 100%;
  }

  h2 {
    margin-top: 20px;
  }

  p {
    text-align: center;
    margin-top: 20px;
  }

  a {
    margin-top: 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.text1};
  }
`
