import React from 'react'
import { countries } from './countryName'
import { Link } from 'react-router-dom'

export const Login = () => {

    return (
        <div className='w-2/5 pt-5 pb-10 mt-10 px-8 mx-auto border bg-white'>
            <h1 className='text-xl font-bold text-center mb-5'>Login</h1>
            <form action="">




                <div className='flex flex-col'>
                    <label className='font-semibold '>Email</label>
                    <input placeholder='Email' className='w-full mt-1 border-slate-600 p-2 border rounded' type="email" name="email" id="" />
                </div>










                <div className='flex flex-col my-3'>
                    <label className='font-semibold mb-1'>Password</label>
                    <input placeholder='Password' className='w-full  border-slate-600 p-2 border rounded' type="password" name="password" id="" />
                </div>



                <input type="submit" value="Sign Up" className=' text-white font-bold px-4 py-2 text-center w-full mt-5 bg-purple-700 rounded-lg  hover:bg-purple-900 duration-500' />



            </form>

            <div className='text-center text-xl font-bold mb-2'> or</div>

            <div className='text-center mb-1 w-full rounded-lg border-2 border-purple-800  hover:bg-purple-100 text-purple-900 duration-500 '>
                <button type="submit" className=" font-bold px-4 py-1 ">Continue with google</button>
            </div>
            <p>Don't have an account? Please <Link to="/signup" className='text-purple-700 font-bold'>Sing up</Link></p>
        </div>
    )
}
