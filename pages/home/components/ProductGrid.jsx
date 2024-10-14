import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const products = [
  { name: "The Wanch", daytime: 2400, nighttime: 3000 },
  { name: "Rev-Now", daytime: 1500, nighttime: 2400 },
  { name: "The Rock Pub", daytime: 1200, nighttime: 1800 },
  { name: "Rock Factory", daytime: 1050, nighttime: 1500 },
  { name: "Bauhaus Roppongi", daytime: 2400, nighttime: 3000 },
  { name: "Rockaholic Shibuya Music Bar", daytime: 2100, nighttime: 2700 },
  { name: "12 Monkeys Music Hall & Pub", daytime: 900, nighttime: 1350 },
  { name: "Club FF", daytime: 1800, nighttime: 2250 },
  { name: "Hanoi Rock City", daytime: 900, nighttime: 1350 },
  { name: "The Flying V Metal Bar", daytime: 1500, nighttime: 2400 },
  { name: "Tom, Dick & Harry's", daytime: 1200, nighttime: 1800 },
  { name: "Gimme Shelter Bali", daytime: 1800, nighttime: 2250 },
];

function ProductGrid({ addToCart, removeFromCart }) {
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleCheckboxChange = (product, timeOfDay) => {
    const isSelected = selectedProducts[product.name] === timeOfDay;
    
    if (isSelected) {
      // Remove from cart
      removeFromCart(product.name);
      setSelectedProducts(prevState => {
        const newState = { ...prevState };
        delete newState[product.name];
        return newState;
      });
    } else {
      // Add to cart
      const price = timeOfDay === 'daytime' ? product.daytime : product.nighttime;
      addToCart({ name: product.name, price, timeOfDay });
      setSelectedProducts(prevState => ({
        ...prevState,
        [product.name]: timeOfDay
      }));
    }
  };

  return (
    <div style={styles.grid}>
      {products.map((product, index) => (
        <div key={index} style={{
          ...styles.card,
          ...(selectedProducts[product.name] && styles.selectedCard)
        }}>
          <h3 style={styles.productName}>{product.name}</h3>
          <div style={styles.rateContainer}>
            <div style={styles.rate}>
              <p style={styles.rateLabel}>Daytime Rate:</p>
              <p style={styles.rateValue}>HKD{product.daytime}</p>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedProducts[product.name] === 'daytime'}
                  onChange={() => handleCheckboxChange(product, 'daytime')}
                />
                Select
              </label>
            </div>
            <div style={styles.rate}>
              <p style={styles.rateLabel}>Night Time Rate:</p>
              <p style={styles.rateValue}>HKD{product.nighttime}</p>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedProducts[product.name] === 'nighttime'}
                  onChange={() => handleCheckboxChange(product, 'nighttime')}
                />
                Select
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f8f8f8',
  },
  productName: {
    marginTop: 0,
    marginBottom: '15px',
    fontSize: '18px',
    color: '#333',
  },
  rateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default ProductGrid;