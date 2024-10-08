import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import GoogleMapComponent from "../components/GoogleMapComponent";

function Home() {
  

  return (
    <div>

      <Nav />
      <Sidebar />
      <GoogleMapComponent />
      <Footer />
    </div>
  );
}
export default Home;