import React from 'react'
import { countries } from './countryName'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className='w-2/5 pt-5 mt-10 px-8 mx-auto border bg-white'>
      <h1 className='text-xl font-bold text-center mb-5'>Sign Up</h1>
      <form action="">

        <div className='grid grid-cols-2 gap-3 mb-3'>
          <div className='flex flex-col'>
            <label className='font-semibold '>First Name</label>
            <input placeholder='First Name' className='mt-1 border-slate-600 p-2 border rounded' type="text" name="first-name" id="" />
          </div>

          <div className='flex flex-col'>
            <label className='font-semibold '>Last Name</label>
            <input placeholder='Last Name' className=' mt-1 border-slate-600 p-2 border rounded' type="text" name="last-name" id="" />
          </div>
        </div>


        <div className='flex flex-col'>
          <label className='font-semibold '>Email</label>
          <input placeholder='Email' className='w-full mt-1 border-slate-600 p-2 border rounded' type="email" name="email" id="" />
        </div>




        <div className='grid grid-cols-2 gap-3 mb-4 my-3'>
          <div className='flex flex-col'>
            <label className='font-semibold mb-1'>Country</label>
            <select className=" w-full p-2 border-slate-600 border rounded">

              {
                countries.map(d => <option>{d}</option>)
              }
            </select>
          </div>


          <div className='flex flex-col'>
            <label className='font-semibold mb-1 '>District</label>
            <input placeholder='District' className='w-full  border-slate-600 p-2 border rounded' type="text" name="district" id="" />
          </div>


        </div>


        <div className='flex flex-col'>
          <label className='font-semibold mb-1'>What do you do?</label>
          <input placeholder='Title' className='w-full  border-slate-600 p-2 border rounded' type="text" name="title" id="" />
        </div>


        <div className='flex flex-col my-3'>
          <label className='font-semibold mb-1'>Password</label>
          <input placeholder='Password' className='w-full  border-slate-600 p-2 border rounded' type="password" name="password" id="" />
        </div>



        <input type="submit" value="Sign Up" className=' text-white font-bold px-4 py-2 text-center w-full mt-5 bg-purple-700 rounded-lg  hover:bg-purple-900 duration-500' />



      </form>

      <p className='mt-1 mb-5'>Don't have an account? Please <Link to="/login" className='text-purple-700 font-bold '>Login</Link></p>
    </div>
  )
}
