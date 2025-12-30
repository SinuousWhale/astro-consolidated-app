import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import AppWorking from './AppWorking.tsx'
import SimpleApp from './SimpleApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimpleApp />
  </StrictMode>,
)
