export default function featuredDestinnations()
{
    const card=[1,2,3,4,5,6]
    return(
        <>
            <h1 className="featuredHeading">Featured Destinations</h1>
            <div className="featuredDestiation">
                {card.map((cards)=>{
                    return(
                        <div key={cards} className="featuredDestinnationnsCards">
                            {cards}
                        </div>
                    )
                })}
            </div>
        </>
    )
}