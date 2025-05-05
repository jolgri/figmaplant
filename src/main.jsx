import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PlantsProvider } from './context/PlantsContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <PlantsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlantsProvider>
)
