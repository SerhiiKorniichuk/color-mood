import { Button, ChakraProvider } from '@chakra-ui/react'
import styled from 'styled-components'
import './App.css'
import { theme } from './common/theme'

const StyledButton = styled(Button)`
  &.chakra-button {
    font-size: 20px;
  }
`

function App() {
  return (
    <ChakraProvider theme={theme}>
      <StyledButton>Color Mood</StyledButton>
    </ChakraProvider>
  )
}

export default App
