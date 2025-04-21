import { useContext, useEffect, useState } from "react";
import { TripContext } from "../context/TripContext";

const CreateTrip = () => {
  const { addTrip, editingTrip, setEditingTrip, updateTrip } = useContext(TripContext);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
  });

  useEffect(() => {
    if (editingTrip) {
      setFormData(editingTrip);
    }
  }, [editingTrip]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.destination.trim() ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.budget
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingTrip) {
      // If editing, update the trip
      updateTrip(formData); // We pass the updated trip data to updateTrip
    } else {
      // If creating a new trip, add a new one
      addTrip(formData);
    }

    // Reset the form and editing state
    setFormData({
      destination: "",
      startDate: "",
      endDate: "",
      budget: "",
    });
    setEditingTrip(null); // Reset editing state
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">
        {editingTrip ? "✏️ Edit Trip" : "➕ Create a New Trip"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Destination</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Paris, Tokyo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Budget ($)</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm"
            placeholder="e.g. 1500"
          />
        </div>

        <div className="flex gap-3 mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            {editingTrip ? "Update Trip ✨" : "Add Trip ➕"}
          </button>
          {editingTrip && (
            <button
              type="button"
              onClick={() => {
                setEditingTrip(null);
                setFormData({
                  destination: "",
                  startDate: "",
                  endDate: "",
                  budget: "",
                });
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
            >
              Cancel ❌
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateTrip;
