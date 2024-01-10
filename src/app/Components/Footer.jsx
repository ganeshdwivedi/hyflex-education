import Facebook from '@/SVG/Social/Facebook'
import Instagram from '@/SVG/Social/Instagram'
import Twitter from '@/SVG/Social/Twitter'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col 3xl:mx-[195px] 3xl:mt-[120px] overflow-hidden mb-5 relative rounded-3xl mx-[30px] xl:mx-[155px] py-10 bg-[#f0f3fd]'>
            <div className='flex mx-10 flex-col mb-10 md:flex-row items-center justify-between'>
                <div>
                    <h3 className='uppercase text-[36px] font-[600] text-[#363679]'>Hyfleex</h3>
                    <p className='text-[#666680] text-[14px]'>Block 3, Bhagyalaxmi Apartment<br />
                        Old D'Souza Colony, College Rd,<br />
                        opp. Model Colony, Nashik, Maharashtra</p>
                </div>
                <div className='flex flex-col py-2 md:0 lg:flex-row gap-5'>
                    <p>careers</p>
                    <p>Teachers</p>
                    <p>Support</p>
                    <p>Contact</p>
                </div>
                <div className='flex flex-row py-4'>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                </div>
            </div>

            <div className='flex gap-y-1 py-3 lg:gap-y-0 flex-col  sm:flex-row w-full absolute bottom-0 justify-between px-10 bg-[#ADBBF4]'>
                <p className='lg:text-[14px] text-[#666680] text-[13px]'>WWW.hyfleex.com</p>
                <p className='lg:text-[14px] text-[#666680] text-[13px]'>Designed By: yashwebdesign.com</p>
            </div>
        </div>
    )
}

export default Footer