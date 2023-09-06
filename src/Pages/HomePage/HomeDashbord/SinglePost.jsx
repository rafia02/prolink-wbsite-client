import React from 'react'

export const SinglePost = ({post}) => {
    const {text, img} = post
  return (
    <div className='rounded-md bg-white mb-5'>
        <h1 className='text-lg p-5 mb-2 capitalize'>{text}</h1>
        <img className='h-auto w-full pb-8 ' src={img} alt="" />
    </div>
  )
}
