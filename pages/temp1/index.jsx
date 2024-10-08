import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ClubDescription from '../components/ClubDescription';
import GoogleMapComponent from "../components/GoogleMapComponent";

function Home() {
  

  return (
<<<<<<< HEAD
    <>
        <Nav />
        <Sidebar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <img src="images/TheWanch.jpg" alt="TheWanch" width={800} />
        </div>
        {/* <ClubDescription clubId={1} /> */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            
        </div>
        <div>
        <GoogleMapComponent />
        </div>
        <Footer />
    </>
    );
=======
    <div>

      <Nav />
      <Sidebar />
      <GoogleMapComponent />
      <Footer />
    </div>
  );
>>>>>>> 5b24207132fa63d41ca0d117d1424da73abf0e06
}

export default Temp1;