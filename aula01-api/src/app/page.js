"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://wizard-world-api.herokuapp.com/Houses')
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p> Carregando as casas... </p>
  }

  return (
    <main>
      <h1> Casas do HP </h1>

      <Link href="/server-side"> Server-Side Rendering </Link>

      {houses.map((house) => (
        <article key={house.id}>
            <h2> {house.name} </h2>
            <p> Animal: {house.animal} </p>
            <p> Cor: {house.houseColours} </p>
        </article>
      ))}      
    </main>
  );
}
