import { StrictMode, ReactDOM } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@mui/material"
import Theme from './Theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
