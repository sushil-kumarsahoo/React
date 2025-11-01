import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card";

function App() {
  const [userdata, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data);
  }

  useEffect(function(){
    getData()
  },[index])



  let printUserData = <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-auto p-4 text-white">
  

      {/* <button
        className="bg-green-600 active:scale-95 mb-3 px-5 py-2 text-white "
        onClick={getData}
      >
        Get data
      </button> */}

        <h1 className="flex text-bold">{index}</h1>

      <div className="flex flex-wrap gap-4 justify-center h-[90%]">
        {printUserData}
      </div>

      <div className="flex justify-center gap-5 mt-3">
        <button className="bg-amber-400 text-sm rounded text-black px-4 py-2 font-bold active:scale-95" onClick={() => {
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>
          Prev
          </button>
        <h4>Page {index}</h4>

        <button className="bg-amber-400 text-sm rounded text-black px-4 py-2 font-bold active:scale-95" onClick={ () => {
          setIndex(index+1)
          setUserData([])
        }}>
          Next
          </button>
      </div>
    </div>
  );
}

export default App;
