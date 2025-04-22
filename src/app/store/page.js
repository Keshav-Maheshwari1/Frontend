"use client";

import { useState } from "react";

import { medicines } from "@/constants/medicines";
import SidebarFilter from "@/components/store/SidebarFilter";
import StoreLayout from "@/components/store/StoreLayout";
import MedicineCard from "@/components/store/MedicineCar";

const StorePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [filter, setFilter] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredMedicines = medicines.filter((med) => {
    const nameMatch =
      !filter.name ||
      med.name.toLowerCase().includes(filter.name.toLowerCase());
    const price = parseFloat(med.price.replace("₹", ""));
    const minPriceMatch =
      !filter.minPrice || price >= parseFloat(filter.minPrice);
    const maxPriceMatch =
      !filter.maxPrice || price <= parseFloat(filter.maxPrice);
    return nameMatch && minPriceMatch && maxPriceMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMedicines = filteredMedicines.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBuy = (med) => {
    console.log("Buying:", med.name);
    // Add e-commerce logic here (e.g., add to cart)
  };

  return (
    <StoreLayout>
      <div className="flex flex-col md:flex-row gap-8">
        <SidebarFilter filter={filter} setFilter={setFilter} />
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {currentMedicines.map((med, index) => (
              <MedicineCard key={index} med={med} onBuy={handleBuy} />
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
      </div>
    </StoreLayout>
  );
};

export default StorePage;
