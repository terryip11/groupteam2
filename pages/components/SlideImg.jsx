import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/view.jpg', 
  '/images/view2.jpg', 
  '/images/view3.jpg'
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
      {/* <Image src={images[keys[currentIndex]]} /> */}
        <Image
          /* key={index} */
          src={images[currentIndex]}
          /* alt={`Image ${index + 1}`} */
          width={1000}
          height={1000}
          style={{ width: '95%', height: '90vh', padding: '40px' }}
        />
    </div>
  );
};

export default picshow;