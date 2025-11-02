import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
function App() {

const [theme,setTheme] = useState("light")
  return (
    <div>
      <Navbar theme={theme}>
  
      </Navbar>
      <Button/>
        
    </div>
  )
}

export default App
