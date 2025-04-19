import React from 'react';
import TripCard from '../components/TripCard';

const mockAttractions = [
  {
    id: 1,
    name: 'Gateway of India',
    category: 'Monument',
    rating: 4.7,
    description: 'An iconic arch monument located in Mumbai. A must-visit historic site.',
    mapLink: 'https://maps.google.com/?q=Gateway+of+India'
  },
  {
    id: 2,
    name: 'Marine Drive',
    category: 'Beach',
    rating: 4.6,
    description: 'A beautiful promenade offering amazing sunset views in Mumbai.',
    mapLink: 'https://maps.google.com/?q=Marine+Drive+Mumbai'
  },
  {
    id: 3,
    name: 'Prince of Wales Museum',
    category: 'Museum',
    rating: 4.4,
    description: 'A premier museum housing rare artifacts from India’s rich history.',
    mapLink: 'https://maps.google.com/?q=Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya'
  }
];

const PlacesToVisit = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-[#24282B] mb-6">Places to Visit</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockAttractions.map((place) => (
          <TripCard
            key={place.id}
            name={place.name}
            category={place.category}
            rating={place.rating}
            description={place.description}
            mapLink={place.mapLink}
          />
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;