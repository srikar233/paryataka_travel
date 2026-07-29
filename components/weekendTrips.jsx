export default function weekendTrips({products})
{
    const card=[1,2,3,4,5,6,7,8,9,10,11,12];
    console.log(products)
    return(
        <>

            <div className="tenThousand"><h1>Weekend Under 10k</h1></div>
             
            <div className="WeekendTrips">
               
                {products.map((items)=>{
                    return(  <div className="WeekendTripsCards" key={items._id}>
                        <img
              src={items.thumbnailImage}
              alt={items.name}
              className="featuredImage"
            />
                    </div>)
                })}
            </div>
        </>
    )
}