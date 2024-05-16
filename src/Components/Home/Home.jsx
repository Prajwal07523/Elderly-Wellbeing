import React from 'react';
import backgroundImage from '../../assets/homepage.jpg'; 
import opd from '../../assets/opd.gif';
import heartbeat from '../../assets/heartbeat.gif';

import hospital from '../../assets/hospital.gif';
import medicine from '../../assets/medicine.gif';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";


function Home() {
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




      <div className="container mx-auto mt-8 mb-8">
        <h1 className='text-center text-3xl'>Embrace the care, cherish the moments - Our services tailored for you.</h1>
        <div className="flex justify-center mt-8 ">
          
          <Link to='/health-reminder'
            className="flex-1 min-w-30 text-gray-700 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:bg-blue-200 mr-4">
              <img className="h-16 w-16 object-cover rounded-full border-2 border-gray-300" src={opd} alt="Image" />
              <h2 className="text-xl font-bold mb-2">Health Remainder</h2>
              <p className="text-gray-700">Never miss a dose with personalized medication schedules tailored for elderly individuals, ensuring timely and consistent adherence to their prescribed medicines.</p>
          </Link>

          <Link to='/medical-care'
            className="flex-1 min-w-30 text-gray-700 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:bg-green-200 mr-4">
              <img className="h-16 w-16 object-cover rounded-full border-2 border-gray-300" src={heartbeat} alt="Image" />
              <h2 className="text-xl font-bold mb-2">Medical Care</h2>
              <p className="text-gray-700">Empowering seniors with comprehensive medical records and actionable health routines, facilitating proactive management of their well-being through personalized guidance .</p>
          </Link>
            
          </div>

          <div className="flex justify-center mt-4">
          
          <Link to='/order-medicines'
            className="flex-1 min-w-30 text-gray-700 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:bg-yellow-200 mr-4">
              <img className="h-16 w-16 object-cover rounded-full border-2 border-gray-300" src={medicine} alt="Image" />
              <h2 className="text-xl font-bold mb-2">Order Medicines</h2>
              <p className="text-gray-700">Our service ensures hassle-free delivery of medications, providing peace of mind and convenience for elderly individuals in maintaining their health.</p>
          </Link>

          <Link to='/doctor-care'
            className="flex-1 min-w-30 text-gray-700 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:bg-red-200 mr-4">
              <img className="h-16 w-16 object-cover rounded-full border-2 border-gray-300" src={hospital} alt="Image" />
              <h2 className="text-xl font-bold mb-2">Hospital care</h2>
              <p className="text-gray-700">Seamlessly connect elderly individuals with experienced healthcare professionals for routine checkups and consultations.</p>
          </Link>
             
          </div>
        </div>
       
    </div>
    
  );
}

export default Home;