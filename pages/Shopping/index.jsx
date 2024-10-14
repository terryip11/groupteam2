import React, { useEffect, useState } from "react";
import Link from 'next/link';

function index({params}) {
  const {id} = params
return (
  <>
    <div>Post:{id}</div>
  </>
)
}


export default function ClubDetails({ id }) {
  const [club, setClub] = useState({});

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const res = await fetch(`https://terryip11.github.io/api/clubprice.json`);
        const data = await res.json();
        const club = data.find((club) => club.id === id);
        setClub(club);
      } catch (error) {
        console.log("Error fetching club:", error);
      }
    };
    fetchClub();
  }, [id]);

  return (
    <div>
      <h1>Club Details</h1>
      <p>ID: {club.id}</p>
      <p>Name: {club.productname}</p>
      <p>Day Price: {club.dayprice}</p>
      <p>Night Price: {club.nightprice}</p>
      <p>
        {club.id && (
          <Link href="/Shopping/[id]" as={`/Shopping/${club.id}`}>
            去 Club 詳細頁
          </Link>
        )}
      </p>
    </div>
  );
}