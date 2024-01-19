"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MeetOurTeacher = () => {

    const Teachers = [
        {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/8c86/51f6/796af8ee7ac4bf0618fb13cc37f69442?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZuthA~KBK3ywbYdzpVtpkC9LRnKC-9-a-mpIlC5f8Meg~lvl1lyvV2x5VRmCa5VSJww3g0EbdyddF~uDjQgoQLSlol3unCCBe~p~2m8koCtAI5W8fqZ1DBlnO8Td0myGV6KlaarGTR~Lz9rEKup6vSnBeZGf7fEKNgA8IX1yTqhYSQYTIm-Jz3~tWf8lYEVAA8Ev1qlfXfumNghgzav6rEIUMVEQFcn7tx6BFtdcV0CAOIKx7kToXJEssBk5~3Q-aKRsWw09AMO373fwJiQMIcFCTZE4KPIt~-vqlO7DtIbmPIy4zFQnJ9pRMC4v90l~u6QT6RdOn~iBxp0sh00iw__',
            name: 'Rutuja Hardas',
            Country: 'German'
        }, {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/982c/8af2/8d6547c3e765d25201fa798fa3e95a34?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IvxSnzCzyEkWnotk76fPKzboVPgancSMmcnQOrdyLuX2iHqYBfreFaqJS0sgXH9TWPTc1n5KLWVf8wwEVYED5hbUg7PJiY01MRZs2B40pVt212TGIUo3OpWWZCwzypUga19PU0BTng5VZSPo33lL99ibYO-xTH-KKhwHjVrjpyvcn9~u9mYKfdqAYjFy0EPr5~TegubOfq1fCx82pZhKvu09e4GO67SgGKAqBQs5pr9h-aDZI3Sc9gyHxFmBUbdyUeCHo1RW8snbtaXtSwUbz33Rf3zf3QnPQqbocGleMjQCJ-1I~Va42LcdO8YYZ7qVCDvNBwTZ1JYqkVpEXSnjug__',
            name: 'Sakshi Garge',
            Country: 'French',
        }, {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3103/8736/42c60f686e5ff5d46a31494b85557dc1?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UgZQyTZvovWi-0XpVqnmgUIGVQBgz403RxjI1KESuUnE45Yj3gxhrmuS0T7BRddvtJa9apGD4kX9zAC4BVWD4HXh~nLdZodf9S4uSQxz58e4Ke1e6ySPee~YDZsh-hmAebssvkGgIQhce2ZR42vO5vOZPfmwRY-5vuKvGoiShUmhq9MzP~mrUXaj8PbnLsjVFFHNMsKtU6DxJyZyFM~2ZeX8cbr6fvVjPraXz~t~MRakSgFX33jMzrYoMPCrA03JdkSnCHMr09h8tlxjsMfp9285ia8PMqjt4XiPgsBWh1aC85R6KZtTnu~hlWKzV-ZBTEBPtdRqfVbuseMS6RK0OA__',
            name: 'Sanket parnerkar',
            Country: 'English & IELTs'
        }, {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3534/2d05/1c84053ae8836c6516c969519072db8f?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JzBAKcBz4-RKRGrWYjRqGVWUnmRekoM8GrJyZ8DfScSFjIX2V8rdlPw5O6HqH1A-YO~p4-lgb-VE9oybhbwCzrEmK2vXoiXrZc~WmvCLE-HonOXg0WSFfKMxvrc8useOvzyyBW8ya4nZfMFZE6~DbuQNnQVltmkpWGiPScGXBhkeYkNa5DImHdhiK61axB4biBGjYMaUfkpwU1i0~fhPExxRVo~lXKJaj5V9xYeOGEP4mtdO1-9a~BA-cspZRa2blt56FgzdXkpiZ6Nn4BoSCqgwxv0N5Wq5XeJexCoFdrNcZVS71AxzyFyW3dBnOrmxuvVyACZkFj~CSFtOG88K2Q__',
            name: 'ketaki Gorhe',
            Country: 'Spanish'
        }, {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3b0b/64f0/f5a94abf20c336c39217fd154abef3e5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c27qKJCPwZjUfVixZffKmItKnA6HzqAvkJyWXvQ439yjhBRjY-5FcOtz0RVqvWO3JEA5t25BQw2PciCI9zB04f6qTuGOiAWzDxh~0pymQLTA07OFWFdW9igUOG1zD1nlrYHaWXvrY3A54LXPBRy7MD1PiUjnPidbT9aoTjakUIdZP9JAlbcwYqkzYLCJxE8saDNwE1CUOLd7Rt2wb~6EeP2PfsDweRC9s2HaU7fDtQhjKV502pwVDvKVwqp0XbioQXitPvSjDtvT9rHOZdUvdSF-f32UXHqeu4n5CbGRTL6y6Xpe0dS0jj8oostrJSnUv7t-EHQmT2ZvVrRVSDPFQA__',
            name: 'Archana wadekar',
            Country: 'Japan'
        }, {
            imgsrc: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww',
            name: 'Niranjan koushal',
            Country: 'Hindi'
        }, {
            imgsrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: 'Apsara bhatt',
            Country: 'Turkish'
        }, {
            imgsrc: 'https://raajratna.com/wp-content/uploads/2019/01/person2.jpg',
            name: 'Hinata yuji',
            Country: 'Sanskrit'
        }
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 865,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            }, {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            }, {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            }
        ]
    };


    const slider = React.useRef(null);

    return (
        <div id="teachers" className='mx-[30px] 3xl:mx-[195px] 3xl:py-[120px] py-[100px] xl:mx-[155px]'>

            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[#666680] text-sm 3xl:text-[27px] font-[Kalam-Regular]'>Key Persons</p>
                    <h3 className='font-[600] text-[#181B32] text-[21px] lg:text-[33px]'>Meet Our Teachers</h3>
                </div>
                <div className='grid grid-cols-2 gap-x-5 3xl:gap-x-[30px] place-items-start lg:mr-4'>
                    <div className='rounded-full hover:shadow-md text-center border-2 p-2 hover:border-[#524FD5] hover:bg-[#524FD5] border-[#E8E8F6]' onClick={() => slider?.current?.slickPrev()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M15.111 6.43115L7.88995 13.6522L15.111 20.8733" stroke="#E8E8F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='rounded-full border-2 hover:border-[#524FD5]  border-[#E8E8F6] hover:shadow-md hover:bg-[#524FD5] p-1 text-white' onClick={() => slider?.current?.slickNext()}>
                        <ChevronRightIcon className='text-[#E8E8F6]' fontSize='large' />
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <Slider ref={slider} {...settings}>{
                    Teachers.map((item, index) =>
                        <div key={index} className='flex 3xl:w-[286px] 3xl:h-[443.793px] flex-col items-center'>
                            <div className='3xl:w-[286px] xl:h-[160px] 3xl:h-[300px] md:w-[230px] md:h-[230px] h-[250px] rounded-xl xl:w-[190px] overflow-hidden '>
                                <img className='w-full h-full scale-90 md:scale-100 object-cover object-top' src={item.imgsrc} alt={`${item.title}'s img`} />
                            </div>
                            <div className='flex md:w-[200px] 3xl:w-[286px] xl:w-[200px] flex-col text-center my-2'>
                                <h4 className='text-[#181B32] font-[500]'>{item.name}</h4>
                                <p className='text-xs text-[#666680]'>{item.Country}</p>
                            </div>
                        </div>)}
                </Slider>
            </div>
        </div>
    )
}

export default MeetOurTeacher


/*



*/
