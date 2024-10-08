import "../../app/globals.css";
import { useState } from "react";
import logo from '../../public/images/rock-and-roll-music-Poster.jpg';import Image from "next/image";
import Link from "next/link";
import PopupLogin from "./PopupLogin";


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
            <span className="text-4xl md:text-6xl text-white flex textstyle hover:rotate-180 duration-500 hover:scale-100 hover:text-green-500">Rock Entertament LTD</span>
            
          </div>
        </nav>
        
        <nav className="justify-between text-3xl p-5 px-10 bg-gray-600 md:flex md:font-bold textstyle" >

          <ul className="hidden font-bold text-white md:flex md:items-center md:gap-x-10">
            <li className="mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">
              <Link href="/">Home</Link>
            </li>

            <li className="group flex flex-col relative mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">Venue
              <div className="hidden absolute bg-gray-500 z-50 group-hover:block top-9 w-96 rounded-lg shadow-md shadow-gray-500 text-white textstyle" >
                <Link href="https://www.thewanch.hk" target="_blank" className="block mt-2 hover:bg-green-500">The Wanch</Link>
                <Link href="https://www.facebook.com/revnowlive" className="block mt-2 hover:bg-green-500">Rev-Now</Link>
                <Link href="https://www.facebook.com/therockpub/" className="block mt-2 hover:bg-green-500">The Rock Pub</Link>
                <Link href="https://www.facebook.com/Rockfactorypattaya/" className="block mt-2 hover:bg-green-500">Rock Factory</Link>
                <Link href="https://rockbarbauhaus.com" className="block mt-2 hover:bg-green-500">Bauhaus Roppongi</Link>
                <Link href="https://bar-rockaholic.jp/shibuya/" className="block mt-2 hover:bg-green-500">Rockaholic Shibuya Music Bar</Link>
                <Link href="https://www.facebook.com/12MonkeysPH/" className="block mt-2 hover:bg-green-500">Monkeys Music Hall & Pub</Link>
                <Link href="https://clubff.modoo.at" className="block mt-2 hover:bg-green-500">Club FF</Link>
                <Link href="https://hrcwelive.com/en/homepage-en/" className="block mt-2 hover:bg-green-500">Hanoi Rock City</Link>
                <Link href="https://www.theflyingvmetalbar.com" className="block mt-2 hover:bg-green-500">The Flying V Metal Bar</Link>
                <Link href="https://www.facebook.com/TDHmalaysia/" className="block mt-2 hover:bg-green-500">Tom, Dick & Harry's</Link>
                <Link href="https://www.facebook.com/gimmeshelterbali/about" className="block mt-2 hover:bg-green-500">Gimme Shelter Bali</Link>
              </div>
            </li>

            <li className="mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">
              <Link href="/">Terms</Link>
            </li>
            <li className="mt-8 md:mt-0 text-center hover:text-blue-500 rounded-lg">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <div className="flex mx-auto md:mr-20">
          <button onClick={handleToggle} className="login-popup text-white text-bold hover:text-blue-500 text-bold text-4xl textstyle mx-auto">REGISTER</button>
          </div>
          
        </nav>
        {showPopup && (<PopupLogin handleToggle={handleToggle}/>)}
      </div> 
    </>
    )
}
export default Nav;