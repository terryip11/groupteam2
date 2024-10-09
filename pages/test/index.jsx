import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import GoogleMapComponent from '../components/GoogleMapComponent';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import YouTubeVideoList from '../components/YouTubeVideoList';
import TestGoogle from '../components/TestGoogle';
function test() {
  return (
    <>
      <Nav />
      <Sidebar />
      <GoogleMapComponent />
      <TestGoogle/>
      <Footer />
    </>
  )
}
export default test;