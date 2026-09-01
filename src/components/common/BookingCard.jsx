'use client';

import { useState } from 'react';
import { formatDateRange } from '@/lib/utils/formatDate';
import styles from './BookingCard.module.css';

export default function BookingCard({ trip }) {
  console.log(trip);

  const travelDates = trip?.travelDates ?? [];
  const transportOptions = trip?.transport ?? [];

  const firstTravelDate = travelDates[0] ?? null;
  const firstTransport = transportOptions[0] ?? null;

  const [selectedDate, setSelectedDate] = useState(
    firstTravelDate
      ? `${firstTravelDate.startDate}|${firstTravelDate.endDate}`
      : ''
  );

  const [selectedTransport, setSelectedTransport] = useState(
    firstTransport
      ? `${firstTransport.type || 'Private Cab'} (${firstTransport.model || 'Sedan'}) - ₹${firstTransport.price ?? 0}`
      : ''
  );

  const [guestCount, setGuestCount] = useState(1);

  const changeGuestCount = (delta) => {
    setGuestCount((current) => Math.max(1, current + delta));
  };

  const toNumber = (value) => {
    if (typeof value === 'number' && Number.isFinite(value)) return value;

    if (typeof value === 'string') {
      const cleaned = value.replace(/[^0-9.-]/g, '');
      const parsed = Number(cleaned);
      return Number.isFinite(parsed) ? parsed : 0;
    }

    if (value && typeof value === 'object') {
      return toNumber(
        value.amount ?? value.price ?? value.value ?? value.basePrice ?? value.baseprice ?? 0
      );
    }

    return 0;
  };

  const basePrice = toNumber(
    trip?.baseprice ??
      trip?.basePrice ??
      trip?.price ??
      trip?.startingPrice ??
      trip?.amount ??
      0
  );

  const transportPrice = toNumber(
    selectedTransport.match(/₹([0-9,]+)/)?.[1] ?? selectedTransport.match(/([0-9,]+)/)?.[1] ?? 0
  );

  const totalPrice = (basePrice + transportPrice) * guestCount;

  return (
    <div className={styles.bookingCard}>
      <h3>ACCOMMODATION</h3>

      <div>{trip?.name}</div>

      {/* Travel Dates */}
      <div className={styles.bookingField}>
        <div className={styles.bookingLabel}>TRAVEL DATES</div>

        <label className={styles.bookingSelectWrap}>
          <select
            className={`${styles.bookingSelect} ${styles.bookingDateSelect}`}
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
            aria-label="Select travel dates"
          >
            {travelDates.length > 0 ? (
              travelDates.map((dateOption, index) => (
                <option
                  key={dateOption?._id || `${dateOption?.startDate}-${index}`}
                  value={`${dateOption?.startDate}|${dateOption?.endDate}`}
                >
                  {formatDateRange(
                    dateOption?.startDate,
                    dateOption?.endDate
                  )}
                </option>
              ))
            ) : (
              <option value="">No dates available</option>
            )}
          </select>
        </label>
      </div>

      {/* Travel Mode */}
      <div className={styles.bookingField}>
        <div className={styles.bookingLabel}>TRAVEL MODE</div>

        <label className={styles.bookingSelectWrap}>
          <select
            className={`${styles.bookingSelect} ${styles.bookingDateSelect}`}
            value={selectedTransport}
            onChange={(event) => setSelectedTransport(event.target.value)}
            aria-label="Select travel mode"
          >
            {transportOptions.length > 0 ? (
              transportOptions.map((option, index) => {
                const label = `${option?.type || 'Private Cab'} (${option?.model || 'Sedan'}) - ₹${option?.price ?? 0}`;

                return (
                  <option
                    key={option?._id || `${option?.type}-${index}`}
                    value={label}
                  >
                    {label}
                  </option>
                );
              })
            ) : (
              <option value="">No travel mode available</option>
            )}
          </select>
        </label>
      </div>

      {/* Guests */}
      <div className={styles.bookingField}>
        <div className={styles.bookingLabel}>GUESTS</div>

        <div className={styles.guestSelector}>
          <button
            type="button"
            className={styles.guestButton}
            aria-label="Decrease guest count"
            onClick={() => changeGuestCount(-1)}
          >
            −
          </button>

          <span className={styles.guestValue}>
            {guestCount} Adult{guestCount > 1 ? 's' : ''}
          </span>

          <button
            type="button"
            className={styles.guestButton}
            aria-label="Increase guest count"
            onClick={() => changeGuestCount(1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Total */}
      <div className={styles.bookingTotalRow}>
        <span>Total</span>
        <strong>₹{totalPrice}</strong>
      </div>

      <button type="button" className={styles.checkoutButton}>
        PROCEED TO CHECKOUT
      </button>

      <div className={styles.bookingTrust}>
        <span className={styles.trustIcon}>🔒</span>
        <span>Secure Booking Guaranteed</span>
      </div>

      <div className={styles.bookingSupport}>
        24/7 Priority Support
      </div>
    </div>
  )}
