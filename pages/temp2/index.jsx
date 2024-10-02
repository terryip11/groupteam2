import "../../app/globals.css";
import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


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
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            
          </li>
        ))}
      </ul>
    </div>
    </>
)
};

// function Temp2() {
//     return (
//         <>
//             <Nav />
//             <Sidebar />
//             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
//                 <img src="images/TheWanch.jpg" alt="TheWanch" width={800} />
//             </div>






//             <Footer />
//         </>
//     );
// }

// export default Temp2;