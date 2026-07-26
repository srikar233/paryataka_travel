"use client";

import { useState } from "react";

export default function PackageList({ products }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>

          <button
            onClick={() =>
              setSelectedId(selectedId === item.id ? null : item.id)
            }
          >
            {selectedId === item.id ? "Hide Details" : "Show Details"}
          </button>

          {selectedId === item.id && (
            <div>
              <p>Price: ${item.price}</p>
              <p>{item.description}</p>

              <img
                src={item.thumbnail}
                alt={item.title}
                width={150}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}