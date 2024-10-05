import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ClubDescription from '../components/ClubDescription';

function Temp2() {
    return (
        <>
            <Nav />
            <Sidebar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <img src="images/TheWanch.jpg" alt="TheWanch" width={800} />
            </div>
            <ClubDescription clubId={2} />       
            <Footer />
        </>
    );
}
export default Temp2;
