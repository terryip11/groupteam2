import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/Rock Factory.jpg', 
  '/images/TheWanch.jpg', 
  '/images/HRC.jpg',
  '/images/12 Monkeys.jpg',
  '/images/Bauhaus Roppongi.png',
  '/images/Club-ff.jpg',
  '/images/Flying V Metal.png',
  '/images/Gimme Shelter.jpg'
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
          style={{ width: '100%', height: '90vh', padding: '10px' }}
        />
    </div>
  );
};

export default picshow;