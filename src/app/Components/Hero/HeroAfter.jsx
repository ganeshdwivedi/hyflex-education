"use client"
import React from 'react'
import HeaderCard from './HeaderCard';

const HeroAfter = () => {

    return (

        <div className='xl:mx-[155px] 3xl:h-[129px] 3xl:mx-[195px] -mt-12 lg:py-0 py-20 mx-[30px] items-center h-[300px] lg:h-20 relative flex flex-col lg:flex-row justify-between bg-[#7077E4] rounded-2xl '>
            <div className='flex flex-row items-center lg:mx-20'>
                <div className='border-2 mb-0 3xl:ml-[129px] lg:mb-16 justify-center overflow-hidden bg-white 3xl:w-[153.468px] 3xl:h-[147.628px] w-24 h-24 flex flex-col items-center border-[#4A45BD] gap-y-0 rounded-3xl py-2'>
                    <h3 className='text-[#4D4BB6] 3xl:text-[36px] font-bold'>4.9</h3>
                    <p className='text-sm 3xl:text-[16px] text-[#666680]'>Rated on</p>
                    <div className='w-20 3xl:w-[82.416px] 3xl:h-[28.45px] overflow-hidden'> <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/e9dc/2c07/ac0c7265fd3f68c4f702d3872fa7f764?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mG0pQMBFItk6s6M4beaUkRlbsVE8LzLpbiVDjZWEGL7DWrEqTMYt-UTfS4Uls2juxQCUB7d3~6oy2WMY7f-9r1inmNXwLhDuEEGaWdF4VEIuJSEzLh3xijjJo4fFHPkgHADjvRWFRVB2Ht~wmc6ihdAZnY06ksyYsIAgAU45Nvr7expi9ErsNFrdSa~FH6UiNHmu87d~3vMXCbtb~rzjFAWK1DAfAObfmf6Up9n~oraFmpOba4Owvjt9gbfNOgZCzu4-5oneFoFS03QS5JZXX0UHbxuT8tC8KSMlVE-6kKEq9KOf7cSlMo5WXCFnL-J2-DbNCpICCMyCFlc~o843mA__' /></div>
                </div>
                <div className='ml-[41px]'>
                    <p className='3xl:text-[22px] text-white'>We help 1500+ students to <br />
                        Achieve their goals</p>
                </div>
            </div>
            <div className='my-4 w-[80vw] lg:w-[35vw] mb-0 lg:mb-24'>
                <HeaderCard />
            </div>

        </div>

    )
}

export default HeroAfter