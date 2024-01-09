"use client"
import React from 'react'
import HeroVideoSVG from '@/SVG/HeroVideoSVG'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Slide } from 'react-awesome-reveal';
import Eclipsesvg from '../../../SVG/Eclipsesvg';
import HeroCard from './HeroCard';

const Hero = () => {
    return (
        <div className='flex flex-col 3xl:h-[896px] 3xl:px-[209px] lg:gap-0 gap-10 lg:flex-row lg:items-start justify-between xl:px-[147px]  m-2 bg-[#fdf2fb] px-[22px] py-[100px] lg:pb-[160px] rounded-[25px] relative overflow-hidden '>
            {/* big circle blue design */}
            <Eclipsesvg className={"top-0 -left-36"} />

            {/* Hero Left */}
            <Slide triggerOnce="true">
                <div className='flex lg:pt-[150px] 3xl:pt-[254px] flex-col items-start'>
                    <h3 className='3xl:text-[59px] font-[PlayfairDisplay-Medium] xl:text-[50px] text-[36px] leading-tight lg:text-[30px] text-[#181B32] '>Become Fluent in <br className='lg:block hidden' /><span className='text-[#524FD5] border border-[#7077E4] rounded-md p-1 border-dashed'>Foreign Language</span><br /> with Hyfleex</h3>
                    <p className='text-[#666680] mt-[18px] text-[16px] font-poppins'>Discover Spanish, German, English, IELTS, Japanese, and more languages <br /> with Hyfleex. Break barriers, build connections—start your multilingual journey!</p>
                    <button className='text-[#524FD5] mt-[32px] font-[500] text-[18px]'>Explore courses <ArrowRightAltIcon /></button>

                </div>
            </Slide>
            {/* Hero Right */}
            <Slide direction='right'>
                <div className='xl:pt-[200px] mr-[72px] 3xl:w-[396px] 3xl:h-[501px] 3xl:pt-[190px] lg:pt-[120px] w-[100vw] lg:w-[30vw] xl:w-[27vw] lg:self-start md:self-center '>
                    <HeroCard />
                </div>
            </Slide>
        </div>
    )
}

export default Hero