"use client";
import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Slide } from "react-awesome-reveal";

function Navbar() {
    const [toggle, settoggle] = useState(false);
    // const [isSticky, setIsSticky] = useState(false);
    const Toggle = () => {
        settoggle(!toggle);
    };
    // useEffect(() => {
    //     const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
    //     window.addEventListener('scroll', handleIsSticky);
    // }, [isSticky])

    const navlinkcss =
        "text-[15px] 3xl:text-[16px] font-poppins text-[#666680] font-[400] hover:underline decoration-black decoration-2 underline-offset-8";
    const mobNavlinkcss =
        "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";

    return (
        <>
            <nav className="relative">

                <div className={`flex w-full z-40 flex-row absolute justify-between 3xl:px-[222.17px] xl:px-[155px] items-center px-[30px]`}>
                    <div div className="w-[50px] h-[50px] 3xl:w-[148.319px] 3xl:h-[111.966px]  lg:w-[100px] lg:h-[100px] overflow-hidden">
                        <img className="object-cover scale-150 h-full w-full" src="https://s3-alpha-sig.figma.com/img/0a37/455b/0a5240d813addc675559ec333bbe8d69?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=huYqZQdk4WiZPQ2rhG0KweMZWkJSiY3mH~h6I1GsFXLIAfBXcNMuY3qTMRol1IQT2Ap~zquC6H3WEEdtVxRO7XyL69Sc13DZBQMcHFYyW6H2k6AQ1a1nNAUrtWIJZz8LJWtYut84kbqKxh9L0AwP8TYa7ib1fuCjMu24KhEh3pw6A4yChC7EKvt1tCD2~wtkS37OYJGM7Q4RdpEJ9mhzG~4q9t5MzRcGOkoAzbV5S6RYaA1tIPX5IRHRopccbyz62~CBs0CrtA0TV5SDx-edlPvk5ar8cxMbbZZlIOyAG6Hh4Z4HaFNZGvlwBn7tzwzFovlwnIUZGi5oR9oFuHXDIQ__" alt="logo" />
                    </div>
                    <div className="lg:block hidden">
                        <ul className="flex flex-row gap-x-[24px]">
                            <li className={navlinkcss}>
                                Courses
                            </li>
                            <li className={navlinkcss}>
                                About us
                            </li>
                            <li className={navlinkcss}>
                                Teachers
                            </li>
                            <li className={`${navlinkcss}`}>
                                Careers
                            </li>
                            <li className={`${navlinkcss}`}>
                                Contact
                            </li>
                        </ul>
                    </div>


                    <div className="flex flex-row gap-5"> <button className=' text-[14px] text-[#181B32] font-medium border-t-2 border-l-2 border-[#04B900] 3xl:px-[32px] bg-white shadow-md  3xl:py-[12px] py-3 px-5 rounded-[25px]'>Enroll now</button>
                        <button
                            onClick={Toggle}
                            className="text-black block lg:hidden Hamburger "
                        >
                            {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                        </button></div>
                </div>

            </nav>
            {toggle && (
                <Slide direction="right"
                    className="p-10 z-10 pl-10 duration-1000 delay-300 ease-in-out pt-36 fixed bg-white w-[100vw] h-[100vh]"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <ul className="flex flex-col gap-4">
                                <li className={navlinkcss}>
                                    Home
                                </li>
                                <li className={navlinkcss}>
                                    Courses
                                </li>
                                <li className={navlinkcss}>
                                    Shop
                                </li>
                                <li className={`${navlinkcss}`}>
                                    blogs
                                </li>
                            </ul>
                        </div>

                        <div className="lg:hidden block flex-col my-2">

                        </div>
                    </div >

                </ Slide>
            )
            }
        </>
    );
}

export default Navbar;