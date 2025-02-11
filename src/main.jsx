import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ShinyEffect } from './components/ShinyEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ShinyEffect left={'3'} right={"3"} top={"40"}/> */}
    
    <App />
  </StrictMode>,
)
