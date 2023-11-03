import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
import Collections from './pages/Collections'

function App () {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/collections' element={<Collections />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
