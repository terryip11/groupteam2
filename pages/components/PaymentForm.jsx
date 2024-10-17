import React, { useState } from 'react';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');
  const [cardType, setCardType] = useState('');

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
    // Reset form after submission
    setName('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setCardType('');
    alert('Submission Success!')
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
            onFocus={(e) => e.target.style.cssText = `${Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')} ${Object.entries(styles.inputFocus).map(([k, v]) => `${k}:${v};`).join('')}`}
            onBlur={(e) => e.target.style.cssText = Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')}
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
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.cssText = `${Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')} ${Object.entries(styles.inputFocus).map(([k, v]) => `${k}:${v};`).join('')}`}
            onBlur={(e) => e.target.style.cssText = Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')}
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>Expiry Date (MM/YY)</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.cssText = `${Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')} ${Object.entries(styles.inputFocus).map(([k, v]) => `${k}:${v};`).join('')}`}
            onBlur={(e) => e.target.style.cssText = Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')}
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label style={styles.label}>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            style={styles.input}
            onFocus={(e) => e.target.style.cssText = `${Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')} ${Object.entries(styles.inputFocus).map(([k, v]) => `${k}:${v};`).join('')}`}
            onBlur={(e) => e.target.style.cssText = Object.entries(styles.input).map(([k, v]) => `${k}:${v};`).join('')}
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
    </div>
  );
};

export default PaymentForm;