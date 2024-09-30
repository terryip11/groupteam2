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
      <h1>博文列表測試</h1>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <h2>{club.bar_name}</h2>
            <p>{club.contact_info.email}</p>
            <p>{club.contact_info.phone}</p>
            <p>{club.contact_info.website}</p>
            <div>{club.inventory.map((item,indexs) =>{
              <li key={indexs}>
                <p>{item.name}</p>
              </li>
            })}</div>
          </li>
        ))}
      </ul>
    </div>
    </>
)
};
export default FetchGets;