import React from 'react'
import Design from './Design'
import Footer from './Footer'
import Old3 from '../assets/Old3.jpeg'
import Old4 from '../assets/Old4.jpeg'
import Old5 from '../assets/Old5.jpeg'
const Home = () => {
  return (
   <div className=''>
     <Design title={"About"}/>
     <div className="bg-blue-100 ">
        <div className="relative mx-auto   flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white ">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Health Care
            
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%] mb-10">
            Elderly Wellbeing is dedicated to pioneering advancements in eldercare through our online platform. We're passionate about enhancing the wellbeing of seniors by providing tailored support and resources. From personalized health tools to fostering community connections, we're committed to redefining the aging experience with compassion and innovation. Join us in creating a brighter future for older adults everywhere.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img className='mb-40 ' src={Old3} alt="" />
            <img src={Old4} alt="" />
            <img src={Old5} alt="" />
          </div>
        </div>
      </div>
    <Footer/>
   </div>
  )
}

export default Home


