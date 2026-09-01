"use client";

import { useRouter } from "next/navigation";
import styles from './FeaturedDestinations.module.css';

export default function FeaturedDestinations({ featureData }) {
  const router = useRouter();

  return (
    <>
      <h1 className={styles.featuredHeading}>Featured Destinations</h1>

      <div className={styles.featuredDestiation}>
        {featureData.map((item) => (
          <div
            key={item._id}
            className={styles.featuredDestinnationnsCards}
          >
            <img
              src={item.thumbnailImage}
              alt={item.name}
              className={styles.featuredImage}
              loading="lazy"
              decoding="async"
            />

            <div className={styles.featuredContent}>
              <h2>{item.name}</h2>

              <div className={styles.priceSection}>
                <div className={styles.priceInfo}>
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