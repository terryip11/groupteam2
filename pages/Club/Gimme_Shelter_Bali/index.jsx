import React from 'react';
import Nav from '../../components/Nav';
import Sidebar from '../../components/Sidebar';
import ClubImage_Video from './ClubImage_Video';
import Footer from '../../components/Footer';
import VideoPlayer from '../../components/VideoPlayer';
import YouTubeVideoList from '../../components/YouTubeVideoList';
import ClubDescription from '../../components/ClubDescription';
import ClubGoogleMap from './ClubGoogleMap';

function Gimme_Shelter_Bali() {
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
export default Gimme_Shelter_Bali;