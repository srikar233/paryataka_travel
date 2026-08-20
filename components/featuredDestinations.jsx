"use client";

import { useRouter } from "next/navigation";

export default function FeaturedDestinations({ featureData }) {
  const router = useRouter();

  return (
    <>
      <h1 className="featuredHeading">Featured Destinations</h1>

      <div className="featuredDestiation">
        {featureData.map((item) => (
          <div
            key={item._id}
            className="featuredDestinnationnsCards"
          >
            <img
              src={item.thumbnailImage}
              alt={item.name}
              className="featuredImage"
              loading="lazy"
              decoding="async"
            />

            <div className="featuredContent">
              <h2>{item.name}</h2>

              <div className="priceSection">
                <div className="priceInfo">
                  <p>📍 {item.location}</p>
                  <h3>₹ {item.basePrice}</h3>
                </div>

                <button onClick={() => router.push(`/tripDetails/${item.slug || item._id}`)}>
                  EXPLORE NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}