import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/** Stylesheet */
import "./assets/css/globals.css"

/** Redux */
import { Providers } from "./redux/Provider.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
)
