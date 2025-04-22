"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MedicineInventory({ medicines }) {
  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-[#20B486]">
          Store Inventory
        </CardTitle>
      </CardHeader>
      <CardContent>
        {medicines.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {medicines.map((med) => (
              <div key={med.id} className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
                <img
                  src={med.image || "https://placehold.co/300x200/ffffff/000000?text=Medicine"}
                  alt={med.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{med.name}</h3>
                <p className="text-sm text-gray-600"><strong>Price:</strong> ₹{med.price}</p>
                <p className="text-sm text-gray-600"><strong>Stock:</strong> {med.stock}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No medicines available.</p>
        )}
      </CardContent>
    </Card>
  );
}
