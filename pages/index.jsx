import "../app/globals.css";
import React from 'react';
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

function home() {
  
  return (
    <>
      <div>
        <Nav />
        <Sidebar />
      </div>
      
      <div className="video">
        <iframe 
  src={"https://www.youtube.com/embed/AjVCx4nN2dg?autoplay=1&mute=1&loop=1&playlist=AjVCx4nN2dg"}
  width="100%"
        height="800"
        allowFullScreen>
        </iframe>
      </div>
      <div>
        <Footer />
        <Whatsapp />
      </div>
    </>
  )
}
export default home;