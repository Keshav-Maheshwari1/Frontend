"use client";

import InputField from "../InputField";


export default function SidebarFilter({ filter, setFilter }) {
  return (
    <div className="w-full md:w-64 bg-gray-50 p-4 rounded-lg shadow-md h-[74vh]">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
      <InputField
        label="Search by Name"
        type="text"
        placeholder="Enter medicine name"
        value={filter.name || ""}
        onChange={(v) => setFilter({ ...filter, name: v })}
      />
      <InputField
        label="Min Price"
        type="number"
        placeholder="Min (₹)"
        value={filter.minPrice || ""}
        onChange={(v) => setFilter({ ...filter, minPrice: v })}
      />
      <InputField
        label="Max Price"
        type="number"
        placeholder="Max (₹)"
        value={filter.maxPrice || ""}
        onChange={(v) => setFilter({ ...filter, maxPrice: v })}
      />
    </div>
  );
}
