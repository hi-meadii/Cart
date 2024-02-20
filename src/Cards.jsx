import Card from "./Card"; 

function Cards({cards,removeCard}){
    return(
        <div className="container">
            <div className="cards">
                {
                    cards.map((card) => {
                        return <Card key={card.id} {...card}  removeCard={removeCard} ></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Cards;