import { BrowserRouter } from 'react-router'

import { Provider } from '@/components/ui/provider'

import { Theme } from '@chakra-ui/react'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Theme appearance='light'>
          <Router />
        </Theme>
      </Provider>
    </BrowserRouter>
  )
}

