
export default async function TripDetails({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `https://paryataka-be.onrender.com/api/packages/public/${slug}`,
    { cache: "no-store" }
  );
  const tripData = await response.json();
  const trip = tripData?.data;

  return (
    <>
      <div className="tripDetails">
        <div className="imageTripsDrips">
          <img src={trip?.thumbnailImage} alt={trip?.name} className="tripDetailsImage" />
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
                <h2>About this trip</h2>
                <div className="tripOverview">
                  <p>{trip?.overview}</p>
                </div>
              </div>

              <div className="description">
                <h1 className="tripTrecks">About Treks</h1>
                <p>{trip?.categoryId?.description}</p>
              </div>

              <div className="highlights">
                <h1>Highlights</h1>

                <div className="highlightBadges">
                  {trip?.highlights?.map((highlight, index) => (
                    <div key={index} className="highlightPill">
                      <span className="badgeIcon">✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="highlightFeatures">
                  <div className="highlightFeatureCard">
                    <div className="featureIcon featureBlue">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12.5L9 16.5L19 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="featureTitle">Professional</div>
                  </div>
                  <div className="highlightFeatureCard">
                    <div className="featureIcon featureGreen">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 3V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M10 3V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M7 9H10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M5.5 9H11.5C12.052 9 12.5 9.448 12.5 10V11.5C12.5 12.052 12.052 12.5 11.5 12.5H5.5C4.948 12.5 4.5 12.052 4.5 11.5V10C4.5 9.448 4.948 9 5.5 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M8 12.5V18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M4 18H12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="featureTitle">All Meals</div>
                  </div>
                  <div className="highlightFeatureCard">
                    <div className="featureIcon featureOrange">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="featureTitle">Comfortable</div>
                  </div>
                  <div className="highlightFeatureCard">
                    <div className="featureIcon featurePurple">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 9H9L7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 15H15L17 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 15H9L7 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 9H15L17 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7L17 17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="featureTitle">Transport</div>
                  </div>
                </div>
              </div>
              <div className="itinerarySection">
                <h1>Itinerary</h1>
                {trip?.itinerary?.map((day, index) => (
                  <div key={index} className="itineraryCard">
                    <div className="itineraryDay">DAY {day.day}</div>
                    <div className="itineraryDescription">
                      <h3>{day.title}</h3>
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="amenitiesNotIncludedSection">
                <div className="amenitiesPanel">
                  <div className="panelTitleRow">
                    <span className="panelIcon panelIconGreen">✓</span>
                    <h2>What&apos;s Included</h2>
                  </div>
                  <div className="amenitiesList">
                    {trip?.inclusions?.map((amenity, index) => (
                      <div key={index} className="amenityItem">
                        <span className="panelCheck">✓</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="notIncludedPanel">
                  <div className="panelTitleRow">
                    <span className="panelIcon panelIconRed">×</span>
                    <h2>Not Included</h2>
                  </div>
                  <div className="notIncludedList">
                    {trip?.exclusions?.map((notIncluded, index) => (
                      <div key={index} className="notIncludedItem">
                        <span className="panelCross">×</span>
                        <span>{notIncluded}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="thingsToCarrySection">
                <h2>Things to Carry</h2>
                <div className="carryPills">
                  <div className="carryPill">Government ID</div>
                  <div className="carryPill">Trekking Shoes</div>
                  <div className="carryPill">Rain Jacket</div>
                  <div className="carryPill">Backpack</div>
                  <div className="carryPill">Water Bottle</div>
                  <div className="carryPill">Energy Bars</div>
                  <div className="carryPill">Torch</div>
                </div>
              </div>
              <div className="safetyGuidelinesSection">
                <h2>Safety Guidelines</h2>
                <div className="safetyGuidelinesList">
                  {trip?.safetyGuidance?.map((guideline, index) => (
                    <div key={index} className="safetyGuidelineItem">
                      <span className="safetyGuidelineIcon">△</span>
                      <span>{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="reachSection">
                <h2>How to Reach</h2>
                <div className="reachList">
                  {trip?.howToReach?.map((reach, index) => (
                    <div key={index} className="reachItem">
                      <span className="reachIcon">◎</span>
                      <span>{reach}</span>
                    </div>
                  ))}
                </div>
                <div className="customOptionsSection">
                  <div><h1>Custom Options</h1></div>
                  <div className="accommodationType">
                    <h1>Accommodation Type</h1>

                  </div>

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