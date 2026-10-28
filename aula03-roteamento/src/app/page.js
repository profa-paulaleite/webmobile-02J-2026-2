import Link from "next/link";
import styles from "./page.module.css";
import Destino from "./componenets/Destino"

export default function Home() {
  const destinos = [
    { id: 'china', nome: 'China', caminhoImg: '/images/china.jpeg' },
    { id: 'edimburgo', nome: 'Edimburgo', caminhoImg: '/images/edimburgo.jpg' },
    { id: 'grecia', nome: 'Grécia', caminhoImg: '/images/grecia.jpg' },
    { id: 'italia', nome: 'Itália', caminhoImg: '/images/italia.webp' }
  ]

  return (
    <main>
      <nav>
        <Link href="/sobre"> Sobre </Link>
      </nav>

      <h1> Galeria de Destinos de Viagem </h1>

      <section>
        {destinos.map(destino => (
          <Destino key={destino.id} destino={destino} />
        ))}
      </section>
    </main>
  );
}
