// components/Sidebar.js
import React, { useState } from 'react';
import Link from 'next/link';
import Switch from '@mui/material/Switch';
import 'tailwindcss/tailwind.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// ... (Keep the MaterialUISwitch and HomeIcon components as they were)

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [venueExpanded, setVenueExpanded] = useState(false);

    const clubs = [
        'Wanch', 'Tom_Dick_&_Harry', 'The_Rock_Pub', 'The_Flying_V_Metal_Bar',
        'Rockaholic_Shibuya_Music_Bar', 'Rock_Factory', 'Rev_Now', 'Hanoi_Rock_City',
        'Gimme_Shelter_Bali', 'Club_FF', 'Bauhaus_Roppongi', '12_Monkeys_Music_Hall_&_Pub'
    ];

    return (
        <>
            <button className={`md:hidden absolute top-5 right-5 text-white text-3xl`} onClick={() => { setOpen(!open) }}>三</button>
            <aside className="fixed top-0 left-0 bottom-0 font-black text-green-400 md:hidden z-10">
                <nav className={`sticky ${open ? 'w-screen' : 'w-[0px]'} ${open ? 'bg-gray-500' : 'bg-gray-500'}  h-[100vh] z-1 duration-500 overflow-y-auto`}>
                    <div className='absolute top-5 right-4 flex justify-end ml-[320px] mb-10'>
                        <FormControlLabel 
                            onClick={() => { setOpen(!open) }}
                            className={`${open ? 'ml-[25px]' : 'mr-[240px]'} duration-500 mt-3`}
                            control={<Switch sx={{ m: 1 }} defaultChecked />}
                            label=""
                        />
                    </div>

                    <div className='flex justify-around '>
                        <h1 className={`${open ? 'block' : 'hidden'} text-5xl p-1 mt-40`}>Menu</h1>
                    </div>

                    <ul className='textstyle mt-20 text-center text-3xl text-white'>
                        <li className='mb-10'>
                            <Link href="/" className='flex justify-around'>
                                <HomeIcon className="size-12 ml-3" />
                                <p className={`${open ? 'block' : 'hidden'} hover:text-green-500`}>Home</p>
                            </Link>
                        </li>
                        <li className='mb-10'>
                            <div className='flex justify-center items-center ml-3 cursor-pointer' onClick={() => setVenueExpanded(!venueExpanded)}>
                                <NightlifeIcon className="size-12 mr-[12rem]" />
                                <p className={`${open ? 'block' : 'hidden'} ml-[1rem] hover:text-green-500`}>Venue</p>
                                {open && (venueExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                            </div>
                            {open && venueExpanded && (
                                <ul className='ml-16 mt-4'>
                                    {clubs.map((club, index) => (
                                        <li key={index} className='mb-2'>
                                            <Link href={`/Club/${club}`}>
                                                <p className='text-lg hover:text-green-500'>{club.replace(/_/g, ' ')}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className='mb-10'>
                            <Link href="/Booking" className='flex justify-around'>
                                <ShoppingCartIcon className="size-12 ml-3" />
                                <p className={`${open ? 'block' : 'hidden'} hover:text-green-500`}>Booking</p>
                            </Link>
                        </li>
                        <li className='mb-10' >
                            <Link href="/contact" className='flex justify-around'>
                                <CallIcon className="size-12 ml-3" />
                                <p className={`${open ? 'block' : 'hidden'} hover:text-green-500`}>Contact</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;