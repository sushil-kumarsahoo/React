import React from 'react'

function Card(props) {
    
    
  return (
    <div>
      <a href={props.elem.url} target="_blank">
            <div className="h-51 w-58 overflow-hidden rounded-xl bg-white ">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card
