import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SlideImg from '../components/SlideImg';
import Responsive from "../components/responsive";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { Height } from "@mui/icons-material";

function Home() {
  

  return (
    <div Style={{
        Display:'flex',
        flexdirection:'row',
        Height:'50vh',
        padding:'30px',
    }}>

      <Nav />
      <Sidebar />
      {/* <Responsive style={{ flex:1}}/> */}
      <div>
      <GoogleMapComponent style={{ flex:1}} />
      </div>
      
      <Footer />
    </div>
  );
}
export default Home;