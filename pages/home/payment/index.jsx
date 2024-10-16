// src/App.js
import React from 'react';
import PaymentForm from '@/pages/components/PaymentForm';
import Nav from '@/pages/components/Nav';
import Footer from '@/pages/components/Footer';

const App = () => {
    return (
    <>
        <div>
            <Nav />
        </div>
        <div>
            <PaymentForm />
        </div>
        <div>
            <Footer />
        </div>
    </>
    );
};

export default App;