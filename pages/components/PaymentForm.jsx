import React, { useState } from 'react';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [cardType, setCardType] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your payment processing logic
    console.log({
      name,
      cardNumber,
      expiryDate,
      cvv,
      cardType
    });
    // Show popup
    setShowPopup(true);
    // Reset form after submission
    setName('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setCardType('');
  };

  const validateForm = () => {
    // Basic validation logic
    if (!name || !cardNumber || !expiryDate || !cvv || !cardType) {
      setError('Please fill in all fields.');
      return false;
    }
    setError('');
    return true;
  };

  const handleExpiryDateChange = (e) => {
    const input = e.target.value;
    // Remove any non-digit characters
    const cleaned = input.replace(/\D/g, '');
    
    // Format as MM/YY
    if (cleaned.length <= 2) {
      setExpiryDate(cleaned);
    } else {
      setExpiryDate(`${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`);
    }
  };

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    // Remove any non-digit characters
    const cleaned = input.replace(/\D/g, '');
    setCardNumber(cleaned);
  };

  const handleCvvChange = (e) => {
    const input = e.target.value;
    // Remove any non-digit characters
    const cleaned = input.replace(/\D/g, '');
    setCvv(cleaned);
  };

  const styles = {
    paymentForm: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    h2: {
      marginTop: 0,
      marginBottom: '24px',
      color: '#333',
      fontSize: '24px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#555',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      height: '40px',
      padding: '8px 3px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      outline: 'none',
      borderColor: '#4CAF50',
      boxShadow: '0 0 0 2px rgba(76, 175, 80, 0.2)',
    },
    cardTypeOptions: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '20px',
    },
    option: {
      marginRight: '20px',
      display: 'flex',
      alignItems: 'center',
    },
    radio: {
      marginRight: '8px',
    },
    errorMessage: {
      color: '#f44336',
      fontSize: '14px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#45a049',
    },
    popup: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      textAlign: 'center',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    },
    closeButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    closeButtonHover: {
      backgroundColor: '#45a049',
    },
  };

  return (
    <div className="payment-form" style={styles.paymentForm}>
      <h2 style={styles.h2}>Payment Information</h2>
      <form onSubmit={(e) => {
        if (validateForm()) {
          handleSubmit(e);
        }
      }}>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Name on Card</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
            
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Card Type</label>
          <div className="card-type-options" style={styles.cardTypeOptions}>
            <div className="option" style={styles.option}>
              <input
                type="radio"
                id="visa"
                name="card-type"
                value="Visa"
                checked={cardType === 'Visa'}
                onChange={(e) => setCardType(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="visa">Visa</label>
            </div>
            <div className="option" style={styles.option}>
              <input
                type="radio"
                id="mastercard"
                name="card-type"
                value="Mastercard"
                checked={cardType === 'Mastercard'}
                onChange={(e) => setCardType(e.target.value)}
                style={styles.radio}
              />
              <label htmlFor="mastercard">Mastercard</label>
            </div>
          </div>
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            required
            maxLength="16"
            style={styles.input}
           
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Expiry Date (MM/YY)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
            maxLength="5"
            placeholder="MM/YY"
            style={styles.input}
            
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={handleCvvChange}
            required
            maxLength="4"
            style={styles.input}
           
          />
        </div>
        {error && <div className="error-message" style={styles.errorMessage}>{error}</div>}
        <button 
          type="submit" 
          style={styles.submitButton}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.submitButton.backgroundColor}
        >
          Submit Payment
        </button>
      </form>
      {showPopup && (
        <>
          <div style={styles.overlay} onClick={() => setShowPopup(false)}></div>
          <div style={styles.popup}>
            <p>Payment successful. Booking confirmation will be sent shortly.</p>
            <button 
              onClick={() => setShowPopup(false)}
              style={styles.closeButton}
              onMouseOver={(e) => e.target.style.backgroundColor = styles.closeButtonHover.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = styles.closeButton.backgroundColor}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentForm;