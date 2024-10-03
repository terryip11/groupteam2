import React from 'react';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import "../../app/globals.css";
import Image from 'next/image';


const Products = () => {
    const [products, setproducts] = useState([]);


useEffect(() =>{
    const fetchGets = async () => {
        try{
            const res = await fetch('https://terryip11.github.io/api/products.json');
            const data = await res.json();
            console.log('data:', data);
            setproducts(data);
        }catch(error){
            console.log('Error fetching posts:', error);
        }
    }
    fetchGets();
},[]);

return(
    <>
    <section className='w-[500px] h-[500px] text-white'>
      <div>
        <h1 className='bg-blue-500 text-bold text-5xl text-center'>酒吧場地資料</h1>
        <Image src="/images/Rock Factory.jpg" alt="Rock Factory" width={500} height={500} />
      </div>
      
      <ul>
        {products.map((product) => (
          <div key={product.id}>

            <div className='text-5xl w-[500px] h-[500px] bg-slate-500'>
                <h1 className='bg-blue-500 text-center'>{product.name}</h1>
                
                <p> ${product.price}</p>
            </div>
            
          </div>
        ))}
      </ul>
    </section>
    </>
)
}
export default Products;
