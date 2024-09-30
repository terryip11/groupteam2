import { useState, useEffect } from 'react';
import Image from 'next/image';
import "../../app/globals.css";
import React from 'react';



const images = [
  '/images/view.jpg',
  '/images/view2.jpg',
  '/images/view3.jpg',
];

function Slideimg() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 每10秒切換一次圖片

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='absolute w-auto h-96 m-4 z-[-1]' >
        <Image
          width={25}
          height={25}
          src={images[currentImageIndex]}
          alt="Slide Show Image"
        />
      </div>
    </>
  );
}
export default Slideimg;