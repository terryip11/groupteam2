import React from 'react'
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../../app/globals.css';


export default function Whatsapp() {
  return (
    <>
        <div className='group fixed bottom-10 right-5 md:bottom-10 md:right-44 z-20'>
            <span className='duration-500 group-hover:rotate-45 group-hover:translate-x-10 hover:block absolute top-0 left-0 opacity-0 group-hover:opacity-100 text-white'>Contact Us</span>
                <Link rel="stylesheet" href="https://api.whatsapp.com/send?phone=64754756">
                <WhatsAppIcon className='text-8xl text-green-500' />
                </Link>
        </div>
      
    </>
  )
}
