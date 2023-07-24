import { Provider } from 'react-redux'
import store from './assets/store'
import Register from './assets/pages/Register'


function App() {
  return (
    <Provider store={store}>
      <Register/>
    </Provider>
  )
}

export default App
