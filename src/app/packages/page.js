import FeaturedDestinations from "@/components/features/FeaturedDestinations";

export default async function Packages() {
  const res = await fetch("https://paryataka-be.onrender.com/api/home");
  const data = await res.json();

  return (
    <>
    <FeaturedDestinations
      products={data.data.weekendTripsUnder10k}
    />
    </>
  );
}