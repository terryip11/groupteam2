import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import "../../app/globals.css";
const ClubDescription = ({ clubId, description }) => {
    const [clubDescription, setClubDescription] = useState(description);

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const res = await fetch('https://terryip11.github.io/api/clubapi.json');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                console.log('Fetched data:', data); // 檢查返回的數據
                // 將 clubId 轉換為字符串以匹配 API 返回的字符串 ID
                const club = data.find(club => club.id === String(clubId));
                if (club) {
                    console.log(`Found club: ${club.name}, Description: ${club.description}`);
                    setClubDescription(club.description);
                } else {
                    console.log(`Club with ID ${clubId} not found.`);
                }
            } catch (error) {
                console.error('Error fetching description:', error);
            }
        };
        fetchDescription();
    }, [clubId]);

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h1" sx={{ textAlign: 'center', margin: '20px', fontSize: '40px' }}></Typography>
            <p>{clubDescription || 'Description not available.'}</p>
            <br />
            <Link href='http://localhost:3000/Booking' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">Book Now...</Link>
        </div>
    );
};

export default ClubDescription;