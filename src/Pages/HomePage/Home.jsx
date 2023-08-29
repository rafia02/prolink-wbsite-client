import React from 'react'
import { HomeProfile } from './HomeProfile/HomeProfile'
import { Outlet } from 'react-router-dom'
import { HomeDashbord } from './HomeDashbord/HomeDashbord'
import { Feed } from './Feed/Feed'

export const Home = () => {
  return (
    <div className="flex gap-5 m-5">
      <div className='w-3/12 border'>
        <HomeProfile></HomeProfile>
      </div>
      <div className='w-6/12 border'>
        <HomeDashbord></HomeDashbord>
      </div>
      <div className='w-3/12 border'>
        <Feed></Feed>
      </div>

    </div>
  )
}
