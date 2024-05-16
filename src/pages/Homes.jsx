import React from 'react'
import backgroundImage from '../assets/homepage.jpg'; 

const Homes = () => {
  return (
   <div>
    <div
  id="home"
  className="flex flex-1 justify-center items-center text-gray-800 text-3xl relative"
  style={{
    height: '50vh', // Set the height to 50% of the viewport height
  }}
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage})`, 
      opacity: '0.7', // Adjust opacity if needed
    }}
  ></div>
  <div className="absolute inset-0 flex items-center justify-start px-4 md:px-0 ml-8">
    <div className="text-black">
      <h1 className="text-3xl md:text-3xl">
        Where age is celebrated,
        <br />
        and care is eternal.
      </h1>
      <p className='text-sm'>
        Full time support from our top specialists.
      </p>
      
    </div>
  </div>
</div>
   </div>
  )
}

export default Homes