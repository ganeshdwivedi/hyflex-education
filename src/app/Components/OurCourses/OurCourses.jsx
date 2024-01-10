import React from 'react'
import TabsCard from './TabsCard'
import OurCoursesDesign from '@/SVG/OurCoursesDesign'
import OurCoursesImage from '../../Assets/OurCoursesImage.png'
import Image from 'next/image'

const OurCourses = () => {
    return (
        <div className='mx-[30px] 3xl:my-[120px] 3xl:mx-[185px] my-[100px] xl:mx-[155px] grid grid-cols-1 xl:grid-cols-2 place-items-center gap-5'>

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
                <h3 className='font-[600] 3xl:text-[40px] xl:[35px] relative text-[#181B32] text-[21px] lg:text-[33px]'>Explore our courses <OurCoursesDesign className={"lg:top-3 lg:left-[20rem] 3xl:top-5 3xl:left-[24.5rem]"} /><br />
                    Your Multilingual Journey Begins Here!</h3>
                <div className='my-2'>
                    <TabsCard />
                </div>
            </div>
        </div>
    )
}

export default OurCourses