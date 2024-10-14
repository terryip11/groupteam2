import React, { useState } from 'react'; 
import Image from 'next/image'; 
import "../../app/globals.css";  

const pricedata = [   
  {id:1, price:2400, productname:'The Wanch'},   
  {id:2, price:3000, productname:'ClubFF'},   
  {id:3, price:1500, productname:'FlyingVmetal'}, 
];  

export default function ShoppingCard() {   
  const [clickpopRight, setclickpopRight] = useState(false);   
  const [selectedItems, setSelectedItems] = useState([]);   
  const [quantities, setQuantities] = useState({});  

  const handleclickRight = () => {     
    setclickpopRight(!clickpopRight);   
  };    

  const handleCheckboxChange = (event) => {     
    const { name, checked } = event.target;     
    if (checked) {       
      setSelectedItems([...selectedItems, name]);       
    } else {       
      setSelectedItems(selectedItems.filter(item => item !== name));     
    }   
  };    

  const handleQuantityChange = (event, itemId) => {
    const newQuantities = { ...quantities, [itemId]: parseInt(event.target.value) };
    setQuantities(newQuantities);
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => {
      const selectedItem = pricedata.find(p => p.id === parseInt(item));
      const quantity = quantities[item] || 1;
      return total + (selectedItem ? selectedItem.price * quantity : 0);
    }, 0);
  };

  return (     
    <>       
      <div className='w-96 h-[30rem] p-3 bg-gray-400 overflow-hidden text-white textstyle font-bold shadow-md hover:shadow-2xl'>         
        <h1 className='flex text-white justify-center text-5xl hover:text-green-400 duration-500 cursor-default'>The Wanch</h1>         
        <div className='flex justify-center bg-inherit m-5'>           
          <Image src="/images/view2.jpg" alt="view" width={1000} height={1000} className='w-[11rem] h-[12rem] rounded-md' />         
        </div>         
        <div>           
          <div className='text-3xl flex justify-center p-2'>             
            <h3>product1</h3>           
          </div>           
          <div className='text-xl mx-auto p-3 text-center'>             
            <div className='relative'>               
              <label htmlFor="daytime" className='hover:text-green-400 cursor-pointer'>Daytime: $ HKD2400</label>               
              <input type="checkbox" name='1' id='daytime' className='ml-2 size-4' onChange={handleCheckboxChange} />             
            </div>             
            <div>               
              <label htmlFor="nighttime" className='hover:text-green-400 cursor-pointer'>NightTime:$ HKD3000</label>               
              <input type="checkbox" name='2' id='nighttime' className='ml-2 size-4' onChange={handleCheckboxChange} />             
            </div>           
          </div>           
          <div className='flex justify-center'>             
            <button className='bg-gray-500 text-4xl rounded-md p-1 hover:text-green-500' onClick={handleclickRight}>Add to cart</button>           
          </div>         
        </div>       
      </div>        
      <div className={`text-white fixed top-0 right-0 bg-gray-400 w-[35rem] h-screen flex justify-end duration-500 ${clickpopRight ? 'visible' : 'hidden'}`}>         
        <div className='w-full p-4'>           
          <h1 className='text-5xl font-bold'>選購的門票:</h1>           
          <div className='text-2xl mb-5 p-10'>             
            {selectedItems.length > 0 ? '選購的門票是:' : '未選購門票'}             
            {selectedItems.map((item, index) => {               
              const selectedItem = pricedata.find(p => p.id === parseInt(item));               
              return (                 
                <div className='hover:text-red-400' key={index}>                   
                  Price: {selectedItem ? selectedItem.price : 'N/A'} {selectedItem.productname}                   
                  <input                     
                    type="number"                     
                    min={0}                     
                    className='w-[3.2rem] rounded-lg ml-2 text-green-500'                     
                    value={quantities[item] || "1"}                     
                    onChange={(e) => handleQuantityChange(e, item)}                   
                  /> Tickets               
                </div>              
              );             
            })}           
          </div>           
          <hr />           
          <div className='text-5xl mt-10'>Total: {calculateTotal()}</div>         
        </div>       
      </div>     
    </>   
  ); 
}
