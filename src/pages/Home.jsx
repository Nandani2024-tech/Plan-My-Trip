import React, { useState } from "react";
import heroVideo from "../assets/hero.mp4";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "5ae2e3f221c38a28845f05b6150d42a1ab957502889ae2c07ba7ed86"; // OpenTripMap API key

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLoading(true);
      setError("");
      try {
        const coords = await getCoordinates(searchQuery);
        const places = await getTouristPlaces(coords.lat, coords.lon);
        setLocations(places);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch tourist locations. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const getCoordinates = async (place) => {
    const res = await fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${place}&apikey=${API_KEY}`
    );
    const data = await res.json();
    if (!data.lat || !data.lon) throw new Error("Location not found.");
    return { lat: data.lat, lon: data.lon };
  };

  const getTouristPlaces = async (lat, lon) => {
    const radius = 5000; // 5 km radius
    const res = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&format=json&limit=10&apikey=${API_KEY}`
    );
    const data = await res.json();

    // Optional: fetch details for each place
    const details = await Promise.all(
      data.map(async (place) => {
        const infoRes = await fetch(
          `https://api.opentripmap.com/0.1/en/places/xid/${place.xid}?apikey=${API_KEY}`
        );
        const info = await infoRes.json();
        return {
          name: info.name,
          description: info.kinds,
          address: info.address
            ? Object.values(info.address).join(", ")
            : "No address available",
        };
      })
    );

    return details;
  };

  return (
    <div className="relative w-full h-screen overflow-y-auto">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="flex flex-col items-center justify-center h-full bg-black/40 px-4 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Plan Less, Travel More
        </h1>
        <p className="text-lg md:text-2xl font-light drop-shadow-md">
          Smart itineraries tailored for your next adventure.
        </p>

        {/* Search Field */}
        <form onSubmit={handleSearch} className="mt-6 w-full md:w-1/2 mx-auto">
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Search city or place..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-3/4 p-2 rounded-md text-black bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {/* Loading */}
        {loading && <p className="mt-4">Loading...</p>}

        {/* Error */}
        {error && <p className="mt-4 text-red-400">{error}</p>}

        {/* Results */}
        {locations.length > 0 && (
          <div className="mt-10 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Tourist Locations Near "{searchQuery}":
            </h2>
            <ul className="space-y-4 max-h-[400px] overflow-y-auto px-2">
              {locations.map((loc, idx) => (
                <li
                  key={idx}
                  className="bg-white p-4 rounded-lg text-black shadow-lg break-words"
                >
                  <h3 className="text-xl font-bold break-words">{loc.name}</h3>
                  <p className="text-sm italic text-gray-800 break-words">
                    {loc.description}
                  </p>
                  <p className="text-sm text-gray-600 break-words">
                    {loc.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
