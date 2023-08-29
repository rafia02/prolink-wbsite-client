import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routers'

function App({ childern }) {


  return (
    <div  className="bg-slate-200 h-full">
      <RouterProvider router={router}>
        {childern}
      </RouterProvider>
    </div>
  )
}

export default App
