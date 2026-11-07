import Banner from "../../components/Banner"
import Card from "../../components/Card"
import logements from "../../data/logements"
import backgroundHome from "../../assets/picture1.jpg"

export default function Home() {

    const card = logements.map((logement) => {
        return (
            <Card 
                key={logement.id} 
                id={logement.id}
                cover={logement.cover} 
                title={logement.title} 
            />
        )
    })

    const cardDisplayDesktop = card.slice(0, 6)

    return (
        <>
            <aside>
                <Banner
                    text="Chez vous, partout et ailleurs"
                    img={backgroundHome}
                    alt="photo de falaises"
                />
            </aside>
            <main>
                <div className="wrapper">
                    {cardDisplayDesktop}
                </div>
            </main>
        </>
    )
}