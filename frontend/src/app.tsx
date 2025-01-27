import { BrowserRouter } from 'react-router'
import './index.css'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

