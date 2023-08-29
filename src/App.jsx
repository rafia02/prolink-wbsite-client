import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routers'

function App({ childern }) {


  return (
    <di>
      <RouterProvider router={router}>
        {childern}
      </RouterProvider>
    </di>
  )
}

export default App
