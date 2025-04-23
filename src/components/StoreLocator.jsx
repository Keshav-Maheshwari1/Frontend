"use client";
import { useState } from "react";
import { mockStores } from "@/constants/page";

export default function StoreLocator() {
  const [location, setLocation] = useState("");
  const [selectedPin, setSelectedPin] = useState("");

  const handleInputChange = (e) => {
    setLocation(e.target.value);
    setSelectedPin(""); // reset selected pin when typing
  };

  const handleStoreClick = (pin) => {
    setSelectedPin(pin);
  };

  // Filter logic: top 3 closest by pin match
  const filteredStores = mockStores
    .filter((store) => store.pin.startsWith(location.trim()))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  const mapQuery = selectedPin || location || "Bhopal";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&z=15&output=embed`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
          Find Jan Aushadhi Stores
        </h1>
        <p className="text-center text-zinc-700 mb-6">
          Powering 30% of Jan Aushadhi usage: 150M users, ₹100B in savings
        </p>

        {/* Location Input */}
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-green-800"
          >
            Enter Zip Code or City
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleInputChange}
            placeholder="e.g., 462040 or Bhopal"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Map and Stores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dynamic Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Jan Aushadhi Store Map"
            ></iframe>
          </div>

          {/* Store List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-green-800">
              Nearby Stores
            </h2>
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleStoreClick(store.pin)}
                >
                  <h3 className="text-lg font-medium text-zinc-900">
                    {store.name}
                  </h3>
                  <p className="text-zinc-900">
                    Distance: {store.distance} km
                  </p>
                  <p className="text-zinc-900">
                    {store.medicine}:{" "}
                    <span className="font-semibold text-green-800">
                      {store.price}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-green-600">No stores found for this PIN.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
