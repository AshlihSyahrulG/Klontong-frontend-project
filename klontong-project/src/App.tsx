import { Provider } from 'react-redux'
import store from './assets/store'
import Register from './assets/pages/Register'
import Login from './assets/pages/Login'


function App() {
  return (
    <Provider store={store}>
      <Login/>
      {/* <Register/> */}
    </Provider>
  )
}

export default App
