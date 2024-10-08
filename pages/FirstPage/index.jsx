import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import SlideImg from '../components/SlideImg';
import Link from "next/link";
function FirstPage() {
  

  return (
    <>
      <Nav />
      <Sidebar />
      <SlideImg />
      <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
      <Link href="https://concerts.livenation.com/the-script-boston-massachusetts-10-04-2024/event/010060ABE5848207">Buy ticket</Link>
      </button>
      
      <Footer />
    </>
  );
}
export default FirstPage;