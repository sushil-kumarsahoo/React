import './App.css'
import Mycomponent from './Mycomponent';
import { useAppSelector } from './store/hooks'
import { useAppDispatch } from './store/hooks'
import { increment,decrement } from './store/slices/counter'

function App() {
 
const count = useAppSelector((state) => state.counter);

const dispatch = useAppDispatch();

  return (
   <div>
       <h1>Count is {count}</h1>
       <button onClick={() => dispatch(increment())}>Increment</button>
       <button onClick={() => dispatch(decrement())}>Increment</button>
       <Mycomponent/>
   </div>
  )
}

export default App
