import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

import "@radix-ui/themes/styles.css";
import './index.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
