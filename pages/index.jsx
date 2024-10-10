import "../app/globals.css";
import React from 'react';
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import YouTubeVideoList from "./components/YouTubeVideoList";

import { useContext,createContext } from "react";


const TotalContext = createContext();


function TotalProvider({ children }) {
  const [total, settotal] = useState('');



  return (
    <>
      <TotalProvider.Provider value={{ id }}>
      {children}
    </TotalProvider.Provider>

      <div className="">
        <Nav className="" />
        <Sidebar className="" />
        <VideoPlayer videoIds={YouTubeVideoList} />
        <Footer />
      </div>
      
    
      
    </>
  )
}
export default TotalContext;