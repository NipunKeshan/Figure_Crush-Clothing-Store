import React, { useContext } from 'react'
import Title from '../components/Title'
import Cart from './Cart'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState  } from 'react'
import { ShopContext } from '../context/shopContext'


const PlaceOrder = () => {

  const [method,setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext);



  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'> 
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </div>
        <div className='flex gap-3'>
            <input type="text" placeholder='First address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
            <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
           
        </div>
        <input type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
        <input type="text" placeholder='Street address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
        <div className='flex gap-3'>
            <input type="text" placeholder='city' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
            <input type="text" placeholder='state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
           
        </div>
        <div className='flex gap-3'>
            <input type="number" placeholder='zip code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
            <input type="text" placeholder='country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/> 
        </div>
        <input type="number" placeholder='number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>

      <div className='mt-8'>
      <div className='mt-8 min-w-80'>
        <CartTotal />
      </div>
      <div className='mt-12'>
        <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
        <div className="flex gap-4">
  {/* Stripe */}
  <div  className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:border-gray-400">
    <div onClick={() => setMethod("stripe")} className="h-6 w-20 flex items-center justify-center">
      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}></p>
      <img
        src={assets.stripe_logo}
        alt="Stripe"
        className="max-h-full w-auto object-contain"
      />
    </div>
  </div>

  {/* Razorpay */}
  <div className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:border-gray-400">
    <div onClick={() => setMethod("razorpay")} className="h-6 w-20 flex items-center justify-center">
      <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}></p>
      <img
        src={assets.razorpay_logo}
        alt="Razorpay"
        className="max-h-full w-auto object-contain"
      />
    </div>
  </div>

  {/* Cash on Delivery */}
  <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border rounded-lg p-3 cursor-pointer hover:border-gray-400">
    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
    <span className="text-gray-700 text-sm font-medium">
      Cash on Delivery
    </span>
  </div>
</div>
<div className='w-full text-end mt-8'>
  <button onClick={() => navigate("/orders")} className='bg-black text-white py-3 px-16 text-sm'>
    Place Order
  </button>
</div>

      </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
