"use client";
import { useState, useEffect } from "react";
import { medicines } from "@/constants/medicines";
import SidebarFilter from "@/components/store/SidebarFilter";
import MedicineCard from "@/components/store/MedicineCard";
import { fetchGenericEquivalents } from "@/utils/generic";

const StorePage = () => {
  const [filter, setFilter] = useState({
    name: "",
  });
  const [generics, setGenerics] = useState([]);

  const fetchGenerics = async (name) => {
    if (name) {
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

  const filteredMedicines = medicines.filter((med) => {
    const nameMatch =
      !filter.name ||
      med.name.toLowerCase().includes(filter.name.toLowerCase());
    return nameMatch;
  });

  const allItems = [...filteredMedicines, ...generics];

  const handleBuy = (item) => {
    console.log("Buying:", item);
    // Add e-commerce logic here (e.g., add to cart)
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <SidebarFilter
        filter={filter}
        setFilter={setFilter}
        onSearch={fetchGenerics}
        generics={generics}
      />
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allItems.map((item, index) => (
            <MedicineCard key={index} med={item} onBuy={handleBuy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePage;
