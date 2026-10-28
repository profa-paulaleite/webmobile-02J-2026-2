import Link from "next/link";
import Image from "next/image";

const Destino = ({ destino }) => {
    return(
        <Link key={destino.id} href={`./destino/${destino.id}`}>
            <Image alt={destino.nome} src={destino.caminhoImg} width={150} height={150} />
            <p> {destino.nome} </p>
        </Link>
    )
};

export default Destino;