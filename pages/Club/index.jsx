import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import ClubImage_Video from '../components/ClubImage_Video';
import Footer from '../components/Footer';
import ClubGoogleMap from '../components/ClubGoogleMap';

function Rev_Now() {
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
export default Rev_Now;