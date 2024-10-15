import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Photos from '../components/Photos';
import ClubDes from  '../components/ClubDes';

function Temp3() {
    return (
        <>
        <Nav />
        <Sidebar />
        {/* <Photos /> */}
        <ClubDes />
        <Footer />
        </>
    )
}

export default  Temp3;  