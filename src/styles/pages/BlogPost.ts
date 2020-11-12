import styled from 'styled-components'

export const PostContainer = styled.div`
  height: 100%;
  > h1,
  > h3 {
    text-align: center;
  }
  > h3 {
    margin-top: 10px;
  }

  > div {
    margin-top: 20px;

    > * {
      margin-top: 10px;
    }
  }
`
