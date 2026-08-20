"use client";

import { useState } from "react";
import BookingCard from "./BookingCard";

export default function Search({ searchData }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = searchData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="Search your Trip"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button>Search</button>

            {searchTerm && (
                <div className="searchResults">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <BookingCard
                                key={item._id}
                                trip={item}
                            />
                        ))
                    ) : (
                        <p>No trips found</p>
                    )}
                </div>
            )}
        </div>
    );
}