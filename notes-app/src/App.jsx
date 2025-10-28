import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("")
const [details, setDetails] = useState("")
const[task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
   
const copyTask = [...task]; 

copyTask.push({title,details})

setTask(copyTask)
console.log(task);


    setTitle("")
    setDetails("")
    
  }

  const deleteNote = (idx) => {
   const copyTask = [...task];
   copyTask.splice(idx,1)
   setTask(copyTask)                            
   
  }

  
  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form onSubmit={(e)=>{
        submitHandler(e)}} 
        className=" flex flex-col items-start gap-4 p-10 lg:w-1/2  ">
          
         <h1 className="text-3xl font-bold">Add Notes</h1>

          <input type="text" placeholder="Enter notes heading" className="px-5 py-2  border-2 outtlo rounded w-full " value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            
          }}/>

        <textarea type="text" className="px-5 h-32  py-2 border-2 rounded w-full " placeholder="write details..." value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}/>

        <button className="bg-white active:scale-95 text-black px-2 py-2 w-full">Add note</button>

        
        
      </form>

      <div className="p-10 lg:border-l-2 lg:w-1/2 ">
       <h1 className="text-3xl font-bold">Recent Notes</h1>
       <div className="flex flex-wrap items-start  gap-5 mt-5 h-full overflow-auto">
        
         {task.map(function(elem,idx){
          return <div key={idx} className=" flex justify-between flex-col items-start h-52 w-40 rounded-2xl bg-white text-black pb-5 pt-9 px-4">
            <h3 className="leading-tight text-xl font-bold">{elem.title }</h3>
            <p className="mt-2 leading-tight font-medium text-gray-500">{elem.details}</p>
            <button onClick={ () => {
              deleteNote(idx)
            }
            } className="w-full bg-red-500 text-white rounded active:scale-95">delete</button></div>
         })}
      
       </div>
      </div>
    </div>
  );
}

export default App;
