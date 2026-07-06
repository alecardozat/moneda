import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App, { Dashboard, Inventory } from './App';

const router = createBrowserRouter([
  {
    path: '/', element: <App/>,
    children:[
      {
        index:true, element: <Dashboard/>
      },
      {
        path: 'inventario', element: <Inventory/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
