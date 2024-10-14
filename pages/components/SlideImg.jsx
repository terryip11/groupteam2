import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/RockFactory.jpg', 
  '/images/TheWanch.jpg', 
  '/images/HRC.jpg',
  '/images/Monkeys.jpg',
  '/images/BauhausRoppongi.png',
  '/images/ClubFF.jpg',
  '/images/FlyingVMetal.png',
  '/images/GimmeShelter.jpg'
];
const picshow = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
        <Image
          src={images[currentIndex]}
          width={1000}
          height={1000}
          alt="Logo"
          className='size-full md:p-2.5 md:m-auto'
        />
    </div>
  );
};
/* width: '100%', height: '90vh', padding: '10px' */
export default picshow;