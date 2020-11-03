import styled, { keyframes } from 'styled-components'

const fadeDown = keyframes`
  0% {
    opacity: 0; transform: translateY(-10px);
  }
  100% {
    opacity: 1; transform: translateY(0px);
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 20px;
`

export const Content = styled.div`
  animation: ${fadeDown} 1s cubic-bezier(1, 0, 0, 1);
  }
`
