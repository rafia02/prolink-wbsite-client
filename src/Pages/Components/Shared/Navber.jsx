import React, { useContext, useState } from 'react'
import logo from "../../../Images/logo2.png"
import "../../../App.css"
import { GoHomeFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { BsChatDotsFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

import { BiSolidShoppingBag, BiSolidShoppingBagAlt, BiSolidDownArrow } from "react-icons/bi";
import { authContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

export const Navber = () => {
  const {logout, user} = useContext(authContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleSingout =()=>{
    logout()
    .then(()=>{
      toast.success("Sign out successfully")
    })
    .catch(e => console.error(e))
  }


  const navItem = <>
    

{
  user?.email ? 
  
  <>
  <Link to="/home" className='text-xl pb-0 mb-0 flex flex-col justify-center items-center'><GoHomeFill></GoHomeFill> <p className='text-center text-xs'>Home</p></Link>
  <Link to="" className='text-[24px] pb-0 mb-0 flex flex-col justify-center items-center'><HiViewGridAdd></HiViewGridAdd><p className='text-center text-xs'>My Network</p></Link>
  <Link to="" className='text-[25px] pb-0 mb-0 flex flex-col justify-center items-center'><BiSolidShoppingBagAlt></BiSolidShoppingBagAlt><p className='text-center text-xs'>Jobs</p></Link>
  <Link to="" className='text-[23px] pb-0 mb-0 flex flex-col justify-center items-center'><BsChatDotsFill></BsChatDotsFill><p className='text-center text-xs'>Messaging</p></Link>
  <Link to="" className='text-[26px] pb-0 mb-0 flex flex-col justify-center items-center'><MdNotifications></MdNotifications><p className='text-center text-xs'>Notification</p></Link>
  {/* <Link to="/login" className='text-[24px] pb-0 mb-0 flex flex-col justify-center items-center'><MdNotifications></MdNotifications><p className='text-center text-xs'>Login</p></Link> */}
  <Link onClick={toggleMenu} className="hidden md:block text-[24px] pb-0 mb-0 md:flex flex-col justify-center items-center">

    <div className="avatar">
      <div className="w-[26px] rounded-full ">
        <img src="https://www.shutterstock.com/image-photo/jasna-lake-beautiful-reflections-mountains-260nw-1720823500.jpg" />
      </div>
    </div>
    <p className='flex items-center text-center text-xs'>Me<BiSolidDownArrow></BiSolidDownArrow></p>
  </Link>
  </>
  :
  
  <>
  <Link to="/login" className='text-xl  bg-blue-800 text-white px-5 rounded-md hover:opacity-80 duration-300 py-2 font-semibold '>Sign in</Link>
  <Link to="/signup" className='text-xl bg-blue-800 font-semibold text-white px-5 rounded-md hover:opacity-80 py-2 duration-300 '>Register Now</Link>
  
  </>
}

    
  </>


  return (
    <div>
      <nav className="bg-white shadow-md py-1">
        <div className="container mx-auto px-5 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-blue-800 font-semibold text-xl">
                <span className="font-extrabold flex items-center  mr-2 text-white  p-1 px-2 md:text-2xl ">
                  <p className='bg-blue-900 px-[5px] rounded-md mr-[1px]'>Pro</p>
                  <span className="text-blue-900">Link</span></span>
              </div>

              <div className="form-control">
                <input type="text" placeholder="Search" className="border rounded-md px-2 py-[5px] w-full ml-5 md:ml-0 md:w-72" />
              </div>

            </div>
            <div className="hidden md:flex w-2/5  justify-between">
              {navItem}
            </div>



            <div className='flex border-l-2 hidden md:block border-s pl-5 flex-col justify-center items-center'>
              <CgMenuGridR className='text-4xl'></CgMenuGridR>
              <p className='text-xs'>For Business</p>
            </div>
            <a className='text-amber-700 hidden md:block flex text-xs flex-col justify-center items-center'>
              <p>Get hired firster</p>
              <p className='text-xs'>Try premium free</p>
            </a>

          </div>


        </div>



        <div className={` ${isOpen ? 'block flex bg-white z-50 p-5 flex-col  rounded shadow-2xl absolute right-72 text-center justify-end w-80  mt-3' : 'hidden'}`}>
          <div className='flex gap-2'>
            <img className='w-16 h-16 border rounded-full' src="https://www.shutterstock.com/image-photo/jasna-lake-beautiful-reflections-mountains-260nw-1720823500.jpg" alt="" />
            <div className='text-start'>
              <h4 className='font-semibold text-lg'>Rafia Binte Rashed</h4>
              <p className='text-sm'>developer | front end developer | react js | node js| MERN developer</p>
            </div>
          </div>

          <Link className='border-2 hover:bg-slate-300 duration-700 rounded-3xl text-blue-800 font-semibold border-blue-800 mt-3 px-3 '>View Profile</Link>

          <div className='text-start  mt-3'>
            <h4 className='font-semibold text-xl'>Account</h4>
            <p className='my-2 hover:cursor-pointer hover:text-amber-600 duration-300'>Settings & Privacy</p>
            <p className='hover:cursor-pointer hover:text-amber-600 duration-300'>Help</p>
            <p className='my-3 hover:cursor-pointer hover:text-amber-600 duration-300'>Language</p>
            <p onClick={handleSingout} className='my-3 mt-2 hover:cursor-pointer hover:text-amber-600 duration-300 font-bold'>Sign Out</p>
          </div>
        </div>





        <div>
          <div className="md:hidden bg-white  py-1 px-5 fixed  bottom-0 flex border w-full items-center justify-between">
            {navItem}
          </div>
        </div>
      </nav>
    </div>
  )
}
