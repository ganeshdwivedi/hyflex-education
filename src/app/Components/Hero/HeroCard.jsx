"use client"
import React, { useRef, useState } from 'react';
import HeroVideoSVG from '@/SVG/HeroVideoSVG';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Custom from '@/SVG/Slider/Custom';
import CustomHero from '@/SVG/Slider/CustomHero';
import CustomPRev from '@/SVG/Slider/CustomPRev';

const HeroCard = () => {

    const Data = [
        {
            imgsrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
            name: 'Kratika Koushal'
        },
        {
            imgsrc: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            name: 'Dinesh Phogat'
        },
        {
            imgsrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: 'Ramesh Gupta'
        }
    ]

    const redirectToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    const swiperRef = useRef(null);


    const nextHandler = () => {
        redirectToSlide(2);
        console.log("nextClicked")
    };
    const PrevHandler = () => {
        redirectToSlide(0);
        console.log("prevClicked")
    };

    return (
        <div className='relative'>
            <div>
                <Custom className={`2xl:left-[34rem] sm:-top-6 xl:left-[22rem] lg:left-[22rem] md:right-32 right-10 -top-20`} />
            </div>
            <div onClick={PrevHandler}>
                <CustomPRev className={`2xl:left-[27rem] sm:-top-6 xl:left-[22rem] lg:left-[22rem] md:right-32 right-10 `} />
            </div>
            <div onClick={nextHandler}>
                <CustomHero className={`lg:right-52 z-0 3xl:-right-36 right-20 -top-20 lg:bottom-0 absolute`} />
            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >{Data.map((item) => <SwiperSlide>
                <div className='bg-white rounded-2xl relative 3xl:w-[396px] 3xl:h-[501px] overflow-hidden  w-[300px] h-[370px] flex flex-col items-center'>
                    {/* Mac Bar */}
                    <div className='w-[300px] relative 3xl:w-[396px] bg-[#181B32] h-[39.069px] '>
                        <div className='absolute top-4 left-5 flex flex-row gap-3 '>
                            <div className='w-[8.64px] rounded-full h-[8.64px] bg-[#FF3D00]'></div>
                            <div className='w-[8.64px] h-[8.64px] rounded-full bg-[#F1BC00]'></div>
                            <div className='rounded-full w-[8.64px] h-[8.64px] bg-[#4ECC00]'></div>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center'>
                        <div className='overflow-hidden mt-10 3xl:w-[300px] 3xl:h-[300px] w-[200px] h-[200px] rounded-full'>
                            <img className='w-full h-full object-cover ' src={item.imgsrc} alt='' />

                        </div>
                        {/* VIdeo SVG image */}
                        <HeroVideoSVG className={"top-[11.5rem] 3xl:top-[16.5rem] hover:scale-105 right-0"} />
                        <p className='22px font-[500] pt-[15px] uppercase'>{item.name}</p>
                        <div className='bg-[#CCD7F9] rounded-lg w-32 h-2 my-2'></div>
                        <div className='bg-[#F0F3FD] w-24 rounded-lg h-2'></div>
                    </div>
                </div>
            </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default HeroCard