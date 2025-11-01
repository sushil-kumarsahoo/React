import React from 'react'
import { useParams } from 'react-router-dom'


const Coursedetail = () => {

    const params = useParams();
    console.log(params);
    
  return (
    <div>
      <h1> {params.id}Coursedetailpage</h1>
    </div>
  )
}

export default Coursedetail
