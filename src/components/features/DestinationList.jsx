"use client";

import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import BookButton from "@/components/common/BookButton";
import styles from './DestinationList.module.css';

export default function DestinationList({ packages=[]}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(packages.map(p => p.categoryId?.name).filter(Boolean))];

  const handleSearch = () => {
    setIsSearched(true);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setIsSearched(false);
  };

  const filteredItems = packages.filter((item) => {
    // Only show items if search has been performed and there's a search term
    if (!isSearched || !searchTerm.trim()) {
      return false;
    }

    const search = searchTerm.toLowerCase().trim();

    const name =
      item.name?.toLowerCase() || "";

    const city =
      item.locations?.[0]?.city?.toLowerCase() || "";

    const state =
      item.locations?.[0]?.state?.toLowerCase() || "";

    const category =
      item.categoryId?.name || "";

    // Check category filter
    if (selectedCategory !== "All" && category !== selectedCategory) {
      return false;
    }

    return (
      name.includes(search) ||
      city.includes(search) ||
      state.includes(search) ||
      category.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {/* ================= SEARCH SECTION ================= */}

      <div className={styles.firstpart}>
        <div className={styles.searchbardestination}>
          <div className={styles.searchContainer}>
            <label>Search</label>
            <input
              type="text"
              className={styles.searchinputdestination}
              placeholder="Search destinations, packages..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>

          <div className={styles.categoryContainer}>
            <label>Category</label>
            <select
              className={styles.categorySelect}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.searchButton}
              onClick={handleSearch}
            >
              Search Packages
            </button>

            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

        </div>
      </div>

      {/* ================= DESTINATION CARDS ================= */}

      <div className={styles.secondpart}>

        {filteredItems.length > 0 ? (

          filteredItems.map((item) => (

            <div
              className={styles.destinationCard}
              key={item._id}
            >

              {/* Destination Details */}

              <a
                href={`/tripDetails/${item.slug}`}
              >
                <img
                  src={item.thumbnailImage}
                  alt={
                    item.name || "Package"
                  }
                  className={styles.imagesOnDestinations}
                />

                <h2>
                  {item.name}
                </h2>

                {/* Location */}

                <div className={styles.cityState}>

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

                <div className={styles.duration}>

                  <Clock size={18} />

                  <p>
                    {item.duration?.days} Days{" "}
                    {item.duration?.nights} Nights
                  </p>

                </div>

                {/* Price */}

                <div className={styles.price}>

                  <p>
                    Starting from
                  </p>

                  <span>
                    ₹
                    {item.basePrice?.toLocaleString(
                      "en-IN"
                    )}
                  </span>

                </div>

              </a>

              {/* Book Button */}

              <div className={styles.priceAndBook}>

                <BookButton
                  slug={
                    item.slug || item._id
                  }
                />

              </div>

            </div>

          ))

        ) : (

          <div className={styles.noResults}>

            <h2>
              No packages found
            </h2>

            <p>
              Try another destination or package name.
            </p>

          </div>

        )}

      </div>
    </div>
  );
}