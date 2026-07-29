"use client";

export default function FeaturedDestinations({ products }) {
  return (
    <>
      <h1 className="featuredHeading">Featured Destinations</h1>

      <div className="featuredDestiation">
        {products.map((item) => (
          <div
            key={item._id}
            className="featuredDestinnationnsCards"
          >
            <img
              src={item.thumbnailImage}
              alt={item.name}
              className="featuredImage"
            />

            <div className="featuredContent">
              {/* <h2>{item.name}</h2>

              <p>📍 {item.location}</p>

              <h3>₹ {item.basePrice}</h3>

              <button>View Details</button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}