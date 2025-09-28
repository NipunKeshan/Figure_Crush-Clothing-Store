import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) =>{
        {/*Dont refresh the form */}
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe to our Newsletter</p>
      <p className='text-gray-400 mt-3'>Get the latest updates and offers.</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required></input>
        <button type='submit' className='bg-gray-800 text-white py-2 px-4'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
