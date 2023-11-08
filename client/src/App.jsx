import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
import Collections from './pages/Collections'
import Products from './pages/Products'
import ProductDetails from './components/products/ProductDetails'

function App () {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collections' element={<Collections />}/>
            <Route path='/products/men' element={<Products/>}/>
            <Route path='/products/women' element={<Products/>}/>
            <Route path='/products/kids' element={<Products/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
