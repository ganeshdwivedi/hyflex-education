import GirlRaise from '@/SVG/GirlRaise'
import React from 'react'
import AboutUsImage from '../Assets/AboutUsImage.png'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className='mx-[30px] py-10 3xl:py-[120px] 3xl:mx-[195px] xl:mx-[155px] lg:py-[100px]'>
            <div className='flex flex-col relative xl:flex-row justify-between gap-10 items-center gap-x-40'>
                <div>
                    <p className='text-[#B0B0C0] 3xl:text-[27px] text-sm font-[Kalam-Regular]'>About us</p>
                    <h3 className='font-[500] lg:leading-tight font-poppins 3xl:text-[40px] text-[#181B32] text-[21px] lg:text-[33px]'>
                        Promoting global connectivity <GirlRaise /> <br />
                        through language and culture.
                    </h3>
                    <p className='mt-7 xl:mt-0 3xl:my-3 text-[18px] font-poppins text-[#666680] font-[400]'>The mission of Hyfleex is to provide students with the opportunity to learn about different <br className='2xl:block hidden' /> languages and cultures. The classes aim to promote an understanding and appreciation of the <br className='2xl:block hidden' /> languages and cultures among students. Additionally, the types seek to prepare students for <br className='2xl:block hidden' /> future academic and professional opportunities in which they may encounter the language.  </p>
                </div>
                <div className='3xl:w-[490px] 3xl:h-[538.157px] md:w-[350px]'>
                    <Image
                        src={AboutUsImage}
                        alt="Picture of the author"
                        width={490}
                        height={538}
                    />
                </div>
            </div>
        </div >
    )
}

export default AboutUs