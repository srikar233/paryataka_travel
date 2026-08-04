import Image from "next/image";
import paryataka from "../public/paryataka.jpg";
import Navbar from "@/components/navbar";
import SearchBar from "../components/search";
import WeekendTrips from "../components/weekendTrips";
import FeaturedDestination from "../components/featuredDestinations";
import Stories from "../components/stories";

export default async function Home() {
  const res = await fetch("https://paryataka-be.onrender.com/api/home", {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  

  return (
    <>
      <div className="hero">
        <Image
          className="mainImage"
          src={paryataka}
          alt="Paryataka"
        />

        {/* <Navbar /> */}

        <div className="YourNextAdventureAwaits">
          Your Next Adventure <br />
          Awaits
        </div>

        <SearchBar />

        <WeekendTrips products={data.data.weekendTripsUnder10k} />

        <FeaturedDestination
          featureData={data.data.featuredDestinations}
        />

        <Stories />
      </div>
    </>
  );
}