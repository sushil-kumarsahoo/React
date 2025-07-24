
import Card from './components/card'

import './App.css'


function App() {
  let myObj = {
    username:"sushil",
    age:21
  }
  let myArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-300 text-black rounded-xl'>tailwind test</h1>
     <Card myObj/>
     <Card username="kumar" btnText="click me"/>
    </>
  )
}

export default App
