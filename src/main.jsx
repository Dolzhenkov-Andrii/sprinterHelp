import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './css/style.css'
import { ModalCardIsActive } from './hooc/ModalCardActive.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,

  <ModalCardIsActive>
    {/* < BrowserRouter basename='/sprinterHelp/' > */}
    < BrowserRouter >
      <App />
    </BrowserRouter >
  </ModalCardIsActive>
)
