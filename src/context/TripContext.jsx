import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Create the context
export const TripContext = createContext();

// Create the provider
export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);

  // Load trips from localStorage on initial render
  useEffect(() => {
    const storedTrips = localStorage.getItem("trips");
    if (storedTrips) {
      setTrips(JSON.parse(storedTrips));
    }
  }, []);

  // Save trips to localStorage whenever trips change
  useEffect(() => {
    if (trips.length > 0) {
      localStorage.setItem("trips", JSON.stringify(trips));
    }
  }, [trips]);

  // Add a new trip
  const addTrip = (trip) => {
    const newTrip = { id: uuidv4(), ...trip };
    setTrips((prevTrips) => {
      const updatedTrips = [...prevTrips, newTrip];
      localStorage.setItem("trips", JSON.stringify(updatedTrips)); // Ensure immediate sync to localStorage
      return updatedTrips;
    });
  };

  // Delete a trip
  const deleteTrip = (id) => {
    const updatedTrips = trips.filter((trip) => trip.id !== id);
    setTrips(updatedTrips);
    localStorage.setItem("trips", JSON.stringify(updatedTrips)); // Sync to localStorage after deletion
  };

  // Edit a trip
  const updateTrip = (updatedTrip) => {
    const updatedTrips = trips.map((trip) =>
      trip.id === updatedTrip.id ? updatedTrip : trip
    );
    setTrips(updatedTrips);
    setEditingTrip(null); // Clear the editing state
  };
  

  return (
    <TripContext.Provider
      value={{
        trips,
        addTrip,
        deleteTrip,
        editingTrip,
        setEditingTrip,
        updateTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};
