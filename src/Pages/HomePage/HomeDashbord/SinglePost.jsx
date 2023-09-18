
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';


export const SinglePost = ({ post }) => {
  const { text, img } = post
  return (
    <div className='rounded-md bg-white mb-2'>
      <h1 className='text-lg p-5 mb-2 capitalize'>{text}</h1>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[550px]"
      >
        {
          img.map(i =><SwiperSlide> <img className='h-full w-full pb-8 ' src={i} alt="" /></SwiperSlide>)
        }
      </Swiper>


      
    </div>
  )
}
