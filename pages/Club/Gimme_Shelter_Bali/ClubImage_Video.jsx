'use client'
import React from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import GimmeShelter from '../../../public/images/GimmeShelter.jpg';
=======
// import Monkeys from '../../../public/images/Gimme Shelter.jpg';
>>>>>>> 6c40e682cb4fecb21f43d9980f1b4edf5c7fd69f
import ClubDescription from '../../components/ClubDescription';

const ClubImage_Video = () => {
  return (
    <>
      <div className="text-5xl text-center bg-gray-400 text-white hover:text-blue-600 textstyle">Gimme Shelter Bali</div>
        <div className="flex justify-center">
          <Image
<<<<<<< HEAD
            src={GimmeShelter.src}
=======
            src={'./images/Gimme Shelter.jpg'}
>>>>>>> 6c40e682cb4fecb21f43d9980f1b4edf5c7fd69f
            alt="Mountains"
            width={1000}
            height={1000}
            sizes="50vw"
            style={{
              width: '100%',
              height: '50rem'
            }}
          />
        </div>
      <div className='flex justify-between items-center bg-gray-500 p-5 max-sm:flex-col'>
        <div className='text-white text-3xl textstyle w-1/2 textstyle hover:text-green-400'>
          <ClubDescription clubId="12"  />
        </div>

        <div className='w-1/2'>
          <iframe 
            src="https://www.youtube.com/embed/3LRqm5eybbg" 
            frameBorder="0"
            width="100%"
            height="450"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ClubImage_Video;