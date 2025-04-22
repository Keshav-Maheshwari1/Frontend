"use client";
import { medicines } from "@/constants/medicines";
import { useState } from "react";

const StorePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicines = medicines.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(medicines.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full min-h-screen bg-white py-16 px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#20B486]">
        Medicine Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentMedicines.map((med, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow hover:shadow-md transition duration-300"
          >
            <img
              src={med.image}
              alt={med.name}
              width={200}
              height={150}
              className="w-full object-contain h-[150px] mb-4"
            />
            <h2 className="text-xl font-semibold">{med.name}</h2>
            <p className="text-gray-500 text-sm">{med.purpose}</p>
            <p className="text-lg font-bold text-[#20B486] mt-2">{med.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#20B486] text-white rounded-lg hover:bg-[#1a8e6a] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page
                ? "bg-[#20B486] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#20B486] text-white rounded-lg hover:bg-[#1a8e6a] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StorePage;
