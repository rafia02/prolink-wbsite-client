import React from 'react'
import { Navber } from '../Pages/Components/Shared/Navber'
import { Outlet } from 'react-router-dom'


export const Layout = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
    </div>
  )
}
