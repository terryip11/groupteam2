import "../../app/globals.css";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import Image from "next/image";
import Link from "next/link";


function Nav() {
  const [isMenuOpen, setIsMemuOpen] = useState(false);
  
  const toggleMenu = ()=>{
    setIsMemuOpen(!isMenuOpen);
  };

  useEffect(() =>{
    console.log('Menu state changed to:', isMenuOpen);
  }, [isMenuOpen])

  return (
    <>
    <nav className="justify-between text-3xl p-5 px-10 bg-gray-500 truncate md:flex md:font-bold" >
      <div className="flex gap-x-6 justify-between">
        <span className="text-6xl text-white flex">Logo
          <Image className="size-16 rounded-lg ml-10" width={25} height={25} src={logo.src} alt="logo" />
        </span>
        
        <ToggleButton value="justify" key="justify" className="text-white border-2 border-white rounded-xl md:hidden" onClick={toggleMenu}>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </div>

      <ul className={`font-bold text-white ${isMenuOpen ? 'block':'hidden'} md:flex md:items-center md:gap-x-10`}>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
        <Link href="/">首頁</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">contact</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">blog</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">test</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="/">next</Link>
        </li>
      </ul>
    </nav>
    </>
    )
}
export default Nav;