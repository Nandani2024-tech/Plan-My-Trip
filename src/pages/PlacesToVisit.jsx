
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
