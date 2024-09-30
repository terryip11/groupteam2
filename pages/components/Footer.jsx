import 'tailwindcss/tailwind.css';
import Link from 'next/link';


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 您的公司名稱. 保留所有權利。</p>
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-gray-400">關於我們</Link></li>
            <li><Link href="#" className="hover:text-gray-400">聯繫我們</Link></li>
            <li><Link href="#" className="hover:text-gray-400">隱私政策</Link></li>
          </ul>
        </div>
      </footer>
    )
  }
  
  export default Footer;