import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import GoogleMapComponent from "../components/GoogleMapComponent";

function Home() {
  

  return (
    <>

      <Nav />
      <Sidebar />
      {/* <Responsive style={{ flex:1}}/> */}
      
      <div className="flex p-10 bg-emerald-200 md:w-[1600px]">
      <GoogleMapComponent />
      <p className="ml-10 text-3xl text-white">地址:21654</p>
      </div>
      
      <Footer />
    </>
    );
}

export default Home;