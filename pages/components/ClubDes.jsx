import React, { useEffect, useState } from 'react';



const ClubDes =  () => {
    const data = async () => {
        try {
            const response = await fetch('https://github.com/terryip11/api/blob/main/clubapi.json'); 
            const result  = await response.json();
            setData (result);
        }
};
    fetchData();},[];
return (
    <>
    <p>
        {data}
    </p>

    </>
)

export default ClubDes