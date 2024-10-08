import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/rock-and-roll-music-Poster.jpg';
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
            <div className='text-xl hover:text-green-400'>
              <p>Address: 81 Austin Road, Tsim Sha Tsui</p>
              <p>E-mail: aeltd@gmail.com</p>
              <p>Phone: 852 2730 5653</p>
              <p>Fax: 852 2736 0612</p>
            </div>
          </div>


          <div className="textstyle text-bold">
            <ul className="md:flex md:space-x-5 text-2xl mb-5">
              <li><Link href="#" className="hover:text-green-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-green-400">Contact Us</Link></li>
              <li><Link href="./" className="hover:text-green-400">Terms</Link></li>
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
          
            <p className='hover:text-green-400 hover:text-5xl duration-500'>© Copyright 1999-2024 by Refsnes Data. All Rights Reserved.</p>
        </div>

      </footer>
    )
  }
  
  export default Footer;