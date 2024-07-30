import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.scss"
import { AuthContextProvider } from '../../../Travel-Website-main/Travel Wings-main/client/src/context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App></App>
    </AuthContextProvider>
  </React.StrictMode>,
)
