import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { Home } from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
function App() {

  let x= createBrowserRouter([
    {path:"", element: <Layout />, children:[
      {index:true, element: <Home/>},
      {path:"about", element: <About/>},
      {path:"portfolio", element: <Portfolio/>},
      {path:"contact", element: <Contact/>},
    ]},
  ])
  return (
  <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
