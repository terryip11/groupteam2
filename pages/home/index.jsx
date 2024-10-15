import React, { useState } from 'react';
import Login from './components/login';
import Booking from './components/Booking';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Nav />
      <Sidebar />
      <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Booking />
      )}
    </div>
    <Footer />
    </>
    
  );
}

export default App;