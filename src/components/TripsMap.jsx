import React, { useEffect, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { TripContext } from "../context/TripContext";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const TripsMap = () => {
  const mapContainerRef = useRef(null);
  const { trips } = useContext(TripContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [77.1025, 28.7041], // Default center: New Delhi
      zoom: 3
    });

    trips.forEach((trip) => {
      const lng = parseFloat(trip.longitude);
      const lat = parseFloat(trip.latitude);
      if (!isNaN(lat) && !isNaN(lng)) {
        new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.Popup().setText(`${trip.name} - ${trip.location}`))
          .addTo(map);
      }
    });

    return () => map.remove();
  }, [trips]);

  return <div ref={mapContainerRef} className="w-full h-96 mt-6 rounded shadow" />;
};

export default TripsMap;
