import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Generation } from './pages/Generation/Generation'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Generation />
      </ChakraProvider>
    </Provider>
  )
}

export default App
