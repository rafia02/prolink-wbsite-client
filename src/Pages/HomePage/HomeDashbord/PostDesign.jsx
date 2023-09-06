import React, { useState } from 'react'
import { MdPhotoSizeSelectActual, MdTextSnippet } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { PostModal } from './PostModal';




export const PostDesign = () => {

    return (
        <div className=''>
            <div className='bg-white p-5 rounded-md'>
                <div className='flex items-center'>
                    <img className='w-14 h-14 mr-4 rounded-full' src="https://www.shutterstock.com/image-photo/jasna-lake-beautiful-reflections-mountains-260nw-1720823500.jpg" alt="" />
                    <input onClick={()=>window.my_modal_3.showModal()} className='border-2 border-slate-400 rounded-3xl p-3 w-full' type="text" name="" id="" placeholder='Start a post' />
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center '>
                        <MdPhotoSizeSelectActual className='text-blue-600 text-2xl mr-2'></MdPhotoSizeSelectActual>
                        <p>Photo</p>
                    </div>
                    <div className='flex items-center '>
                        <BsYoutube className='text-2xl text-green-600 mr-2'></BsYoutube>
                        <p>Video</p>
                    </div>
                    <div className='flex items-center '>
                        <MdTextSnippet className='text-[25px] text-orange-600 mr-2'></MdTextSnippet>
                        <p>Write article</p>
                    </div>
                </div>
            </div>

           
                <PostModal></PostModal>
          

        </div>
    )
}
