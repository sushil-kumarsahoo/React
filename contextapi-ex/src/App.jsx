import Items from './components/Items'
import './App.css'
import Cart from './components/Cart'
function App() {


  return (
   <div className='App'>
       <Items name="MacBook Pro" price={100000}/>
       <Items name="Pendrive" price={4000}/>
       <Items name="Mobile" price={35000}/>

       <Cart/>
   </div>
  )
}

export default App
