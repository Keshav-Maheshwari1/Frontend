"use client";
import { useState, useEffect } from "react";
import { medicines } from "@/constants/medicines";
import SidebarFilter from "@/components/store/SidebarFilter";
import MedicineCard from "@/components/store/MedicineCard";
import { fetchGenericEquivalents } from "@/utils/generic";

const StorePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [filter, setFilter] = useState({
    name: "",
    showGenerics: true,
  });
  const [generics, setGenerics] = useState([]);

  const fetchGenerics = async (name) => {
    if (name && filter.showGenerics) {
      const data = await fetchGenericEquivalents(name);
      const normalizedGenerics = data.map((item) => ({
        name: item.name,
        price: `₹${item.price || "N/A"}`,
        purpose: "Generic equivalent",
        image: "https://placehold.co/380x380/ffffff/000000?text=Generic",
        ...item,
      }));
      setGenerics(normalizedGenerics);
    } else {
      setGenerics([]);
    }
  };

  useEffect(() => {
    fetchGenerics(filter.name);
    setCurrentPage(1);
  }, [filter.name, filter.showGenerics]);

  const filteredMedicines = medicines.filter((med) => {
    const nameMatch =
      !filter.name ||
      med.name.toLowerCase().includes(filter.name.toLowerCase());
    return nameMatch;
  });

  const allItems = [...filteredMedicines, ...generics];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleBuy = (item) => {
    console.log("Buying:", item.name || item.brand);
    // Add e-commerce logic here (e.g., add to cart)
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <SidebarFilter
        filter={filter}
        setFilter={(updatedFilter) => {
          setFilter((prev) => ({ ...prev, ...updatedFilter }));
          if (updatedFilter.name !== undefined) {
            fetchGenerics(updatedFilter.name);
          }
        }}
      />
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentItems.map((item, index) => (
            <MedicineCard key={index} med={item} onBuy={handleBuy} />
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
  );
};

export default StorePage;
