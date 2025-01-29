import { BrowserRouter } from 'react-router'


import { Theme } from '@radix-ui/themes'
import { Router } from './routes/route'

export function App() {
  return (
    <BrowserRouter>
      <Theme accentColor='indigo' panelBackground='translucent' appearance='light'>
        <Router />
      </Theme>
    </BrowserRouter>
  )
}

