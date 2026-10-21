export default async function ServerSideHouses() {

    const response = await fetch('https://wizard-world-api.herokuapp.com/Houses')
    const houses = await response.json();

    return(
        <main>
            <h1> Casas do HP </h1>

            {houses.map((house) => (
                <article key={house.id}>
                    <h2> {house.name} </h2>
                    <p> Animal: {house.animal} </p>
                    <p> Cor: {house.houseColours} </p>
                </article>
            ))}      
        </main>
    )
}