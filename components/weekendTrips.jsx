"use client";

import { useRouter } from "next/navigation";

export default function WeekendTrips({ products }) {
  const router = useRouter();

  return (
    <>
      <div className="tenThousand">
        <h1>Weekend Under 10k</h1>
      </div>

      <div className="WeekendTrips">
        {products?.map((item) => (
          <div className="weekendTripsCards" key={item._id}>
            <img
              src={item.thumbnailImage}
              alt={item.name}
              className="featuredImage"
            />

            <div className="cardContent">
              <h2>{item.name}</h2>

              <div className="priceSection">
                <div className="priceInfo">
                  <p>PLANS FROM</p>
                  <h3>₹{item.basePrice}</h3>
                </div>

                <button
                  onClick={() => router.push(`/tripDetails`)}
                >
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