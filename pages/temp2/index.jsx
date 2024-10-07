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
            <ClubDescription clubId={1} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sXSNymE8Wio?si=e46-NiP4W93djWjq"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <Footer />
        </>
    );
}

export default Temp2;