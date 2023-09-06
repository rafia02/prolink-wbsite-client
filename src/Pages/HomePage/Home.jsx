import React from 'react'
import { HomeProfile } from './HomeProfile/HomeProfile'
import { Outlet } from 'react-router-dom'
import { HomeDashbord } from './HomeDashbord/HomeDashbord'
import { Feed } from './Feed/Feed'
import { UploadFile } from '../Components/Utilities/UploadFile'

export const Home = () => {
  return (
    <div className="flex gap-5 p-5 pt-5 bg-slate-100 h-full">
      <div className='w-3/12 hidden md:block '>
        <HomeProfile></HomeProfile>
      </div>
      <div className='w-full md:w-6/12  '>
        <HomeDashbord></HomeDashbord>
      </div>
      <div className='w-3/12 hidden md:block'>
        <Feed></Feed>

      </div>

    </div>
  )
}
