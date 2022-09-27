import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlidesPerView from './SlidesPerView';
import EffectCube from './EffectCube';
import ThumbGallery from './ThumbGallery';
import ParallaxSlide from './Parallax';

const VerticalSlides = () => (
    <Swiper
        direction={"vertical"}
        spaceBetween={50}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
    >
        <SwiperSlide className='text-left px-96'>
            <p className='text-5xl text-[#632EF6] font-semibold'>
                Some Examples of Usage
            </p>
        </SwiperSlide>
        <SwiperSlide className='text-left px-96'>
            <p className='text-3xl text-[#632EF6] font-semibold'>
                1. Space Between & Slides per View
            </p>
        </SwiperSlide>
        <SwiperSlide className='!px-48 !py-12 h-96 !bg-[#03222F] !block'>
            <SlidesPerView />
        </SwiperSlide>
        <SwiperSlide className='text-left px-96'>
            <p className='text-3xl text-[#632EF6] font-semibold'>
                2. Effect Cube
            </p>
        </SwiperSlide>
        <SwiperSlide className='!px-48 !py-12 !bg-[#03222F] !block h-[calc(100% - 30px)/2]'>
            <EffectCube />
        </SwiperSlide>
        <SwiperSlide className='text-left px-96'>
            <p className='text-3xl text-[#632EF6] font-semibold'>
                3. Thumbs Gallery
            </p>
        </SwiperSlide>
        <SwiperSlide className='!px-48 !py-12 !bg-[#03222F] !block h-[calc(100% - 30px)/2] relative'>
            <p className='absolute top-8 left-12 text-4xl text-[#FFAB00]'><s>Waifu Selector</s></p>
            <p className='absolute top-20 left-12 text-4xl text-[#FFAB00]'>Thumbs Gallery</p>
            <ThumbGallery />
        </SwiperSlide>
        <SwiperSlide className='text-left px-96'>
            <p className='text-3xl text-[#632EF6] font-semibold'>
                4. Parallax
            </p>
        </SwiperSlide>
        <SwiperSlide className='!px-48 !py-12 !bg-[#03222F] !block h-[calc(100% - 30px)/2] relative'>
            <ParallaxSlide />
        </SwiperSlide>
    </Swiper>
)

export default VerticalSlides;