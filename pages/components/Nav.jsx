import "../../app/globals.css";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import Image from "next/image";
import Link from "next/link";
import { Block } from "@mui/icons-material";


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
    <nav className="justify-between text-3xl p-5 px-10 bg-gray-500 md:flex md:font-bold;" >
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

        <li className="group flex flex-col relative mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">Contact Us
        
          <div className="hidden absolute bg-blue-500 z-50 group-hover:block top-9 w-40" >
            <Link href="#" className="block">酒吧名1</Link>
            <Link href="#" className="block">酒吧名2</Link>
            <Link href="#" className="block">酒吧名3</Link>
            <Link href="#" className="block">酒吧名4</Link>
          </div>
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