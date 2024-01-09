"use client"
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Slide } from 'react-awesome-reveal';

const AccoridonCard = ({ title, description }) => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className={toggle ? "px-10 cursor-pointer overflow-hidden  bg-[#7077E4] py-3 rounded-3xl" : "px-10 cursor-pointer py-3 rounded-3xl  border-2 border-slate-200"}>
            <div onClick={() => setToggle(!toggle)} className='flex flex-row justify-between'>
                <p className={toggle ? "text-white font-medium md:text-base text-sm" : "md:text-base text-sm"}>{title}</p>
                <div className='self-center'>{toggle ? <RemoveCircleIcon className='text-white' /> : <AddCircleIcon className='text-[#7077E4]' />}</div>
            </div>
            <Slide direction="down">
                <div className={toggle ? "text-[#e4e4e4] overflow-hidden block text-sm my-5" : "hidden"}> <Slide direction="down">{toggle ? <p>{description}</p> : ""}</Slide></div>
            </Slide>

        </div >
    )
}

export default AccoridonCard