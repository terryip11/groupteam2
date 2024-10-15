import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ProductGrid from './ProductGrid';
import { responsiveFontSizes } from '@mui/material';

function Booking() {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const addToCart = (product) => {
    setCart([...cart, { ...product, selectedDate }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
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
    <div style={styles.container}>
      <div style={styles.datePickerSection}>
        <h3 className='bg-gray-500'>Choose your date and time for club booking</h3>
        <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          placeholderText="Click to select a date"
        />
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

      <ProductGrid addToCart={addToCart} />
      
      <div style={styles.cartSection}>
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
          <ul style={styles.cartList}>
            {cart.map(item => (
              <li key={item.id} style={styles.cartItem}>
                {item.name} - ${item.price} - {item.selectedDate ? item.selectedDate.toDateString() : 'No Date Selected'}
                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
         <div style={styles.totalSection}>
         <h4>Total: ${calculateTotal()}</h4>
       </div>
       <button onClick={handleCheckout} style={styles.checkoutButton}>
         Proceed to Checkout
       </button>
     </>
   )}
 </div>
</div>
);
}
const styles = {
  container: {
    maxWidth: '800px',
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
    padding: '5px',
    background: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  
};

export default Booking;