import React from 'react'
import Title from './Title';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {

    const {currency , delivery_fee,  getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTAL'}></Title>
        </div>
      <div className="flex flex-col gap-4">
  <div className="flex justify-between">
    <p>Subtotal</p>
    <p>{currency}{getCartAmount()}.00</p>
  </div>

  

  <div className="flex justify-between">
    <p>Delivery Fee</p>
    <p>{currency}{delivery_fee}.00</p>
  </div>

  <hr />

  <div className="flex justify-between">
    <b className="font-medium">Total</b>
    <p className="font-medium">
      {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
    </p>
  </div>
</div>

    </div>
  )
}

export default CartTotal
