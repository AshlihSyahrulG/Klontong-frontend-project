import { Provider } from 'react-redux'
import store from './assets/store'
import Register from './assets/pages/Register'
import Login from './assets/pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './assets/pages/Product';
import DetailProduct from './assets/pages/DetailProduct';
import AddProduct from './assets/pages/AddProduct';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes >
          <Route path="/register" element={<Register />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/product/add" element={<AddProduct />}/>
          <Route path="/product/:id" element={<DetailProduct />}/>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
