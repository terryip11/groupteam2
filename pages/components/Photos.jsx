import { useState, useEffect } from "react";

const Photo = ({ clubId }) => {
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/terryip11/api/main/clubapi.json');
                const data = await response.json();
                // Assuming the API returns an object with a photos property
                setPhoto(data.photos.find(p => p.clubId === clubId));
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };

        fetchPhotos();
    }, [clubId]);

    if (!photo) return <div>Loading...</div>;

    return (
        <div>
            {/* Render your photo here */}
            <img src={photo.url} alt={photo.description} />
        </div>
    );
};

export default Photo;