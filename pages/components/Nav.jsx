import "../../app/globals.css";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import Image from "next/image";
import Link from "next/link";
import PopupLogin from "./PopupLogin";


function Nav() {
  const [isMenuOpen, setIsMemuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleToggle = () => {
    setShowPopup(!showPopup);
  };

  const toggleMenu = ()=>{
    setIsMemuOpen(!isMenuOpen);
  };

  useEffect(() =>{
    console.log('Menu state changed to:', isMenuOpen);
  }, [isMenuOpen])

  return (
    <>
    <nav className="justify-between text-3xl p-5 px-10 bg-gray-500 md:flex md:font-bold" >
      <div className="flex gap-x-6 justify-between">
        <span className="text-6xl text-white flex">Logo
          <Image className="size-16 rounded-full ml-10" width={25} height={25} src={logo.src} alt="logo" />
        </span>
        
        <ToggleButton value="justify" key="justify" className="text-white border-2 border-white rounded-xl md:hidden" onClick={toggleMenu}>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </div>

      <ul className={`font-bold text-white ${isMenuOpen ? 'block':'hidden'} md:flex md:items-center md:gap-x-10`}>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">首頁</Link>
        </li>

        <li className="group flex flex-col relative mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">Venue
        
          <div className="hidden absolute bg-gray-500 z-50 group-hover:block top-9 w-96 rounded-lg shadow-md shadow-gray-500" >
            <Link href="https://www.thewanch.hk" className="block mt-2 hover:bg-blue-500">The Wanch</Link>
            <Link href="https://www.facebook.com/revnowlive" className="block mt-2 hover:bg-blue-500">Rev-Now</Link>
            <Link href="https://www.facebook.com/therockpub/" className="block mt-2 hover:bg-blue-500">The Rock Pub</Link>
            <Link href="https://www.facebook.com/Rockfactorypattaya/" className="block mt-2 hover:bg-blue-500">Rock Factory</Link>
            <Link href="https://rockbarbauhaus.com" className="block mt-2 hover:bg-blue-500">Bauhaus Roppongi</Link>
            <Link href="https://bar-rockaholic.jp/shibuya/" className="block mt-2 hover:bg-blue-500">Rockaholic Shibuya Music Bar</Link>
            <Link href="https://www.facebook.com/12MonkeysPH/" className="block mt-2 hover:bg-blue-500">Monkeys Music Hall & Pub</Link>
            <Link href="https://clubff.modoo.at" className="block mt-2 hover:bg-blue-500">Club FF</Link>
            <Link href="https://hrcwelive.com/en/homepage-en/" className="block mt-2 hover:bg-blue-500">Hanoi Rock City</Link>
            <Link href="https://www.theflyingvmetalbar.com" className="block mt-2 hover:bg-blue-500">The Flying V Metal Bar</Link>
            <Link href="https://www.facebook.com/TDHmalaysia/" className="block mt-2 hover:bg-blue-500">Tom, Dick & Harry's</Link>
            <Link href="https://www.facebook.com/gimmeshelterbali/about" className="block mt-2 hover:bg-blue-500">Gimme Shelter Bali</Link>
          </div>
        </li>

        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">blog</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">test</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <button onClick={handleToggle} className="login-popup">註册</button>
        </li>
      </ul>
    </nav>
    {showPopup && (<PopupLogin handleToggle={handleToggle}/>)}
    
    
    </>
    )
}
export default Nav;