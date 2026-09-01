import BookingCard from "@/components/common/BookingCard";
import styles from "./page.module.css";

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
      <div className={styles.tripDetails}>
        <div className={styles.imageTripsDrips}>
          <img src={trip?.thumbnailImage} alt={trip?.name} className={styles.tripDetailsImage} />
          <div className={styles.name}>{trip?.name}</div>
          
        </div>

        <div className={styles.destinationTrippage}>
          <div>
            <div className={styles.smallaBar}>
              <button>Overview</button>
              <button>Itinerary</button>
              <button>Amenities</button>
              <button>Options</button>
              <button>FAQ</button>
            </div>

            <div className={styles.aboutTripHeadings}>
              <div className={styles.aboutTripHeading}>
                <h2>About this trip</h2>
                <div className={styles.tripOverview}>
                  <p>{trip?.overview}</p>
                </div>
              </div>

              <div className={styles.description}>
                <h1 className={styles.tripTrecks}>About Treks</h1>
                <p>{trip?.categoryId?.description}</p>
              </div>

              <div className={styles.highlights}>
                <h1>Highlights</h1>

                <div className={styles.highlightBadges}>
                  {trip?.highlights?.map((highlight, index) => (
                    <div key={index} className={styles.highlightPill}>
                      <span className={styles.badgeIcon}>✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.highlightFeatures}>
                  <div className={styles.highlightFeatureCard}>
                    <div className={`${styles.featureIcon} ${styles.featureBlue}`}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12.5L9 16.5L19 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={styles.featureTitle}>Professional</div>
                  </div>
                  <div className={styles.highlightFeatureCard}>
                    <div className={`${styles.featureIcon} ${styles.featureGreen}`}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 3V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M10 3V9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M7 9H10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M5.5 9H11.5C12.052 9 12.5 9.448 12.5 10V11.5C12.5 12.052 12.052 12.5 11.5 12.5H5.5C4.948 12.5 4.5 12.052 4.5 11.5V10C4.5 9.448 4.948 9 5.5 9Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M8 12.5V18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M4 18H12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className={styles.featureTitle}>All Meals</div>
                  </div>
                  <div className={styles.highlightFeatureCard}>
                    <div className={`${styles.featureIcon} ${styles.featureOrange}`}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={styles.featureTitle}>Comfortable</div>
                  </div>
                  <div className={styles.highlightFeatureCard}>
                    <div className={`${styles.featureIcon} ${styles.featurePurple}`}>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 9H9L7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 15H15L17 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 15H9L7 17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 9H15L17 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7L17 17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className={styles.featureTitle}>Transport</div>
                  </div>
                </div>
              </div>
              <div className={styles.itinerarySection}>
                <h1>Itinerary</h1>
                {trip?.itinerary?.map((day, index) => (
                  <div key={index} className={styles.itineraryCard}>
                    <div className={styles.itineraryDay}>DAY {day.day}</div>
                    <div className={styles.itineraryDescription}>
                      <h3>{day.title}</h3>
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.amenitiesNotIncludedSection}>
                <div className={styles.amenitiesPanel}>
                  <div className={styles.panelTitleRow}>
                    <span className={`${styles.panelIcon} ${styles.panelIconGreen}`}>✓</span>
                    <h2>What&apos;s Included</h2>
                  </div>
                  <div className={styles.amenitiesList}>
                    {trip?.inclusions?.map((amenity, index) => (
                      <div key={index} className={styles.amenityItem}>
                        <span className={styles.panelCheck}>✓</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.notIncludedPanel}>
                  <div className={styles.panelTitleRow}>
                    <span className={`${styles.panelIcon} ${styles.panelIconRed}`}>×</span>
                    <h2>Not Included</h2>
                  </div>
                  <div className={styles.notIncludedList}>
                    {trip?.exclusions?.map((notIncluded, index) => (
                      <div key={index} className={styles.notIncludedItem}>
                        <span className={styles.panelCross}>×</span>
                        <span>{notIncluded}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.thingsToCarrySection}>
                <h2>Things to Carry</h2>
                <div className={styles.carryPills}>
                  <div className={styles.carryPill}>Government ID</div>
                  <div className={styles.carryPill}>Trekking Shoes</div>
                  <div className={styles.carryPill}>Rain Jacket</div>
                  <div className={styles.carryPill}>Backpack</div>
                  <div className={styles.carryPill}>Water Bottle</div>
                  <div className={styles.carryPill}>Energy Bars</div>
                  <div className={styles.carryPill}>Torch</div>
                </div>
              </div>
              <div className={styles.safetyGuidelinesSection}>
                <h2>Safety Guidelines</h2>
                <div className={styles.safetyGuidelinesList}>
                  {trip?.safetyGuidance?.map((guideline, index) => (
                    <div key={index} className={styles.safetyGuidelineItem}>
                      <span className={styles.safetyGuidelineIcon}>△</span>
                      <span>{guideline}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.reachSection}>
                <h2>How to Reach</h2>
                <div className={styles.reachList}>
                  {trip?.howToReach?.map((reach, index) => (
                    <div key={index} className={styles.reachItem}>
                      <span className={styles.reachIcon}>◎</span>
                      <span>{reach}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.customOptionsSection}>
                  <div><h1>Custom Options</h1></div>
                  <div className="accommodationType">
                    
                  </div>

                </div>
              </div>
            </div>
          </div>

          <aside className="paymentSidebar">
            <BookingCard trip={trip} />
          </aside>
        </div>
      </div>
    </>
  );
}