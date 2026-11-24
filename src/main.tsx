import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Aboutus from './ui/aboutus/Aboutus.tsx'
import Product from './ui/products/Product.tsx'
import Home from './ui/home/Home.tsx'
import Layout from './layout/Layout.tsx'
import ProductDetails from './ui/products/ProductDetails.tsx'
import Login from './ui/auth/Login.tsx'
import ProtectedFilter from './auth/ProtectedFilter.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        
        element: <ProtectedFilter />,
        children: [
          {
            path: 'product',
            element: <Product />,
          },
          {
            path: 'productdetails',
            element: <ProductDetails />,
          }
        ]
      }
      ,
      {
        path: 'aboutus',
        element: <Aboutus />,
      },
     
    ]
  },
  {
    path: 'login',
    element: <Login />,
  },
  
]) 


createRoot(document.getElementById('root')!).render(
   <StrictMode>
     <RouterProvider router={router} />
   </StrictMode>,
)
