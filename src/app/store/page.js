"use client";
import { useState } from "react";
import SidebarFilter from "@/components/store/SidebarFilter";
import MedicineCard from "@/components/store/MedicineCard";
import { useGetAllMedicines } from "@/costomeHooks/useMedicine";
import { usePayment } from "@/utils/usePayment";


const StorePage = () => {
  const { initiatePayment } = usePayment();
  const [filter, setFilter] = useState({
    name: "",
    showGenerics: true,
  });
  const [loading, setLoading] = useState(false);
  const {
    data: medicines,
    isPending: loadingMedicine,
    error: errorMedicine,
  } = useGetAllMedicines();

  if (loadingMedicine) return <div>Loading...</div>;
  if (errorMedicine) return <div>{errorMedicine.message}</div>;

  const filteredMedicines = (medicines ?? []).filter(
    (med) =>
      !filter.name || med.name.toLowerCase().includes(filter.name.toLowerCase())
  );

  const allItems = filteredMedicines;

  const handleBuy = (item) => {
    const formData = {
      name: item.name,
      email: "keshav029@gmail.com",
      stock: item.stock,
      phone: "9993312857",
    };
    const amount = item.price;
    const getId = item._id;
    initiatePayment({ formData, amount, getId, setLoading });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <SidebarFilter
        filter={filter}
        setFilter={(updatedFilter) =>
          setFilter((prev) => ({ ...prev, ...updatedFilter }))
        }
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
