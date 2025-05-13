import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PlantsProvider } from './context/PlantsContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CategoriesProvider } from './context/CategoriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <PlantsProvider>
    <CategoriesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoriesProvider>
  </PlantsProvider>
)
