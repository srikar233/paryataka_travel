


export default async function TripDetails() {
    const data=await fetch('https://paryataka-be.onrender.com/api/packages/public/tadiandamol-summit-adventure')
    const tripData=await data.json();
    console.log(tripData)
  return (
    <>
      <div className="tripDetails">
        <div className="imageTripsDrips">
          srikar
        </div>

        <div className="destinationTrippage">
          <div>
            <div className="smallaBar">
              <button>Overview</button>
              <button>Itinerary</button>
              <button>Amenities</button>
              <button>Options</button>
              <button>FAQ</button>
            </div>

            <div className="aboutTripHeadings">
              <div className="aboutTripHeading">
                About this trip
                <div className="tripOverview"><p>{tripData?.data?.overview}</p></div>
              </div>
              <div>
                
                <div className="description">
                    <h1 className="tripTrecks">About Treks</h1>
                     <p>{tripData?.data?.categoryId?.description}</p>
                </div>
               
              </div>
              <div className="highlights">
                <h1>Highlights</h1>
                <div>
                    <div>Professional</div>
                    <div>All Meals</div>
                    <div>Comfortable</div>
                    <div>Transport</div>
                </div>
              </div>
            </div>
          </div>

          <div>payment</div>
        </div>
      </div>
    </>
  );
}