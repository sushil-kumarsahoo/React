
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import PagenotFound from './pages/PagenotFound'
import Courses from './pages/Courses'
import Coursedetail from './pages/Coursedetail'
function App() {
  

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='*' element={<PagenotFound/>}></Route>
      <Route path='/courses' element={<Courses/>}>
     
      </Route>
      <Route path='/courses/:id' element={<Coursedetail/>}></Route>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
