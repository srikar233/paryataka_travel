import Image from "next/image";
import paryataka from "../public/paryataka.jpg";
import Navbar from "@/components/navbar";
import SearchBar from "../components/search";
import WeekendTrips from '../components/weekendTrips';
import FeaturedDestination from '../components/featuredDestinations';
import Stories from '../components/stories'
export default function Home() {
  return (
    <>
    <div className="hero">
      <Image
        className="mainImage"
        src={paryataka}
        alt="Paryataka"
      />

      <Navbar />
      <div className="YourNextAdventureAwaits">
        Your Next Adventure <br />
        Awaits
      </div>
      <div>
        <SearchBar />
      </div>
     <div>
        <WeekendTrips />
     </div>
     <div>
        <FeaturedDestination />
     </div>
     <div>
      <Stories />
     </div>
    </div>
    </>
  );
}