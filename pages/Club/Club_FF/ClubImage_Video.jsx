import React from 'react';
import Image from 'next/image';
import ClubFF from '../../../public/images/ClubFF.jpg';
import ClubDescription from '../../components/ClubDescription';

const ClubImage_Video = () => {
  return (
    <>
      <div className="text-5xl text-center bg-gray-400 text-white hover:text-blue-600 textstyle">Club FF</div>
        <div className="flex justify-center">
          <Image
            src={ClubFF.src}
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
          <ClubDescription clubId="8"  />
        </div>

        <div className='w-1/2'>
          <iframe 
            src="https://www.youtube.com/embed/_RsKHmbDkOg" 
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