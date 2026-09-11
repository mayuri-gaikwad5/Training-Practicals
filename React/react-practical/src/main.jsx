import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const arrvalues = [10,20,30,40,50];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App consumer={false} /> */}
    
    <App number={arrvalues} />
  </StrictMode>,
)

