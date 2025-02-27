import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import Image from 'next/image';
import Rock from '../../public/images/RockAndRoll.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
    return (
      <footer className="bg-gray-800 absolute bottom-[-1] w-full p-3 ">
        <div className="mx-auto flex justify-between items-center max-sm:flex-col">
          <div className='flex max-sm:flex-col'>
            <Image src={Rock.src} alt="logo" width={120} height={120} className='rounded-full mr-10 max-sm:mx-auto max-sm:mt-2 mb-3' />
            <div className='text-xl text-white hover:text-green-400'>
              <p>Address: 81 Austin Road, Tsim Sha Tsui</p>
              <p>E-mail: aeltd@gmail.com</p>
              <p>Phone: 852 2730 5653</p>
              <p>Fax: 852 2736 0612</p>
            </div>
          </div>


          <div className="textstyle text-bold text-white">
            <ul className="md:flex md:space-x-5 text-2xl mb-5 max-sm:flex max-sm:gap-3 max-sm:mt-3">
              
              <li><Link href="/term" className="hover:text-green-400">Terms and Condition</Link></li>
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
        <p className='text-white hover:text-green-400 hover:text-5xl duration-500'>Asia Music Bar Performing LTD.</p>
            <p className='text-white hover:text-green-400 hover:text-5xl duration-500'>© Copyright 1999-2024. All Rights Reserved.</p>
        </div>

      </footer>
    )
  }
  
  export default Footer;