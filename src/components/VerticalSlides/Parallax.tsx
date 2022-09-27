import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Parallax.css'


const ParallaxSlide = () => {
    return (
        <>
            <Swiper
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="!w-[750px]"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                />
                <SwiperSlide className="!bg-transparent !block">
                    <div className="w-64 h-full divContainer text-white text-left p-4">
                        <p className="text-[40px]">This is the first Title</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent !block">
                    <div className="w-64 h-full divContainer text-white text-left p-4">
                        <p className="text-[40px]">This is the Second Title</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="!bg-transparent !block">
                    <div className="w-64 h-full divContainer text-white text-left p-4">
                        <p className="text-[40px]">This is the Third Title</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default ParallaxSlide;
