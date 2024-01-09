import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccoridonCard from './AccoridonCard';

const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";




const Faqs = () => {
    const accordion = [
        {
            title: 'How can i know my level of knowledge', description: "Take the time to reflect on your own understanding of a particular subject or skill. Ask yourself questions like What do I already know about this topic ? Can I explain it to someone else in simple terms ? Are there gaps in my understanding ?"
        }, {
            title: 'Can i do it individually or in group ?',
            description: "Embarking on a journey of accomplishment often raises the question: Can I do it individually or in a group? This inquiry underscores the versatility and adaptability inherent in the task at hand. Whether you prefer the solitary path of self-discovery and self-reliance or thrive in the collaborative energy of a group, the choice is yours."
        }, {
            title: 'What is the maximum group size?',
            description: " There is no maximum group size"
        }, {
            title: "Do i need to buy materials for lessons?",
            description: "no need to buy materials for lessons"
        }, {
            title: "Are you adjusting the students schedules?", description: "yes"
        }, {
            title: 'How the first lesson with teacher will be?',
            description: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online."
        }
    ]
    const showAccordion = accordion.map((item, index) => <div key={index} className='rounded-[25px]'>
        <AccoridonCard title={item.title} description={item.description} />
    </div>)

    return (
        <div className='flex flex-col 3xl:px-[195px] 3xl:py-[120px] xl:px-[220px] py-[100px] px-[30px]'>
            <div className='text-center'>
                <p className='text-center  text-sm 3xl:text-[27px] font-[Kalam-Regular]'>FAQs</p>
                <h3 className='font-[600] text-[#181B32] text-[21px] lg:text-[33px]'>Your Guide to Common Questions and Answers</h3>
            </div>
            <div className='md:grid-cols-2 3xl:mx-[129px] grid gap-5 my-[30px]'>
                {showAccordion}
            </div>
        </div >
    )
}

export default Faqs 