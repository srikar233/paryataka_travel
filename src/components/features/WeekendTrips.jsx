"use client";

import { useRouter } from "next/navigation";
import styles from './WeekendTrips.module.css';

export default function WeekendTrips({ products }) {
  const router = useRouter();
  

  return (
    <>
      <div className={styles.tenThousand}>
        <h1>Weekend Under 10k</h1>
      </div>

      <div className={styles.WeekendTrips}>
        {products?.map((item) => (
          <div className={styles.weekendTripsCards} key={item._id}>
            <img
              src={item.thumbnailImage}
              alt={item.name}
              className={styles.featuredImage}
              loading="lazy"
              decoding="async"
            />

            <div className={styles.cardContent}>
              <h2>{item.name}</h2>

              <div className={styles.priceSection}>
                <div className={styles.priceInfo}>
                  <p>PLANS FROM</p>
                  <h3>₹{item.basePrice}</h3>
                </div>

                <button
                  onClick={() => router.push(`/tripDetails/${item.slug || item._id}`)}
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