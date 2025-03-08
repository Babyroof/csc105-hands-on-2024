import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './simpleCalculator.css'
import App from './simpleCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
