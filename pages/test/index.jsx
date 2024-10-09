import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import GoogleMapComponent from '../components/GoogleMapComponent';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import YouTubeVideoList from '../components/YouTubeVideoList';
function test() {
  return (
    <>
      <Nav />
      <Sidebar />
      <GoogleMapComponent />
      <VideoPlayer videoIds={YouTubeVideoList} />
      <Footer />
    </>
  )
}
export default test;