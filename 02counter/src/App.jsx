import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

 //let counter = 15;


   const addValue = () => {
     if(counter <20){
  // counter = counter+1
  setCounter(prevCounter => prevCounter+1)
 }
}
 
const removeValue = ()=>{
  if(counter >0){
  // counter = counter-1
  setCounter(prevCounter => prevCounter-1)
 }
 }
 
 
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}>Add value </button>
      <br></br>
      <button
      onClick={removeValue}>remove value </button>
      
    </>
  )
}

export default App
