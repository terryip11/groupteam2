import "../../app/globals.css";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';

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
          <img className="size-16 rounded-lg ml-10" src={logo.src} alt="..." />
        </span>
        
        <ToggleButton value="justify" key="justify" className="text-white border-2 border-white rounded-xl md:hidden" onClick={toggleMenu}>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </div>

      <ul className={`font-bold text-white ${isMenuOpen ? 'block':'hidden'} md:flex md:items-center md:gap-x-10`}>
        <li li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
        <a href="/">首頁</a>
        </li>
        <li li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <a href="/">contact</a>
        </li>
        <li li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <a href="/">blog</a>
        </li>
        <li li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <a href="/">test</a>
        </li>
        <li li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <a href="/">next</a>
        </li>
      </ul>
    </nav>
    </>
    )
}
export default Nav;