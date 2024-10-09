'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Image from 'next/image';
import Monkeys from '../../public/images/12 Monkeys.jpg';
import ClubDescription from './ClubDescription';

const containerStyle = {
  width: '50%',
  height: '400px',
};

const centers = [
  {id: 1, lat: 22.27855280766035, lng: 114.17155346525952},
  {id: 2, lat: 25.034455636679038, lng: 121.55671265928372},
  {id: 3, lat: 13.771504969924196, lng: 100.54143180534486},
  {id: 4, lat: 12.930148268331195, lng: 100.8857762276759},
  {id: 5, lat: 12.930150882529226, lng: 100.88577421601927},
  {id: 6, lat: 35.66430193792624, lng: 139.73090028902593},
  {id: 7, lat: 35.66075652404794, lng: 139.69742968828066},
  {id: 8, lat: 14.57633990618388, lng: 121.06314555655723},
  {id: 9, lat: 37.55027734279543, lng: 126.9223058926862},
  {id: 10, lat: 21.070513848413892, lng: 105.82272424809713},
  {id: 11, lat: 1.291182727831862, lng: 103.85121575402204},
  {id: 12, lat: 3.1142082977136916, lng: 101.57401157167669}
];

const initialCenter = centers[1];

const GoogleMapComponent = () => {
  return (
    <>
      <div className="text-5xl text-center bg-gray-400 text-white">Monkeys</div>
      <div className="flex justify-center">
        <Image
          src={Monkeys.src}
          alt="Mountains"
          width={1000}
          height={1000}
          // Importing an image will
          // automatically set the width and height
          sizes="50vw"
          // Make the image display full width
          style={{
            width: '100%',
            height: '50rem'
          }}
        />
      </div>
        
        
        <div className='flex justify-end bg-gray-500 p-5'>
          <div className='text-white text-3xl textstyle mr-10 w-1/2 textstyle hover:text-green-400'>
            <ClubDescription clubId="1" />
          </div>
        
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={initialCenter}
                zoom={20}>
                {centers.map((location) => (
                  <Marker position={{ lat: location.lat, lng: location.lng }} key={location.id} />
                ))}
                
              </GoogleMap>
          </LoadScript>
        </div>
    </>
  );
};

export default GoogleMapComponent;