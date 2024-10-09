import "../app/globals.css";
import React from 'react';
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import YouTubeVideoList from "./components/YouTubeVideoList";

function Home() {
  return (
    <>
      <div className="">
        <Nav className="" />
        <Sidebar className="" />
        <VideoPlayer videoIds={YouTubeVideoList} />       
        <Footer />
      </div>
      
    
      
    </>
  )
}
export default Home;