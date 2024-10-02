import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SlideImg from '../components/SlideImg';
function Home() {


    return (
        <>
            <Nav />
            <Sidebar />
            <SlideImg />
            <Footer />
        </>
    );
}
export default Home;