import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import HeroAfter from './Components/Hero/HeroAfter'
import WhyChooseUs from './Components/WhyChooseUs'
import AboutUs from './Components/AboutUs'
import Footer from './Components/Footer'
import GetInTouch from './Components/GetInTouch'
import Faqs from './Components/Faqs'
import MeetOurTeacher from './Components/MeetOurTeacher'
import OurCourses from './Components/OurCourses/OurCourses'
import Testimonial from './Components/Testimonial'

export default function Home() {



  return (
    <>
      <Navbar />
      <Hero />
      <HeroAfter />
      <WhyChooseUs />
      <OurCourses />
      <AboutUs />
      <MeetOurTeacher />
      <Testimonial />
      <Faqs />
      <GetInTouch />
      <Footer />
    </>
  )
}
