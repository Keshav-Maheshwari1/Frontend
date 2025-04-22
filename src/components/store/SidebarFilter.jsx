"use client";
import { useState, useEffect } from "react";
import InputField from "../InputField";

export default function SidebarFilter({ filter, setFilter }) {
  const [searchValue, setSearchValue] = useState(filter.name || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sync searchValue with filter.name on mount or filter change
  useEffect(() => {
    setSearchValue(filter.name || "");
  }, [filter.name]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setError("Please enter a medicine name");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate API call or processing
    setTimeout(() => {
      setFilter({ ...filter, name: searchValue.trim() });
      setLoading(false);
    }, 1000); // Simulated delay
  };

  return (
    <div className="w-full md:w-64 bg-gray-50 p-4 rounded-lg shadow-md h-screen overflow-y-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
      <div className="space-y-4">
        <div>
          <InputField
            label="Search Medicine"
            type="text"
            placeholder="Enter medicine name"
            value={searchValue}
            onChange={(v) => {
              setSearchValue(v);
              setError(""); // Clear error on input change
            }}
            onKeyPress={handleKeyPress}
            className="w-full"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={handleSearch}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors duration-200 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
}
