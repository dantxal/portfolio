import styled from 'styled-components'

export const Info = styled.div`
  margin-top: 40px;

  h1 {
  }

  h2 {
  }

  p {
    margin: 40px 0 40px 0;
  }
`

export const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 100%;
  flex-wrap: wrap;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 40px 20px 0;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 500px;

  margin: 20px 0 10px 0;
`
