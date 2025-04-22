"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "./ui/input";

export default function CreateStoreForm({ onStoreCreated }) {
  const [storeName, setStoreName] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStoreCreated({
      name: storeName,
      medicines: [{ name: medicineName, price, stock }],
    });
    setStoreName("");
    setMedicineName("");
    setPrice("");
    setStock("");
  };

  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#20B486]">
          Create Your Store
        </CardTitle>
        <p className="text-sm text-gray-500 mt-1">
          Start by adding your store and first medicine to the inventory
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Name
            </label>
            <Input
              placeholder="e.g., GreenLife Medicals"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
              className="rounded-xl border-gray-300 focus:ring-[#20B486] focus:border-[#20B486]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Medicine Name
            </label>
            <Input
              placeholder="e.g., Paracetamol"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              required
              className="rounded-xl border-gray-300 focus:ring-[#20B486] focus:border-[#20B486]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹)
              </label>
              <Input
                placeholder="e.g., 50"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                required
                className="rounded-xl border-gray-300 focus:ring-[#20B486] focus:border-[#20B486]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock
              </label>
              <Input
                placeholder="e.g., 100"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="number"
                required
                className="rounded-xl border-gray-300 focus:ring-[#20B486] focus:border-[#20B486]"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#20B486] text-white py-2 rounded-xl hover:bg-[#179d73] transition-all font-semibold"
          >
            Create Store & Add Medicine
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
