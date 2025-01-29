import { BrowserRouter } from 'react-router'

import { Provider } from '@/components/ui/provider'

import { Theme } from '@radix-ui/themes'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Theme>
          <Router />
        </Theme>
      </Provider>
    </BrowserRouter>
  )
}

