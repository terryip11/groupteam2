import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 absolute bottom-[-1] w-full">
        <div className="mx-auto flex justify-between items-center">
          <div className='flex'>
            <Image src={logo.src} alt="logo" width={120} height={120} className='rounded-full mr-10' />
            <div className='text-xl'>
              <p>公司地址:leomore</p>
              <p>電子郵箱:leomore</p>
              <p>電話:852-12345678</p>
              <p>傳真:852-12345678</p>
            </div>
          </div>


          <div className="">
            <ul className="md:flex md:space-x-5 text-2xl mb-5">
              <li><Link href="#" className="hover:text-gray-400">關於我們</Link></li>
              <li><Link href="#" className="hover:text-gray-400">聯繫我們</Link></li>
              <li><Link href="#" className="hover:text-gray-400">隱私政策</Link></li>
            </ul>

            <ul className='flex gap-7 m-auto'>
                <li>
                  <Link href="#">
                    <FacebookIcon className='text-blue-500 text-5xl' />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <YouTubeIcon className='text-red-500 text-5xl' />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <InstagramIcon className='text-pink-500 text-5xl' />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <EmailIcon className='text-green-500 text-5xl' />
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        
        <div className='text-center text-xl w-full' >
          
            <p>© 2024 您的公司名稱. 保留所有權利。</p>
        </div>

      </footer>
    )
  }
  
  export default Footer;