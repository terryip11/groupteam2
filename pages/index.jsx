import "../app/globals.css";
import React from 'react';
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function home() {
  
  return (
    <>
      <div>
        <Nav />
        <Sidebar />
      </div>
      <div classname="video container">
        <iframe
        src={"https://www.youtube.com/embed/AjVCx4nN2dg"}
        width="100%"
        height="450"
        allowFullScreen
        
        ></iframe>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
export default home;