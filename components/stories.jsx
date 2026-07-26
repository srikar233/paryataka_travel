export default function stories()
{
    const card=[1,2,3]
    return(
        <>
            <div className="stories">
                <h1>Stories From Our Travellers</h1>
                <h4>Real adventures from real people who trusted us with their journey.</h4>
            </div>
            <div className="storyMainCards">
                {card.map((cards)=>{
                    return(
                        <div className="storyCards" key={cards}>
                            {cards}
                        </div>
                    )
                })}
            </div>
        </>
    )
}