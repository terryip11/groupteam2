import React from 'react'
import Image from 'next/image'
export default function shoppingCard() {
  return (
    <>
      <div>
        <h1>Shopping Cart</h1>
        <p>Items in your cart: 0</p>
        <div>
            <Image src="" alt="" />
        </div>
        <div>
            <div>
                <h3>product1</h3>
                <p>indroduce</p>
            </div>
            <div>
                <p>Subtotal: $0.00</p>
                <button>Add to cart</button>
            </div>
            
        </div>
      </div>
    </>
  )
}

