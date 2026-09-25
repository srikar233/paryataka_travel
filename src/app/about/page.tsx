'use client';
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import "./page.css";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <Image
          src="/images/about/hero-mountains.jpg"
          alt="Beautiful mountain landscape"
          fill
          priority
          className="about-hero-image"
        />

        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-badge">
            Our Philosophy
          </span>

          <h1>
            Crafting Journeys,
            <br />
            Creating Memories
          </h1>

          <p>
            Discover unique destinations, unforgettable experiences,
            and journeys designed around you.
          </p>
        </div>
      </section>


      {/* ABOUT INTRO */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">

          <div className="about-intro-image-wrapper">
            <div className="about-image-decoration" />

            <div className="about-intro-image">
              <Image
                src="/images/about/editorial-path.jpg"
                alt="Travelers exploring a destination"
                fill
                className="about-image"
              />
            </div>

            <div className="about-experience-card">
              <strong>2+</strong>
              <span>Years of Adventure</span>
            </div>
          </div>


          <div className="about-intro-content">
            <h2>
              An Editorial Pursuit of Exploration
            </h2>

            <div className="about-title-line" />

            <p>
              Paryataka was created with a simple idea — travel should be
              more than visiting a destination. It should be about the
              experiences, people, stories, and memories you create along
              the way.
            </p>

            <p>
              We bring together carefully selected destinations and
              experiences to help travelers discover the world in a more
              meaningful way.
            </p>

            <Link href="/destinations" className="about-primary-button">
              Explore Destinations
            </Link>
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="about-services">
        <div className="about-container">

          <div className="about-section-heading">
            <span>WHAT WE OFFER</span>

            <h2>
              Curating Your Path
            </h2>

            <p>
              From weekend getaways to unforgettable adventures,
              Paryataka helps you plan your perfect journey.
            </p>
          </div>


          <div className="about-services-grid">

            <div className="about-service-card">
              <div className="about-service-icon">
                ✈️
              </div>

              <h3>
                Customized Packages
              </h3>

              <p>
                Travel packages designed around your interests,
                budget, and preferred travel style.
              </p>
            </div>


            <div className="about-service-card">
              <div className="about-service-icon">
                👥
              </div>

              <h3>
                Group Tours
              </h3>

              <p>
                Explore amazing destinations with friends,
                family, and fellow travelers.
              </p>
            </div>


            <div className="about-service-card">
              <div className="about-service-icon">
                💼
              </div>

              <h3>
                Corporate Travel
              </h3>

              <p>
                Reliable travel solutions for corporate trips,
                events, and team experiences.
              </p>
            </div>


            <div className="about-service-card">
              <div className="about-service-icon">
                🎧
              </div>

              <h3>
                24/7 Support
              </h3>

              <p>
                Get assistance whenever you need it throughout
                your travel journey.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* WHY PARyATAKA */}
      <section className="about-difference">
        <div className="about-container about-difference-grid">

          <div>
            <span className="about-small-title">
              WHY PARyATAKA
            </span>

            <h2>
              The Paryataka Difference
            </h2>

            <div className="about-title-line" />


            <div className="about-difference-item">
              <div className="about-difference-number">
                01
              </div>

              <div>
                <h3>
                  Personalized Itineraries
                </h3>

                <p>
                  We help you discover destinations and experiences
                  that match your interests and travel style.
                </p>
              </div>
            </div>


            <div className="about-difference-item">
              <div className="about-difference-number">
                02
              </div>

              <div>
                <h3>
                  Best Value
                </h3>

                <p>
                  Discover carefully selected travel packages and
                  experiences at competitive prices.
                </p>
              </div>
            </div>


            <div className="about-difference-item">
              <div className="about-difference-number">
                03
              </div>

              <div>
                <h3>
                  Travel Expertise
                </h3>

                <p>
                  Our platform brings together destinations,
                  experiences, and travel information in one place.
                </p>
              </div>
            </div>

          </div>


          <div className="about-difference-images">

            <div className="about-difference-image large">
              <Image
                src="/images/about/voyager-adventure-card.jpg"
                alt="Travel adventure"
                fill
                className="about-image"
              />
            </div>

            <div className="about-difference-image">
              <Image
                src="/images/about/voyager-beach.jpg"
                alt="Beautiful beach destination"
                fill
                className="about-image"
              />
            </div>

          </div>

        </div>
      </section>


      {/* MISSION / VISION */}
      <section className="about-mission">

        <div className="about-container about-mission-grid">

          <div className="about-mission-item">
            <span className="about-mission-icon">
              🚀
            </span>

            <h2>
              Our Mission
            </h2>

            <p>
              To make travel discovery simple, inspiring, and
              accessible by connecting travelers with memorable
              destinations and experiences.
            </p>
          </div>


          <div className="about-mission-item">
            <span className="about-mission-icon">
              👁️
            </span>

            <h2>
              Our Vision
            </h2>

            <p>
              To become a trusted travel companion for people
              looking to explore new places and create unforgettable
              memories.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta-section">

        <div className="about-container">

          <div className="about-cta">

            <Image
              src="/images/about/cta-background.jpg"
              alt="Travel destination"
              fill
              className="about-cta-image"
            />

            <div className="about-cta-overlay" />

            <div className="about-cta-content">

              <h2>
                Ready for Your Next Adventure?
              </h2>

              <p>
                Explore amazing destinations and discover your
                next unforgettable trip with Paryataka.
              </p>

              <div className="about-cta-buttons">

                <Link
                  href="/destinations"
                  className="about-primary-button"
                >
                  Explore Destinations
                </Link>

                <Link
                  href="/contact-us"
                  className="about-secondary-button"
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <Footer />

    </main>
  );
}

