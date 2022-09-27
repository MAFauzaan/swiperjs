import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Thumbs, FreeMode, Navigation } from 'swiper'

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const ThumbGallery = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>('')

    return (
        <div className='h-full'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="!w-[700px] !h-[350px]"
            >
                <SwiperSlide>
                    <img src="https://anievo.id/wp-content/uploads/2021/11/yor.jpg" alt='mamaYor' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rushia-thumbor.mediaformasi.com/unsafe/1000x0/content/images/size/w1000/2020/11/miku-s2.jpg" alt='mikuOverrated' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i0.wp.com/1.bp.blogspot.com/-lFkrh0wwbiQ/XtY8gXn2mSI/AAAAAAAADmk/ZqpetQIpaWo7fF-NQx9NcBhXgPg-SZ19QCK4BGAsYHg/d/thumb-1920-1003525.jpg?w=1170&ssl=1" alt='hayasaskuy' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.kaorinusantara.or.id/wp-content/uploads/2017/07/megumi-kato-1.jpg" alt='waifuMuRaPunyaMuka' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/432/692/1019/anime-my-teen-romantic-comedy-snafu-yukino-yukinoshita-wallpaper-preview.jpg" alt='waifuMuRataMas' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://sanepo.com/wp-content/uploads/2022/04/zzzzzzzzzzzrap2.jpg" alt='raph' />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="!h-[200px]"
            >
                <SwiperSlide>
                    <img src="https://anievo.id/wp-content/uploads/2021/11/yor.jpg" alt='mama yor' className='h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://rushia-thumbor.mediaformasi.com/unsafe/1000x0/content/images/size/w1000/2020/11/miku-s2.jpg" alt='mikuOverrated' className='h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i0.wp.com/1.bp.blogspot.com/-lFkrh0wwbiQ/XtY8gXn2mSI/AAAAAAAADmk/ZqpetQIpaWo7fF-NQx9NcBhXgPg-SZ19QCK4BGAsYHg/d/thumb-1920-1003525.jpg?w=1170&ssl=1" alt='hayasaskuy' className='h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.kaorinusantara.or.id/wp-content/uploads/2017/07/megumi-kato-1.jpg" alt='waifuMuRaPunyaMuka' className='h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://c4.wallpaperflare.com/wallpaper/432/692/1019/anime-my-teen-romantic-comedy-snafu-yukino-yukinoshita-wallpaper-preview.jpg" alt='waifuMuRataMas' className='h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://sanepo.com/wp-content/uploads/2022/04/zzzzzzzzzzzrap2.jpg" alt='raph' className='h-full'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ThumbGallery;