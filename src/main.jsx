import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeConText from './context/ThemeContext.jsx'
import { BrowserRouter } from 'react-router'
import { AuthContext } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode><AuthContext>
    <BrowserRouter>
    <ThemeConText>
    <App />
    </ThemeConText>
      </BrowserRouter>
      </AuthContext>
  </StrictMode>,
)
