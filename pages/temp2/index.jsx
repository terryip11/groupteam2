import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Nav />
            <Sidebar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <img src="images/TheWanch.jpg" alt="TheWanch" width={800} />
            </div>
            <Footer />
        </>
    );
}

export default Home;