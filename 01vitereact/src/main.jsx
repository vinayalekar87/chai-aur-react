import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { jsx as _jax  } from 'react/jsx-runtime'

function MyApp() {
  return(
    <div>
      <h1>custom react - Vinay !!</h1>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',
//     porps: {
//         href: 'https://www.linkedin.com',
//         target: '_blank',
//     },
//     Children: 'Click me to visit LinkedIn'
// }

const anotherElement = (
  <a href='https://www.linkedin.com' target='_blank'>Click me to visit LinkedIn</a>
)

const anotherUser = "Chai or coffee another user"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google',
  anotherUser) 


createRoot(document.getElementById('root')).render(
  <App/>
)
