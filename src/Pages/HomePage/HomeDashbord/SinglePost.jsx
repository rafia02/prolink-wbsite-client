import React from 'react'

export const SinglePost = ({ post }) => {
  const { text, img } = post
  return (
    <div className='rounded-md bg-white mb-5'>
      <h1 className='text-lg p-5 mb-2 capitalize'>{text}</h1>
      <div>
        {
          img.map(i => <img className='h-auto w-full pb-8 ' src={i} alt="" />)
        }
      </div>

    </div>
  )
}
