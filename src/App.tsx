import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './common/theme'
import { Generation } from './pages/Generation/Generation'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Generation />
    </ChakraProvider>
  )
}

export default App
