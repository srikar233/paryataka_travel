'use client';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Main Footer */}
      <div className={styles.footerMain}>

        {/* Brand */}
        <div className={styles.brandSection}>

          <div className={styles.logoSection}>
            <div className={styles.logoBox}>
              <img src="https://paryataka-fe.vercel.app/assets/logo.png" alt="" />
            </div>

            <h2>Paryataka</h2>
          </div>

          <p>
            Discover journeys that stay with you forever.
          </p>

          <div className={styles.socialLinks}>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="LinkedIn">💻</a>
            <a href="#" aria-label="Facebook">📷</a>
          </div>

        </div>


        {/* Explore */}
        <div className={styles.exploreSection}>

          <h3>Explore</h3>

          <a href="/destinations">
            Destinations
          </a>

          <a href="/packages">
            Packages
          </a>

          <a href="/custom-trips">
            Custom Trips
          </a>

        </div>


        {/* Contact */}
        <div className={styles.contactSection}>

          <h3>Contact</h3>

          <p>
            <span>📍</span>
            Travel Street, India
          </p>

          <p>
            <span>📞</span>
            +91 9876543210
          </p>

          <p>
            <span>✉️</span>
            infoparyataka.com
          </p>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className={styles.footerBottom}>

        <p>
          © 2026 Paryataka
        </p>

        <div className={styles.legalLinks}>
          <a href="/privacy">
            Privacy
          </a>

          <a href="/terms">
            Terms
          </a>
        </div>

      </div>

    </footer>
  );
}