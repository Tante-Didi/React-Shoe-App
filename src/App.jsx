import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Product from './Component/Product/Product'
import Shoe from './Component/Shoe/Shoe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/product',
        element: <Product />,
        children: [{ path: ':id', element: <Shoe /> }],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
