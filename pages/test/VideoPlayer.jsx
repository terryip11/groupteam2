import React, { useState, useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Add your video URLs here
    const videoUrls = [
        'https://drive.google.com/file/d/116XbvIl8CA1RcupLqgioK28KJUuxRn5L/view?usp=drive_link',
        'https://drive.google.com/file/d/1Bbb9uw9eaUH7q5NEx_5H_DW59dCcfUXD/view?usp=drive_link',
        'https://example.com/video3.mp4',
    ];

    const handleVideoChange = (index) => {
        setCurrentVideoIndex(index);
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play();
        }
    };

    return (
        <div className="video-player">
            <video ref={videoRef} controls width="100%" height="auto">
                <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-controls">
                {videoUrls.map((url, index) => (
                    <button
                        key={index}
                        onClick={() => handleVideoChange(index)}
                        className={currentVideoIndex === index ? 'active' : ''}
                    >
                        Video {index + 1}
                    </button>
                ))}
            </div>
            <style jsx>{`
        .video-player {
          max-width: 800px;
          margin: 0 auto;
        }
        .video-controls {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
        button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #f0f0f0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button.active {
          background-color: #007bff;
          color: white;
        }
      `}</style>
        </div>
    );
};

export default VideoPlayer;