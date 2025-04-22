"use client";
import { Button } from "@/components/ui/button";

export default function MedicineCard({ med, onBuy }) {
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-lg transition duration-300 bg-white p-4 h-full flex flex-col">
      <img
        src={
          med.image ||
          "https://placehold.co/380x380/ffffff/000000?text=No+Image"
        }
        alt={med.name}
        width={200}
        height={150}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{med.name}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {med.purpose || "No description"}
        </p>
        <p className="text-lg font-bold text-[#20B486] mt-2">
          {med.price || "N/A"}
        </p>
      </div>
      <Button
        className="mt-4 w-fit bg-[#20B486] hover:bg-[#1a8e6a] text-white"
        onClick={() => onBuy(med)}
      >
        Buy Now
      </Button>
    </div>
  );
}
