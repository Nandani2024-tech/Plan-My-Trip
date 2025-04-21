import { useContext } from "react";
import { TripContext } from "../context/TripContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TripList = () => {
  const { trips, deleteTrip, setEditingTrip } = useContext(TripContext);
  const navigate = useNavigate(); // Get navigate function from useNavigate

  if (trips.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No trips yet. Create one from the <span className="text-blue-600 font-semibold">"Create Trip"</span> page!
      </div>
    );
  }

  const handleEditClick = (trip) => {
    setEditingTrip(trip);
    navigate("/create-trip"); // Navigate to the CreateTrip page
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">📍 Your Planned Trips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 transition-transform hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {trip.destination}
            </h3>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Dates:</span> {trip.startDate} → {trip.endDate}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Budget:</span> ${trip.budget}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleEditClick(trip)} // Update onClick to call handleEditClick
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => deleteTrip(trip.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripList;
