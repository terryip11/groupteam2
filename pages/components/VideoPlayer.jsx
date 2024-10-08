import React, { useState, useEffect, useRef } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const VideoPlayer = ({ videoIds }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const iframeRefs = useRef([]);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Set the interval to switch videos every 15 seconds
        intervalRef.current = setInterval(() => {
            if (isAutoPlaying) {
                handleNextVideo();
            }
        }, 15000);

        // Cleanup function
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isAutoPlaying]);

    const handleNextVideo = () => {
        const nextIndex = (currentVideoIndex + 1) % videoIds.length;
        setCurrentVideoIndex(nextIndex);
    };

    const handlePrevVideo = () => {
        const prevIndex = (currentVideoIndex - 1 + videoIds.length) % videoIds.length;
        setCurrentVideoIndex(prevIndex);
    };

    const handleVideoPause = () => {
        setIsAutoPlaying(false);
        clearInterval(intervalRef.current);
    };

    const handleVideoEnded = () => {
        handleNextVideo();
    };

    return (
        <div className="video-container">
            <div className="video-wrapper">
            {videoIds.map((videoId, index) => (
                <iframe
                    key={videoId}
                    ref={(el) => (iframeRefs.current[index] = el)}
                    className={index === currentVideoIndex ? 'active' : 'hidden'}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=${index === currentVideoIndex ? 1 : 0}&enablejsapi=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ))}
            <div className="button-container">
            <button className='nav-btn prev-btn' id="prev-btn" onClick={handlePrevVideo}>
                <ArrowBackIcon /> 
            </button>
            <button className='nav-btn next-btn' id="next-btn" onClick={handleNextVideo}>
                <ArrowForwardIcon />            
            </button>
        </div>
            </div>
        </div>
    );
};

export default VideoPlayer;