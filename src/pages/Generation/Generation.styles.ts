import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`

const Body = styled.div`
  display: flex;
`

const Footer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`

export { Wrapper, Body, Footer }
