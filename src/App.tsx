import { Provider } from 'react-redux'
import { store } from 'store'
import { Generation } from './pages/Generation/Generation'

function App() {
  return (
    <Provider store={store}>
      <Generation />
    </Provider>
  )
}

export default App
