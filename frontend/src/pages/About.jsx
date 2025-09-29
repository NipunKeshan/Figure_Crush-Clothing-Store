import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt='About Us' className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-lg'>
            We are a team of passionate individuals committed to delivering the best e-commerce experience.
          </p>
          <p>
            Our mission is to provide high-quality products at competitive prices, ensuring customer satisfaction through exceptional service.
          </p>
          <p>
            Founded in 2023, we have quickly grown to become a trusted name in the industry, thanks to our dedication to innovation and excellence.
          </p>
          <p>
            Join us on our journey as we continue to expand our offerings and enhance the shopping experience for our valued customers.
          </p>
          <b>Our Mission</b>
          <p>
            To revolutionize online shopping by offering a seamless, enjoyable, and reliable experience for all our customers.
          </p>
          <p>
            To be the leading e-commerce platform known for quality, innovation, and customer-centric values.
          </p>
        </div>
      </div>
      <div className='text-4xl py-4'> 
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <h4 className='font-semibold'>Quality Products</h4>
          <p>
            We source our products from trusted suppliers to ensure the highest quality standards.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <h4 className='font-semibold'>Affordable Prices</h4>
          <p>
            We believe in offering the best value for your money without compromising on quality.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <h4 className='font-semibold'>Exceptional Customer Service</h4>
          <p>
            Our dedicated support team is always ready to assist you with any inquiries or issues.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
