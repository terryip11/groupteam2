// src/App.js
import React from 'react';
import PaymentForm from '../components/PaymentForm';
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const App = () => {
    return (
    <>
        <div>
            <Nav />
        </div>
        <div>
            <h1>Checkout</h1>
            <PaymentForm />
        </div>
        <div>
            <Footer />
        </div>
    </>
    );
};

export default App;