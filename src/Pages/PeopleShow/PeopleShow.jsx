import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import imglottio from "../../Images/home.json"

export const PeopleShow = () => {
    const exploreData = ["Marketing", "Public Administration", "Healthcare", "Telecommunications", "IT Services", "Engineering", "Talent Management",  "Business Administration"]
    return (
        <div className='  pt-5 px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
                <div className='mt-5 md:mt-20'>
                    <h1 className='text-4xl tracking-wide leading-[50px] md:text-[48px] mb-10 font-thin  '>Welcome to your professional <span className='text-blue-800 font-mono italic text-[44px] tracking-wide md:text-[50px] font-semibold'>Prolink</span> community</h1>
                    <Link to="/login" className='px-14 py-[10px] rounded-lg text-xl hover:bg-blue-900 duration-700  font-bold bg-blue-700 text-white '>Log in</Link>
                </div>
                <div>  
                    <Lottie animationData={imglottio} loop={true} ></Lottie>
                </div>
            </div>

            <div className='grid grid-cols-1 my-28 mr-14  md:grid-cols-2 gap-14'>
                <div className=' '>
                    <h1 className='text-5xl mb-8 font-thin '>Explore collaborative</h1>
                    <p>We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.</p>
                </div>
                <div className=''>  
                    <div>
                        {
                            exploreData.map(d => <button className=' px-4 py-2 border text-lg border-black rounded-full mb-5 mr-3'>{d}</button>)
                        }
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 mr-14 my-40  md:grid-cols-2 gap-14'>
                <div className=' '>
                    <h1 className='text-5xl text-orange-800 mb-8 font-thin '>Post your job for millions of people to see</h1>                  
                </div>
                <div className=''>  
                <button className=' hover:bg-blue-100 text-blue-900 mt-9 ml-32 duration-700 font-bold px-4 py-3 border-2 text-lg border-blue-700 rounded-full mb-5 mr-3'>Post a job</button>
                </div>
            </div>


        </div>
    )
}
