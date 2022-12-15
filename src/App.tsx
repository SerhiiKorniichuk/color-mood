import { Button, ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { theme } from './common/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button>Color Mood</Button>
    </ChakraProvider>
  )
}

export default App
