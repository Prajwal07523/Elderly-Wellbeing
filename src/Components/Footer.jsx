import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer =()=>{
return(
 <div className='bg-gray-800 text-gray-300 flex px-10 py-4 justify-between'>
    <div>
          <h2 className='text-red-900 text-2xl mt-5'>Elderly WellBeing</h2>
          <p className='text-sm mt-4'>
            Caring Hearts, Forever Embracing the journey
            <br />
            of Aging with Love and support.
          </p>
          <h3 className='mt-4 text-richblack-5 text-20'>Follow Us</h3>
          <div className='flex space-x-4 mt-1'>
            <a href='https://www.instagram.com' >
             <FaInstagram size={32}/>
            </a>
            <a href='https://www.facebook.com' >
              <FaFacebook size={32}/>
            </a>
            <a href='https://twitter.com' >
             <FaTwitter size={32}/>
            </a>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl'>Services</h2>
          <a href=''>Hospital Care</a>
          <a href=''>Personal Care</a>
        </div>
        <div className=' flex flex-col'>
          <h2 className='text-2xl'>Company</h2>
          <a href=''>Who we are</a>
          <a href=''>Our Mission</a>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl'>Resources</h2>
          <a href=''>F.A.Q</a>
          <a href=''>Career</a>
        </div>
 </div>
)
}

export default Footer;