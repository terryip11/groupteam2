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
      <Nav />
      <Sidebar />
      <SlideImg />
      <VideoPlayer />
      <Footer />
    </>
  );
}
export default Home;