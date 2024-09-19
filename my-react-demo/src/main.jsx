import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/scss/bootstrap.scss'
import Lgin from './components/signin/sign-in.jsx'
import TestAxios from './components/test/test-axios.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Lgin /> */}
    <TestAxios />
  </StrictMode>,
)
