import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

import "swiper/css";
import "swiper/css/pagination";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const SlidesPerView = () => {
    return (
        <div className='h-full'>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                className='!block'
            >
                {
                    numbers.map((number: any) => (
                        <SwiperSlide className='text-left !bg-white' key={number}>
                            <p className='text-5xl text-[#FFAB00] font-semibold'>
                                {number}
                            </p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SlidesPerView;