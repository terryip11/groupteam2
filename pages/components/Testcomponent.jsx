import React, { useEffect, useState } from 'react';

const Page = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = aysnc() => {
  const res = await fetch('https://raw.githubusercontent.com/terryip11/api/refs/heads/main/clubapi.json');
  const result = await res.json();
  setDate(result);
};

fetchData();
},[]);

return (
  result
)
}

export default Page;



// const HomePage = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch('https://raw.githubusercontent.com/terryip11/api/refs/heads/main/clubapi.json');
//       const result = await res.json();
//       setData(result);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from API</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default HomePage;