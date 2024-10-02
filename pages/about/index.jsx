import "../../app/globals.css";
import { useState, useEffect } from "react";
import logo from '../../public/images/logo.png';
import Link from "next/link";
import Image from "next/image";

function Home() {
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
          <Image className="size-16 rounded-lg ml-10" width={25} height={25} src={logo.src} alt="..." />
        </span>
        <button className="text-white border-2 rounded-xl md:hidden" onClick={toggleMenu}>click</button>
      </div>

      <ul className={`font-bold text-white ${isMenuOpen ? 'block':'hidden'} md:flex md:items-center md:gap-x-10`}>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
        <Link href="/">首頁</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="">contact</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="">blog</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="">test</Link>
        </li>
        <li className="mt-8 md:mt-0 text-center hover:bg-blue-500 rounded-lg">
          <Link href="">next</Link>
        </li>
      </ul>
    </nav>

    <section>
      <div>
      
      </div>
      
    </section>



    <footer className="flex absolute left-0 bottom-0 right-0 bg-gray-500">
      <div className="text-xl text-white font-bold">
        <div className="flex text-5xl text-white items-center">
          <img src={logo.src} className="p-5 w-28 rounded-lg" alt="logo" />Logo
        </div>
        <div className="text-lg p-5">
          <h3 className="">地址:台灣台北市114內湖區石潭路151號</h3>
          <p>旅遊產品由 雄獅旅行社股份有限公司 提供</p>
          <p>代表人：王文傑</p>
          <p>統一編號：04655091</p>
          <p>代表號：02-8793-9000</p>
          <p>綜合旅行社 交觀綜字 2016號</p>
          <p>品保協會會員93字第北0541號</p>
          <hr />
        </div>
      </div>
      <div>
        <ul className="flex gap-5 p-10 text-white text-5xl font-bold">
          <li>
            <a href="">youtube</a>
          </li>
          <li>
            <a href="">facebook</a>
          </li>
          <li>
            <a href="">twiter</a>
          </li>
          <li>
            <a href="">Tg</a>
          </li>
        </ul>
      </div>
    </footer>
    </>
  );
}
export default Home;