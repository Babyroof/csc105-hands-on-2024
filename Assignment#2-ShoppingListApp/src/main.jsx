import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ShoppingList.jsx'
import App from './ShoppingList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
