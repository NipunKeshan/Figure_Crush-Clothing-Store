import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32'></img>
        <p className='w-full md:w-2/3 text-gray-600'>
            &copy; 2024 All rights reserved | Figure Crush;
        </p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>
            GET IN TOUCH
        </p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li> info@figurecrush.com</li>
            <li> +1 (234) 567-890</li>
        </ul>
      </div>
      <div>
        <hr></hr>
        <p className='py-5 text-sm text-center'>
            Copyright 2025@ forever.com - all rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
