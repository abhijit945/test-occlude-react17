import { StrictMode } from 'react'
import './style.css'
import { render } from 'react-dom'
import App from './App'

const rootElement = document.getElementById('root')
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement,
)
