import React from 'react';
import Image from 'next/image';
import "../../app/globals.css";




export default function index() {
  return (
    <>
      <div className='w-96 h-48 p-3 bg-gray-400'>
        <h1 className='flex text-white justify-center text-5xl'>Product Name</h1>
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
