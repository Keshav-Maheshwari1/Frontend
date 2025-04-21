"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MedicineInventory({ medicines }) {
  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-indigo-700">
          Store Inventory
        </CardTitle>
      </CardHeader>
      <CardContent>
        {medicines.length > 0 ? (
          <ul className="space-y-2">
            {medicines.map((med) => (
              <li key={med.id} className="border-b py-2">
                <p>
                  <strong>Name:</strong> {med.name}
                </p>
                <p>
                  <strong>Price:</strong> {med.price}
                </p>
                <p>
                  <strong>Stock:</strong> {med.stock}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No medicines available.</p>
        )}
      </CardContent>
    </Card>
  );
}
