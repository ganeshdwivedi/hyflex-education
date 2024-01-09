"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {

    const Data = [
        { name: 'Shubham', text: 'The best german class in Nashik with proper guidance and Ms.Rutuja takes in a lot of effort to teach. Each and every concept is explained by her in detail without any hesitation. And there is a lot of interaction with the other students which helps to boost confidence. Would highly recommend.' },
        { name: 'Ganesh', text: 'Has best instructors to develop German language skills efficiently for beginners as well as professionals. Instructors helped me build my confidence during difficulties and kept me motivated until I reach my goals!They have flexible schedules, affordable courses and interactive sessions. Highly recommended.' },
        { name: 'Deepak D', text: "I have completed my A1 course. It has been a fun learning ride. The concepts were eased into us with the help of many interactive activities, games and worksheet. Ma'am has been really good with her knowledge and efforts. I would highly recommend you if u really wanna learn German." },
        { name: 'Vinay s', text: 'The best german class in Nashik with proper guidance and Ms.Rutuja takes in a lot of effort to teach. Each and every concept is explained by her in detail without any hesitation. And there is a lot of interaction with the other students which helps to boost confidence. Would highly recommend.' },
        { name: 'Neeraj t', text: 'Has best instructors to develop German language skills efficiently for beginners as well as professionals. Instructors helped me build my confidence during difficulties and kept me motivated until I reach my goals!They have flexible schedules, affordable courses and interactive sessions. Highly recommended.' },
        { name: 'Gourav pr', text: "I have completed my A1 course. It has been a fun learning ride. The concepts were eased into us with the help of many interactive activities, games and worksheet. Ma'am has been really good with her knowledge and efforts. I would highly recommend you if u really wanna learn German." }]



    return (
        <div className='mx-[30px] py-[30px] 3xl:mx-[195px] 3xl:py-[120px] flex flex-col lg:py-[100px] xl:mx-[155px]'>
            <div className='self-center text-center'>
                <p className='text-[#666680] text-sm 3xl:text-[27px] font-[Kalam-Regular]'>Student Voices</p>
                <h3 className='font-[600] text-[#181B32] text-[21px] lg:text-[33px]'>Testimonials and Insights from Our Community</h3>
            </div>
            <div className=''>
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
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className="TestiomnialSwipper"
                >{
                        Data.map((item) => <SwiperSlide>  <div className={`flex flex-col my-10 rounded-3xl shadow-lg p-4`}>
                            <div className='flex flex-row justify-between mb-4'>
                                <div className='flex flex-row items-center gap-3'>
                                    <div className='bg-red-500 place-self-center text-white w-10 h-10 px-4 py-2 rounded-full overflow-hidden'>A</div>
                                    <p className='text-[#181B32] text-lg'>{item.name}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="29" viewBox="0 0 38 29" fill="none">
                                    <path d="M9.5873 28.73C7.9019 28.73 6.50962 28.4002 5.41045 27.7407C4.31128 27.0812 3.3953 26.2019 2.66252 25.1027C1.92974 23.9303 1.38016 22.6113 1.01377 21.1457C0.720653 19.6801 0.574097 18.3611 0.574097 17.1887C0.574097 13.5981 1.49007 10.3006 3.32202 7.29615C5.22725 4.29175 8.12174 1.87358 12.0055 0.041626L12.9947 2.02013C10.7964 2.97275 8.89116 4.43831 7.27904 6.41682C5.66692 8.39532 4.78758 10.4105 4.64103 12.4623C4.49447 13.5614 4.56775 14.5873 4.86086 15.5399C6.17987 14.2942 7.79199 13.6713 9.69722 13.6713C11.8223 13.6713 13.6176 14.3675 15.0832 15.7598C16.5487 17.0788 17.2815 18.9107 17.2815 21.2556C17.2815 23.454 16.5121 25.2493 14.9732 26.6416C13.5077 28.0338 11.7124 28.73 9.5873 28.73ZM29.5922 28.73C27.9068 28.73 26.5145 28.4002 25.4154 27.7407C24.3162 27.0812 23.4002 26.2019 22.6674 25.1027C21.9347 23.9303 21.3851 22.6113 21.0187 21.1457C20.7256 19.6801 20.579 18.3611 20.579 17.1887C20.579 13.5981 21.495 10.3006 23.3269 7.29615C25.2322 4.29175 28.1266 1.87358 32.0104 0.041626L32.9996 2.02013C30.8013 2.97275 28.8961 4.43831 27.2839 6.41682C25.6718 8.39532 24.7925 10.4105 24.6459 12.4623C24.4994 13.5614 24.5727 14.5873 24.8658 15.5399C26.1848 14.2942 27.7969 13.6713 29.7021 13.6713C31.8272 13.6713 33.6225 14.3675 35.0881 15.7598C36.5536 17.0788 37.2864 18.9107 37.2864 21.2556C37.2864 23.454 36.517 25.2493 34.9781 26.6416C33.5126 28.0338 31.7173 28.73 29.5922 28.73Z" fill="#B91D8C" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-[#666680] text-sm'>{item.text}</p>
                            </div>
                        </div> </SwiperSlide>
                        )}
                </Swiper>

            </div>
        </div>
    )
}

export default Testimonial