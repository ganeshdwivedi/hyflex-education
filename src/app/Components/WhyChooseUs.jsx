"use client"
import GlassIconssvg from '@/SVG/GlassIconssvg'
import Playsvg from '@/SVG/Playsvg'
import Sendsvg from '@/SVG/Sendsvg'
import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const WhyChooseUs = () => {
    return (
        <Slide direction='up' triggerOnce="true">
            <div className='xl:px-[155px] 3xl:px-[325px] py-10 lg:py-20 xl:py-[120px]'>
                <div className='flex flex-col items-center  mb-[50px] xl:mb-[71px]'>
                    <p className='text-[#B0B0C0] text-sm 3xl:text-[27px] font-[Kalam-Regular]'>Why Choose Us</p>
                    <h2 className='font-[600] text-[#181B32] 3xl:text-[40px] text-[21px] lg:text-[33px]'>Our Values</h2>
                </div>
                <div className='flex flex-col 3xl:gap-10 lg:gap-y-0 gap-y-10 md:flex-row'>
                    <div className='flex flex-col items-center'>
                        <Playsvg />
                        <Fade>
                            <h3 className='text-[24px] my-5 text-[#181B32] font-[500]'>Proven Success</h3>
                            <p className='text-[16px]  mx-5 text-center text-[#666680]'>Join us for a track record of student success, proving our commitment to helping you achieve your language goals.</p>
                        </Fade>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Sendsvg />
                        <Fade>
                            <h3 className='text-[24px] my-5 text-[#181B32] font-[500]'>Innovative Teaching</h3>
                            <p className='text-[16px] mx-10 text-center text-[#666680]'>Experience a modern approach to learning with a mix of traditional methods and cutting-edge techniques for an engaging language journey.</p>
                        </Fade>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GlassIconssvg />
                        <Fade>
                            <h3 className='text-[24px] my-5 text-[#181B32] font-[500]'>Community Support</h3>
                            <p className='text-[16px] mx-10 text-center text-[#666680]'>Join a supportive language-learning community, emphasizing collaboration, cultural exchange, and constant motivation for language proficiency.</p>
                        </Fade>
                    </div>
                </div>

            </div>
        </Slide>
    )
}

export default WhyChooseUs