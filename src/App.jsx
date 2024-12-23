import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'

function App() {


  return (
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Product/>}/>
     </Routes>
  )
}

export default App