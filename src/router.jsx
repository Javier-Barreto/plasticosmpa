import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { About, Products, Services } from './views/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/services",
    element: <Services />,
  },
]);

export default router