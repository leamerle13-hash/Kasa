import Banner from "../../components/Banner"
import Card from "../../components/Card"
import logements from "../../data/logements"

export default function Home() {

    const card = logements.map((logement) => {
        return (
            <Card 
                key={logement.id} 
                cover={logement.cover} 
                title={logement.title} 
            />
        )
    })

    const cardDisplayDesktop = card.slice(0, 6)

    return (
        <>
            <aside>
                <Banner />
            </aside>
            <main>
                <div className="wrapper">
                    {cardDisplayDesktop}
                </div>
            </main>
        </>
    )
}