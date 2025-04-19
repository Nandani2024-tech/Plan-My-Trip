// This reusable component displays a trip in card format with basic info like destination, date, and budget.
// This reusable component displays a trip in card format with basic info like destination, date, and budget.
import React from 'react';

const TripCard = ({ name, category, rating, description, mapLink }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-sm hover:shadow-xl transition">
      {/* Name */}
      <h2 className="text-xl font-bold text-[#24282B] mb-1">{name}</h2>

      {/* Category */}
      <p className="text-sm text-[#C1AA7F] font-semibold mb-2 uppercase">{category}</p>

      {/* Rating */}
      <div className="text-yellow-500 font-medium mb-2">
        ⭐ {rating}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      {/* Google Maps Link */}
      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C1AA7F] text-white text-sm px-4 py-2 rounded-xl hover:bg-[#a38a61] transition"
        >
          View on Google Maps
        </a>
      )}
    </div>
  );
};

export default TripCard;

