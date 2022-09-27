import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCube as Cube } from 'swiper'

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const gif1 = require('../../assets/gif1.gif')
const gif2 = require('../../assets/gif2.gif')
const img3 = require('../../assets/img3.webp')

const EffectCube = () => {
    return (
        <div className='h-full'>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[Cube, Pagination]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                className='!block !w-[700px]'
            >
                <SwiperSlide className='text-left !bg-white'>
                  <img src={gif1} alt='gif1' className='!w-full !h-full'/>
                </SwiperSlide>
                <SwiperSlide className='text-left !bg-white'>
                  <img src={gif2} alt='gif2' className='!w-full !h-full'/>
                </SwiperSlide>
                <SwiperSlide className='text-left !bg-white'>
                  <img src={img3} alt='img3' className='!w-full !h-full'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default EffectCube;