import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWithNavigation from './AppWithNavigation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithNavigation />
  </StrictMode>,
)
