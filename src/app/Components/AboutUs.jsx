import GirlRaise from '@/SVG/GirlRaise'
import React from 'react'
import AboutUsImage from '../Assets/AboutUsImage.png'
import Image from 'next/image'

const AboutUs = () => {

    return (
        <div className='mx-[30px] 3xl:my-[120px] 3xl:mx-[185px] items-center my-[100px] xl:mx-[155px] grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 relative'>
            <div className=''>
                <p className='text-[#B0B0C0] 3xl:text-[27px] text-sm font-[Kalam-Regular]'>About us</p>
                <h3 className='font-[500] lg:leading-tight font-poppins 3xl:text-[40px] text-[#181B32] text-[21px] lg:text-[33px]'>
                    Promoting global connectivity <GirlRaise /> <br />
                    through language and culture.
                </h3>
                <p className='mt-7 xl:mt-0 xl:mt-3 xl:text-[16px] 3xl:text-[18px] font-poppins text-[#666680] font-[400]'>The mission of Hyfleex is to provide students with the opportunity to learn about different languages and cultures. The classes aim to promote an understanding and appreciation of the languages and cultures among students. Additionally, the types seek to prepare students for future academic and professional opportunities in which they may encounter the language.  </p>
            </div>
            <div className='3xl:w-[490px] 3xl:h-[538.157px] xl:w-[500px] md:w-[350px]'>
                <Image
                    src={AboutUsImage}
                    alt="Picture of the author"
                    width={587}
                    height={566}
                />
            </div>
        </div >
    )
}

export default AboutUs