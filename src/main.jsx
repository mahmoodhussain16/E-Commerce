import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Layout from './Components/Layout.jsx'
import SignupPage from './pages/Signup.jsx'
import ProductDetail from './pages/ProductDetails.jsx'
import ProductSection from './Components/Main/ProductSection.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/productDetail' element={<ProductDetail />} />
      <Route path='/productSection' element={<ProductSection />} />



    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

