import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import * as bootstrap from 'bootstrap'
import './scss/styles.scss'
import router from './router.jsx'
import Navbar from './components/navbar/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
)
