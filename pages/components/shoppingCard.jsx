import React from 'react';
import Image from 'next/image';
import "../../app/globals.css";

export default function ShoppingCard() {
  return (
    <>
      <div className='w-96 h-96 p-3'>
        <h1 className='flex bg-red-500 text-white'>Shopping Cart</h1>
        <p className='bg-green-500'>Items in your cart: 0</p>
        <div>
            <Image src="/images/view.jpg" alt="view" width={1000} height={1000} />
        </div>
        <div>
            <div>
                <h3 className='text-red-500'>product1</h3>
                <p className='text-green-500'>indroduce</p>
            </div>
            <div>
                <p className='bg-blue-500'>Subtotal: $0.00</p>
                <button className='bg-green-500'>Add to cart</button>
            </div>
            
        </div>
      </div>
    </>
  )
}

