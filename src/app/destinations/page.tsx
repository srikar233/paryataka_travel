
import Footer from "@/components/layout/Footer";
import { MapPin, Clock } from "lucide-react";
import BookButton from "@/components/common/BookButton";
import "../destinations/page.css";

type DestinationsProps = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function Destinations({
  searchParams,
}: DestinationsProps) {
  const params = await searchParams;

  const searchValue = params.search?.trim().toLowerCase() || "";

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

  // Filter packages based on URL search parameter
  const filteredPackages = packages.filter((item: any) => {
    // If there is no search value,
    // show all packages
    if (!searchValue) {
      return true;
    }

    const name =
      item.name?.toLowerCase() || "";

    const city =
      item.locations?.[0]?.city?.toLowerCase() || "";

    const state =
      item.locations?.[0]?.state?.toLowerCase() || "";

    const category =
      item.categoryId?.name?.toLowerCase() || "";

    return (
      name.includes(searchValue) ||
      city.includes(searchValue) ||
      state.includes(searchValue) ||
      category.includes(searchValue)
    );
  });

  return (
    <div>
      {/* Search Section */}

      <div className="searchbardestination">
        <input
          type="text"
          className="searchinputdestination"
          placeholder="Search Package"
          defaultValue={params.search || ""}
        />

        <div>
          <button type="button">
            Search Trip
          </button>
        </div>
      </div>

      {/* Destination Cards */}

      <div className="secondpart">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((item: any) => (
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
          ))
        ) : (
          <div className="no-results">
            <h2>No trips found</h2>

            <p>
              No packages found for "{params.search}".
            </p>
          </div>
        )}
      </div>

      {/* Footer */}

      <Footer />
    </div>
  );
}

