"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeaderCard = () => {

    const Data = [
        {
            imgsrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
            name: 'Kratika Kour'
        },
        {
            imgsrc: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
            name: 'Dinesh Phogat'
        },
        {
            imgsrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: 'Ramesh Gupta'
        },
        {
            imgsrc: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=sph',
            name: 'John Cena'
        },
        {
            imgsrc: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=sph',
            name: 'The Rock'
        },
        {
            imgsrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: 'Ritesh Singh'
        }
    ]

    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (

        <div className='lg:py-20 px-5 flex z-0 items-center lg:items-end gap-5 flex-row'>
            <Swiper
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    460: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => setSwiperRef(swiper)}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >{Data.map((item) => <SwiperSlide>
                <div className='flex flex-col 3xl:w-[190.141px] 3xl:h-[125.148px] relative items-center '>
                    <div className='shadow-lg  w-12 h-12 -mb-6 z-20'>
                        <img className='w-full h-full border-2 border-white  object-cover rounded-full' src={item.imgsrc} alt={item.name} />
                    </div>
                    <div className='p-6 rounded-2xl bg-[#524FD5]'>
                        <p className='text-white font-poppins my-1 text-[18px] text-center'>{item.name}</p>
                        <div className='flex items-center gap-2 flex-row'>
                            <div className='p-[5px] bg-white w-5 h-5 rounded-full overflow-hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 19 19" fill='white'>
                                    <g clip-path="url(#clip0_94_727)">
                                        <path d="M18.0531 9.55924C18.0531 8.94744 18.0035 8.33234 17.8977 7.73047H9.40857V11.1962H14.2699C14.0681 12.314 13.42 13.3028 12.4709 13.9311V16.1799H15.3711C17.0742 14.6123 18.0531 12.2974 18.0531 9.55924Z" fill="#4285F4" />
                                        <path d="M9.40859 18.3525C11.8359 18.3525 13.883 17.5556 15.3744 16.1798L12.4742 13.9311C11.6673 14.4801 10.6256 14.7909 9.4119 14.7909C7.06393 14.7909 5.07311 13.2069 4.3588 11.0771H1.36597V13.3954C2.8938 16.4345 6.00569 18.3525 9.40859 18.3525Z" fill="#34A853" />
                                        <path d="M4.35547 11.0771C3.97848 9.95932 3.97848 8.74896 4.35547 7.6312V5.31299H1.36595C0.0894439 7.85607 0.0894439 10.8522 1.36595 13.3953L4.35547 11.0771Z" fill="#FBBC04" />
                                        <path d="M9.40859 3.91417C10.6917 3.89433 11.9318 4.37715 12.8611 5.26343L15.4306 2.69389C13.8036 1.16606 11.6441 0.326079 9.40859 0.352535C6.00569 0.352535 2.8938 2.2706 1.36597 5.31304L4.35549 7.63124C5.0665 5.49823 7.06062 3.91417 9.40859 3.91417Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_94_727">
                                            <rect width="18" height="18" fill="white" transform="translate(0.228577 0.351929)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className='3xl:w-[83.508px] 3xl:h-[17.139px] w-20 h-5'>
                                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/bce0/22b9/5b1a7b1fa1d0a88eba23e20fae500041?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AIkjDh5xVmhNba1mfUQaDa~K-Lm~7WDPxZHhJO~roWXBCE8E-sA2QRW1IeKz3VWH2P-pHwei6iOeKKS8A12eOkin4wGhRBMkCql77d8lF5vXl86uMCgSTZ80SDozkHpalxuRp7dSwyKk68uEV~Bvv17mbdfGBPhfHfyqZKuEA4yJWBueestMKt5orWvRQa5IOQyaNjPj7LgnkYGPtOU3FF~gYjyMpql~pN3TAY-gX8fXtXjsoHyYiX~zHZohEkitR~Mi8B4GPG81~y53lFvgfX1Yre4Y5-vYN02ObCrq-M-OscQQQQF~yjm6EabcJurXkNds90XP78wxJZfdLYFzZg__' alt='star' />
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            )}
            </Swiper>
            <div className='py-3' onClick={nextHandler}>
                <TrendingFlatIcon className='text-white' />
            </div>
        </div>
    )
}

export default HeaderCard