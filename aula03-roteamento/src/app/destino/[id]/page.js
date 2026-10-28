import Image from "next/image";

export default async function DestinoPagina({ params }) {
    const resolvedParams = await params;

    const dadosDestinos = {
        china: {
            nome: 'China',
            descricao: 'Cidade cyberpunk na China.',
            caminhoImg: '/images/china.jpeg'
        },
        edimburgo: {
            nome: 'Edimburgo',
            descricao: 'Castelos muito tops e o clima com chuva e montanhas.',
            caminhoImg: '/images/edimburgo.jpg'
        },
        grecia: {
            nome: 'Grécia',
            descricao: 'Ruínas das civiliazação grega.',
            caminhoImg: '/images/grecia.jpg'
        },
        italia: {
            nome: 'Itália',
            descricao: 'Cidade do amor.',
            caminhoImg: '/images/italia.webp'
        }
    };

    const destino = dadosDestinos[resolvedParams.id];

    return(
        <section>
            <h2> Teste </h2>
            <h1> {destino.nome} </h1>

            <Image src={destino.caminhoImg} alt={destino.descricao} width={500} height={500} />

            <p> {destino.descricao} </p>
        </section>
    )
}