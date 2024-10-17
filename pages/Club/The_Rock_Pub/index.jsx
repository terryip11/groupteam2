import React from 'react';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import ClubImage_Video from './ClubImage_Video';
import Footer from '../../components/Footer';
import ClubGoogleMap from './ClubGoogleMap';

function The_Rock_Pub() {
  return (
    <>
      <Nav />
      <Sidebar />
      <ClubImage_Video />
      <ClubGoogleMap/>
      <Footer />
    </>
  )
}
export default The_Rock_Pub;