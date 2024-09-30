import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Slideimg from '../components/slideimg';


function Home() {
  

  return (
    <>
      <Nav />
      <Sidebar />
      <Slideimg />
      <Footer />
    </>
  );
}
export default Home;