import createRoot from 'react-dom/client'
import  ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit'
// }

// const anotherElement = (
//   <a href="https://google.com" target = "_blanck"> visit google </a>
// )

const anotherUser = "chai aur react"

const ReactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  "click me to visit google",
  anotherUser
)

 ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    // <App />
    ReactElement
  // anotherElement
  // anotherUser
  // <MyApp/>
)
