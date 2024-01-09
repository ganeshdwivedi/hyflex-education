import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const GetInTouch = () => {
    return (
        <div className='xl:px-[220px] 3xl:px-[195px] 3xl:py-[120px] px-[30px] flex flex-col lg:py-[100px]'>
            <div className='self-center text-center pb-[50px]'>
                <p className='text-xs text-[#B0B0C0] font-[Kalam-Regular] 3xl:text-[27px]'>Get in Touch</p>
                <h3 className='font-[600] text-[#181B32] text-[21px] lg:text-[33px] my-2'>Contact Us Today!</h3>
                <p className='text-xs text-[#666680]'>Have questions, inquiries, or just want to connect? Reach out to us through the contact information below. Our dedicated team is here to assist you and ensure you have the information you need. We look forward to hearing from you!</p></div>
            <div>
                <div className='flex lg:flex-row flex-col gap-10 3xl:mx-[130px]'>
                    <div className='p-[20px] 3xl:w-[620px] border-2 border-r-pink-600 border-r-2 border-slate-200 rounded-lg'>
                        <form className='flex flex-col'>
                            <div className='my-[30px]'>
                                <label>Name</label><br />
                                <input className='border-b-2 xl:w-[25vw] lg:w-[40vw] w-full mt-[30px] border-black' type="text" />
                            </div>
                            <div className='mb-[30px]'>
                                <label>Email</label><br />
                                <input className='border-b-2 xl:w-[25vw] lg:w-[40vw]  mt-[30px] w-full border-black' type="email" />
                            </div>
                            <div className='mb-[30px]' text-sm>
                                <label>What are you looking for</label><br />
                                <input className='m-2' type="radio" id="lang1" name="lang" value="spanish" />
                                <label className='mr-4 text-sm' for="lang1">Spanish</label>
                                <input className='m-2' type="radio" id="lang2" name="lang" value="french" />
                                <label className='mr-4 text-sm' for="lang2">French</label>
                                <input className='m-2' type="radio" id="lang3" name="lang" value="japanese" />
                                <label className='mr-4 text-sm' for="lang3">Japanese</label>
                                <input className='m-2' type="radio" id="lang4" name="lang" value="german" />
                                <label className='mr-4 text-sm' for="lang4">German</label><br />
                                <input className='m-2' type="radio" id="lang5" name="lang" value="english" />
                                <label className='mr-4 text-sm' for="lang5">English & IELTS</label>
                                <input className='m-2' type="radio" id="lang4" name="lang" value="sanskrit" />
                                <label className='mr-4 text-sm' for="lang4">Sanskrit</label>
                            </div>
                            <div className='mb-[30px]'>
                                <label>Message</label><br />
                                <input className='border-b-2 w-full lg:w-[40vw] xl:w-[25vw] my-[30px] border-black' type="text" />
                            </div>
                            <button className='px-4 py-2 self-end bg-[#524FD5] text-white rounded-[25px]'>Send Message -</button>
                        </form>
                    </div>
                    <div className='flex flex-col lg:py-0 py-20 xl:m-0 lg:w-[45vw] xl:w-[30vw] my-10'>
                        <div className='mb-8'>
                            <div className='flex flex-row gap-5 mb-2 items-center'>
                                <div className='p-2 bg-[#CCD7F9] rounded-md'><FmdGoodOutlinedIcon /></div><p className='text-[#181B32] text-sm md:text-[18px] font-[700]'>Address:</p>
                            </div>
                            <p className='text-[#666680] text-sm md:text-[16px]'>Block 3, Bhagyalaxmi Apartment Old D'Souza Colony, College Rd, opp. Model Colony, Nashik, Maharashtra 422005</p>
                        </div>
                        <div className='flex flex-col md:flex-row mb-8 justify-between '>
                            <div className=''>
                                <div className='flex my-2 flex-row gap-5 items-center'>
                                    <div className='p-2 bg-[#CCD7F9] rounded-md'><LocalPhoneOutlinedIcon /></div><p className='text-[#181B32] text-sm md:text-[18px] font-[700]'>Phone number:</p>
                                </div>
                                <p className='text-[#666680] text-sm md:text-[16px]'>+91 9922185551</p>
                            </div>
                            <div>
                                <div className='flex my-2 flex-row gap-5 items-center'>
                                    <div className='p-2 bg-[#CCD7F9] rounded-md'><EmailOutlinedIcon /></div><p className='text-[#181B32] text-sm md:text-[18px] font-[700]'>Email:</p>
                                </div>
                                <p className='text-[#666680] text-sm md:text-[16px]'>Contact: info@hyfleex.com</p>
                            </div>

                        </div>
                        <div className=''>
                            <p className='text-[#666680] text-[16px]'>Find Our Office Easily</p>
                            <div className='my-2 overflow-hidden w-full h-full'>
                                <img className='w-full scale-150 h-full object-cover' src='https://s3-alpha-sig.figma.com/img/dc39/d43c/08901c441e41de72ae906ff41d50d407?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8Y1K~8kxsSdcMAEKFBvJ3KNHJ0iSQ~TDa-k7Wfn3xBnNpPlFYtoTVB-5Wswd-4pCTVou-NzpyuSW1T2UnTW9Q5ri70fgjNb4wlf9Q4WMeVQgBFP9f1buAJ-R2ohqNlpNfM5DKjlypirvJ0SV0OkqNWSQBHi2-7Ktfs7KW9c99WMt1VJGVMIOEiHJRy7OYQnQmpCsTA1DkSt7fyCFvAIO2Z5aSeQ6G5EwYj7kDBPZ9niMY923tu7CPn~JrSdAJAj0O1P0ZgG6spkZwtp~U~SZohQvFBJXVU4AIGqhhMGsxcRZoqUthoXZrTUhfWYrlIssWj2-Ma1ts-0xMBpUYr~Dw__' alt='map' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch