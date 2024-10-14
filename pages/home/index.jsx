import React, { useState } from 'react';
import Login from './components/login';
import Booking from './components/Booking';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Booking />
      )}
    </div>
  );
}

export default App;