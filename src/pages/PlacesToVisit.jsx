// /*import React from 'react';
// import TripCard from '../components/TripCard';

// const mockAttractions = [
//   {
//     id: 1,
//     name: 'Gateway of India',
//     category: 'Monument',
//     rating: 4.7,
//     description: 'An iconic arch monument located in Mumbai. A must-visit historic site.',
//     mapLink: 'https://maps.google.com/?q=Gateway+of+India'
//   },
//   {
//     id: 2,
//     name: 'Marine Drive',
//     category: 'Beach',
//     rating: 4.6,
//     description: 'A beautiful promenade offering amazing sunset views in Mumbai.',
//     mapLink: 'https://maps.google.com/?q=Marine+Drive+Mumbai'
//   },
//   {
//     id: 3,
//     name: 'Prince of Wales Museum',
//     category: 'Museum',
//     rating: 4.4,
//     description: 'A premier museum housing rare artifacts from India’s rich history.',
//     mapLink: 'https://maps.google.com/?q=Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya'
//   }
// ];

// const PlacesToVisit = () => {
//   return (
//     <div className="px-4 py-8 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold text-[#24282B] mb-6">Places to Visit</h1>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {mockAttractions.map((place) => (
//           <TripCard
//             key={place.id}
//             name={place.name}
//             category={place.category}
//             rating={place.rating}
//             description={place.description}
//             mapLink={place.mapLink}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlacesToVisit;*/



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const API_KEY = '5ae2e3f221c38a28845f05b6150d42a1ab957502889ae2c07ba7ed86';
// const RADIUS = 10000; // meters
// const LIMIT = 5;

// const PlacesToVisit = () => {
//   const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [location, setLocation] = useState({ lat: 28.6139, lon: 77.2090 }); // Default: New Delhi

//   useEffect(() => {
//     fetchPlaces();
//   }, []);

//   /*const fetchPlaces = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius`, {
//         params: {
//           radius: RADIUS,
//           lon: location.lon,
//           lat: location.lat,
//           rate: 2,
//           format: 'json',
//           limit: LIMIT,
//           apikey: API_KEY
//         }
//       });

//       const placeDetails = await Promise.all(
//         response.data.map(async (place) => {
//           const details = await axios.get(
//             `https://api.opentripmap.com/0.1/en/places/xid/${place.xid}`,
//             { params: { apikey: API_KEY } }
//           );
//           return details.data;
//         })
//       );

//       setPlaces(placeDetails);
//       setLoading(false);
//     } catch (error) {
//       console.error('Failed to fetch places:', error);
//       setLoading(false);
//     }
//   };*/

//   const fetchPlaces = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius`, {
//         params: {
//           radius: RADIUS,
//           lon: location.lon,
//           lat: location.lat,
//           rate: 2,
//           format: 'json',
//           limit: LIMIT,
//           apikey: API_KEY
//         }
//       });
  
//       console.log('Radius search result:', response.data); // 👈 log it!
  
//       const placeDetails = await Promise.all(
//         response.data.map(async (place) => {
//           const details = await axios.get(
//             `https://api.opentripmap.com/0.1/en/places/xid/${place.xid}`,
//             { params: { apikey: API_KEY } }
//           );
//           return details.data;
//         })
//       );
  
//       console.log('Full place details:', placeDetails); // 👈 log it!
  
//       setPlaces(placeDetails);
//       setLoading(false);
//     } catch (error) {
//       console.error('Failed to fetch places:', error);
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="p-6 bg-[#F9F8F3] min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 text-[#393732]">Places To Visit</h1>
//       {loading ? (
//         <p className="text-[#24282B]">Loading places...</p>
//       ) : (
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {places.map((place) => (
//             <div key={place.xid} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
//               <h2 className="text-xl font-semibold mb-2 text-[#24282B]">{place.name || 'Unknown Place'}</h2>
//               {place.preview?.source ? (
//                 <img src={place.preview.source} alt={place.name} className="w-full h-40 object-cover rounded-lg mb-2" />
//               ) : (
//                 <div className="w-full h-40 bg-gray-200 rounded-lg mb-2 flex items-center justify-center text-gray-500">
//                   No Image
//                 </div>
//               )}
//               <p className="text-sm text-[#393732] mb-1">{place.kinds.split(',')[0]}</p>
//               <p className="text-sm text-[#393732]">📍 Lat: {place.point.lat}, Lon: {place.point.lon}</p>
//               <a
//                 href={`https://www.google.com/maps?q=${place.point.lat},${place.point.lon}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block mt-2 text-blue-600 hover:underline text-sm"
//               >
//                 View on Google Maps
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlacesToVisit;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '5ae2e3f221c38a28845f05b6150d42a1ab957502889ae2c07ba7ed86';
const RADIUS = 30000; // in meters
const LIMIT = 20; // Number of places to fetch
const DELAY_MS = 600; // Throttle delay to avoid 429 errors

const PlacesToVisit = () => {
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Throttle helper
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Get user geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  // Fetch nearby places
  useEffect(() => {
    if (!location) return;

    const fetchPlaces = async () => {
      try {
        setLoading(true);

        const radiusRes = await axios.get(
          'https://api.opentripmap.com/0.1/en/places/radius',
          {
            params: {
              radius: RADIUS,
              lon: location.lon,
              lat: location.lat,
              rate: 2,
              format: 'json',
              limit: LIMIT,
              apikey: API_KEY,
            },
          }
        );

        const placeDetails = [];

        for (let i = 0; i < radiusRes.data.length; i++) {
          const place = radiusRes.data[i];
          try {
            const detailRes = await axios.get(
              `https://api.opentripmap.com/0.1/en/places/xid/${place.xid}`,
              { params: { apikey: API_KEY } }
            );
            placeDetails.push(detailRes.data);
          } catch (err) {
            console.warn(`Skipping place ${place.xid}:`, err.message);
          }

          await delay(DELAY_MS); // Throttle
        }

        setPlaces(placeDetails);
      } catch (error) {
        console.error('Error fetching places:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F9F8F3] px-4 py-8">
      <h1 className="text-3xl font-bold text-[#24282B] mb-6 text-center">
        Places to Visit Near You
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading amazing spots...</p>
      ) : places.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.xid}
              className="bg-white rounded-2xl shadow-md overflow-hidden p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[#393732] mb-2">{place.name}</h2>
              {place.preview?.source && (
                <img
                  src={place.preview.source}
                  alt={place.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {place.wikipedia_extracts?.text || 'No description available.'}
              </p>
              <p className="mt-2 text-sm text-[#C1AA7F] italic">{place.kinds?.split(',')[0]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No places found in your area.</p>
      )}
    </div>
  );
};

export default PlacesToVisit;
