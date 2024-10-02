import React, { useEffect, useState} from "react";

const FetchGets = () => {
    const [clubs, setclubs] = useState([]);


useEffect(() =>{
    const fetchGets = async () => {
        try{
            const res = await fetch('https://terryip11.github.io/api/clubapi.json');
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
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            {/* <p>{club.contact_info.phone}</p>
            <p>{club.contact_info.website}</p> */}
            <div className="">
            <h2>{club.name}</h2>  
            </div>
            
            <p>{club.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
)
};
export default FetchGets;