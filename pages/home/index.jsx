import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SlideImg from '../components/SlideImg';
import VideoPlayer from '../components/VideoPlayer';

function Home() {
  return (
    <>
      <div className="">
        <Nav className="" />
        <Sidebar className="" />
        <SlideImg />
        <VideoPlayer />
        <Footer />
      </div>
      
    
      
    </>
  );
}
export default Home;