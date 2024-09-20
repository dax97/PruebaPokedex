import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokeDex } from './PokeDex.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokeDex />
  </StrictMode>,
)
