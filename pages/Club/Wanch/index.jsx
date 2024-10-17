import React from 'react';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import ClubImage_Video from './ClubImage_Video';
import Footer from '../../components/Footer';
import ClubGoogleMap from './ClubGoogleMap';

function Wanch() {
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
export default Wanch;