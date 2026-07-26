export default function weekendTrips()
{
    const card=[1,2,3,4,5,6,7,8,9,10,11,12];
    return(
        <>

            <div className="tenThousand"><h1>Weekend Under 10k</h1></div>
             
            <div className="WeekendTrips">
               
                {card.map((cards)=>{
                    return(  <div className="WeekendTripsCards" key={cards}>
                        cards {cards}
                    </div>)
                })}
            </div>
        </>
    )
}