import Footer from "@/components/footer";
import { MapPin, Clock } from "lucide-react";
import BookButton from "@/components/BookButton";

export default async function Destinations() {
  const res = await fetch(
    "https://paryataka-be.onrender.com/api/packages/public",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch packages");
  }

  const data = await res.json();

  const packages = data?.data?.items || [];

  return (
    <div>
      {/* Search Section */}
      <div className="firstpart">
        <div className="searchbardestination">
          <input
            type="text"
            className="searchinputdestination"
            placeholder="Search Package"
          />

          <div>
            <button type="button">
              Search Package
            </button>

            <button type="button">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="secondpart">
        {packages.map((item: any) => (
          <div
            className="destination-card"
            key={item._id}
          >
            {/* Destination Details */}
            <a href={`/tripDetails/${item.slug}`}>
              <img
                src={item.thumbnailImage}
                alt={item.name || "Package"}
                className="imagesOnDestinations"
              />

              <h2>{item.name}</h2>

              {/* Location */}
              <div className="cityState">
                <div>
                  <MapPin size={18} />
                </div>

                <p>
                  {item.locations?.[0]?.city}
                </p>

                <span>,</span>

                <p>
                  {item.locations?.[0]?.state}
                </p>
              </div>

              {/* Duration */}
              <div className="duration">
                <Clock size={18} />

                <p>
                  {item.duration?.days} Days{" "}
                  {item.duration?.nights} Nights
                </p>
              </div>

              {/* Price */}
              <div className="price">
                <p>Starting from</p>

                <span>
                  ₹
                  {item.basePrice?.toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>
            </a>

            {/* Book Button */}
            <div className="priceAndBook">
              <BookButton
                slug={item.slug || item._id}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}