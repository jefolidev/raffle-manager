import { BrowserRouter } from 'react-router'

import { Provider } from '@/components/ui/provider'

import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
    </BrowserRouter>
  )
}

