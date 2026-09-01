import Image from "next/image";
import paryataka from "../../public/paryataka.jpg";
import DestinationList from "@/components/features/DestinationList"
import WeekendTrips from "@/components/features/WeekendTrips";
import FeaturedDestination from "@/components/features/FeaturedDestinations";
import Stories from "@/components/features/Stories";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";
export default async function Home() {
  const res = await fetch("https://paryataka-be.onrender.com/api/home", {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return (
    <>
      <div className={styles.hero}>
        <Image
          className={styles.mainImage}
          src={paryataka}
          alt="Paryataka"
        />

        <div className={styles.YourNextAdventureAwaits}>
          Your Next Adventure <br />
          Awaits
        </div>
       <DestinationList packages={data.data.weekendTripsUnder10k}/>

        <WeekendTrips
          products={data.data.weekendTripsUnder10k}
        />

        <FeaturedDestination
          featureData={data.data.featuredDestinations}
        />

        <Stories />
        <div><Footer /></div>
        
      </div>
    </>
  );
}