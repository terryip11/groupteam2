import "../../app/globals.css";
import { useState } from "react";
import logo from '../../public/images/rock-and-roll-music-Poster.jpg';import Image from "next/image";
import Link from "next/link";
import PopupLogin from "./PopupLogin";
import "../Club/Wanch"
import "../Club/Rev_Now"
import "../Club/The_Rock_Pub"
import "../Club/Rock_Factory"
import "../Club/Bauhaus_Roppongi"
import "../Club/Rockaholic_Shibuya_Music_Bar"
import "../Club/12_Monkeys_Music_Hall_&_Pub"
import "../Club/Club_FF"
import "../Club/Hanoi_Rock_City"
import "../Club/The_Flying_V_Metal_Bar"
import "../Club/Tom_Dick_&_Harry"
import "../Club/Gimme_Shelter_Bali"

function Nav() {
  const [showPopup, setShowPopup] = useState(false);

  const handleToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
        {/* <div className="flex gap-x-6 justify-between">
        <Image className="size-16 rounded-full ml-10" width={25} height={25} src={logo.src} alt="logo" />
          
          <span className="text-6m text-white flex"></span>

        </div> */}

      <div className="relative"> 
        <nav className="flex justify-center text-3xl p-3 px-10 bg-gray-700 md:flex md:font-bold" >
          <div className="flex flex-col gap-x-6 flex-0 ">
          <Image className=" size-40 rounded-full mx-auto mt-5" width={1000} height={1000} src={logo.src} alt="logo" />
            <span className="text-4xl md:text-6xl text-white flex textstyle hover:rotate-180 duration-500 hover:scale-100 hover:text-green-500">Asia Music Bar Performing Booking System</span>
            
          </div>
        </nav>
        
        <nav className="justify-between text-3xl p-5 px-10 bg-gray-600 md:flex md:font-bold textstyle" >

          <ul className="hidden font-bold text-white md:flex md:items-center md:gap-x-10">
            <li className="mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">
              <Link href="/">Home</Link>
            </li>

            <li className="group flex flex-col relative mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">Venue
              <div className="hidden absolute bg-gray-500 z-50 group-hover:block top-9 w-96 rounded-lg shadow-md shadow-gray-500 text-white textstyle" >
                <Link href="../Club/Wanch" target="_blank" className="block mt-2 hover:bg-green-500">The Wanch</Link>
                <Link href="../Club/Rev_Now" target="_blank" className="block mt-2 hover:bg-green-500">Rev-Now</Link>
                <Link href="../Club/The_Rock_Pub/" target="_blank" className="block mt-2 hover:bg-green-500">The Rock Pub</Link>
                <Link href="../Club/Rock_Factory/" target="_blank" className="block mt-2 hover:bg-green-500">Rock Factory</Link>
                <Link href="../Club/Bauhaus_Roppongi" target="_blank" className="block mt-2 hover:bg-green-500">Bauhaus Roppongi</Link>
                <Link href="../Club/Rockaholic_Shibuya_Music_Bar/" target="_blank" className="block mt-2 hover:bg-green-500">Rockaholic Shibuya Music Bar</Link>
                <Link href="../Club/12_Monkeys_Music_Hall_&_Pub/" target="_blank" className="block mt-2 hover:bg-green-500">12 Monkeys Music Hall & Pub</Link>
                <Link href="../Club/Club_FF" target="_blank"className="block mt-2 hover:bg-green-500">Club FF</Link>
                <Link href="../Club/Hanoi_Rock_City/" target="_blank" className="block mt-2 hover:bg-green-500">Hanoi Rock City</Link>
                <Link href="../Club/The_Flying_V_Metal_Bar" target="_blank" className="block mt-2 hover:bg-green-500">The Flying V Metal Bar</Link>
                <Link href="../Club/Tom_Dick_&_Harry/" target="_blank" className="block mt-2 hover:bg-green-500">Tom, Dick & Harry&#39;s</Link>
                <Link href="../Club/Gimme_Shelter_Bali" target="_blank" className="block mt-2 hover:bg-green-500">Gimme Shelter Bali</Link>
              </div>
            </li>

            <li className="mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">
              <Link href="/Booking">Booking</Link>
            </li>
            <li className="mr-3 mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex mx-auto md:mr-20">
          <button onClick={handleToggle} className="login-popup text-white text-bold hover:text-blue-500 text-bold text-3xl textstyle mx-auto">REGISTER</button>
          </div>
          
        </nav>
        {showPopup && (<PopupLogin handleToggle={handleToggle}/>)}
      </div> 
    </>
    )
}
export default Nav;