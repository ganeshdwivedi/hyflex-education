import React from 'react'
import TabsCard from './TabsCard'
import OurCoursesDesign from '@/SVG/OurCoursesDesign'
import OurCoursesImage from '../../Assets/OurCoursesImage.png'
import Image from 'next/image'
const OurCourses = () => {
    return (
        <div className='mx-[30px] 3xl:my-[120px] 3xl:mx-[185px] my-[100px] xl:mx-[155px] flex flex-col xl:flex-row gap-5 items-center relative'>

            <div className=''>
                <Image
                    src={OurCoursesImage}
                    alt="Picture of the author"
                    width={587}
                    height={566}
                />

            </div>
            <div className='xl:my-0 my-10'>
                <p className='text-xs relative font-[Kalam-Regular] 3xl:text-[27px] text-[#B0B0C0]'>Our Courses </p>
                <h3 className='font-[600] 3xl:text-[40px] relative text-[#181B32] text-[21px] lg:text-[33px]'>Explore our courses <OurCoursesDesign className={"top-1 3xl:top-5"} /><br />
                    Your Multilingual Journey Begins Here!</h3>
                <div className='my-2'>
                    <TabsCard />
                </div>
            </div>
        </div>
    )
}

export default OurCourses