import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routers'
import { Toaster } from 'react-hot-toast'

function App({ childern }) {


  return (
    <div>
      <RouterProvider router={router}>
        {childern}
      </RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
