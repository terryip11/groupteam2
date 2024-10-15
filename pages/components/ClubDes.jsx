import React, { useEffect, useState } from 'react';



const ClubDes =  () => {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/terryip11/api/refs/heads/main/clubapi.json'); 
            const result  = await response.json();
            setData (result);
        } 
        catch (error){
            console.error(error);
        }
    };

    useEffect (() => {
        getData()
    }, [])


    return (
        <>
        <p>
            {data.map(item => (
                <div key={item.id}>{item.description}</div>
            ))}
            {/* {data ? data : 'Loading'} */}
        </p>

        </>
    )
};

export default ClubDes