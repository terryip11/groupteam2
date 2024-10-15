import React, { useEffect, useState} from "react";

const FetchGets = () => {
    const [clubs, setclubs] = useState([]);


useEffect(() =>{
    const fetchGets = async () => {
        try{
            const res = await fetch('https://terryip11.github.io/api/clubprice.json');
            const data = await res.json();
            console.log('data:', data);
            setclubs(data);
        }catch(error){
            console.log('Error fetching posts:', error);
        }
    }
    fetchGets();
},[]);

return(
    <>
    <div>
      <h1>酒吧資料</h1>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <h1>{club.productname}</h1>
            <h2>{club.dayprice}</h2>
            <p>{club.nightprice}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
)
};
export default FetchGets;