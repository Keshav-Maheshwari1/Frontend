"use client";
import { useState } from "react";
import InputField from "../InputField";

export default function SidebarFilter({
  filter,
  setFilter,
}) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(filter.name);
    }
  };

  const [searchValue , setSearchValue  ] = useState() ; 

  return (
    <div className="w-full  md:w-64 bg-gray-50 p-4 rounded-lg shadow-md h-screen">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
      <InputField
        label="Search Medicine"
        type="text"
        placeholder="Enter medicine name"
        value={searchValue || ""}
        // onChange={(v) => setFilter({ ...filter, name: v })}
        onChange={(v)=> setSearchValue(v)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={()=> setFilter({...filter , name:searchValue})}>
         Search 
      </button>
      {/* {generics.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-medium text-gray-700 mb-2">
            Generic Equivalents
          </h4>
          <ul className="list-disc pl-5 text-sm text-gray-600 max-h-40 overflow-y-auto">
            {generics.map((item, index) => (
              <li key={index} className="mb-1">
                {item.name} (Price: ₹{item.price || "N/A"})
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}
