import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ProductGrid from './ProductGrid';
import Link from 'next/link';


function Booking() {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const addToCart = (product) => {
    setCart([...cart, { ...product, selectedDate }]);
  };

  /* const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  }; */
  const removeFromCart = (productName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== productName));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Implement navigation to payment page
    alert("Proceeding to payment page...");
    // You can replace this with actual navigation logic, e.g., using React Router
  };
  



  return (
    <div style={styles.container} className='relative'>
      <div style={styles.datePickerSection}>
        <h1 className='bg-gray-500 text-white font-bold text-3xl'>Choose your date and time for club booking</h1>
        <div className='flex justify-center'>      
          <DatePicker
            className='bg-gray-500 font-bold text-5xl flex justify-center mt-3 text-center placeholder:text-white rounded-md'
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            placeholderText="Click to select a date"
          />
        </div>
        <div style={styles.timeSlotSection}>
          <button 
            style={selectedTimeSlot === 'Day Time' ? styles.selectedSlot : styles.timeSlot}
            onClick={() => setSelectedTimeSlot('Day Time')}
          >
            Slot 1: Day Time (15:00-18:00)
          </button>
          <button 
            style={selectedTimeSlot === 'Night Time' ? styles.selectedSlot : styles.timeSlot}
            onClick={() => setSelectedTimeSlot('Night Time')}
          >
            Slot 2: Night Time (20:00-23:00)
          </button>
        </div>
      </div>

      <h2>Select products to add to cart</h2>
      
      <div style={styles.descriptionBox}>
        <h3>Available booking period for performing in all venues:</h3>
        <ul>
          <li>Daytime 3 hrs (15:00-18:00)</li>
          <li>Night time 3 hrs (20:00-23:00)</li>
        </ul>
      </div>

      <ProductGrid addToCart={addToCart} removeFromCart={removeFromCart} />
      
      <div style={styles.cartSection}>
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
          <div style={styles.cartList} className='bg-gray-500 text-white font-bold text-xl flex flex-col justify-center mt-3 text-center'>
            {cart.map(item => (
              <div key={item.id} style={styles.cartItem}>
                {item.name} - ${item.price} - {item.selectedDate ? item.selectedDate.toDateString() : 'No Date Selected'}
              </div>
            ))}
          </div>
         <div style={styles.totalSection}>
         <h4 className='mt-1 text-5xl bg-gray-500 text-white font-bold '>Total: ${calculateTotal()}</h4>
       </div>
       <Link href='/Booking/payment' className='flex justify-center'>
       <button onClick={handleCheckout} style={styles.checkoutButton} className='bg-gray-500 font-bold text-5xl mt-3 text-center text-green-500 rounded-md'>Proceed to Checkout</button>
       </Link>
       
     </>
   )}
 </div>
</div>
);
}
const styles = {
  container: {
    maxWidth: '100rem',
    margin: '0 auto',
    padding: '20px',
  },
  datePickerSection: {
    marginBottom: '20px',
  },
  timeSlotSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  timeSlot: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: 'white',
    cursor: 'pointer',
  },
  selectedSlot: {
    padding: '10px',
    border: '1px solid #007bff',
    borderRadius: '5px',
    background: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
 

  descriptionBox: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px',
  },
  cartSection: {
    marginTop: '30px',
  },
  cartList: {
    listStyleType: 'none',
    padding: 0,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  removeButton: {
    display: 'block',
    padding: '5px',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  
};

export default Booking;