"use client";

import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import BookButton from "@/components/common/BookButton";
import styles from "../features/DestinationList.module.css";

export default function DestinationList({ packages = [] }) {
  const [search, setSearch] = useState("");

  const filteredData = packages.filter((item) => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) {
      return true;
    }

    const name = item.name?.toLowerCase() || "";

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
    <>
      {/* Search Bar */}
      <div className={styles.SearchbarAndButton}>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Search your Trip"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button type="button">
          Search Trips
        </button>
      </div>

      {/* Search Results */}
      {search.trim() && (
        <div className={styles.searchResults}>
          {filteredData.length > 0 ? (
            <div className={styles.cardsContainer}>
              {filteredData.map((item) => (
                <div
                  className={styles.destinationCard}
                  key={item._id}
                >
                  {/* Image */}
                  <a href={`/tripDetails/${item.slug}`}>
                    <img
                      src={item.thumbnailImage}
                      alt={item.name || "Package"}
                      className={styles.destinationImage}
                    />
                  </a>

                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <h2>{item.name}</h2>

                    {/* Location */}
                    <div className={styles.location}>
                      <MapPin size={18} />

                      <span>
                        {item.locations?.[0]?.city},{" "}
                        {item.locations?.[0]?.state}
                      </span>
                    </div>

                    {/* Duration */}
                    <div className={styles.duration}>
                      <Clock size={18} />

                      <span>
                        {item.duration?.days} Days{" "}
                        {item.duration?.nights} Nights
                      </span>
                    </div>

                    {/* Price + Book */}
                    <div className={styles.cardBottom}>
                      <div>
                        <p className={styles.startingFrom}>
                          Starting from
                        </p>

                        <p className={styles.price}>
                          ₹
                          {item.basePrice?.toLocaleString(
                            "en-IN"
                          )}
                        </p>
                      </div>

                      <BookButton
                        slug={item.slug || item._id}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResult}>
              No package found
            </div>
          )}
        </div>
      )}
    </>
  );
}